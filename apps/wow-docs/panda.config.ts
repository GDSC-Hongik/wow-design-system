import { defineConfig } from "@pandacss/dev";

import {
  pandaPreset,
  removeUnusedCssVars,
  removeUnusedKeyframes,
} from "wowds-theme";
import { typography } from "wowds-tokens";

export default defineConfig({
  presets: [pandaPreset],
  staticCss: {
    css: [
      {
        properties: {
          ...(pandaPreset?.staticCss?.css?.[0]?.properties?.color && {
            color: pandaPreset.staticCss.css[0].properties.color,
          }),
          textStyle: Object.keys(typography),
        },
      },
    ],
  },
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
