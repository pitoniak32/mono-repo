import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reportsDirectory: 'coverage',
    },
  },
})
