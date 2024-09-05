import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";

interface TableHeaderProps extends PropsWithChildren {
  style?: CSSProperties;
}
const TableHeader = (props: TableHeaderProps) => {
  const { children } = props;
  return (
    <styled.th
      alignItems="center"
      backgroundColor="backgroundAlternative"
      color="sub"
      height="44px"
      letterSpacing="wider"
      minWidth="74px"
      paddingX="sm"
      textAlign="start"
      textStyle="label2"
      {...props}
    >
      {children}
    </styled.th>
  );
};

export default TableHeader;
