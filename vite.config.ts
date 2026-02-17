import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isLocalDev = mode === 'development'

  return {
    plugins: [react()],

    server: isLocalDev
      ? {
          https: {
            key: fs.readFileSync(
              path.resolve(__dirname, '../.cert/localhost.key')
            ),
            cert: fs.readFileSync(
              path.resolve(__dirname, '../.cert/localhost.pem')
            ),
          },
          port: 5173,
        }
      : undefined,
  }
})

