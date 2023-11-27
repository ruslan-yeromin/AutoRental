"use client";

import { ComponentLevelLoaderState, GlobalContextProps, GlobalStateProps, User } from "@/types/type";
import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import Cookies from 'js-cookie'


const defaultGlobalContext: GlobalContextProps = {
  isAuthUser: false,
  setIsAuthUser: () => {},
  user: null,
  setUser: () => {},
  componentLevelLoader: { loading: false, id: '' },
  setComponentLevelLoader: (() => {})
};

export const GlobalContext = createContext<GlobalContextProps>(defaultGlobalContext);

export default function GlobalState({ children }: GlobalStateProps) {
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [pageLevelLoader, setPageLevelLoader] = useState(false)
  const [componentLevelLoader, setComponentLevelLoader] = useState({loading: false, id: ''})

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
      value={{ isAuthUser, setIsAuthUser, user, setUser, componentLevelLoader, setComponentLevelLoader }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
