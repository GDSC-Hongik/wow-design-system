import { defineTokens } from "@pandacss/dev";
import { stroke as wowStroke } from "wowds-tokens";

export const stroke = defineTokens.sizes({
  stroke: {
    "8": {
      value: wowStroke.stroke8,
    },
    "10": {
      value: wowStroke.stroke10,
    },
    "12": {
      value: wowStroke.stroke12,
    },
    "20": {
      value: wowStroke.stroke20,
    },
  },
});
