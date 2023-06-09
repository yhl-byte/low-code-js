<!--
 * @Author: yhl
 * @Date: 2022-10-19 15:41:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 11:06:06
 * @FilePath: /low-code-js/src/components/formDesign/number/Number.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-input-number v-else v-model="comData.defaultValue" :placeholder="comData.placeholder" :allow-clear="comData.clearable" :step="comData.step" :hide-button="comData.hideButton" :precision="comData.precision" :formatter="formatter" :parser="parser" :disabled="comData.state === 'F'" />
    </section>
    <template #extra v-if="isHidden" >
      <div>{{comData.desc}}</div>
    </template>
  </a-form-item>
</template>
<script setup lang="js">
import { computed } from 'vue'

const prop = defineProps(['isDesign', 'comData'])

// 判断是否隐藏状态
const isHidden = computed(() => !(prop.comData.state === 'H' && !isDesign))

// 数值格式化
const formatter = (value) => {
  const reslut = value.split('.');
  reslut[0]=reslut[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return comData.thousandSeparator ? reslut.join('.') : value
}

const parser = (value) => {
  return value.replace(/,/g, '')
}


</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>