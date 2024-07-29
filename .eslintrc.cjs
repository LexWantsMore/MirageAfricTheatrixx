module.exports = {
  env: {
    node: true, // Enable Node.js global variables and Node.js scoping.
    browser: true, // Enable browser global variables.
    es2021: true, // Enable ES2021 syntax.
  },
  extends: [
    'eslint:recommended', // Use the set of rules recommended by ESLint.
    'plugin:react/recommended', // Use the set of rules recommended for React.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing.
    },
    ecmaVersion: 12, // Allow the parsing of modern ECMAScript features.
    sourceType: 'module', // Allow the use of imports.
  },
  plugins: [
    'react',
  ],
  rules: {
    // Customize your rules here.
  },
};
