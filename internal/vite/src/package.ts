import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import type { UserConfig } from 'vite';

export const viteConfig = (
  packageManifest: Record<string, unknown>,
  tsManifest?: Record<string, unknown>,
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
    dts({
      exclude: (() => {
        const base = [
          'node_modules/**',
          'dist/**',
          '**/__tests__/**',
          '**/stories.*',
          '**/story.*',
          '**/style.*',
        ];

        // NOTE:  follow the same behavior as the `exclude` option of the
        //`vite-plugin-dts` package, we need to merge the `exclude`
        // option with the `tsManifest.exclude` option.
        if (
          tsManifest &&
          typeof tsManifest === 'object' &&
          'exclude' in tsManifest &&
          Array.isArray(tsManifest.exclude)
        ) {
          return base.concat(tsManifest.exclude);
        }

        return base;
      })(),
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/index.ts',
      name: 'index',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external(id, _, isResolved) {
        if (isResolved) {
          return false;
        }

        const peerDependencies = Object.keys(
          packageManifest.peerDependencies ?? {},
        );
        return peerDependencies.some((packageName) => {
          return id === packageName || id.startsWith(`${packageName}/`);
        });
      },
    },
  },
});

export * from 'vite';
export { default as wyw } from '@wyw-in-js/vite';
export { default as react } from '@vitejs/plugin-react';
export { default as svgr } from 'vite-plugin-svgr';
export { default as dts } from 'vite-plugin-dts';
