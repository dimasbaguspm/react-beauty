import { ViteUserConfig } from "vitest/config";
import process from "node:process";

export const userConfig: ViteUserConfig = {
  test: {
    setupFiles: [process.cwd() + "./setup-file.ts"],
  },
};
