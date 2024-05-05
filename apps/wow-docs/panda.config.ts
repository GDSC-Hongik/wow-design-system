import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./theme/textStyles";
import { tokens } from "./theme/tokens";

export default defineConfig({
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
  },
});
