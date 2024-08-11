import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableBodyProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.tbody ref={ref} {...props} textAlign="start">
        {children}
      </styled.tbody>
    );
  }
);

export default TableBody;
