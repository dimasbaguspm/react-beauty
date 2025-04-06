import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  dts: true,
  format: "esm",
  tsconfig: "./tsconfig.json",
  bundle: true,
  platform: "browser",
});
