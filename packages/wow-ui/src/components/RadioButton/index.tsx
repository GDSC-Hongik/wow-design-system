"use client";
import type { ChangeEvent } from "react";
import { useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

import { labelRecipe, radioButton, text } from "./radioButton.recipe";

export interface RadioButtonProps {
  disabled?: boolean;
  active?: boolean;
  label: string;
}

const RadioButton = ({
  active = false,
  disabled = false,
  label,
}: RadioButtonProps) => {
  const group = useContext(RadioContext);

  const [pressed, setPressed] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (group.onChange) group.onChange(e);
  };

  const handleMouseDown = () => {
    if (!disabled) setPressed(true);
  };

  const handleMouseUp = () => {
    if (!disabled) setPressed(false);
  };

  return (
    <label
      className={labelRecipe}
      data-disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      <input
        aria-checked={group.value === label}
        aria-label={label}
        checked={group.value === label}
        className={radioButton({ state: active ? "active" : "inactive" })}
        data-pressed={pressed}
        disabled={disabled}
        name={group.name}
        type="radio"
        value={label}
        onChange={handleChange}
      />
      <span className={text}>{label}</span>
    </label>
  );
};

export default RadioButton;
