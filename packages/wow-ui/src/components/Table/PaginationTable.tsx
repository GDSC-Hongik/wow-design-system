import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type { Ref } from "react";
import { forwardRef } from "react";

import TableBodyContainer from "@/components/Table/TableBodyContainer";
import TableCell from "@/components/Table/TableCell";
import TableHeader from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";

interface PaginationTableProps<T extends object> {
  data: T[];
  tableResource: { valueKey: keyof T; valueText: string }[];
  options?: {
    showCheckbox?: boolean;
  };
  className?: string;
}

const PaginationTable = forwardRef<HTMLTableElement, PaginationTableProps<any>>(
  (
    {
      data,
      tableResource,
      options,
      className,
      ...rest
    }: PaginationTableProps<any>,
    ref: Ref<HTMLTableElement>
  ) => {
    return (
      <styled.table
        aria-labelledby="table"
        className={clsx(TableStyle, className)}
        ref={ref}
        {...rest}
      >
        <styled.thead textAlign="start">
          {tableResource?.map(({ valueText }) => (
            <TableHeader key={`key-${valueText}`}>{valueText}</TableHeader>
          ))}
        </styled.thead>
        <TableBodyContainer>
          {data.map((data, index) => {
            return (
              <TableRow key={index}>
                {tableResource.map(({ valueKey }) => (
                  <TableCell>{data[valueKey]}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBodyContainer>
      </styled.table>
    );
  }
);

PaginationTable.displayName = "Table";
export default PaginationTable;

const TableStyle = css({
  borderCollapse: "collapse",
  width: "100%",
});
