import { useState } from "react";

const useTableCheckState = <T>(
  data: T[],
  uniqueKey?: keyof T,
  selectedRowsProp?: T[],
  onChange?: (selectedRows: T[]) => void
) => {
  const [selectedRows, setSelectedRows] = useState<T[]>(selectedRowsProp || []);

  const getRowId = (rowData: T) =>
    uniqueKey ? (rowData[uniqueKey] as string) : "id";

  const handleRowCheckboxChange = (rowData: T) => {
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
  };

  const handleHeaderCheckboxChange = () => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows =
        prevSelectedRows.length === data.length ? [] : [...data];
      if (onChange) {
        onChange(newSelectedRows);
      }
      return newSelectedRows;
    });
  };

  return {
    handleRowCheckboxChange,
    handleHeaderCheckboxChange,
    selectedRows,
    getRowId,
  };
};

export default useTableCheckState;
