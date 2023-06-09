/*
 * @Author: yhl
 * @Date: 2023-05-18 20:15:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:05:21
 * @FilePath: /low-code-js/src/main.js
 */
import { createApp } from 'vue'
import './style/index.css'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.use(createPinia())

app.mount('#app')
