import { SyncLoader } from "react-spinners";

export default async function Loading() {
  return (
    <div>
      <h1>
        <SyncLoader color="" size={30} />
      </h1>
    </div>
  );
}
