import { useCallback, useEffect, useState } from "react";

const useTableCheckState = <T>(
  data: T[],
  uniqueKey?: keyof T,
  selectedRowsProp?: T[],
  onChange?: (selectedRows: T[]) => void
) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const getRowId = useCallback(
    (rowData: T) => (uniqueKey ? (rowData[uniqueKey] as string) : "id"),
    [uniqueKey]
  );

  useEffect(() => {
    if (selectedRowsProp) {
      setSelectedRows(selectedRowsProp);
    }
  }, [selectedRowsProp]);

  const handleRowCheckboxChange = useCallback(
    (rowData: T) => {
      setSelectedRows((prevSelectedRows) => {
        const rowId = getRowId(rowData);
        const isSelected = prevSelectedRows.some(
          (row) => getRowId(row) === rowId
        );
        const newSelectedRows = isSelected
          ? prevSelectedRows.filter((row) => getRowId(row) !== rowId)
          : [...prevSelectedRows, rowData];
        if (onChange) {
          onChange(newSelectedRows);
        }
        return newSelectedRows;
      });
    },
    [getRowId, onChange]
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
    getRowId,
  };
};

export default useTableCheckState;
