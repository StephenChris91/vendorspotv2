import { SyncLoader } from "react-spinners";

export default async function Loading() {
  return (
    <div className="flex justify-center items-center m-auto">
      <SyncLoader color="" size={30} />
    </div>
  );
}
