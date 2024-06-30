module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 0,
    'quotes': [1, 'single',{'avoidEscape': true}], //引号类型
    'object-curly-spacing': [1, "always", { "objectsInObjects": false }],
    '@typescript-eslint/camelcase': 0, // 关闭驼峰效验
  }
}
