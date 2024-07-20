import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["../shared-config/jest.setup.ts"],
  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
};

export default config;
