import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default {
  ...baseConfig,
  external: ["react", "react-dom", "react/jsx-runtime", "postcss"],
  plugins: [
    ...baseConfig.plugins,
    typescript(),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
      presets: [["react-app", { flow: false, typescript: true }]],
    }),
  ],
};
