import { Flex } from "@styled-system/jsx";
import type { ChangeEvent } from "react";
import { useContext } from "react";

import RadioContext from "@/components/RadioGroup/RadioContext";

import {
  input,
  radioButtonRecipe,
  radioCircle,
  text,
} from "./radioButton.recipe";

export interface RadioButtonProps {
  disabled?: boolean;
  label: string;
}

const RadioButton = ({ disabled = false, label }: RadioButtonProps) => {
  const group = useContext(RadioContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    group.onChange(e, e.target.value);
  };

  return (
    <Flex align="center" gap="0.5rem">
      <label
        className={radioButtonRecipe({
          state:
            group.value === label
              ? "selected"
              : disabled
                ? "disabled"
                : "unselected",
        })}
      >
        <input
          aria-checked={group.value === label}
          aria-label={label}
          checked={group.value === label}
          className={input}
          disabled={disabled}
          name={group.name}
          type="radio"
          value={label}
          onChange={handleChange}
        />
        {group.value === label && <div className={radioCircle}></div>}
      </label>
      <span className={text}>{label}</span>
    </Flex>
  );
};

export default RadioButton;
