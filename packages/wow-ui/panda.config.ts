import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import {
  removeUnusedCssVars,
  removeUnusedKeyframes,
  pandaPreset,
} from "wowds-theme";

const globalCss = defineGlobalStyles({
  body: {
    div: "border-box",
    button: "border-box",
  },
});

export default defineConfig({
  presets: [pandaPreset],
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
  conditions: {
    hover: "&[aria-pressed=false]:not(:disabled):hover",
  },
});
