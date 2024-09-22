import { useCallback, useEffect, useState } from "react";

const useTableCheckState = (
  data: number[],
  selectedRowsProp?: number[],
  onChange?: (selectedRows: number[]) => void
) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  useEffect(() => {
    if (selectedRowsProp) {
      setSelectedRows(selectedRowsProp);
    }
  }, [selectedRowsProp]);

  const handleRowCheckboxChange = useCallback(
    (rowData: number) => {
      setSelectedRows((prevSelectedRows) => {
        const rowId = rowData;
        const isSelected = prevSelectedRows.some((row) => row === rowId);
        const newSelectedRows = isSelected
          ? prevSelectedRows.filter((row) => row !== rowId)
          : [...prevSelectedRows, rowData];
        if (onChange) {
          onChange(newSelectedRows);
        }
        return newSelectedRows;
      });
    },
    [onChange]
  );

  const handleHeaderCheckboxChange = useCallback(() => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows =
        prevSelectedRows.length === data.length ? [] : [...data];
      if (onChange) {
        onChange(newSelectedRows);
      }
      return newSelectedRows;
    });
  }, [data, onChange]);

  return {
    handleRowCheckboxChange,
    handleHeaderCheckboxChange,
    selectedRows,
  };
};

export default useTableCheckState;
