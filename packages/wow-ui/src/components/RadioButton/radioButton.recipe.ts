import { css } from "@styled-system/css/css";
import { cva } from "@styled-system/css/cva";

export const radioButtonRecipe = cva({
  base: {
    appearance: "none",

    width: 20,
    height: 20,
    borderRadius: 9999,
    borderWidth: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "background",
    borderColor: "darkDisabled",
  },
  variants: {
    state: {
      default: {
        base: {
          cursor: "pointer",
        },
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
      readonly: {
        background: "lightDisabled",
        borderColor: "darkDisabled",
        _before: {
          content: `""`,
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: "darkDisabled",
        },
      },
      disabled: {
        background: "lightDisabled",
        borderColor: "darkDisabled",
        cursor: "not-allowed",
      },
    },
  },
});

export const text = css({
  textStyle: "body2",
});

export const labelRecipe = cva({
  base: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "textBlack",
  },
  variants: {
    state: {
      default: {
        cursor: "pointer",
        color: "textBlack",
      },
      readonly: {
        color: "sub",
      },
      disabled: {
        color: "sub",
        cursor: "not-allowed",
      },
    },
  },
});
