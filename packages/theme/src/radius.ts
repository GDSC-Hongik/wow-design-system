import { defineTokens } from "@pandacss/dev";
import { radius as wowRadius } from "wowds-tokens";

export const radii = defineTokens.radii({
  radius: {
    4: { value: wowRadius.sm },
    8: { value: wowRadius.md },
    full: { value: wowRadius.full },
  },
});
