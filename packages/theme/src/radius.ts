import { defineTokens } from "@pandacss/dev";
import { radius as wowRadius } from "wowds-tokens";

export const radii = defineTokens.radii({
  radius: {
    sm: { value: wowRadius.sm },
    md: { value: wowRadius.md },
    full: { value: wowRadius.full },
  },
});
