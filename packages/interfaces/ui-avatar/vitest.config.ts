import { defineConfig, vitestConfig } from "@react-beauty/vitest";
import packageManifest from "./package.json";

const { name } = packageManifest ?? {};
export default defineConfig(vitestConfig({ name }));
