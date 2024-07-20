import { Config } from "jest";
import jestConfig from "shared-config/jest.config";

const config: Config = {
  ...jestConfig,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
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
};

export default config;
