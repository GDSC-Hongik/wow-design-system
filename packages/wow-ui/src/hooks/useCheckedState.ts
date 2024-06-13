import type { KeyboardEvent } from "react";
import { useContext, useEffect, useState } from "react";

import MultiGroupContext from "@/components/MultiGroup/MultiGroupContext";

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
  value,
  onChange,
  onClick,
  onKeyDown,
}: CheckedStateProps) => {
  const group = useContext(MultiGroupContext);
  const groupOnChange = group.onChange;
  const groupChecked = group.checked?.includes(value);
  const disabled = group.disabled || disabledProp || false;

  const [checked, setChecked] = useState<boolean>(
    groupChecked || checkedProp || defaultChecked
  );
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    if (groupChecked !== undefined) {
      setChecked(groupChecked);
    }
  }, [groupChecked]);

  useEffect(() => {
    if (groupChecked === undefined && checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp, groupChecked]);

  const toggleCheckedState = (value: string) => {
    if (groupOnChange) {
      if (!disabled) groupOnChange(value);
    } else if (onChange) {
      onChange();
    } else {
      setChecked((prev) => !prev);
    }
  };

  const handleMouseDown = () => {
    if (!disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled) setPressed(false);
  };

  const handleClick = (value: string) => {
    toggleCheckedState(value);
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
      toggleCheckedState(value);
      onKeyDown?.();
    }
  };

  return {
    checked,
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
