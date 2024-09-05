import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";

interface TableRowProps extends PropsWithChildren {
  style?: CSSProperties;
  value?: string;
}

const TableRow = (props: TableRowProps) => {
  const { children } = props;

  return (
    <styled.tr
      color="textBlack"
      height="44px"
      minWidth="100%"
      role="row"
      textStyle="body2"
      {...props}
    >
      {children}
    </styled.tr>
  );
};

export default TableRow;
