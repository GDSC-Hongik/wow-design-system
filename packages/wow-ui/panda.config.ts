import { defineConfig } from "@pandacss/dev";
import { semanticTokens, textStyles, tokens } from "theme";

export default defineConfig({
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
    semanticTokens,
  },
});
