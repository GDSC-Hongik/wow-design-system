import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["../shared-config/jest.setup.ts"],
  verbose: true,
  collectCoverage: true,
  restoreMocks: true,
};

export default config;
