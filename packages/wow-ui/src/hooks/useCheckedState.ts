import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";

interface CheckedStateProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const useCheckedState = ({
  defaultChecked = false,
  checked: checkedProp,
  disabled: disabledProp,
  onClick,
  onKeyDown,
}: CheckedStateProps) => {
  const disabled = disabledProp || false;

  const [checkedValue, setCheckedValue] = useState<boolean>(
    checkedProp || defaultChecked
  );
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    if (checkedProp) {
      setCheckedValue(checkedProp);
    }
  }, [checkedProp]);

  const handleMouseDown = () => {
    if (!disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled) setPressed(false);
  };

  const handleClick = () => {
    onClick?.();
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      setPressed(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setPressed(true);
      onKeyDown?.();
    }
  };

  return {
    checked: checkedValue,
    pressed,
    disabled,
    handleClick,
    handleKeyDown,
    handleMouseDown,
    handleMouseUp,
    handleKeyUp,
  };
};

export default useCheckedState;
