const path = require("path");

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  // parserOptions: {
    // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module', // Allows for the use of imports
    // ecmaFeatures: {
      // jsx: true, // Allows for the parsing of JSX
    // },
  // },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'always',
      },
    ],
  },
};
