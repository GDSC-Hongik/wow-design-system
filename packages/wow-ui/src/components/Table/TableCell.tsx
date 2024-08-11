import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableCellProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableCell = forwardRef<HTMLTableDataCellElement, TableCellProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.td maxWidth="100%" paddingX="sm" ref={ref} {...props}>
        {children}
      </styled.td>
    );
  }
);

export default TableCell;
