import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";

interface CheckedStateProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const useCheckedState = ({
  defaultChecked = false,
  checked: checkedProp,
  disabled,
  onChange,
  onClick,
  onKeyDown,
}: CheckedStateProps) => {
  const [checked, setChecked] = useState<boolean>(
    checkedProp ? checkedProp : defaultChecked
  );
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  const handleMouseDown = () => {
    if (!disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled) setPressed(false);
  };

  const handleClick = () => {
    onChange ? onChange() : setChecked((prev) => !prev);
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
      onChange ? onChange() : setChecked((prev) => !prev);
      onKeyDown?.();
    }
  };

  return {
    checked,
    pressed,
    handleClick,
    handleKeyDown,
    handleMouseDown,
    handleMouseUp,
    handleKeyUp,
  };
};

export default useCheckedState;
