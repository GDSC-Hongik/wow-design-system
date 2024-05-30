import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import path from "path";

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
    typescript(),
    alias({
      entries: [{ find: "@", replacement: path.join(__dirname, "./src") }],
    }),
  ],
};
