// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-debugger': 'off',
      'indent': ['error', 2], // Отступы в 2 пробела
      'quotes': ['error', 'single'], // Одинарные кавычки
      'semi': ['error', 'always'], // Точки с запятой обязательны
      'no-trailing-spaces': 'error', // Запрет пробелов в конце строк
      'eol-last': 'error', // Пустая строка в конце файла
      'comma-dangle': ['error', 'never'], // Запрет висячих запятых
      'object-curly-spacing': ['error', 'always'], // Пробелы внутри фигурных скобок
      'array-bracket-spacing': ['error', 'never'], // Запрет пробелов внутри квадратных скобок
      'space-in-parens': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'], // Пробелы в вычисляемых свойствах
      'comma-spacing': ['error', { 'before': false, 'after': true }], // Пробелы вокруг запятых
      'keyword-spacing': ['error', { 'before': true, 'after': true }], // Пробелы вокруг ключевых слов
      'space-before-function-paren': ['error', 'never'], // Запрет пробела перед function()
      'space-before-blocks': ['error', 'always'], // Пробел перед блоком
      'no-multi-spaces': 'error', // Запрет множественных пробелов
    },
  },
];
