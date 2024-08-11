import { useCallback, useEffect, useState } from "react";

interface CheckTableContextProps {
  variant?: "default" | "checkable";
  value?: string;
  onChange?: () => void;
  rowCount?: number;
}
//한가지 역할을 정해주자. check된 친구 누구인지 관리해주는 훅임
const useCheckTable = ({
  variant,
  value,
  onChange,
  rowCount = 0,
}: CheckTableContextProps) => {
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  useEffect(() => {
    if (onChange) onChange();
  }, [value, onChange]);

  useEffect(() => {
    setCheckedState(new Array(rowCount).fill(false));
  }, [rowCount]);

  const handleCheckboxChange = useCallback((index: number) => {
    setCheckedState((prevState) =>
      prevState.map((checked, i) => (i === index ? !checked : checked))
    );
  }, []);

  const handleSelectAll = () => {
    setCheckedState((prevState) =>
      prevState.every((checked) => checked)
        ? new Array(rowCount).fill(false)
        : new Array(rowCount).fill(true)
    );
  };

  if (variant === "default") return { variant };
  return { variant, value, onChange, handleSelectAll, handleCheckboxChange };
};

export default useCheckTable;
