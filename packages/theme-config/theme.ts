import { defineTokens, defineTextStyles } from "@pandacss/dev";
import { color, typography } from "@gdsc-hongik/wow-tokens";

const colors = defineTokens.colors({
  red: {
    800: { value: color.red800 },
  },
  blue: {
    800: { value: color.blue800 },
  },
});

export const textStyles = defineTextStyles({
  h1: {
    value: typography.h1,
  },
  h2: {
    value: typography.h2,
  },
});

export const tokens = defineTokens({
  colors,
});
