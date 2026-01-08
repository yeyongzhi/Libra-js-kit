import { isDefined, defaultValue } from '../lib/index';
import { isNumber, isString, toString } from '../dataType/index';
import { FILE_SIZE_UNITS, getEmptyText, getTimeRangeSeparator } from './config';

export function renderText(value: any): string {
  return isDefined(value) ? toString(value) : getEmptyText();
}

/**
 * 渲染对象的属性值
 * @param {Record<string, any>} obj 对象
 * @param {string} key 属性名
 * @returns {string} 属性值
 */
export function renderObjectValue(obj: Record<string, any>, key: string): string {
  if (!isDefined(obj)) {
    return getEmptyText();
  }
  if (!isString(key)) {
    return getEmptyText();
  }
  return defaultValue(toString(obj[key]), getEmptyText());
}

type RenderTextByArrayParams = {
  separator?: string
}
export function renderTextByArray(items: string[], { separator = '、'}: RenderTextByArrayParams): string {
  if (!isDefined(items)) {
    return getEmptyText();
  }
  if (!Array.isArray(items) || items.length === 0) {
    return getEmptyText();
  }
  return items.filter((item) => isDefined(item)).join(separator);
}

type renderValueAndUnitParams = {
  needBlock?: boolean
}
/**
 * 渲染值和单位
 * @param value 值
 * @param unit 单位
 * @param {renderValueAndUnitParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderValueAndUnit(value: any, unit: any, { needBlock = true }: renderValueAndUnitParams): string {
  if (!isDefined(value)) {
    return getEmptyText()
  }
  return `${toString(value)}${needBlock ? ' ' : ''}${defaultValue(unit, '')}`
}

type renderTimeRangeParams = {
  separator?: string
}
/**
 * 渲染时间范围
 * @param {number} startTime 开始时间
 * @param {number} endTime 结束时间
 * @param {renderTimeRangeParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderTimeRange(startTime: number, endTime: number, { separator = getTimeRangeSeparator() }: renderTimeRangeParams): string {
  if (!isDefined(startTime) || !isDefined(endTime)) {
    return getEmptyText();
  }
  return `${toString(startTime)}${separator}${toString(endTime)}`
}

type ArrayOption = Record<string, any> & { value: string, label: string }

/**
 * 渲染数组中指定值的标签
 * @param {any} value 数组中的值
 * @param {Array<ArrayOption>} options 数组选项，每个选项包含 value 和 label 属性
 * @returns {string} 匹配值的标签，或空字符串
 */
export function renderArrayLabelByValue(value: any, options: Array<ArrayOption>): string {
  if (!isDefined(value) || !isDefined(options)) {
    return getEmptyText();
  }
  const target = options.find((item) => item.value === value)
  return isDefined<ArrayOption>(target) ? target.label : getEmptyText();
}

type RenderPercentageParams = {
  precision?: number
}
/**
 * 渲染百分比
 * @param {number} value 数值
 * @param {RenderPercentageParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderPercentage(value: number, { precision = 2 }: RenderPercentageParams = {}): string {
  if (!isDefined(value) || (isDefined(value) && !isNumber(value))) return getEmptyText();
  return `${(Number(value) * 100).toFixed(precision)}%`;
}
type RenderFileSizeParams = {
  precision?: number
}
/**
 * 渲染文件大小
 * @param {number} bytes 文件大小（字节）
 * @param {RenderFileSizeParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderFileSize(bytes: number, { precision = 1 }: RenderFileSizeParams = {}): string {
  if (!isDefined(bytes) || typeof bytes !== 'number' || bytes < 0) return getEmptyText();
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < FILE_SIZE_UNITS.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(precision)} ${FILE_SIZE_UNITS[unitIndex]}`;
}

type RenderBooleanParams = {
  trueText?: string
  falseText?: string
}
/**
 * 渲染布尔值
 * @param {boolean} value 布尔值
 * @param {RenderBooleanParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderBoolean(value: boolean, { trueText = '是', falseText = '否' }: RenderBooleanParams = {}): string {
  if (!isDefined(value)) return getEmptyText();
  return value ? trueText : falseText;
}