import type { Config } from "jest";

const config: Config = {
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
  setupFilesAfterEnv: ["../shared-config/jest.setup.ts"],
  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
};

export default config;
