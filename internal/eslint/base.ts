// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const configs = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);

export { configs };
