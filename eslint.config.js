import js from "@eslint/js";
import globals from "globals"; // globalsライブラリを直接使うのが一般的です

export default [
  // 1. ESLintの推奨ルールを適用
  js.configs.recommended,

  // 2. 個別のプロジェクト設定
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        // もし ./globals.js という自作ファイルを使いたい場合はそちらをスプレッドしてください
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      // セミコロンの強制など、お好みのルールを追加
      semi: ["error", "always"],
    },
  },

  // 3. 全体で無視するファイル（以前の .eslintignore の役割）
  {
    ignores: ["node_modules/", "dist/"],
  },
];
