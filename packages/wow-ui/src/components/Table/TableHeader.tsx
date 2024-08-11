import { styled } from "@styled-system/jsx";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";
interface TableHeaderProps extends PropsWithChildren {}
const TableHeader = forwardRef<HTMLTableHeaderCellElement, TableHeaderProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <styled.th
        alignItems="center"
        backgroundColor="backgroundAlternative"
        color="sub"
        height="44px"
        letterSpacing="wider"
        paddingX="sm"
        ref={ref}
        textAlign="start"
        textStyle="label2"
        {...props}
      >
        {children}
      </styled.th>
    );
  }
);

export default TableHeader;
