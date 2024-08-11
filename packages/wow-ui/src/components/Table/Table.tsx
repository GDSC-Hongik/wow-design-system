import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";

import { TableVariantContext } from "@/components/Table/context/TableVariantContext";
import useCheckTable from "@/hooks/useCheckTableContext";

interface TableProps extends PropsWithChildren {
  style?: CSSProperties;
  variant?: "default" | "checkable";
  onChange?: () => void;
  value?: string;
}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, variant, onChange, value, ...rest } = props;
  const context = useCheckTable({ variant, value, onChange });
  return (
    <TableVariantContext.Provider value={context}>
      <styled.table
        aria-labelledby="table"
        borderCollapse="collapse"
        ref={ref}
        width="100%"
        {...rest}
      >
        {children}
      </styled.table>
    </TableVariantContext.Provider>
  );
});

Table.displayName = "Table";
export default Table;
