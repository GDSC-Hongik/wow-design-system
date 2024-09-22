import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef, useContext } from "react";

import {
  TableCheckedContext,
  useTableContext,
} from "@/components/Table/TableContext";

interface TableCellProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const Td = forwardRef(
  (props: TableCellProps, ref: Ref<HTMLTableCellElement>) => {
    const { children, ...rest } = props;
    const { selectedRows } = useTableContext();
    const value = useContext(TableCheckedContext);
    const isSelected = selectedRows.some((row: number) => row === value);

    return (
      <styled.td
        className={TableCellStyle({ checked: isSelected })}
        ref={ref}
        role="cell"
        {...rest}
      >
        {children}
      </styled.td>
    );
  }
);

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
