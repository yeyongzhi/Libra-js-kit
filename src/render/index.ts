import { isDefined, defaultValue } from '../lib/index';
import { isNumber, isString, isArray, toString } from '../dataType/index';
import { FILE_SIZE_UNITS, getEmptyText, getTimeRangeSeparator } from './config';

/**
 * 渲染文本值
 * 对于一些序列化的数据，请自行使用JSON.stringify方法
 * @param {unknown} value 任意值
 * @returns {string} 渲染后的字符串
 */
export function renderText(value: unknown): string {
  return isDefined(value) ? String(value) : getEmptyText();
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

export type RenderTextByArrayParams = {
  separator?: string
}
export function renderTextByArray(items: string[], { separator = '、' }: RenderTextByArrayParams = {}): string {
  if (!isDefined(items)) {
    return getEmptyText();
  }
  if (!Array.isArray(items) || items.length === 0) {
    return getEmptyText();
  }
  return items.filter((item) => isDefined(item)).join(separator);
}

export type renderValueAndUnitParams = {
  needBlock?: boolean
}
/**
 * 渲染值和单位
 * @param value 值
 * @param unit 单位
 * @param {renderValueAndUnitParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderValueAndUnit(value: string | number, unit: string, { needBlock = true }: renderValueAndUnitParams): string {
  if (!isDefined(value)) {
    return getEmptyText()
  }
  return `${toString(value)}${needBlock ? ' ' : ''}${defaultValue(unit, '')}`
}

export type renderTimeRangeParams = {
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

export type ArrayOption = Record<string, any> & { value: string | number | symbol, label: string }

/**
 * 渲染数组中指定值的标签
 * @example
 * renderArrayLabelByValue('bj', [{ value: 'zj', label: '浙江省' }, { value: 'bj', label: '北京市' }, { value: 'sh', label: '上海市' }])
 * @param {any} value 值
 * @param {Array<ArrayOption>} options 数组选项，每个选项包含 value 和 label 属性
 * @returns {string} 匹配值的标签，或空字符串
 */
export function renderArrayLabelByValue(value: string | number | symbol, options: Array<ArrayOption>): string {
  if (!isDefined(value) || !isDefined(options)) {
    return getEmptyText();
  }
  if (isArray(value) && value.length === 0) {
    return getEmptyText();
  }
  if (isArray(value)) {
    return renderTextByArray(value.map((item) => renderArrayLabelByValue(item, options)))
  }
  const target = options.find((item) => item.value === value)
  return isDefined<ArrayOption>(target) ? target.label : getEmptyText();
}

export type RenderPercentageParams = {
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

export type RenderFileSizeParams = {
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

export type RenderBooleanParams = {
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

/**
 * 渲染枚举值（基于映射对象）和上面的renderObjectValue类似
 * @example
 * renderEnum(status, { 0: '待处理', 1: '已完成' })
 * @param {string | number} value 枚举值
 * @param {Record<string | number, string>} mapping 映射对象，键为枚举值，值为对应的标签
 * @returns 渲染后的字符串
 */
export function renderEnum(value: string | number, mapping: Record<string | number, string>): string {
  if (!isDefined(value) || !isDefined(mapping)) return getEmptyText();
  return defaultValue(mapping[value], getEmptyText());
}

export function renderEmpty(value: unknown, placeholder = getEmptyText()): string {
  return isDefined(value) ? toString(value) : placeholder;
}

export type RenderMaskedStringParams = {
  /**
   * 隐藏前 N 个字符
   * 与 hideLast 互斥，若同时传入，优先使用 hideFirst
   */
  hideFirst?: number;

  /**
   * 隐藏后 N 个字符
   * 仅在未设置 hideFirst 时生效
   */
  hideLast?: number;

  /**
   * 隐藏中间的字符数量（从中间开始隐藏）
   * 若 hideFirst / hideLast 未设置，则默认使用此模式（如 hideMiddle: 4）
   */
  hideMiddle?: number;

  /**
   * 自定义掩码字符，默认为 '*'
   */
  maskChar?: string;

  /**
   * 是否保留原始字符串中的所有字符（包括空格、符号等）
   * 默认 true；若设为 false，会先过滤掉非字母数字字符（类似手机号清理）
   */
  keepFormat?: boolean;
};

/**
 * 通用字符串脱敏渲染器
 * 支持隐藏前/后/中间部分，适用于手机号、身份证、银行卡、邮箱等
 * @param {unknown} value 任意值（会被转为字符串）
 * @param {RenderMaskedStringParams} params 脱敏配置
 * @returns {string} 脱敏后的字符串
 */
export function renderMaskedString(
  value: unknown,
  {
    hideFirst,
    hideLast,
    hideMiddle,
    maskChar = '*',
    keepFormat = true
  }: RenderMaskedStringParams = {}
): string {
  // 1. 空值处理
  if (!isDefined(value)) {
    return getEmptyText();
  }

  // 2. 转为字符串
  let str = String(value);

  // 3. 可选：清理非字母数字字符（类似手机号预处理）
  if (!keepFormat) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
  }

  // 4. 空字符串或过短
  if (str.length === 0) {
    return getEmptyText();
  }

  const len = str.length;
  let prefix = '';
  let suffix = '';
  let maskLength = 0;

  if (isDefined<number>(hideFirst) && hideFirst > 0) {
    // 隐藏前 N 位
    maskLength = Math.min(hideFirst, len);
    suffix = str.slice(maskLength);
  } else if (isDefined<number>(hideLast) && hideLast > 0) {
    // 隐藏后 N 位
    maskLength = Math.min(hideLast, len);
    prefix = str.slice(0, len - maskLength);
  } else {
    // 默认：隐藏中间部分
    const middleCount = isDefined<number>(hideMiddle) ? hideMiddle : 4; // 默认隐藏 4 位
    maskLength = Math.min(middleCount, len);
    const visibleCount = len - maskLength;
    const startVisible = Math.floor(visibleCount / 2);
    const endVisible = visibleCount - startVisible;

    prefix = str.slice(0, startVisible);
    suffix = str.slice(len - endVisible);
  }

  const mask = maskChar.repeat(maskLength);
  return `${prefix}${mask}${suffix}`;
}

export type RenderTruncatedTextParams = {
  maxLength?: number
  ellipsis?: string // 默认 '...'
}
/**
 * 渲染截断文本（超出最大长度时添加省略号）
 * @example
 * renderTruncatedText('这是一段很长的描述...', { maxLength: 10 }) → "这是一段很..."
 * @param text 任意值（会被转为字符串）
 * @param {RenderTruncatedTextParams} params 配置项
 * @returns {string} 截断后的字符串
 */
export function renderTruncatedText(text: unknown, params: RenderTruncatedTextParams = {}): string {
  const { maxLength = 10, ellipsis = '...' } = params;
  const str = isDefined(text) ? String(text) : '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + ellipsis;
}

export type RenderListSummaryParams = {
  maxCount?: number // 最多显示前 N 个名字
  suffix?: string  // 如 '等'
}
/**
 * 渲染列表摘要（最多显示前 N 个项，超出部分用 '等x项' 表示）
 * @example
 * renderListSummary(['张三', '李四', '王五']) → "张三、李四等1项"
 * renderListSummary(['A']) → "A"
 * @param {string[]} items 字符串数组
 * @param {RenderListSummaryParams} params 配置项
 * @returns {string} 渲染后的字符串
 */
export function renderListSummary(items: string[], params: RenderListSummaryParams = {}): string {
  const { maxCount = 2, suffix = '项' } = params;
  if (!isDefined(items) || (Array.isArray(items) && items.length === 0)) {
    return getEmptyText();
  }
  if (items.length <= maxCount) {
    return renderTextByArray(items, { separator: '、' });
  }
  const shown = items.slice(0, maxCount).filter(isDefined);
  return `${shown.join('、')}等${items.length - shown.length}${suffix}`;
}