import { cva } from "@styled-system/css";

export const pickerButtonStyle = cva({
  base: {
    width: "2.3125rem",
    paddingX: "xs",

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
        _selected: {
          borderWidth: 1,
          borderColor: "textBlack",
        },
        _pressed: {
          borderWidth: 1,
          background: "monoBackgroundPressed",
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
    },
  },
});
