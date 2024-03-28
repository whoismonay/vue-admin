module.exports = {
  // 当前文件所在目录既是根目录，不再向上寻找目录。
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['*.d.ts'],
  rules: {
    // 关闭vue的多个单词组件名的校验
    'vue/multi-word-component-names': 'off'
  }
}
