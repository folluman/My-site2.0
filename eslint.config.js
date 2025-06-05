import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    },
  },
]);
