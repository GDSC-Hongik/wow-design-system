import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";

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
    typescript(),
  ],
};
