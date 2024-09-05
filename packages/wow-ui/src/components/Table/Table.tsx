"use client";
import { css, cva } from "@styled-system/css";
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

interface TableOptionProps<T> {
  /**
   * @description table에 checkbox를 보여줄 수 있습니다.
   * @type {boolean}
   */
  showCheckbox?: boolean;
  /**
   * @description table의 요소를 구별할 수 있는 유니크한 키 값을 전달합니다.
   * @type {keyof T}
   */
  uniqueKey?: keyof T;
}

interface TableHeaderResrouceProps<T> {
  /**
   * @description table의 header를 기준으로 데이터를 정렬할 수 있는 data의 유니크한 키 값을 전달합니다.
   * @type {keyof T}
   */
  key: keyof T;
  /**
   * @description table의 header에 나타낼 text값을 전달합니다.
   * @type {string}
   */
  text: string;
}

/**
 * @description 데이터 및 비동기 결과물을 나타낼 수 있는 테이블 컴포넌트입니다.
 * @template T 렌더링할 데이터의 타입을 나타냅니다.
 *
 * @param {T[]} data 테이블 컴포넌트에 나타낼 데이터의 배열입니다.
 * @param {{ key: keyof T; text: string }[]} tableHeaderResource 테이블 헤더에 나타낼 배열과 데이터의 키 값을 담은 배열입니다.
 * @param {string} [tableCaption] 테이블에 대한 설명을 나타내는 캡션입니다.
 * @param {TableOptionProps<T>} [options] 테이블에 대한 상세한 옵션값을 설정합니다.
 * @param {T[]} [selectedRows] default 값을 설정하거나, 외부에서 table의 체크 상태 관리할 수 있는 변수입니다.
 * @param {(selectedRows: T[]) => void} [onChange] 외부 활성 상태가 변경될 때 호출되는 함수입니다.
 * @param {() => void} [className] table 컴포넌트에게 전달할 className을 정의합니다.
 * @param {() => void} [fullWidth=false] table 컴포넌트의 가로 길이를 결정할 수 있습니다.
 * @param {() => void} [style] table 컴포넌트에 커스텀하게 전달할 style입니다.
 * @param {Ref<HTMLTableElement>} [ref] ref 렌더링된 요소 또는 컴포넌트에 연결할 ref입니다.
 */

interface TableProps<T extends object> {
  data: T[];
  tableHeaderResource: TableHeaderResrouceProps<T>[];
  tableCaption?: string;
  options?: TableOptionProps<T>;
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
      tableHeaderResource,
      tableCaption = "",
      options,
      className,
      selectedRows: selectedRowsProp,
      onChange,
      fullWidth = false,
      style,
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
      <div className={TableContainerStyle} style={style}>
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
          <styled.thead position="sticky" textAlign="start" top="0" zIndex="1">
            {showCheckbox && (
              <TableHeader style={TableCheckBoxStyle}>
                <Checkbox
                  checked={isHeaderCheckboxChecked}
                  onChange={handleHeaderCheckboxChange}
                />
              </TableHeader>
            )}
            {tableHeaderResource.map(({ text }) => (
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
                  {tableHeaderResource.map(({ key }) => (
                    <TableCell checked={isSelected} key={String(key)}>
                      {rowData[key] as ReactNode}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBodyContainer>
        </styled.table>
      </div>
    );
  }
);

Table.displayName = "Table";
export default Table;

const TableStyle = cva({
  base: {
    borderCollapse: "collapse",
    backgroundColor: "white",
    height: "100%",
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

const TableContainerStyle = css({
  overflow: "auto",
  position: "relative",
  _scrollbar: {
    width: "3px",
  },
  _scrollbarThumb: {
    width: "3px",
    height: "3px",
    borderRadius: "sm",
    backgroundColor: "outline",
  },
  _scrollbarTrack: {
    marginTop: "2px",
    marginBottom: "2px",
    backgroundColor: "transparent",
  },
});
