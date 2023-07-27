/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

// module.exports = {

//   rules: {
//     // 'no-console': 'error',
//     "@typescript-eslint/no-unused-vars": [
//       "error",
//       {
//         args: "all",
//         argsIgnorePattern: "^_",
//         varsIgnorePattern: "^_",
//         ignoreRestSiblings: true,
//       },
//     ],

//     // "@typescript-eslint/no-unused-vars" has his own rule
//     "no-unused-vars": ["off"],
//     // "@typescript-eslint/no-undef" has his own rule
//     "no-undef": "off",
//     "@typescript-eslint/no-dupe-class-members": ["error"],
//     "@typescript-eslint/no-useless-constructor": ["error"],
//     "@typescript-eslint/no-inferrable-types": ["off"],
//     "react-hooks/rules-of-hooks": "off",
//     "react/no-unescaped-entities": "off",
//     "tailwindcss/no-custom-classname": "off",
//     "max-lines": ["error", { max: 500, skipComments: true }],
//     "react/react-in-jsx-scope": "off",
//   },
// }
