import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import svgr from "@svgr/rollup";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { fileURLToPath } from "url";

const extensions = [".tsx", ".ts", ".js", ".jsx"];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.BABEL_ENV = "production";

export default {
  input: {
    Box: "./src/components/Box",
    Button: "./src/components/Button",
    Toggle: "./src/components/Toggle",
  },
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
      include: ["src/components/**/*"],
      exclude: [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    }),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    url(),
    svgr(),
    terser(),
    json(),
  ],
};
