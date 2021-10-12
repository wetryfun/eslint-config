module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "semi": true,
        "endOfLine": "auto"
      }
    ],
  }
}