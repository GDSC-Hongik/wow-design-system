"use client";

import { createContext } from "react";

import useSafeContext from "@/hooks/useSafeContext";

interface TabsContextProps {
  value: string;
  setSelectedValue: (value: string) => void;
  label?: string;
  isControlled: boolean;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabsContext = () => {
  const context = useSafeContext(TabsContext);
  return context;
};
