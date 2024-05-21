import type { RadioButtonVariants } from "@/components/RadioButton/radioButton.recipe";
import {
  radioButtonRecipe,
  radioCircle,
} from "@/components/RadioButton/radioButton.recipe";

export interface RadioButtonProps extends RadioButtonVariants {}

const RadioButton = ({ state }: RadioButtonProps) => {
  return (
    <button className={radioButtonRecipe({ state })}>
      {state === "selected" && <div className={radioCircle}></div>}
    </button>
  );
};

export default RadioButton;
