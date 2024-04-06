// "use client";

// import React, { createContext, useContext, useState } from "react";

// // Define the type of the context value
// type SessionContextType = {
//   session: null | any; // replace 'any' with the type of your session data
//   setSession: React.Dispatch<React.SetStateAction<null | any>>; // replace 'any' with the type of your session data
// };

// // Create a context with the specified type
// export const SessionContext = createContext<SessionContextType | null>(null);

// export function SessionProvider({ children }: { children: React.ReactNode }) {
//   const [session, setSession] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <SessionContext.Provider value={{ session, setSession }}>
//       {children}
//     </SessionContext.Provider>
//   );
// }
