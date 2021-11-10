module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Parser that checks the content of the <script> tag
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      // typescirpt: {
      //   project: './tsconfig.json',
      // },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      // vite: {
      //   config: 'vite.config.js',
      // },
    },
  },
  rules: {
    'prettier/prettier': 1,
    'import/no-extraneous-dependencies': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
  },
};
