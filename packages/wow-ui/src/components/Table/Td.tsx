import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { type CSSProperties, type PropsWithChildren, useContext } from "react";

import { TableContext } from "@/components/Table/Table";
import { TableCheckedContext } from "@/components/Table/Tr";
import useSafeContext from "@/hooks/useSafeContext";

interface TableCellProps extends PropsWithChildren {
  style?: CSSProperties;
}

const Td = (props: TableCellProps) => {
  const { children } = props;
  const { selectedRows } = useSafeContext(TableContext);
  const value = useContext(TableCheckedContext);
  const isSelected = selectedRows.some((row: number) => row === value);

  return (
    <styled.td
      className={TableCellStyle({ checked: isSelected })}
      role="cell"
      {...props}
    >
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

export default Td;
