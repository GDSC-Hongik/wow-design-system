import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  include: ["./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
});
