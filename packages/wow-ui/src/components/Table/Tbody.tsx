import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import React, { forwardRef } from "react";

interface TableBodyProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const Tbody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <styled.tbody ref={ref} role="rowgroup" {...rest} textAlign="start">
        {children}
      </styled.tbody>
    );
  }
);

export default Tbody;
