import type { ViteUserConfig } from "vitest/config";

export const vitestConfig: ViteUserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: ["@react-beauty/vitest/src/setup-file.ts"],
  },
};
