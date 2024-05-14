import { Config } from "jest";
import jestConfig from "../shared-config/jest.config.ts";

const config: Config = {
  ...jestConfig,
  testEnvironment: "jsdom",
};

export default config;
