import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

interface TableProps extends PropsWithChildren {}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children } = props;
  return (
    <styled.table
      aria-labelledby="table"
      borderCollapse="collapse"
      ref={ref}
      width="100%"
    >
      {children}
    </styled.table>
  );
});

Table.displayName = "Table";
export default Table;
