import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableCellProps extends PropsWithChildren {}

const TableCell = forwardRef<HTMLTableDataCellElement, TableCellProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.td ref={ref} {...props}>
        {children}
      </styled.td>
    );
  }
);

export default TableCell;
