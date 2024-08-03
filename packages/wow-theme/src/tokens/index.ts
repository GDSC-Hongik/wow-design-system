import { defineTokens } from "@pandacss/dev";

import { colors, gradients } from "./color.ts";
import { radii } from "./radius.ts";
import { shadows } from "./shadows.ts";
import { spacing } from "./space.ts";
import { borderWidths } from "./stroke.ts";
import { zIndex } from "./zIndex.ts";

export const tokens = defineTokens({
  colors,
  gradients,
  spacing,
  radii,
  borderWidths,
  zIndex,
  shadows,
});

export * from "./breakpoint.ts";
export * from "./color.ts";
export * from "./typography.ts";
