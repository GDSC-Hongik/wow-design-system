import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { semanticTokens, textStyles, tokens, breakpoints } from "theme";
import { removeUnusedCssVars, removeUnusedKeyframes } from "theme/utils";

const globalCss = defineGlobalStyles({
  body: {
    div: "border-box",
    button: "border-box",
  },
});

export default defineConfig({
  globalCss,
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  dependencies: ["./src/components/**"],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
    semanticTokens,
    breakpoints,
  },
});
