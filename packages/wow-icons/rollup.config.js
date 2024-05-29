import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default {
  ...baseConfig,
  input: "./src/react/index.ts",
  plugins: [
    ...baseConfig.plugins,
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    url(),
    svgr(),
  ],
};
