<!--
 * @Author: yhl
 * @Date: 2023-06-06 14:18:29
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-07 14:50:44
 * @FilePath: /low-code-js/src/views/login/index.vue
-->
<template>
  <div class="login_bg">
    <video class="video-background" src="@/assets/images/login_bg.mp4" preload="auto" loop playsinline autoplay tabindex="-1" muted="muted"></video>
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_form">
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" placeholder="手机号码/邮箱/账号" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="密码" show-password />
      </el-form-item>
      <el-form-item style="margin-bottom: 0;">
        <el-button type="primary" style="width: 100%;" @click="submitForm(loginFormRef)">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
  import { reactive, ref } from 'vue'
  const loginFormRef = ref()
  const loginForm = reactive({
    name: '',
    password: ''
  })
  const rules = reactive({
    name: [
      { required: true, message: '请输入账号', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]
  })
  const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>
<style lang="less" scoped>
.login_bg {
  width: 100%;
  height: 100%;
  position: relative;
  // z-index: -1;

  .video-background {
    position: absolute;
    left: 50%;
    top: 50%;
    /*保证视频内容始终居中*/
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 800px;
  }
}
.login_form {
  width: 400px;
  // height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .6);
  padding: 24px;
  border-radius: 6px;
}
</style>