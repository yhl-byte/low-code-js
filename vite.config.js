/*
 * @Author: yhl
 * @Date: 2023-05-18 20:15:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-06 14:14:02
 * @FilePath: /low-code-js/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  }
})

