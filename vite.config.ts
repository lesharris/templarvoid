import { defineConfig } from 'vite-plus'
import { voidPlugin } from 'void'
import { voidVue } from '@void/vue/plugin'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    jsxSingleQuote: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    semi: false,
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [voidPlugin(), voidVue()],
})
