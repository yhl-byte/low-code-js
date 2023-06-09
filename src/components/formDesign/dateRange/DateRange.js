/*
 * @Author: yhl
 * @Date: 2022-10-21 14:57:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 17:51:18
 * @FilePath: /low-code-js/src/components/formDesign/dateRange/DateRange.js
 */
class DateRange {
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
  // defaultValue: any; // 默认值
  // isRequired: boolean; // 是否必填
  // clearable: boolean; // 是否可清空
  // rangeMode: "year" | "month" | "date" | "week" | "quarter" | undefined; // 日期区间选择格式 
  // pickLimit: string; // 日期选择限制条件
  // disableRang: Array<any>; // 日期选择禁选区间
  // pickMode: "year" | "month" | "date" | "week" | "quarter" | 'YYYY-MM-DD hh:mm' | 'YYYY-MM-DD HH:mm:ss'; 
  constructor () {
    this.type = 'DateRange'
    this.icon = 'icon-robot'
    this.label = '日期区间'
    this.sort = 9
    this.group = 'base'
    this.title = '日期区间'
    this.itemId = ''
    this.alias = ''
    this.desc = ''
    this.state = 'N'
    this.defaultValue = undefined
    this.isRequired = false
    this.clearable = false
    this.rangeMode = 'date'
    this.pickMode = 'date'
    this.pickLimit = 'none'
    this.disableRang = []
  }
}

export default DateRange