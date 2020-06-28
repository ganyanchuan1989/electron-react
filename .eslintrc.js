module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'standard',
  globals: {
    __static: true,
  },
  plugins: ['html', 'react'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'comma-dangle': ['error', 'always-multiline'],
    'standard/no-callback-literal': 0,
    'import/first':0,

  },
}
