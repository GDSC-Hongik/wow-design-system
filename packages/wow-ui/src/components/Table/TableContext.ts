import { createContext } from "react";

import useSafeContext from "@/hooks/useSafeContext";

export const TableContext = createContext<any>(null);

export const useTableContext = () => {
  const context = useSafeContext(TableContext);
  return context;
};

export const TableCheckedContext = createContext<number | undefined>(0);
