export * from "./breakpoint.ts";
export * from "./color.ts";
export * from "./typography.ts";

import { defineTokens } from "@pandacss/dev";

import { colors, gradients } from "./color.ts";
import { radii } from "./radius.ts";
import { spacing } from "./space.ts";
import { borderWidths } from "./stroke.ts";

export const tokens = defineTokens({
  colors,
  gradients,
  spacing,
  radii,
  borderWidths,
});
