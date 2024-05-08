// This configuration only applies to the package manager root.
const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
    "styled-system/",
    "panda.config.ts",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
