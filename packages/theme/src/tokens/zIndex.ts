import { defineTokens } from "@pandacss/dev";
import { zIndex as wowZIndex } from "wowds-tokens";

export const zIndex = defineTokens.zIndex({
  dropdown: {
    value: wowZIndex.dropdown,
  },
});
