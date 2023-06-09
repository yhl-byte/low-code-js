/*
 * @Author: yhl
 * @Date: 2022-09-30 15:23:33
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:58:17
 * @FilePath: /low-code-js/src/store/base.js
 */
import { defineStore } from 'pinia'

export default defineStore('base', {
  state() {
    return {
      counter: 1 ,
      userList: []
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    // 返回类型必须明确设置
    doublePlusOne() {
      return this.counter * 2 + 1
    },
    getUserById: (state) => {
      return (userId) => state.userList.find((user) => user.id === userId)
    }
  },
  actions: {
    getRandomId () {
      return URL.createObjectURL(new Blob()).substr(-36)
    },
    getList() {
      // 模拟从后端获取数据
      let resList = [
        { name: "李雷", id: '1' },
        { name: "韩梅梅", id: '2' }
      ];
      this.userList = resList;
    }
  }
})