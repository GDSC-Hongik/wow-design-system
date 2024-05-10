// This configuration only applies to the package manager root.
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    "dist/",
    "styled-system/",
    "panda.config.ts",
    "rollup.config.cjs",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
