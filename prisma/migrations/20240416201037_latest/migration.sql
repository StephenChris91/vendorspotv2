-- AlterTable
CREATE SEQUENCE user_profilesid_seq;
ALTER TABLE "user" ALTER COLUMN "profilesId" DROP NOT NULL,
ALTER COLUMN "profilesId" SET DEFAULT nextval('user_profilesid_seq');
ALTER SEQUENCE user_profilesid_seq OWNED BY "user"."profilesId";
