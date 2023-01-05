module.exports = {
  root: true,
  extends: ['@react-native', 'lion/react-native'],
  plugins: ['@emotion'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'off',
  },
};
