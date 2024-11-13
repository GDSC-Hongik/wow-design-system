import { css } from "@styled-system/css";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";

interface TableHeaderProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}
const Th = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  (props: TableHeaderProps, ref: Ref<HTMLTableCellElement>) => {
    const { children, ...rest } = props;
    return (
      <th className={tableHeaderStyle} ref={ref} scope="col" {...rest}>
        {children}
      </th>
    );
  }
);

const tableHeaderStyle = css({
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
