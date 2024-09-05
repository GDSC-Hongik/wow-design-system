import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";

interface TableCellProps extends PropsWithChildren {
  style?: CSSProperties;
  checked?: boolean;
}

const TableCell = (props: TableCellProps) => {
  const { children, checked } = props;
  return (
    <styled.td className={TableCellStyle({ checked })} role="cell" {...props}>
      {children}
    </styled.td>
  );
};

const TableCellStyle = cva({
  base: {
    maxWidth: "300px",
    paddingX: "sm",
    paddingY: "xxs",
    minWidth: "74px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  variants: {
    checked: {
      true: {
        backgroundColor: "backgroundAlternative",
      },
      false: {
        backgroundColor: "white",
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export default TableCell;
