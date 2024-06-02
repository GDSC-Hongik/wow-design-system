"use client";

import { useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

import { labelRecipe, radioButton, text } from "./radioButton.recipe";

export interface RadioButtonProps {
  disabled?: boolean;
  label: string;
}

const RadioButton = ({ disabled = false, label }: RadioButtonProps) => {
  const group = useContext(RadioContext);

  const [pressed, setPressed] = useState(false);

  const handleMouseDown = () => {
    if (!disabled && !group.disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled && !group.disabled) setPressed(false);
  };

  return (
    <label
      className={labelRecipe({
        state: disabled || group.disabled ? "disabled" : "default",
      })}
    >
      <input
        aria-checked={group.value === label}
        aria-disabled={group.disabled || disabled}
        aria-label={label}
        checked={group.value === label}
        data-pressed={pressed}
        data-readonly={group.disabled && group.value === label}
        disabled={(group.disabled && group.value !== label) || disabled}
        name={group.name}
        type="radio"
        value={label}
        className={radioButton({
          state: group.value === label ? "active" : "inactive",
        })}
        onChange={group.onChange}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      />
      <span className={text}>{label}</span>
    </label>
  );
};

export default RadioButton;
