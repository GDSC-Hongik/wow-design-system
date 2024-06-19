import fs from "fs";
import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { semanticTokens, textStyles, tokens, breakpoints } from "theme";
import { ColorToken } from "theme/types";
import { colorTokenList } from "theme/config";
import { removeUnusedCssVars, removeUnusedKeyframes } from "theme/utils";

const variableNamesFile = "../theme/config/tokenList.json"; // 저장된 파일 경로에 맞게 수정

const readVariableNamesFromFile = async (
  filePath: string
): Promise<string[]> => {
  try {
    const data = await fs.promises.readFile(filePath, "utf-8");
    const variableNames = JSON.parse(data) as string[];
    return variableNames;
  } catch (error) {
    console.error("Error reading variable names from file:", error);
    return [];
  }
};

const globalCss = defineGlobalStyles({
  body: {
    div: "border-box",
    button: "border-box",
  },
});

export default defineConfig({
  staticCss: {
    css: [
      {
        properties: {
          color: colorTokenList,
        },
      },
    ],
  },
  globalCss,
  preflight: true,
  minify: true,
  watch: true,
  outExtension: "js",
  polyfill: true,
  jsxFramework: "react",
  dependencies: ["./src/components/**"],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return removeUnusedCssVars(removeUnusedKeyframes(content));
      }
    },
  },
  outdir: "styled-system",
  theme: {
    tokens,
    textStyles,
    semanticTokens,
    breakpoints,
  },
});
