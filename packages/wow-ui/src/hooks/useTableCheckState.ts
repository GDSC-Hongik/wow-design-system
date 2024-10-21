import { useCallback, useEffect, useState } from "react";

const useTableCheckState = (
  rowValues: Set<number>,
  selectedRowsProp?: number[],
  onChange?: (selectedRows: number[]) => void
) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  useEffect(() => {
    if (selectedRowsProp) {
      setSelectedRows(selectedRowsProp);
    }
  }, [selectedRowsProp]);

  const updateSelectedRow = useCallback(
    (newSelectedRows: number[]) => {
      if (onChange) {
        onChange(newSelectedRows);
        return;
      }
      setSelectedRows(newSelectedRows);
    },
    [onChange]
  );

  const handleRowCheckboxChange = (rowData: number) => {
    const rowId = rowData;
    const isSelected = selectedRows.some((row) => row === rowId);
    const newSelectedRows = isSelected
      ? selectedRows.filter((row) => row !== rowId)
      : [...selectedRows, rowData];
    updateSelectedRow(newSelectedRows);
  };

  const handleHeaderCheckboxChange = useCallback(() => {
    const newSelectedRows =
      selectedRows?.length === rowValues?.size ? [] : [...rowValues];
    updateSelectedRow(newSelectedRows);
  }, [selectedRows, rowValues, updateSelectedRow]);

  return {
    handleRowCheckboxChange,
    handleHeaderCheckboxChange,
    selectedRows,
  };
};

export default useTableCheckState;
