"use client";
import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { ReactNode, Ref } from "react";
import { forwardRef } from "react";

import Checkbox from "@/components/Checkbox";
import TableBodyContainer from "@/components/Table/TableBodyContainer";
import TableCell from "@/components/Table/TableCell";
import TableHeader from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
import useTableCheckState from "@/hooks/useTableCheckState";

interface PaginationTableProps<T extends object> {
  data: T[];
  tableResource: { key: keyof T; text: string }[];
  options?: {
    showCheckbox?: boolean;
    uniqueKey?: keyof T;
  };
  selectedRows?: T[];
  onChange?: (selectedRows: T[]) => void;
  className?: string;
}

const PaginationTable = forwardRef<HTMLTableElement, PaginationTableProps<any>>(
  function PaginationTable<T extends object>(
    {
      data,
      tableResource,
      options,
      className,
      selectedRows: selectedRowsProp,
      onChange,
      ...rest
    }: PaginationTableProps<T>,
    ref: Ref<HTMLTableElement>
  ) {
    const { showCheckbox, uniqueKey } = options || {};
    const {
      handleRowCheckboxChange,
      handleHeaderCheckboxChange,
      selectedRows,
      getRowId,
    } = useTableCheckState(data, uniqueKey, selectedRowsProp, onChange);

    const isHeaderCheckboxChecked = selectedRows.length === data.length;

    return (
      <styled.table
        aria-labelledby="table"
        className={clsx(TableStyle, className)}
        ref={ref}
        {...rest}
      >
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
          {data.map((rowData) => (
            <TableRow key={getRowId(rowData)}>
              {showCheckbox && (
                <TableCell
                  style={TableCheckBoxStyle}
                  checked={selectedRows.some(
                    (row) => getRowId(row) === getRowId(rowData)
                  )}
                >
                  <Checkbox
                    checked={selectedRows.some(
                      (row) => getRowId(row) === getRowId(rowData)
                    )}
                    onChange={() => handleRowCheckboxChange(rowData)}
                  />
                </TableCell>
              )}
              {tableResource.map(({ key }) => (
                <TableCell
                  key={String(key)}
                  checked={selectedRows.some(
                    (row) => getRowId(row) === getRowId(rowData)
                  )}
                >
                  {rowData[key] as ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBodyContainer>
      </styled.table>
    );
  }
);

PaginationTable.displayName = "PaginationTable";
export default PaginationTable;

const TableStyle = css({
  borderCollapse: "collapse",
});

const TableCheckBoxStyle = {
  minWidth: "15px",
};
