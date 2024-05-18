import type { Config } from "jest";
import jestConfig from "shared-config/jest.config";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  ...jestConfig,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
