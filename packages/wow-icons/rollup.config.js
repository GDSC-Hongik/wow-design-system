import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { fileURLToPath } from "url";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.BABEL_ENV = "production";

export default {
  ...baseConfig,
  input: "./src/component/index.ts",
  plugins: [
    ...baseConfig.plugins,
    alias({
      entries: [{ find: "@", replacement: path.join(__dirname, "./src") }],
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    url(),
    typescript(),
  ],
};
