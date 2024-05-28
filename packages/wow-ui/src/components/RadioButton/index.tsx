import type { ChangeEvent } from "react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    group.onChange(e, e.target.value);
  };

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <label
      className={labelRecipe({ state: disabled ? "disabled" : "default" })}
    >
      <input
        aria-checked={group.value === label}
        aria-label={label}
        checked={group.value === label}
        className={radioButton({ state: disabled ? "disabled" : "default" })}
        data-pressed={pressed}
        disabled={disabled}
        name={group.name}
        type="radio"
        value={label}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      />
      <span className={text}>{label}</span>
    </label>
  );
};

export default RadioButton;
