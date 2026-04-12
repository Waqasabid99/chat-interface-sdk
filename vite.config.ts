import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'  // ADD THIS
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),  // ADD THIS - must be before dts()
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.build.json' })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ChatInterfaceSDK',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})