import { defineTokens } from "@pandacss/dev";
import { color } from "@gdsc-hongik/wow-tokens";

export const colors = defineTokens.colors({
  red: {
    800: { value: color.red800 },
  },
  blue: {
    800: { value: color.blue800 },
  },
});
