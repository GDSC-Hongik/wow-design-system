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
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },

  setupFilesAfterEnv: ["../shared-config/jest.setup.ts"],
  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
  testMatch: [
    "<rootDir>/src/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/app/**/*.test.(js|jsx|ts|tsx)",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@styled-system(.*)$": "<rootDir>/styled-system/$1",
  },
  testEnvironment: "jsdom",
};

export default config;
