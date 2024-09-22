import { css } from "@styled-system/css";
import type { CSSProperties, PropsWithChildren } from "react";

interface TableHeaderProps extends PropsWithChildren {
  style?: CSSProperties;
}
const Th = (props: TableHeaderProps) => {
  const { children } = props;
  return (
    <th className={TableHeaderStyle} {...props}>
      {children}
    </th>
  );
};

const TableHeaderStyle = css({
  alignItems: "center",
  backgroundColor: "backgroundAlternative",
  color: "sub",
  height: "44px",
  letterSpacing: "wider",
  maxWidth: "300px",
  minWidth: "74px",
  overflow: "hidden",
  paddingX: "sm",
  textAlign: "start",
  textOverflow: "ellipsis",
  textStyle: "label2",
  whiteSpace: "nowrap",
});

export default Th;
