import { css } from "@styled-system/css";
import type { ClassNames } from "react-day-picker";

import { pickerButtonStyle } from "@/components/Picker/pickerButtonStyle.css";

const pickerClassNames: Partial<ClassNames> | undefined = {
  root: css({
    width: "100%",
    paddingX: "1rem",
    paddingY: "1.25rem",

    background: "background",
    borderRadius: "md",
    shadow: "mono",
  }),
  nav: css({
    width: "17.75rem",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
  }),
  month: css({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
    alignItems: "center",
  }),
  month_grid: css({
    width: "100%",
  }),
  weekday: pickerButtonStyle({ variant: "date", state: "default" }),
  disabled: pickerButtonStyle({
    variant: "date",
    state: "disabled",
  }),
  day: pickerButtonStyle({ variant: "date", state: "default" }),
  day_button: css({
    width: "100%",
    cursor: "pointer",
  }),
  outside: pickerButtonStyle({
    variant: "date",
    state: "disabled",
  }),
  range_start: pickerButtonStyle({
    variant: "date",
    state: "selected",
  }),
  range_end: pickerButtonStyle({
    variant: "date",
    state: "selected",
  }),
  range_middle: pickerButtonStyle({
    variant: "date",
    state: "range",
  }),
};

export default pickerClassNames;
