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
        tsconfig: "<rootDir>/tsconfig.json", // packages/wow-ui/tsconfig.json을 가리키게 함
      },
    ],
  },
};

export default config;
