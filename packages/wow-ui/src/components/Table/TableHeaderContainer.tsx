import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { createContext, forwardRef } from "react";
interface TableBodyProps extends PropsWithChildren {
  style?: CSSProperties;
}

export const TableHeaderContext = createContext<boolean>(false);

const TableHeaderContainer = forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>((props, ref) => {
  const { children } = props;
  return (
    <TableHeaderContext.Provider value={true}>
      <styled.thead ref={ref} {...props} textAlign="start">
        {children}
      </styled.thead>
    </TableHeaderContext.Provider>
  );
});

export default TableHeaderContainer;
