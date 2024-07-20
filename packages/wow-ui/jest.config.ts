import { Config } from "jest";
import jestConfig from "shared-config/jest.config";

const config: Config = {
  // ...jestConfig,
  preset: "ts-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },

  setupFilesAfterEnv: ["../shared-config/jest.setup.ts"],
  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
  testMatch: ["src/**/*.test.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["styled-system/", "node-modules/"],
  coveragePathIgnorePatterns: ["styled-system/", "node-modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "src/$1",
    "^@styled-system(.*)$": "styled-system/$1",
  },
  testEnvironment: "jsdom",
};

export default config;
