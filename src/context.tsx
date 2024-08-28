// import { createContext, useContext, useEffect } from "react";
// import useFetch from "./hooks/use-fetch";

// const UrlContext = createContext();

// const UrlProvider = ({children}) => {
//   const {data: user, loading, fn: fetchUser} = useFetch(getCurrentUser);
//   const  isAuthenticated = user?.role === "authenticated";

//   useEffect(() => {
//     fetchUser()
//   }, [])
//   return (
//     <UrlContext.Provider value={{user, fetchUser, loading, isAuthenticated}}>{children}</UrlContext.Provider>
//   )
// };

// export const UrlState = () => {
//   return useContext(UrlContext);

// }

// export default UrlProvider;

import React, { createContext, useContext, useEffect, ReactNode } from "react";
import useFetch  from "./hooks/use-fetch"; 
import { getCurrentUser } from "@/Auth/apiAuth";

// Define the shape of the context value
interface UrlContextType {
  user: User | null; 
  fetchUser: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
}

// Create the context with an initial value
const UrlContext = createContext<UrlContextType | undefined>(undefined);

interface UrlProviderProps {
  children: ReactNode;
}

const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);
  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrlState = (): UrlContextType => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrlState must be used within a UrlProvider");
  }
  return context;
};

export default UrlProvider;



