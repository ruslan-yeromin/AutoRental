"use client";

import { User } from "@/types/type";
import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import Cookies from 'js-cookie'


interface GlobalContextProps {
  isAuthUser: boolean;
  setIsAuthUser: Dispatch<SetStateAction<boolean>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

interface GlobalStateProps {
  children: React.ReactNode;
}

const defaultGlobalContext: GlobalContextProps = {
  isAuthUser: false,
  setIsAuthUser: () => {},
  user: null,
  setUser: () => {},
};

export const GlobalContext = createContext<GlobalContextProps>(defaultGlobalContext);

export default function GlobalState({ children }: GlobalStateProps) {
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if(Cookies.get('token')!== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(userData);
    } else {
      setIsAuthUser(false);
      setUser(null);
    }    
  }, [Cookies])

  return (
    <GlobalContext.Provider
      value={{ isAuthUser, setIsAuthUser, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
