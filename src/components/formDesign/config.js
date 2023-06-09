/*
 * @Author: yhl
 * @Date: 2022-10-10 10:13:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 18:24:57
 * @FilePath: /low-code-js/src/components/formDesign/config.js
 */
import { defineAsyncComponent } from 'vue'

// 动态获取所有表单定义
const modules_js = import.meta.glob('./*/*.js', { eager: true })
export let componentData = []
for (const path in modules_js) {
  const mod = modules_js[path]
  componentData.push(new mod.default())
  componentData = componentData.sort((a, b) => {
    return a.sort - b.sort
  })
}

// 动态获取异步组件集合--表单组件
const modules_vue = import.meta.glob('./*/*.vue', { eager: true })
export let formDesignCom = {}
for (const path in modules_vue) {
  const key = path.replace(/(.*\/)*([^.]+).vue/ig, "$2")
  formDesignCom[key] = defineAsyncComponent(() => 
    import(/* @vite-ignore */path)
  )
}
