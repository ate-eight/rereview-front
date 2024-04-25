import { settingIgnoreFiles } from './removeIgnoreFiles';

module.exports = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
    ],
    '**/*.{ts,tsx,js,jsx}': settingIgnoreFiles,
    parser: '@typescript-eslint',
    parserOptions: {
        project: true,
        __tsconfigRootDir: __dirname,
    },
    root: true,
};
