import type { RadioButtonVariants } from "@/components/RadioButton/radioButton.recipe";
import {
  container,
  radioButtonRecipe,
  radioCircle,
  text,
} from "@/components/RadioButton/radioButton.recipe";

export interface RadioButtonProps extends RadioButtonVariants {
  label: string;
}

const RadioButton = ({ state, label }: RadioButtonProps) => {
  return (
    <div className={container}>
      <button className={radioButtonRecipe({ state })}>
        {state === "selected" && <div className={radioCircle}></div>}
      </button>
      <span className={text}>{label}</span>
    </div>
  );
};

export default RadioButton;
