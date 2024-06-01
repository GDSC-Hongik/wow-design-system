import { defineConfig } from "@pandacss/dev";
import { semanticTokens, textStyles, tokens } from "theme";
import { removeUnusedCssVars, removeUnusedKeyframes } from "theme/utils";

export default defineConfig({
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
    semanticTokens,
  },
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
});
