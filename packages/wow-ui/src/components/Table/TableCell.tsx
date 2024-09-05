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
    <styled.td className={TableCellStyle({ checked })} {...props}>
      {children}
    </styled.td>
  );
};

const TableCellStyle = cva({
  base: {
    maxWidth: "100%",
    paddingX: "sm",
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
