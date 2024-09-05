"use client";
import { cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { CSSProperties, ReactNode, Ref } from "react";
import { forwardRef } from "react";

import Checkbox from "@/components/Checkbox";
import TableBodyContainer from "@/components/Table/TableBodyContainer";
import TableCell from "@/components/Table/TableCell";
import TableHeader from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
import useTableCheckState from "@/hooks/useTableCheckState";

interface TableProps<T extends object> {
  data: T[];
  tableResource: { key: keyof T; text: string }[];
  tableCaption?: string;
  options?: {
    showCheckbox?: boolean;
    uniqueKey?: keyof T;
  };
  selectedRows?: T[];
  onChange?: (selectedRows: T[]) => void;
  className?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
}

const Table = forwardRef<HTMLTableElement, TableProps<any>>(
  function PaginationTable<T extends object>(
    {
      data,
      tableResource,
      tableCaption = "",
      options,
      className,
      selectedRows: selectedRowsProp,
      onChange,
      fullWidth = false,
      ...rest
    }: TableProps<T>,
    ref: Ref<HTMLTableElement>
  ) {
    const { showCheckbox, uniqueKey } = options || {};
    const {
      handleRowCheckboxChange,
      handleHeaderCheckboxChange,
      selectedRows,
      getRowId,
    } = useTableCheckState(data, uniqueKey, selectedRowsProp, onChange);

    const isHeaderCheckboxChecked =
      selectedRows.length === data.length && data.length > 0;

    return (
      <styled.table
        aria-label="table"
        aria-labelledby="table"
        className={clsx(TableStyle({ fullWidth }), className)}
        ref={ref}
        role="table"
        {...rest}
      >
        {tableCaption && (
          <styled.caption
            display="table-caption"
            fontStyle="body1"
            marginBottom="md"
          >
            {tableCaption}
          </styled.caption>
        )}
        <styled.thead textAlign="start">
          {showCheckbox && (
            <TableHeader style={TableCheckBoxStyle}>
              <Checkbox
                checked={isHeaderCheckboxChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </TableHeader>
          )}
          {tableResource.map(({ text }) => (
            <TableHeader key={text}>{text}</TableHeader>
          ))}
        </styled.thead>
        <TableBodyContainer>
          {data.map((rowData) => {
            const isSelected = selectedRows.some(
              (row) => getRowId(row) === getRowId(rowData)
            );
            return (
              <TableRow key={getRowId(rowData)}>
                {showCheckbox && (
                  <TableCell checked={isSelected} style={TableCheckBoxStyle}>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleRowCheckboxChange(rowData)}
                    />
                  </TableCell>
                )}
                {tableResource.map(({ key }) => (
                  <TableCell checked={isSelected} key={String(key)}>
                    {rowData[key] as ReactNode}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBodyContainer>
      </styled.table>
    );
  }
);

Table.displayName = "Table";
export default Table;

const TableStyle = cva({
  base: {
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "fit-content",
      },
    },
  },
});

const TableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
