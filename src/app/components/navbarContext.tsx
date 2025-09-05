"use client";

import { createContext, useContext, useState } from "react";

type NavbarContextType = {
  showTableNavbar: boolean;
  setShowTableNavbar: (value: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [showTableNavbar, setShowTableNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={{ showTableNavbar, setShowTableNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("useNavbar must be used within NavbarProvider");
  return context;
};
