import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SettingsPage = async () => {
  const session = await auth();
  const user = session?.user;
  const handleSubmit = async () => {
    await signOut();
  };
  return (
    <div className=" p-10 mt-32">
      <div className="w-full bg-white rounded-sm p-5 ">
        <h1>Settings Page</h1>
        {JSON.stringify(session)}
        <p>{user?.role}</p>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">Sign Out</Button>
        </form>
        <Link href="/">Go Back </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
