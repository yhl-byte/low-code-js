<!--
 * @Author: yhl
 * @Date: 2022-10-10 14:08:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-09 14:14:07
 * @FilePath: /low-code-js/src/components/formDesign/textarea/Textarea.vue
-->
<template>
  <a-form-item field="name" :label="comData.title">
    <section v-if="isHidden" :class="{'hidden': comData.state === 'H'}">
      <div v-if="comData.state === 'R'">{{comData.defaultValue || '--' }}</div>
      <a-textarea v-else v-model="comData.defaultValue" :placeholder="comData.placeholder" :allow-clear="comData.clearable" :show-word-limit="comData.showlimit" :max-length="comData.maxLength" :disabled="comData.state === 'F'" :auto-size="comData.maxRows ? {minRows: comData.maxRows, maxRows: comData.maxRows } : comData.autoSize" />
    </section>
    <template #extra v-if="isHidden">
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