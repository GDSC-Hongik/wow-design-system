import { defineConfig } from "@pandacss/dev";
import { tokens, semanticTokens, textStyles } from "theme";

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
    semanticTokens,
  },
});
