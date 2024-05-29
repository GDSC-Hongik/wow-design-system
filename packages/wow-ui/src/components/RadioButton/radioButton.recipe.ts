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
    cursor: "pointer",

    background: "background",
    borderColor: "darkDisabled",
  },
  variants: {
    state: {
      active: {
        base: {
          _before: {
            content: `""`,
            width: 10,
            height: 10,
            borderRadius: 9999,
          },
        },
        _checked: {
          background: "blueBackgroundPressed",
          borderColor: "primary",
          _before: {
            background: "primary",
          },
        },
        _disabled: {
          background: "lightDisabled",
          borderColor: "darkDisabled",
          cursor: "not-allowed",
          _before: {
            background: "darkDisabled",
          },
        },
        "&[data-pressed=true]": {
          background: "blueBackgroundPressed",
          borderColor: "bluePressed",
          _before: {
            background: "bluePressed",
          },
        },
      },
      inactive: {
        _disabled: {
          background: "lightDisabled",
          borderColor: "darkDisabled",
          cursor: "not-allowed",
        },
        "&[data-pressed=true]": {
          background: "blueBackgroundPressed",
          borderColor: "bluePressed",
        },
      },
    },
  },
});

export const text = css({
  textStyle: "body2",
});

export const labelRecipe = css({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  base: {
    cursor: "pointer",
    color: "textBlack",
  },

  "&[data-disabled=true]": {
    cursor: "not-allowed",
    color: "sub",
  },
});
