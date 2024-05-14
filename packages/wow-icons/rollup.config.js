import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import svgr from "@svgr/rollup";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "rollup-plugin-url";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "es",
    },
    {
      file: "./dist/index.cjs",
      format: "cjs",
    },
  ],
  external: ["react/jsx-runtime"],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      runtimeHelpers: true,
      presets: [
        ["react-app", { flow: false, typescript: true }],
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    }),
    url(),
    svgr(),
    terser(),
    json(),
  ],
};
