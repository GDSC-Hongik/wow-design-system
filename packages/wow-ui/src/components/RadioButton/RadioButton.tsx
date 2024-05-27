import { Flex } from "@styled-system/jsx";
import type { ChangeEvent } from "react";
import { useContext } from "react";

import type { RadioButtonVariants } from "@/components/RadioButton/radioButton.recipe";
import {
  input,
  radioButtonRecipe,
  radioCircle,
  text,
} from "@/components/RadioButton/radioButton.recipe";
import RadioContext from "@/components/RadioButton/RadioContext";

export interface RadioButtonProps extends RadioButtonVariants {
  label: string;
}

const RadioButton = ({ state, label }: RadioButtonProps) => {
  const group = useContext(RadioContext);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    group?.onChange(e.target.value);
  };

  return (
    <Flex align="center" gap="0.5rem">
      <label className={radioButtonRecipe({ state })}>
        <input
          aria-checked={group?.value === label}
          aria-label={label}
          checked={group?.value === label}
          className={input}
          type="radio"
          value={label}
          onChange={handleChangeValue}
        />
        {state === "selected" && <div className={radioCircle}></div>}
      </label>
      <span className={text}>{label}</span>
    </Flex>
  );
};

export default RadioButton;
