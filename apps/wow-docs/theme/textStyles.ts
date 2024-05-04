import { defineTextStyles } from "@pandacss/dev";
import { typography } from "wow-tokens";

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: typography.h1,
    },
  },
  h2: {
    value: {
      fontSize: typography.h2,
    },
  },
});
