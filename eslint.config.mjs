import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

// 1. Asigna la configuración a una variable:
const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn', // Cambiar de error a advertencia
      '@typescript-eslint/no-explicit-any': 'warn'  // Cambiar de error a advertencia
    }
  },
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
]

// 2. Exporta la variable por defecto:
export default config