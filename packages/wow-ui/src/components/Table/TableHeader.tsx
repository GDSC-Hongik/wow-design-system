import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableHeaderProps extends PropsWithChildren {}
const TableHeader = forwardRef<HTMLTableHeaderCellElement, TableHeaderProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.th ref={ref} {...props}>
        {children}
      </styled.th>
    );
  }
);

export default TableHeader;
