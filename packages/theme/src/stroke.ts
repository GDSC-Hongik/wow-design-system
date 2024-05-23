import { defineTokens } from "@pandacss/dev";
import { stroke as wowStroke } from "wowds-tokens";

export const borderWidths = defineTokens.borderWidths({
  stroke8: {
    value: wowStroke.stroke8,
  },
  stroke10: {
    value: wowStroke.stroke10,
  },
  stroke12: {
    value: wowStroke.stroke12,
  },
  stroke20: {
    value: wowStroke.stroke20,
  },
});
