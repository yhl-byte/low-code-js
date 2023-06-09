/*
 * @Author: yhl
 * @Date: 2022-10-10 14:09:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:41:31
 * @FilePath: /low-code-js/src/components/formDesign/textarea/Textarea.js
 */
class Textarea {
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
  // defaultValue: string|number|null; // 默认值
  // isRequired: boolean; // 是否必填
  // showlimit: boolean; // 是否显示字数统计
  // maxLength: number; // 最大输入长度
  // autoSize: boolean | undefined; //文本域高度自适应
  // maxRows: number; // 文本域最大高度
  constructor () {
    this.type = 'Textarea'
    this.icon = 'icon-robot-add'
    this.label = '多行文本'
    this.sort = 2
    this.group = 'base'
    this.title = '多行文本'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.placeholder = '请输入'
    this.defaultValue = ''
    this.isRequired = false
    this.showlimit = false
    this.maxLength = 100
    this.autoSize = false
    this.maxRows = 3
  }
}



export default Textarea