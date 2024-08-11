import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableRowProps extends PropsWithChildren {}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.tr
        color="textBlack"
        height="44px"
        minWidth="100%"
        ref={ref}
        textStyle="body2"
        {...props}
      >
        {children}
      </styled.tr>
    );
  }
);

export default TableRow;
