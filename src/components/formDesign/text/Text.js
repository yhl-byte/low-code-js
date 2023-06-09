/*
 * @Author: yhl
 * @Date: 2022-10-09 17:34:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:43:09
 * @FilePath: /low-code-js/src/components/formDesign/text/Text.js
 */

class Text {
  // type: string; // 组件类型
  // icon: string; // 组件展示ICON
  // label: string; // 组件名称
  // sort: number; // 组件排序
  // group: string; // 组件分组
  // /** 组件的可配置属性 */
  // title: string; // 组件在表单中的标题
  // itemId: string; // 该组件的唯一ID，在添加之后生成
  // alias: string; // 组件的别名，用于第三方调用获取对应组件信息
  // desc: string; // 组件描述，显示在组件下方
  // state: string; // 组件状态（N - 常规； R - 只读； H - 隐藏； F - 禁用）
  // placeholder: string; // 输入提示信息
  // clearable: boolean; // 是否可清空
  // filterable: boolean; // 是否可搜索
  // defaultValue: string|number|null; // 默认值
  // isRequired: boolean; // 是否必填
  // showlimit: boolean; // 是否显示字数统计
  // maxLength: number // 最大输入长度
  constructor () {
    this.type = 'Text'
    this.icon = 'icon-robot'
    this.label = '单行文本'
    this.sort = 1
    this.group = 'base'
    this.title = '单行文本'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.placeholder = '请输入'
    this.clearable = false
    this.filterable = false
    this.defaultValue = ''
    this.isRequired = false
    this.showlimit = false
    this.maxLength = 100
  }
}



export default Text