import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./theme/textStyles";
import { tokens } from "./theme/tokens";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
  },
});
