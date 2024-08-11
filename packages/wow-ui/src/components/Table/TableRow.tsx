import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef, useContext, useId } from "react";
import { color } from "wowds-tokens";

import Checkbox from "@/components/Checkbox";
import { useTableVariantContext } from "@/components/Table/context/TableVariantContext";
import TableCell from "@/components/Table/TableCell";
import TableHeader from "@/components/Table/TableHeader";
import { TableHeaderContext } from "@/components/Table/TableHeaderContainer";
interface TableRowProps extends PropsWithChildren {
  style?: CSSProperties;
  value?: string;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    const { children, value } = props;
    const id = useId();
    const isHeader = useContext(TableHeaderContext);
    const { variant, onChange, handleCheckboxChange } =
      useTableVariantContext();

    const TableCheckBoxCell = (isHeader: boolean) => {
      if (isHeader) {
        return (
          <TableHeader
            style={{
              width: "43px",
              backgroundColor: color.backgroundAlternative,
            }}
          >
            <Checkbox
              value="all"
              onChange={() => {
                handleCheckboxChange();
              }}
            />
          </TableHeader>
        );
      } else {
        return (
          <TableCell
            style={{
              width: "43px",
              backgroundColor: "white",
            }}
          >
            <Checkbox
              value={value ? value : id}
              onChange={() => {
                if (handleCheckboxChange) handleCheckboxChange(1);
              }}
            />
          </TableCell>
        );
      }
    };
    return (
      <styled.tr
        color="textBlack"
        height="44px"
        minWidth="100%"
        ref={ref}
        textStyle="body2"
        {...props}
      >
        {variant === "checkable" && TableCheckBoxCell(isHeader)}
        {children}
      </styled.tr>
    );
  }
);

export default TableRow;
