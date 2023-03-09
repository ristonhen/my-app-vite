# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).




----------------------
Installation commands that I paste in:

Create Vite App
npm init @vitejs/app project-name

Install Tailwind + dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

Install ESLint + Prettier
npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier

Install Vue Router
npm install vue-router@4

Install Vuex
npm install vuex@next --save

.eslintrc.js:
module.exports = {
extends: [
  'plugin:vue/vue3-essential',
  'prettier',
],
rules: {
  // override/add rules settings here, such as:
  'vue/no-unused-vars': 'error',
},
}

.prettierrc.js:
module.exports = {
    semi: false,
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    endOfLine: 'auto',
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
  }
--------------