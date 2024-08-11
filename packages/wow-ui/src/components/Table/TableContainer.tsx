import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef } from "react";

interface TableContainerProps extends PropsWithChildren {
  style?: CSSProperties;
}

const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.div
        display="block"
        maxWidth="100%"
        overflowX="auto"
        overflowY="hidden"
        ref={ref}
        whiteSpace="nowrap"
        {...props}
      >
        {children}
      </styled.div>
    );
  }
);

export default TableContainer;
