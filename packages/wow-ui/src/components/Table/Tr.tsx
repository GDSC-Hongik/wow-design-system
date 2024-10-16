import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef } from "react";

import Checkbox from "@/components/Checkbox";
import {
  TableCheckedContext,
  useTableContext,
} from "@/components/Table/TableContext";
import Td from "@/components/Table/Td";

interface TableRowProps extends PropsWithChildren {
  style?: CSSProperties;
  value?: number;
  className?: string;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRowFunction(
    props: TableRowProps,
    ref: Ref<HTMLTableRowElement>
  ) {
    const { children, value, ...rest } = props;
    const { selectedRows, handleRowCheckboxChange, showCheckbox } =
      useTableContext();
    const isSelected = selectedRows.some((row: number) => row === value);
    return (
      <TableCheckedContext.Provider value={value}>
        <styled.tr
          color="textBlack"
          height="44px"
          minWidth="100%"
          ref={ref}
          role="row"
          textStyle="body2"
          {...rest}
        >
          {showCheckbox && (
            <Td style={TableCheckBoxStyle}>
              <Checkbox
                checked={isSelected}
                onChange={() => handleRowCheckboxChange(value)}
              />
            </Td>
          )}
          {children}
        </styled.tr>
      </TableCheckedContext.Provider>
    );
  }
);

export default TableRow;

const TableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
