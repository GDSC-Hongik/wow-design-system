import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import typescript from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";
import path from "path";

const extensions = [".tsx", ".ts", ".js", ".jsx"];
const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.BABEL_ENV = "production";

export default {
  input: { Box: "./src/components/Box", Button: "./src/components/Button" },
  output: [
    {
      format: "esm",
      dir: "dist",
      entryFileNames: "[name].js",
    },
    {
      format: "cjs",
      dir: "dist",
      entryFileNames: "[name].cjs",
    },
  ],
  external: ["react/jsx-runtime"],
  plugins: [
    alias({
      entries: [
        { find: "@", replacement: path.join(__dirname, "./src") },
        {
          find: "@styled-system",
          replacement: path.join(__dirname, "./styled-system"),
        },
      ],
    }),
    peerDepsExternal(),
    typescript({
      tsconfigOverride: {
        include: ["src/components/**/*"],
        exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
      },
    }),
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
