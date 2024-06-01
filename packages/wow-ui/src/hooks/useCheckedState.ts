import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";

interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const useCheckedState = ({
  defaultChecked = false,
  checked: checkedProp,
  onChange,
  onClick,
  onKeyDown,
}: Props) => {
  const [checked, setChecked] = useState(() =>
    checkedProp !== undefined ? checkedProp : defaultChecked
  );

  useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  const handleClick = () => {
    if (checkedProp === undefined) {
      setChecked((prev) => !prev);
    }
    onChange?.();
    onClick?.();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (checkedProp === undefined) {
        setChecked((prev) => !prev);
      }
      onChange?.();
      onKeyDown?.();
    }
  };

  return {
    checked,
    handleClick,
    handleKeyDown,
  };
};

export default useCheckedState;
