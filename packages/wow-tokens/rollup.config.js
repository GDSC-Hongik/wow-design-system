import baseConfig from "../shared-config/rollup.config.js";
import babel from "@rollup/plugin-babel";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
      presets: [["react-app", { flow: false, typescript: true }]],
    }),
  ],
};
