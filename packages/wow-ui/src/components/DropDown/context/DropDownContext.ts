import { createContext, useContext } from "react";

import type useDropDownState from "@/hooks/useDropDownState";
import useSafeContext from "@/hooks/useSafeContext";

export const DropDownContext = createContext<
  ReturnType<typeof useDropDownState> | undefined
>(undefined);

export const useDropDownContext = () => {
  const context = useSafeContext(DropDownContext);
  return context;
};
