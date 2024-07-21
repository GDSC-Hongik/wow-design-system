"use client";

import type React from "react";
import { createContext, useContext } from "react";

interface DropDownContextType {
  selectedValue: string;
  selectedText: React.ReactNode;
  open: boolean;
  focusedValue: string | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedValue: React.Dispatch<React.SetStateAction<string | null>>;
  handleSelect: (option: string) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

export const DropDownContext = createContext<DropDownContextType | undefined>(
  undefined
);

export const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error(
      "useDropDownContext must be used within a DropDownProvider"
    );
  }
  return context;
};
