/**
 * Date 工具函数库
 * 基于原生 Date 实现，参考 dayjs 功能
 */

/**
 * 获取当前时间
 * @returns {Date} 当前时间的 Date 对象
 */
export function now(): Date {
  return new Date();
}

/**
 * 获取当前时间戳（毫秒）
 * @returns {number} 当前时间戳
 */
export function timestamp(): number {
  return Date.now();
}

/**
 * 获取当前时间戳（秒）
 * @returns {number} 当前时间戳（秒）
 */
export function unix(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * 日期格式化
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {string} format 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
export function format(date: Date | string | number, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  const d = parse(date);
  if (isNaN(d.getTime())) {
    return '';
  }

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const milliseconds = d.getMilliseconds();

  return format
    .replace(/YYYY/g, String(year))
    .replace(/YY/g, String(year).slice(-2))
    .replace(/MM/g, String(month).padStart(2, '0'))
    .replace(/M/g, String(month))
    .replace(/DD/g, String(day).padStart(2, '0'))
    .replace(/D/g, String(day))
    .replace(/HH/g, String(hours).padStart(2, '0'))
    .replace(/H/g, String(hours))
    .replace(/hh/g, String(hours % 12 || 12).padStart(2, '0'))
    .replace(/h/g, String(hours % 12 || 12))
    .replace(/mm/g, String(minutes).padStart(2, '0'))
    .replace(/m/g, String(minutes))
    .replace(/ss/g, String(seconds).padStart(2, '0'))
    .replace(/s/g, String(seconds))
    .replace(/SSS/g, String(milliseconds).padStart(3, '0'))
    .replace(/A/g, hours >= 12 ? 'PM' : 'AM')
    .replace(/a/g, hours >= 12 ? 'pm' : 'am');
}

/**
 * 解析日期字符串或时间戳为 Date 对象
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {Date} Date 对象
 */
export function parse(date: Date | string | number): Date {
  if (date instanceof Date) {
    return new Date(date.getTime());
  }
  if (typeof date === 'number') {
    return new Date(date);
  }
  if (typeof date === 'string') {
    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) {
      // 尝试其他格式解析
      const timestamp = Date.parse(date);
      return new Date(isNaN(timestamp) ? 0 : timestamp);
    }
    return parsed;
  }
  return new Date();
}

/**
 * 获取日期的年份
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 年份
 */
export function getYear(date: Date | string | number): number {
  return parse(date).getFullYear();
}

/**
 * 获取日期的月份（1-12）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 月份
 */
export function getMonth(date: Date | string | number): number {
  return parse(date).getMonth() + 1;
}

/**
 * 获取日期的日期（1-31）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 日期
 */
export function getDate(date: Date | string | number): number {
  return parse(date).getDate();
}

/**
 * 获取日期的小时（0-23）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 小时
 */
export function getHours(date: Date | string | number): number {
  return parse(date).getHours();
}

/**
 * 获取日期的分钟（0-59）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 分钟
 */
export function getMinutes(date: Date | string | number): number {
  return parse(date).getMinutes();
}

/**
 * 获取日期的秒数（0-59）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 秒数
 */
export function getSeconds(date: Date | string | number): number {
  return parse(date).getSeconds();
}

/**
 * 获取日期的毫秒数（0-999）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 毫秒数
 */
export function getMilliseconds(date: Date | string | number): number {
  return parse(date).getMilliseconds();
}

/**
 * 获取日期的星期几（0-6，0 表示星期日）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 星期几
 */
export function getDay(date: Date | string | number): number {
  return parse(date).getDay();
}

/**
 * 设置日期的年份
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} year 年份
 * @returns {Date} 修改后的 Date 对象
 */
export function setYear(date: Date | string | number, year: number): Date {
  const d = parse(date);
  d.setFullYear(year);
  return d;
}

/**
 * 设置日期的月份（1-12）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} month 月份
 * @returns {Date} 修改后的 Date 对象
 */
export function setMonth(date: Date | string | number, month: number): Date {
  const d = parse(date);
  d.setMonth(month - 1);
  return d;
}

/**
 * 设置日期的日期（1-31）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} day 日期
 * @returns {Date} 修改后的 Date 对象
 */
export function setDate(date: Date | string | number, day: number): Date {
  const d = parse(date);
  d.setDate(day);
  return d;
}

/**
 * 设置日期的小时（0-23）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} hours 小时
 * @returns {Date} 修改后的 Date 对象
 */
export function setHours(date: Date | string | number, hours: number): Date {
  const d = parse(date);
  d.setHours(hours);
  return d;
}

/**
 * 设置日期的分钟（0-59）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} minutes 分钟
 * @returns {Date} 修改后的 Date 对象
 */
export function setMinutes(date: Date | string | number, minutes: number): Date {
  const d = parse(date);
  d.setMinutes(minutes);
  return d;
}

/**
 * 设置日期的秒数（0-59）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} seconds 秒数
 * @returns {Date} 修改后的 Date 对象
 */
export function setSeconds(date: Date | string | number, seconds: number): Date {
  const d = parse(date);
  d.setSeconds(seconds);
  return d;
}

/**
 * 设置日期的毫秒数（0-999）
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} milliseconds 毫秒数
 * @returns {Date} 修改后的 Date 对象
 */
export function setMilliseconds(date: Date | string | number, milliseconds: number): Date {
  const d = parse(date);
  d.setMilliseconds(milliseconds);
  return d;
}

/**
 * 日期加法
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} amount 数量
 * @param {string} unit 单位：'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'
 * @returns {Date} 加法后的 Date 对象
 */
export function add(date: Date | string | number, amount: number, unit: string): Date {
  const d = parse(date);
  const units = {
    year: 'FullYear',
    month: 'Month',
    day: 'Date',
    hour: 'Hours',
    minute: 'Minutes',
    second: 'Seconds',
    millisecond: 'Milliseconds'
  };

  const method = `set${units[unit as keyof typeof units] || 'Date'}`;
  // @ts-ignore
  d[method](d[`get${units[unit as keyof typeof units] || 'Date'}`]() + amount);
  return d;
}

/**
 * 日期减法
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {number} amount 数量
 * @param {string} unit 单位：'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'
 * @returns {Date} 减法后的 Date 对象
 */
export function subtract(date: Date | string | number, amount: number, unit: string): Date {
  return add(date, -amount, unit);
}

/**
 * 比较两个日期是否相同
 * @param {Date | string | number} date1 第一个日期
 * @param {Date | string | number} date2 第二个日期
 * @returns {boolean} 是否相同
 */
export function isSame(date1: Date | string | number, date2: Date | string | number): boolean {
  return parse(date1).getTime() === parse(date2).getTime();
}

/**
 * 检查第一个日期是否在第二个日期之前
 * @param {Date | string | number} date1 第一个日期
 * @param {Date | string | number} date2 第二个日期
 * @returns {boolean} 是否在之前
 */
export function isBefore(date1: Date | string | number, date2: Date | string | number): boolean {
  return parse(date1).getTime() < parse(date2).getTime();
}

/**
 * 检查第一个日期是否在第二个日期之后
 * @param {Date | string | number} date1 第一个日期
 * @param {Date | string | number} date2 第二个日期
 * @returns {boolean} 是否在之后
 */
export function isAfter(date1: Date | string | number, date2: Date | string | number): boolean {
  return parse(date1).getTime() > parse(date2).getTime();
}

/**
 * 计算两个日期之间的差值
 * @param {Date | string | number} date1 第一个日期
 * @param {Date | string | number} date2 第二个日期
 * @param {string} unit 单位：'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'
 * @returns {number} 差值
 */
export function diff(date1: Date | string | number, date2: Date | string | number, unit: string = 'millisecond'): number {
  const d1 = parse(date1).getTime();
  const d2 = parse(date2).getTime();
  const diffMs = Math.abs(d1 - d2);

  switch (unit) {
    case 'year':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    case 'month':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
    case 'day':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    case 'hour':
      return Math.floor(diffMs / (1000 * 60 * 60));
    case 'minute':
      return Math.floor(diffMs / (1000 * 60));
    case 'second':
      return Math.floor(diffMs / 1000);
    case 'millisecond':
    default:
      return diffMs;
  }
}

/**
 * 检查是否为闰年
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {boolean} 是否为闰年
 */
export function isLeapYear(date: Date | string | number): boolean {
  const year = getYear(date);
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 检查两个日期是否为同一天
 * @param {Date | string | number} date1 第一个日期
 * @param {Date | string | number} date2 第二个日期
 * @returns {boolean} 是否为同一天
 */
export function isSameDay(date1: Date | string | number, date2: Date | string | number): boolean {
  const d1 = parse(date1);
  const d2 = parse(date2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

/**
 * 获取指定月份的天数
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {number} 月份天数
 */
export function getDaysInMonth(date: Date | string | number): number {
  const d = parse(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

/**
 * 获取星期几的名称
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {boolean} short 是否返回短名称
 * @returns {string} 星期几名称
 */
export function getDayName(date: Date | string | number, short: boolean = false): string {
  const day = getDay(date);
  const names = short
    ? ['日', '一', '二', '三', '四', '五', '六']
    : ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return names[day];
}

/**
 * 获取月份的名称
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @param {boolean} short 是否返回短名称
 * @returns {string} 月份名称
 */
export function getMonthName(date: Date | string | number, short: boolean = false): string {
  const month = getMonth(date) - 1;
  const names = short
    ? ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  return names[month];
}

/**
 * 获取当月的第一天
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {Date} 当月第一天的 Date 对象
 */
export function startOfMonth(date: Date | string | number): Date {
  const d = parse(date);
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

/**
 * 获取当月的最后一天
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {Date} 当月最后一天的 Date 对象
 */
export function endOfMonth(date: Date | string | number): Date {
  const d = parse(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}

/**
 * 获取当天的开始时间
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {Date} 当天开始时间的 Date 对象
 */
export function startOfDay(date: Date | string | number): Date {
  const d = parse(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/**
 * 获取当天的结束时间
 * @param {Date | string | number} date 日期对象、日期字符串或时间戳
 * @returns {Date} 当天结束时间的 Date 对象
 */
export function endOfDay(date: Date | string | number): Date {
  const d = parse(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
}