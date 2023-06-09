<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:40:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 11:06:00
 * @FilePath: /low-code-js/src/components/formDesign/radio/Radio.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-radio-group v-else v-model="comData.defaultValue" :direction="comData.direction" :disabled="comData.state === 'F'">
        <a-radio v-for="item in comData.diyList" :value="item.value">{{item.label}}</a-radio>
      </a-radio-group>
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

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>