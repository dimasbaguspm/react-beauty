import { defineConfig, viteConfig } from '@react-beauty/vite/package';

import packageManifest from './package.json';
import tsConfig from './tsconfig.json';

export default defineConfig(viteConfig(packageManifest, tsConfig));
