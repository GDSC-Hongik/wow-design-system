import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";

import {
  TableCheckedContext,
  useTableContext,
} from "@/components/Table/TableContext";
import useSafeContext from "@/hooks/useSafeContext";

interface TableCellProps extends PropsWithChildren {
  style?: CSSProperties;
  className?: string;
}

const Td = forwardRef(
  (props: TableCellProps, ref: Ref<HTMLTableCellElement>) => {
    const { children, ...rest } = props;
    const { selectedRows } = useTableContext();
    const rowValue = useSafeContext(TableCheckedContext);
    const isSelected = selectedRows.has(rowValue);

    return (
      <styled.td
        className={tableCellStyle({ checked: isSelected })}
        ref={ref}
        role="cell"
        {...rest}
      >
        {children}
      </styled.td>
    );
  }
);

const tableCellStyle = cva({
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
