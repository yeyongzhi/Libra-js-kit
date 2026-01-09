/**
 * 检查值是否已定义（非 null 且非 undefined）
 * @param value 要检查的值
 * @returns 如果值已定义返回 true，否则返回 false
 */
export function isDefined<T>(value: any): value is T {
    return value !== undefined && value !== null;
}

/**
 * 判断值是否为 null 或 undefined（isDefined 的反向）
 */
export function isNotDefined<T>(value: T | null | undefined): value is null | undefined {
  return value === undefined || value === null;
}

/**
 * 为未定义的值提供默认值
 * @param value 要检查的值
 * @param defaultValue 默认值
 * @returns 如果值已定义则返回该值，否则返回默认值
 */
export function defaultValue<T>(value: T, defaultValue: T): T {
    return isDefined(value) ? value : defaultValue;
}

/**
 * 从多个值中返回第一个已定义的值（类似 SQL COALESCE）
 * @param values 要检查的值列表
 * @returns 第一个已定义的值，或 undefined 如果所有值都是 null 或 undefined
 */
export function firstDefined<T>(
  ...values: (T | null | undefined)[]
): T | undefined | null {
  for (const v of values) {
    if (isDefined(v)) return v;
  }
  return undefined;
}

/**
 * 断言某个值一定存在，否则抛错（用于逻辑上不可能为空但 TS 不知道的情况）
 * @param {unknown} value 
 */
export function assertDefined<T>(value: T | null | undefined): asserts value is T {
    if (!isDefined(value)) {
        throw new Error('Value is not defined');
    }
}