import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
   js.configs.recommended,
   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
   { languageOptions: { globals: globals.browser } },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   {
      rules: {
         'react/react-in-jsx-scope': 'off',
         'no-unused-vars': 'error',
         'no-undef': 'error',
      },
      settings: {
         react: {
            version: 'detect',
         },
      },
   },
   eslintConfigPrettier,
]
