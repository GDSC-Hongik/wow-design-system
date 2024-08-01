import { defineConfig } from "@pandacss/dev";

import {
  pandaPreset,
  removeUnusedCssVars,
  removeUnusedKeyframes,
} from "wowds-theme";

export default defineConfig({
  presets: [pandaPreset],
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
});
