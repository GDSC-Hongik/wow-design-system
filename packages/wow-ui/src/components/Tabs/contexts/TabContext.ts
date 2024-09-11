"use client";

import { createContext } from "react";

import useSafeContext from "@/hooks/useSafeContext";

interface TabContextProps {
  value: string;
  setSelectedValue: (value: string) => void;
  label?: string;
}

export const TabContext = createContext<TabContextProps | null>(null);

export const useTabContext = () => {
  const context = useSafeContext(TabContext);
  return context;
};
