import { css } from "@styled-system/css/css";
import { cva } from "@styled-system/css/cva";

export const radioButtonRecipe = cva({
  base: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    borderWidth: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    state: {
      selected: {
        background: "blueBackgroundPressed",
        borderColor: "primary",
      },
      unselected: {
        borderColor: "darkDisabled",
      },
      pressed: {
        background: "blueBackgroundPressed",
        borderColor: "bluePressed",
      },
    },
  },
  defaultVariants: {
    state: "unselected",
  },
});

export const radioCircle = css({
  width: 10,
  height: 10,
  borderRadius: 9999,
  background: "primary",
});

type State = "selected" | "unselected" | "pressed";

export interface RadioButtonVariants {
  state: State;
}
