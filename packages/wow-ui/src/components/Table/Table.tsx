import { styled } from "@styled-system/jsx";
import type { StyleProps } from "@styled-system/types";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";

interface TableProps extends PropsWithChildren {
  style?: CSSProperties;
}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <styled.table
      aria-labelledby="table"
      borderCollapse="collapse"
      ref={ref}
      width="100%"
      {...rest}
    >
      {children}
    </styled.table>
  );
});

Table.displayName = "Table";
export default Table;
