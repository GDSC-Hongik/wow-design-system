import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableRowProps extends PropsWithChildren {}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.tr ref={ref} {...props}>
        {children}
      </styled.tr>
    );
  }
);

export default TableRow;
