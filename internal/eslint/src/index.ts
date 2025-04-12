import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// @ts-expect-error
import importPlugin from "eslint-plugin-import";

const configs = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    ignores: ["eslint.config.mjs"],
    rules: {
      "import/no-cycle": "error",
      "import/exports-last": "error",
      "import/newline-after-import": "error",
      "import/max-dependencies": ["error", { max: 5 }],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
          distinctGroup: false,
          groups: [
            "builtin",
            "internal",
            "external",
            "parent",
            "sibling",
            "index",
            "type",
          ],
        },
      ],
    },
  },
);

export { configs };
