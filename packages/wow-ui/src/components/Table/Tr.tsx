import { styled } from "@styled-system/jsx";
import type { CSSProperties, PropsWithChildren, Ref } from "react";
import { forwardRef, useLayoutEffect } from "react";

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
  (props: TableRowProps, ref: Ref<HTMLTableRowElement>) => {
    const { children, value, ...rest } = props;
    const {
      selectedRows,
      handleRowCheckboxChange,
      showCheckbox,
      setRowValues,
    } = useTableContext();

    useLayoutEffect(() => {
      if (value !== undefined && setRowValues) {
        setRowValues((prevRowValues) => {
          const updatedRowValues = new Set(prevRowValues);
          updatedRowValues.add(value);
          return updatedRowValues;
        });
      }
    }, [value, setRowValues]);

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
            <TableCheckbox
              handleRowCheckboxChange={handleRowCheckboxChange}
              selectedRows={selectedRows}
              value={value}
            />
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
  height: "100%",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};

const TableCheckbox = ({
  selectedRows,
  value,
  handleRowCheckboxChange,
}: {
  selectedRows: number[];
  value: number | undefined;
  handleRowCheckboxChange: (rowData: number) => void;
}) => {
  const isSelected = selectedRows.some((row: number) => row === value);
  return (
    <Td style={TableCheckBoxStyle}>
      <Checkbox
        checked={isSelected}
        onChange={() => {
          if (value !== undefined) handleRowCheckboxChange(value);
        }}
      />
    </Td>
  );
};
