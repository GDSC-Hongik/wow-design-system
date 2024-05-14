import {
  defineSemanticTokens,
  defineTextStyles,
  defineTokens,
} from "@pandacss/dev";
import { color, typography } from "wowds-tokens";

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: { value: color.primary },
    success: { value: color.success },
    error: { value: color.error },
    backgroundNormal: { value: color.backgroundNormal },
    backgroundAlternative: { value: color.backgroundAlternative },
    backgroundDimmer: { value: color.backgroundDimmer },
    sub: { value: color.sub },
    outline: { value: color.outline },
    textBlack: { value: color.textBlack },
    textWhite: { value: color.textWhite },
    darkDisabled: { value: color.darkDisabled },
    lightDisabled: { value: color.lightDisabled },
    blueHover: { value: color.blueHover },
    monoHover: { value: color.monoHover },
    elevatedHover: { value: color.elevatedHover },
    bluePressed: { value: color.bluePressed },
    blueBackgroundPressed: { value: color.blueBackgroundPressed },
    monoBackgroundPressed: { value: color.monoBackgroundPressed },
    shadowSmall: { value: color.shadowSmall },
    shadowMedium: { value: color.shadowMedium },
    blueShadow: { value: color.blueShadow },
    discord: { value: color.discord },
    github: { value: color.github },
  },
});
const gradients = defineTokens.gradients({
  blueGradientDark: {
    value: `linear-gradient(to right, ${color.blueGradientDark.gradientFrom}, ${color.blueGradientDark.gradientTo})`,
  },
  blueGradientLight: {
    value: `linear-gradient(to right, ${color.blueGradientLight.gradientFrom}, ${color.blueGradientLight.gradientTo})`,
  },
  redGradientDark: {
    value: `linear-gradient(to right, ${color.redGradientDark.gradientFrom}, ${color.redGradientDark.gradientTo})`,
  },
  redGradientLight: {
    value: `linear-gradient(to right, ${color.redGradientLight.gradientFrom}, ${color.redGradientLight.gradientTo})`,
  },
  greenGradientDark: {
    value: `linear-gradient(to right, ${color.greenGradientDark.gradientFrom}, ${color.greenGradientDark.gradientTo})`,
  },
  greenGradientLight: {
    value: `linear-gradient(to right, ${color.greenGradientLight.gradientFrom}, ${color.greenGradientLight.gradientTo})`,
  },
  yellowGradientDark: {
    value: `linear-gradient(to right, ${color.yellowGradientDark.gradientFrom}, ${color.yellowGradientDark.gradientTo})`,
  },
  yellowGradientLight: {
    value: `linear-gradient(to right, ${color.yellowGradientLight.gradientFrom}, ${color.yellowGradientLight.gradientTo})`,
  },
});
const colors = defineTokens.colors({
  red: {
    50: { value: color.red50 },
    100: { value: color.red100 },
    150: { value: color.red150 },
    200: { value: color.red200 },
    300: { value: color.red300 },
    400: { value: color.red400 },
    500: { value: color.red500 },
    600: { value: color.red600 },
    700: { value: color.red700 },
    800: { value: color.red800 },
    850: { value: color.red850 },
    900: { value: color.red900 },
    950: { value: color.red950 },
  },
  blue: {
    50: { value: color.blue50 },
    100: { value: color.blue100 },
    150: { value: color.blue150 },
    200: { value: color.blue200 },
    300: { value: color.blue300 },
    400: { value: color.blue400 },
    500: { value: color.blue500 },
    600: { value: color.blue600 },
    700: { value: color.blue700 },
    800: { value: color.blue800 },
    850: { value: color.blue850 },
    900: { value: color.blue900 },
    950: { value: color.blue950 },
  },
});

export const textStyles = defineTextStyles({
  h1: {
    value: typography.h1,
  },
  h2: {
    value: typography.h2,
  },
  display1: {
    value: typography.display1,
  },
  display2: {
    value: typography.display2,
  },
  h3: {
    value: typography.h3,
  },
  body1: {
    value: typography.body1,
  },
  body2: {
    value: typography.body2,
  },
  body3: {
    value: typography.body3,
  },
  label1: {
    value: typography.label1,
  },
  label2: {
    value: typography.label2,
  },
  label3: {
    value: typography.label3,
  },
});

export const tokens = defineTokens({
  colors,
  gradients,
});
