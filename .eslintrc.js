module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // vue2 规则
    // 'plugin:vue/essential'

    // vue3规则
    'plugin:vue/vue3-strongly-recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 对象最后一行
    'comma-dangle': 0,
  },
}
