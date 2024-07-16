"use client"
import { createContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const pathname = usePathname();
  const router = useRouter();
  const [path, setPath] = useState(pathname)
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // LOGIN FUNCTION
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  // LOGOUT FUNCTION
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (token !== null) {
      console.log("HELLO CONSOLE");
     const setPath = (`${pathname}dashboard/home`);
      router.push(setPath);
      console.log(setPath);
    }
    else {
      
      console.log("BYE CONCOLE");
    }
  },[path]);


  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
