import { useCallback, useEffect, useState } from "react";

const useTableCheckState = (
  rowValues: Set<number>,
  selectedRowsProp?: number[],
  onChange?: (selectedRows: number[]) => void
) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (selectedRowsProp) {
      setSelectedRows(new Set(selectedRowsProp));
    }
  }, [selectedRowsProp]);

  const updateSelectedRow = useCallback(
    (newSelectedRows: Set<number>) => {
      if (onChange) {
        onChange(Array.from(newSelectedRows));
        return;
      }
      setSelectedRows(newSelectedRows);
    },
    [onChange]
  );

  const handleRowCheckboxChange = (rowData: number) => {
    const rowId = rowData;
    const newSelectedRows = new Set(selectedRows); // 새로운 Set 생성

    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId); // 이미 선택된 경우 제거
    } else {
      newSelectedRows.add(rowId); // 선택되지 않은 경우 추가
    }
    updateSelectedRow(newSelectedRows);
  };

  const handleHeaderCheckboxChange = useCallback(() => {
    const newSelectedRows =
      selectedRows?.size === rowValues?.size
        ? new Set<number>()
        : new Set(rowValues);
    updateSelectedRow(newSelectedRows);
  }, [selectedRows, rowValues, updateSelectedRow]);

  return {
    handleRowCheckboxChange,
    handleHeaderCheckboxChange,
    selectedRows,
  };
};

export default useTableCheckState;
