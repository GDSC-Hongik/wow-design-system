import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";

interface TableBodyProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableBodyContainer = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children } = props;

    return (
      <styled.tbody ref={ref} role="rowgroup" {...props} textAlign="start">
        {children}
      </styled.tbody>
    );
  }
);

export default TableBodyContainer;
