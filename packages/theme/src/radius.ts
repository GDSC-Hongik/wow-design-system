import { defineTokens } from "@pandacss/dev";
import { radius as wowRadius } from "wowds-tokens";

export const radii = defineTokens.radii({
  radius: {
    4: { value: wowRadius.radius4 },
    8: { value: wowRadius.radius8 },
    12: { value: wowRadius.radius12 },
    full: { value: wowRadius.radiusFull },
  },
});
