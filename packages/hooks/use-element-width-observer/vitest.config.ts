import { vitestConfig } from "@react-beauty/vitest/setting";
import { defineConfig } from "vitest/config";
import packageManifest from "./package.json";

const { name } = packageManifest ?? {};

export default defineConfig(vitestConfig({ name }));
