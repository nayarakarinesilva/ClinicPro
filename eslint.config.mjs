// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import checkFile from 'eslint-plugin-check-file';

export default defineConfig([
  ...nextVitals,
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/app/**': 'KEBAB_CASE',
          'src/components/**': 'PASCAL_CASE',
        },
        {
          ignorePatterns: ['src/app/(private)/**', 'src/app/(public)/**'],
        },
      ],

      'check-file/filename-naming-convention': [
        'error',
        {
          'src/components/**/*.{js,jsx,ts,tsx}': 'PASCAL_CASE',
          'src/hooks/**/*.{js,jsx,ts,tsx}': 'CAMEL_CASE',
          'src/utils/**/*.{js,ts}': 'CAMEL_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  ...storybook.configs['flat/recommended'],
]);
