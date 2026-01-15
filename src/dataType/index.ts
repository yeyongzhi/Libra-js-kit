import { isDefined } from "../lib/index";

/**
 * 基础数据类型的判断
 */

/**
 * 判断是否为字符串
 * @param value 任意值
 * @returns {boolean} 是否为字符串
 */
export function isString(value: unknown): value is string {
    return isDefined(value) && typeof value === 'string';
}

/**
 * 判断是否为数字
 * @param value 任意值
 * @returns {boolean} 是否为数字
 */
export function isNumber(value: unknown): value is number {
    return isDefined(value) && typeof value === 'number';
}

/**
 * 判断是否为布尔值
 * @param value 任意值
 * @returns {boolean} 是否为布尔值
 */
export function isBoolean(value: unknown): value is boolean {
    return isDefined(value) && typeof value === 'boolean';
}

/**
 * 判断是否为 null
 * @param value 任意值
 * @returns {boolean} 是否为 null
 */
export function isNull(value: unknown): value is null {
    return value === null;
}

/**
 * 判断是否为 undefined
 * @param value 任意值
 * @returns {boolean} 是否为 undefined
 */
export function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}

/**
 * 判断是否为 symbol
 * @param value 任意值
 * @returns {boolean} 是否为 symbol
 */
export function isSymbol(value: unknown): value is symbol {
    return isDefined(value) && typeof value === 'symbol';
}

/**
 * 判断是否为 bigint
 * @param value 任意值
 * @returns {boolean} 是否为 bigint
 */
export function isBigInt(value: unknown): value is bigint {
    return isDefined(value) && typeof value === 'bigint';
}

/**
 * 引用数据类型的判断
 */

/**
 * 判断是否为数组
 * @param value 任意值
 * @returns {boolean} 是否为数组
 */
export function isArray(value: unknown): value is Array<any> {
    return isDefined(value) && Array.isArray(value);
}

/**
 * 判断是否为对象（非 null）
 * @param value 任意值
 * @returns {boolean} 是否为对象
 */
export function isObject(value: unknown): value is object {
    return isDefined(value) && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 判断是否为函数
 * @param value 任意值
 * @returns {boolean} 是否为函数
 */
export function isFunction(value: unknown): value is Function {
    return isDefined(value) && (typeof value === 'function');
}

/**
 * 判断是否为日期对象
 * @param value 任意值
 * @returns {boolean} 是否为日期对象
 */
export function isDate(value: unknown): value is Date {
    return isDefined(value) && value instanceof Date;
}

/**
 * 判断是否为正则表达式
 * @param value 任意值
 * @returns {boolean} 是否为正则表达式
 */
export function isRegExp(value: unknown): value is RegExp {
    return isDefined(value) && value instanceof RegExp;
}

/**
 * 判断是否为错误对象
 * @param value 任意值
 * @returns {boolean} 是否为错误对象
 */
export function isError(value: unknown): value is Error {
    return isDefined(value) && value instanceof Error;
}

/**
 * 判断是否为 Map
 * @param value 任意值
 * @returns {boolean} 是否为 Map
 */
export function isMap(value: unknown): value is Map<any, any> {
    return isDefined(value) && value instanceof Map;
}

/**
 * 判断是否为 Set
 * @param value 任意值
 * @returns {boolean} 是否为 Set
 */
export function isSet(value: unknown): value is Set<any> {
    return isDefined(value) && value instanceof Set;
}

/**
 * 判断是否为 Promise
 * @param value 任意值
 * @returns {boolean} 是否为 Promise
 */
export function isPromise(value: unknown): value is Promise<any> {
    return isDefined(value) && value instanceof Promise;
}

export function toString(value: any): string {
  return isDefined(value) ? String(value) : ''
}