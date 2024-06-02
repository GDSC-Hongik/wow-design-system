"use client";
import { useContext, useState } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

import { labelRecipe, radioButtonRecipe, text } from "./radioButton.recipe";

export type RadiodefaultState = "default" | "readonly" | "disabled";

export interface RadioButtonProps {
  defaultState?: RadiodefaultState;
  label: string;
}

const RadioButton = ({ defaultState = "default", label }: RadioButtonProps) => {
  const group = useContext(RadioContext);
  const [pressed, setPressed] = useState(false);

  const handleMouseDown = () => {
    if (defaultState === "default") setPressed(true);
  };

  const handleMouseUp = () => {
    if (defaultState === "default") setPressed(false);
  };

  return (
    <label
      className={labelRecipe({ state: defaultState })}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      <input
        aria-checked={group.value === label}
        aria-disabled={defaultState === "disabled"}
        aria-label={label}
        checked={group.value === label}
        className={radioButtonRecipe({ state: defaultState })}
        data-pressed={pressed}
        disabled={defaultState === "disabled"}
        name={group.name}
        readOnly={defaultState === "readonly"}
        type="radio"
        value={label}
        onChange={group.onChange}
      />
      <span className={text}>{label}</span>
    </label>
  );
};

export default RadioButton;
