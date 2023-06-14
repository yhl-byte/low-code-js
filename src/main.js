/*
 * @Author: yhl
 * @Date: 2023-05-18 20:15:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 14:51:11
 * @FilePath: /low-code-js/src/main.js
 */
import { createApp } from 'vue'
import './style/index.css'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import TDesign from 'tdesign-mobile-vue'

const app = createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(TDesign)
app.use(router)
app.use(createPinia())

app.mount('#app')
