import { Config } from "jest";
import jestConfig from "@repo/shared-config/jest.config";

const config: Config = {
  ...jestConfig,
  testEnvironment: "jsdom",
};

export default config;
