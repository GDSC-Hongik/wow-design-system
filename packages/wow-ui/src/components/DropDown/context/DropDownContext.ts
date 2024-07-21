"use client";

import { createContext, useContext } from "react";

import type useDropDownState from "@/hooks/useDropDownState";

export const DropDownContext = createContext<
  ReturnType<typeof useDropDownState> | undefined
>(undefined);

export const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error(
      "useDropDownContext must be used within a DropDownProvider"
    );
  }
  return context;
};
