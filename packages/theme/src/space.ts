import { defineTokens } from "@pandacss/dev";
import { space } from "wowds-tokens";

export const spacing = defineTokens.spacing({
  spacing: {
    4: {
      description: "패딩패딩",
      deprecated: true,
      value: space.space4,
    },
    8: {
      value: space.space8,
    },
    12: {
      value: space.space12,
    },
    16: {
      value: space.space16,
    },
    20: {
      value: space.space20,
    },
    24: {
      value: space.space24,
    },
    32: {
      value: space.space32,
    },
    36: {
      value: space.space36,
    },
    40: {
      value: space.space40,
    },
  },
});
