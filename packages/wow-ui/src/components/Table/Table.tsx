"use client";
import { css, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { clsx } from "clsx";
import type {
  CSSProperties,
  ForwardRefExoticComponent,
  ReactNode,
  Ref,
} from "react";
import React, {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from "react";

import Tbody from "@/components/Table/Tbody";
import Td from "@/components/Table/Td";
import Th from "@/components/Table/Th";
import Thead from "@/components/Table/Thead";
import Tr from "@/components/Table/Tr";
import useTableCheckState from "@/hooks/useTableCheckState";

/**
 * @description 데이터 및 비동기 결과물을 나타낼 수 있는 테이블 컴포넌트입니다.
 * @param {string} [tableCaption] 테이블에 대한 설명을 나타내는 캡션입니다.
 * @param {TableOptionProps<T>} [options] 테이블에 대한 상세한 옵션값을 설정합니다.
 * @param {number[]} [selectedRows] default 값을 설정하거나, 외부에서 table의 체크 상태 관리할 수 있는 변수입니다.
 * @param {(selectedRows: number[]) => void} [onChange] 외부 활성 상태가 변경될 때 호출되는 함수입니다.
 * @param {() => void} [className] table 컴포넌트에게 전달할 className을 정의합니다.
 * @param {() => void} [fullWidth=false] table 컴포넌트의 가로 길이를 결정할 수 있습니다.
 * @param {() => void} [style] table 컴포넌트에 커스텀하게 전달할 style입니다.
 * @param {Ref<HTMLTableElement>} [ref] ref 렌더링된 요소 또는 컴포넌트에 연결할 ref입니다.
 */

interface TableProps {
  tableCaption?: string;
  showCheckbox?: boolean;
  selectedRowsProps?: number[];
  onChange?: (selectedRows: number[]) => void;
  className?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}

export const TableContext = createContext<any>(null);

const TableComponent = forwardRef<HTMLTableElement, TableProps>(
  function PaginationTable(
    {
      tableCaption = "",
      children,
      showCheckbox,
      className,
      selectedRowsProps,
      onChange,
      fullWidth = false,
      style,
      ...rest
    }: TableProps,
    ref: Ref<HTMLTableElement>
  ) {
    const [rowValue, setRowValues] = useState<number[]>([]);
    useEffect(() => {
      Children.forEach(children, (child) => {
        if (isValidElement(child) && child.type === Table.Tbody) {
          Children.forEach(child.props.children, (row) => {
            if (isValidElement(row) && row.type === Table.Tr) {
              const rowProps = row.props as { value: number };
              setRowValues((prevValues) => [...prevValues, rowProps.value]);
            }
          });
        }
      });
    }, []);

    const {
      handleRowCheckboxChange,
      handleHeaderCheckboxChange,
      selectedRows,
    } = useTableCheckState(rowValue, selectedRowsProps, onChange);

    const contextValue: ReturnType<typeof useTableCheckState> &
      TableProps & { rowValue: number[] } = {
      rowValue,
      handleRowCheckboxChange,
      handleHeaderCheckboxChange,
      selectedRows,
      children,
      showCheckbox,
      tableCaption,
      selectedRowsProps,
      onChange,
      className,
      fullWidth,
      style,
    };

    return (
      <TableContext.Provider value={contextValue}>
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
            {children}
          </styled.table>
        </div>
      </TableContext.Provider>
    );
  }
);

interface TableComponentType
  extends ForwardRefExoticComponent<
    TableProps & React.RefAttributes<HTMLTableElement>
  > {
  Thead: typeof Thead;
  Th: typeof Th;
  Tbody: typeof Tbody;
  Tr: typeof Tr;
  Td: typeof Td;
}

const Table = TableComponent as TableComponentType;
Table.Thead = Thead;
Table.Th = Th;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Td = Td;

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
