import { cva } from "@styled-system/css";

export const pickerButtonStyle = cva({
  base: {
    width: "2.3125rem",
    paddingX: "0.4rem",

    borderRadius: "sm",
    textStyle: "body1",
    textAlign: "center",

    cursor: "pointer",
  },
  variants: {
    variant: {
      time: {
        color: "sub",
        background: "backgroundAlternative",

        _active: {
          background: "monoBackgroundPressed",
          borderWidth: 1,
          borderColor: "sub",
        },
      },
      date: {
        color: "sub",
        _active: {
          background: "monoBackgroundPressed",
        },
      },
      month: { color: "sub", cursor: "default" },
    },
    state: {
      default: {},
      selected: {
        background: "primary",
        color: "textWhite",
      },
      disabled: {
        color: "lightDisabled",
        pointerEvents: "none",
      },
      range: {
        background: "blueBackgroundPressed",
        color: "sub",

        borderRadius: 0,
      },
    },
  },
  compoundVariants: [
    {
      variant: "time",
      state: "selected",
      css: {
        background: "backgroundAlternative",
        color: "textBlack",

        borderWidth: 1,
        borderColor: "textBlack",

        _active: {
          color: "sub",
          background: "monoBackgroundPressed",
          borderColor: "sub",
        },
      },
    },
    {
      variant: "time",
      state: "disabled",
      css: {
        background: "monoBackgroundPressed",
        color: "outline",

        borderWidth: 0,
      },
    },
  ],
});
