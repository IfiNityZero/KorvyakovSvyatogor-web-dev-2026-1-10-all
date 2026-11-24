import js from "@eslint/js";
import globals from "globals";

// Скрипты подключаются на страницы обычными тегами <script> и делят одну
// глобальную область видимости, поэтому переменные из одних файлов
// используются в других. Проверку no-undef для этого проекта отключаем.
export default [
  {
    ignores: ["node_modules/**", "lab10/bootstrap/**", "lab10/bootstrap-icons/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "no-undef": "off",
      "no-redeclare": "off",
      "no-unused-vars": ["error", { vars: "local", args: "none", caughtErrors: "none" }],
      "no-console": "off",
      "indent": ["error", 4],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "always"]
    }
  }
];
