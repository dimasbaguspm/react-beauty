import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import svgr from 'vite-plugin-svgr';

import type { BuildEnvironmentOptions, UserConfig } from 'vite';

export const viteConfig = (
  buildOptions?: BuildEnvironmentOptions,
): UserConfig => ({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    react({
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
    }),
    svgr(),
  ],
  build: {
    outDir: 'dist',
    ...buildOptions,
  },
});

export * from 'vite';
export { default as wyw } from '@wyw-in-js/vite';
export { default as react } from '@vitejs/plugin-react';
export { default as svgr } from 'vite-plugin-svgr';
