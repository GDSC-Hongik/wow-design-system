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
      disabled: {
        background: "lightDisabled",
        borderColor: "darkDisabled",

        cursor: "not-allowed",
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

export const text = css({
  textStyle: "body2",
});

export const input = css({
  appearance: "none",
});

export const labelRecipe = cva({
  base: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  variants: {
    state: {
      default: {
        cursor: "pointer",
      },
      disabled: {
        cursor: "not-allowed",
        color: "darkDisabled",
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});
