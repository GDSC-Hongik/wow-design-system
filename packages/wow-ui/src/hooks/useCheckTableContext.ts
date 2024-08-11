import { useEffect } from "react";

interface CheckTableContextProps {
  variant?: "default" | "checkable";
  value?: string;
  onChange?: () => void;
}
//한가지 역할을 정해주자. check된 친구 누구인지 관리해주는 훅임
const useCheckTable = ({
  variant,
  value,
  onChange,
}: CheckTableContextProps) => {
  useEffect(() => {
    if (onChange) onChange();
  }, [value, onChange]);

  if (variant === "default") return { variant };
  return { variant, value, onChange };
};

export default useCheckTable;
