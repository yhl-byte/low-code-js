<!--
 * @Author: yhl
 * @Date: 2022-10-21 10:39:37
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 14:14:10
 * @FilePath: /low-code-js/src/components/formDesign/upload/Upload.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <template v-else>
        <a-upload action="/" :disabled="comData.state === 'F'" :draggable="comData.uploadType === 'drag'" :multiple="comData.multiple" :limit="comData.limit" :accept="comData.fileTypes" />
      </template>
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
const isHidden = computed(() => !(prop.comData.state === 'H' && !prop.isDesign))

</script>
<style lang="less" scoped>
.hidden {
  opacity: .5;
}
</style>