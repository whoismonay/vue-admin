module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard', // 标准配置
    'stylelint-config-recess-order', // css排序配置
    'stylelint-config-standard-vue' // vue配置
  ],
  customSyntax: 'postcss-html',
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: '类名应该遵循BEM语法: block__element--modifier'
      }
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
