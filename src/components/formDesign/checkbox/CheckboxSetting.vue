<!--
 * @Author: yhl
 * @Date: 2022-10-19 17:20:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:54:48
 * @FilePath: /low-code-js/src/components/formDesign/checkbox/CheckboxSetting.vue
-->
<template>
  <a-form :model="form" label-align="left" auto-label-width>
    <div class="gapStyle">{{form.label}} - 基础配置</div>
    <a-form-item field="name" label="标题">
      <a-input v-model="form.title" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="别名">
      <a-input v-model="form.alias" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="描述信息">
      <a-input v-model="form.desc" placeholder="请输入" allow-clear />
    </a-form-item>
    <a-form-item field="post" label="状态">
      <a-radio-group v-model="form.state" class="stateStyle" type="button" size="small">
        <a-radio value="N">普通</a-radio>
        <a-radio value="F">禁用</a-radio>
        <a-radio value="R">只读</a-radio>
        <a-radio value="H">隐藏</a-radio>
      </a-radio-group>
    </a-form-item>
    <!-- <a-form-item field="name" label="默认值">
      <a-input v-model="form.defaultValue" placeholder="请输入" allow-clear />
    </a-form-item> -->
    <a-form-item field="post" label="排列方式">
      <a-radio-group v-model="form.direction" class="stateStyle" type="button" size="small">
        <a-radio value="horizontal">水平排列</a-radio>
        <a-radio value="vertical">垂直排列</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item field="name" label="多选数量">
      <a-input-number v-model="form.max" placeholder="请输入" class="input-demo" />
    </a-form-item>
    <div class="gapStyle">自定义选项</div>
    <section style="padding: 0 16px 12px;">
      <a-checkbox-group v-model="form.defaultValue" style="width:100%;">
        <a-list size="small" style="margin-bottom: 12px;">
          <a-list-item v-for="(item, i) in form.diyList">
            <div>
              <a-checkbox :value="item.value" />
              <span>{{item.label}}</span>
            </div>
            <template #actions>
              <a-popover position="left" trigger="click">
                <icon-edit />
                <template #content>
                  <ul class="editStyle">
                    <li>
                      <div class="title">选项名</div>
                      <a-input v-model="item.label" placeholder="请输入" allow-clear />
                    </li>
                    <li>
                      <div class="title">选项值</div>
                      <a-input v-model="item.value" placeholder="请输入" allow-clear />
                    </li>
                    <li>
                      <a-switch :default-checked="form.defaultValue.includes(item.value)" @change="(val) => changeDefault(val, i)" />
                    </li>
                  </ul>
                </template>
              </a-popover>
              <a-popconfirm content="Are you sure you want to delete?" @ok="delData(i)">
                <icon-delete />
              </a-popconfirm>
            </template>
          </a-list-item>
        </a-list>
      </a-checkbox-group>
      <a-button type="primary" @click="addData()">添加一项</a-button>
    </section>
    <div class="gapStyle">校验</div>
    <a-form-item field="isRead" label="必填" class="rightCom">
      <a-checkbox />
    </a-form-item>
  </a-form>
</template>

<script setup lang="js">
import { inject, ref } from 'vue'
import { nanoid } from 'nanoid'

const form = inject('currentData', ref({}))

// 删除自定义选项
const delData = (i) => {
  if (form.value.diyList) {
    // 若删除的选项为默认值，将默认值清空
    if (form.value.defaultValue.includes(form.value.diyList[i].value)) {
      let removeId = form.value.diyList[i].value
      let index = form.value.defaultValue.findIndex((item) => item === removeId)
      form.value.defaultValue.splice(index, 1)
    }
    form.value.diyList.splice(i, 1)
  }
}
// 添加自定义选项
const addData = () => {
  if (form.value.diyList) {
    form.value.diyList.push({
      value: nanoid(8),
      label: '未命名' + form.value.diyList.length,
      isDefault: false
    })
  }
}

// 通过开关切换默认值
const changeDefault = (value, i) => {
  if (form.value.diyList) {
    if (value) {
      form.value.defaultValue.push(form.value.diyList[i].value)
    } else {
      let removeId = form.value.diyList[i].value
      let index = form.value.defaultValue.findIndex((item) => item === removeId)
      form.value.defaultValue.splice(index, 1)
      form.value.diyList.splice(i, 1, Object.assign(form.value.diyList[i], {isDefault: false}))
    }
  }
}

</script>

<style lang="less" scoped>
@import "../../../style/FormDesign.less";
</style>