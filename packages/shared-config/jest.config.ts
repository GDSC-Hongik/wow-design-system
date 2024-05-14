import { Config } from "jest";

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

  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  moduleNameMapper: {
    "^@styled-system(.*)$": "<rootDir>/styled-system$1",
  },
};

export default config;
