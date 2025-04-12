import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { ViteUserConfig } from "vitest/config";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export const vitestConfig = (
  config: ViteUserConfig["test"],
): ViteUserConfig => ({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: [resolve(rootDir, "setup-file.ts")],
    passWithNoTests: true,
    ...config,
  },
});

export * from "vitest/config";
