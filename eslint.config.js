import { settingIgnoreFiles } from './removeIgnoreFiles';

module.exports = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // prettier & eslint 충돌 방지
        'prettier',
    ],
    '**/*.{ts,tsx,js,jsx}': settingIgnoreFiles,
    parser: '@typescript-eslint',
    parserOptions: {
        project: true,
        __tsconfigRootDir: __dirname,
    },
    root: true,
};
