<!--
 * @Author: yhl
 * @Date: 2022-10-21 10:39:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 14:13:36
 * @FilePath: /low-code-js/src/components/formDesign/datePicker/DatePicker.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <template v-else>
        <a-date-picker v-if="whichMode('YYYY')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" show-time :format="comData.pickMode" :disabledDate="disabledDate()" />
        <a-date-picker v-if="whichMode('date')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" :disabledDate="disabledDate()" />
        <a-month-picker v-if="whichMode('month')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" />
        <a-year-picker v-if="whichMode('year')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" />
        <a-quarter-picker v-if="whichMode('quarter')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" />
        <a-week-picker v-if="whichMode('week')" v-model="comData.defaultValue" :placeholder="comData.placeholder" :disabled="comData.state === 'F'" :allow-clear="comData.clearable" />
      </template>
    </section>
    <template #extra v-if="isHidden" >
      <div>{{comData.desc}}</div>
    </template>
  </a-form-item>
</template>
<script setup lang="js">
import { computed } from 'vue'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

const prop = defineProps(['isDesign', 'comData'])

// 判断是否隐藏状态
const isHidden = computed(() => !(prop.comData.state === 'H' && !prop.isDesign))

// 判断当前展示哪个组件
const whichMode = (mode) => prop.comData.pickMode.indexOf(mode) > -1

// 限制时间方案
const disabledDate = () => {
  let reslut = null
  switch (prop.comData.pickLimit) {
    case 'afterToday': 
      reslut = (current) => dayjs(current).isAfter(dayjs())
      break
    case 'beforeToday':
      reslut = (current) => dayjs(current).isBefore(dayjs())
      break
    case 'rang':
      reslut = (current) => dayjs(current).isBetween(dayjs(prop.comData.disableRang[0]), dayjs(prop.comData.disableRang[1]))
      break
    default :
      reslut = null
  }
  return reslut
}

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>