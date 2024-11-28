import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import checkFilePlugin from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'

/** @type {import('eslint').Linter.Config[]} */
export default [
   js.configs.recommended,
   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
   {
      languageOptions: {
         globals: globals.browser,
         ecmaVersion: 'latest',
         sourceType: 'module',
      },
   },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,

   {
      plugins: {
         'check-file': checkFilePlugin,
         import: importPlugin,
      },
      rules: {
         'react/react-in-jsx-scope': 'off',
         'no-unused-vars': 'error',
         'no-undef': 'error',
         'import/no-dynamic-require': 'warn',
         'import/no-nodejs-modules': 'warn',

         'check-file/folder-naming-convention': [
            'error',
            { '**/*': 'KEBAB_CASE' },
         ],
         'check-file/filename-naming-convention': [
            'error',
            { '**/*.{ts,tsx}': 'KEBAB_CASE' },
         ],
      },
      settings: {
         react: {
            version: 'detect',
         },
         'import/resolve': {
            typescript: true,
            node: true,
         },
      },
   },
   eslintConfigPrettier,

   // Override for vite.config.ts file naming convention to ignore
   {
      files: ['vite.config.ts'],
      rules: {
         'check-file/filename-naming-convention': 'off',
      },
   },
]
