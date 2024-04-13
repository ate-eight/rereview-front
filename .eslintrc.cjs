module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  settings: {
      react: {
          version: 'detect',
      },
      'import/resolver': {
          node: {
              paths: ['src'],
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
      },
  },
  env: {
      browser: true,
      amd: true,
      node: true,
  },
  extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:react/jsx-runtime',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'plugin:storybook/recommended',
      'plugin:ate/all',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'jsx-a11y/accessible-emoji': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'jsx-a11y/anchor-is-valid': [
          'error',
          {
              components: ['Link'],
              specialLink: ['hrefLeft', 'hrefRight'],
              aspects: ['invalidHref', 'preferButton'],
          },
      ],
  },
};
