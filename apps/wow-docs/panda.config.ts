import { defineConfig } from "@pandacss/dev";
import { tokens, textStyles } from "theme";
import { removeUnusedCssVars, removeUnusedKeyframes } from "theme/utils";

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
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
});
