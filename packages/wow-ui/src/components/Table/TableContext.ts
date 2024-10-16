import type { Dispatch } from "react";
import { createContext } from "react";

import type { TableProps } from "@/components/Table/Table";
import useSafeContext from "@/hooks/useSafeContext";
import type useTableCheckState from "@/hooks/useTableCheckState";

export const TableContext = createContext<
  | (ReturnType<typeof useTableCheckState> &
      Omit<TableProps, "children"> & {
        rowValues?: number[];
        setRowValues?: Dispatch<React.SetStateAction<number[]>>;
      })
  | null
>(null);

export const useTableContext = () => {
  const context = useSafeContext(TableContext);
  return context;
};

export const TableCheckedContext = createContext<number | undefined>(0);
