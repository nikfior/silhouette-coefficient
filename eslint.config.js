import pluginJs from "@eslint/js";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 12, // Specifies the ECMAScript version (2021 in this case)
      sourceType: "module", // Allows the use of ES modules (import/export)
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  {
    rules: {
      semi: ["error", "always"], // Enforces semicolons at the end of statements
      quotes: ["warn", "double"], // Enforces the use of double quotes
      "no-unused-vars": ["warn"], // Warns about declared but unused variables
      "no-console": "off", // Allows the use of console statements
      "prettier/prettier": "warn", // Show prettier formating rules in eslint as warnings instead of errors
    },
  },
];
