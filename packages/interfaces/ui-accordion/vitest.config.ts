import { defineConfig, vitestConfig } from "@react-beauty/vitest";

import packageManifest from "./package.json";

export default defineConfig(vitestConfig(packageManifest));