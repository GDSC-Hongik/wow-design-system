import type { Dispatch } from "react";
import { createContext, useContext } from "react";

import type { TableProps } from "@/components/Table/Table";
import type useTableCheckState from "@/hooks/useTableCheckState";

export const TableContext = createContext<
  | (ReturnType<typeof useTableCheckState> &
      Omit<TableProps, "children"> & {
        rowValues?: Set<number>;
        setRowValues?: Dispatch<React.SetStateAction<Set<number>>>;
      })
  | null
>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context)
    return {
      selectedRows: new Set<number>(),
      showCheckbox: false,
      rowValues: new Set<number>(),
      handleRowCheckboxChange: () => {},
      handleHeaderCheckboxChange: () => {},
      setRowValues: () => {},
    };
  else {
    return context;
  }
};

export const TableCheckedContext = createContext<number | undefined>(0);
