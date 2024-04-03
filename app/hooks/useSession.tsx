import { useContext } from "react";
import { SessionContext } from "../context/user-context/user-context";

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
