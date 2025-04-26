import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { svgr } from '@react-beauty/vite/app';

import type { Plugin, ViteUserConfig } from 'vitest/config';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export const vitestConfig = (
  config: ViteUserConfig['test'],
): ViteUserConfig => ({
  plugins: [svgr() as Plugin],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: [resolve(rootDir, 'setup-file.ts')],
    passWithNoTests: true,
    ...config,
  },
});

export * from 'vitest/config';
