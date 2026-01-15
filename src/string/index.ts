import { isDefined } from '../lib/index'

/**
 * 首字母大写
 * @example
 * capitalize("hello world")  // Hello world
 * @param {string} str 待处理的字符串
 * @returns 处理后的字符串
 */
export function capitalize(str: string): string {
    if (!isDefined(str) || str.length === 0) {
        return "";
    }
    if(str.length === 1){
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 字符串反转
 * @example
 * reverse("hello world")  // dlrow olleh
 * @param {string} str 待处理的字符串
 * @returns 处理后的字符串
 */
export function reverse(str: string): string {
    if (!isDefined(str) || str.length === 0) {
        return "";
    }
    if(str.length === 1){
        return "";
    }
    return str.split("").reverse().join("");
}