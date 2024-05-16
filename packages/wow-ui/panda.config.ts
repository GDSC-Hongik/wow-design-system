import { defineConfig } from "@pandacss/dev";
import { removeUnusedCssVars, removeUnusedKeyframes } from "theme/utils";

export default defineConfig({
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
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
});
