import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableBodyProps extends PropsWithChildren {}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.tbody ref={ref} {...props}>
        {children}
      </styled.tbody>
    );
  }
);

export default TableBody;
