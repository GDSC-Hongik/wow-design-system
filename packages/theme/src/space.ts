import { defineTokens } from "@pandacss/dev";
import { space } from "wowds-tokens";

export const spacing = defineTokens.spacing({
  spacing: {
    4: {
      value: space.xxs,
    },
    8: {
      value: space.xs,
    },
    12: {
      value: space.sm,
    },
    16: {
      value: space.md,
    },
    20: {
      value: space.lg,
    },
    24: {
      value: space.xl,
    },
  },
});
