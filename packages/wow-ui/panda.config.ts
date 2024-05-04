import { defineConfig } from "@pandacss/dev";
export default defineConfig({
  // Whether to use css reset
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
});
