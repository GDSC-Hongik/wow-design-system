import { css } from "@styled-system/css/css";
import { cva } from "@styled-system/css/cva";

export const radioButton = cva({
  base: {
    appearance: "none",

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
      default: {
        cursor: "pointer",
        borderColor: "darkDisabled",
        _checked: {
          background: "blueBackgroundPressed",
          borderColor: "primary",
          _before: {
            content: `""`,
            width: 10,
            height: 10,
            borderRadius: 9999,
            background: "primary",
          },
        },
        "&[data-pressed=true]": {
          background: "blueBackgroundPressed",
          borderColor: "bluePressed",
        },
      },
      disabled: {
        background: "lightDisabled",
        borderColor: "darkDisabled",
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const text = css({
  textStyle: "body2",
});

export const labelRecipe = cva({
  base: {
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
