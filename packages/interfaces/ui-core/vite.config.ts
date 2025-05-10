import { defineConfig, viteConfig } from '@react-beauty/vite/package';

import packageManifest from './package.json';
import tsManifest from './tsconfig.json';

export default defineConfig(viteConfig(packageManifest, tsManifest));
