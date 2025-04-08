import { defineConfig } from "vite";
import { viteConfig } from "@react-beauty/vite";

import packageManifest from "./package.json";

export default defineConfig(viteConfig(packageManifest));
