-- Create a table for public profiles
create table profiles (
  id uuid references auth.users
  on delete cascade not null primary key
  , updated_at timestamp with time zone
  , firstname text
  , lastname text
  , avatarurl text
  , role boolean
  , constraint firstname_length check (char_length(firstname) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles
enable row level
security;

create policy "Public profiles are viewable by everyone."
on profiles
for
select
using (true);

create policy "Users can insert their own profile."
on profiles
for insert
with check (auth.uid() = id);

create policy "Users can update own profile."
on profiles
for update
using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
create function public.handle_new_users()
returns trigger as $ $
begin
  insert into
    public.profiles (id, firstname, lastname, avatarurl, role)
  values
    (
      new.id
      , new.raw_user_meta_data - > > 'firstname'
      , new.raw_user_meta_data - > > 'lastname'
      , new.raw_user_meta_data - > > 'avatarurl'
      , (
        new.raw_user_meta_data - > > 'role'
      ): :boolean
    );
  return
  new;
end;
$ $
language plpgsql
security definer;

create trigger on_auth_users_created
after insert
on auth.users
for each row execute procedure public.handle_new_users();

-- Set up Storage!
insert into
  storage.buckets (id, name)
values
  ('vendors', 'vendors');

-- Set up access controls for storage.
create policy "Avatar images are publicly accessible."
on storage.objects
for
select
using (bucket_id = 'vendors');

create policy "Anyone can upload an avatar."
on storage.objects
for insert
with check (bucket_id = 'vendors');