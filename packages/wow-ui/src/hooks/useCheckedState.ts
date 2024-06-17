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
  const {
    onChange: groupOnChange,
    checked: groupCheckedValues,
    disabled: groupDisabled,
  } = useContext(MultiGroupContext);

  const groupCheckedValue = groupCheckedValues?.includes(value);
  const disabled = groupDisabled || disabledProp || false;

  const [checkedValue, setCheckedValue] = useState<boolean>(
    groupCheckedValue || checkedProp || defaultChecked
  );
  const [pressed, setPressed] = useState<boolean>(false);

  useEffect(() => {
    if (groupCheckedValue !== undefined) {
      setCheckedValue(groupCheckedValue);
    }
  }, [groupCheckedValue]);

  useEffect(() => {
    if (groupCheckedValue === undefined && checkedProp !== undefined) {
      setCheckedValue(checkedProp);
    }
  }, [checkedProp, groupCheckedValue]);

  const toggleCheckedState = (value: string) => {
    if (disabled) return;

    if (groupOnChange) {
      groupOnChange(value);
    } else if (onChange) {
      onChange();
    } else {
      setCheckedValue((prev) => !prev);
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
