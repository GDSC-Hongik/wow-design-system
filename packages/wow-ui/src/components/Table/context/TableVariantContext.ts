import { createContext } from "react";

import type useCheckTable from "@/hooks/useCheckTableContext";
import useSafeContext from "@/hooks/useSafeContext";

export const TableVariantContext = createContext<ReturnType<
  typeof useCheckTable
> | null>(null);

export const useTableVariantContext = () => {
  const context = useSafeContext(TableVariantContext);
  return context;
};
