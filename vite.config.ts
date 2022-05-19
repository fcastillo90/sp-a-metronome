import { defineConfig, loadEnv } from 'vite'
const path = require('path')
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode}) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())}

  const envWithProcessPrefix = Object.keys(env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(env[key])
    return acc
  }, {})

  return defineConfig({
    define: envWithProcessPrefix,
    plugins: [react()],
    resolve:{
      alias:{
        '@' : path.resolve(__dirname, './src')
      },
    },
  })
}