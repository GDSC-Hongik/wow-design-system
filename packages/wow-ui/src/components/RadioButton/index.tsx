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
  label: string;
}

const RadioButton = ({ label }: RadioButtonProps) => {
  const group = useContext(RadioContext);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    group?.onChange(e.target.value);
  };

  return (
    <Flex align="center" gap="0.5rem">
      <label
        className={radioButtonRecipe({
          state: group?.value === label ? "selected" : "unselected",
        })}
      >
        <input
          aria-checked={group?.value === label}
          aria-label={label}
          checked={group?.value === label}
          className={input}
          type="radio"
          value={label}
          onChange={handleChangeValue}
        />
        {group?.value === label && <div className={radioCircle}></div>}
      </label>
      <span className={text}>{label}</span>
    </Flex>
  );
};

export default RadioButton;
