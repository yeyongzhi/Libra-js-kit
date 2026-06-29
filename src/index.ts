// ----------------------------
// 模块命名空间导出
// ----------------------------

/**
 * 核心工具集合，包含通用辅助函数与基础能力。
 */
export * as libKit from './lib/index';

/**
 * 数据类型检测与转换工具，提供精准的类型判断（如 `isPlainObject`, `isArrayLike` 等）。
 */
export * as dataTypeKit from './dataType/index';

/**
 * 轻量级模板渲染与字符串插值工具，适用于简单动态内容生成。
 */
export * as renderKit from './render/index';

/**
 * 【数组操作工具集】提供分块、扁平化、分组等一些方法
 * @example
 * ```javascript
 * import * as arrayKit from 'libra-js-kit/array';
 * // 或者直接导出 chunk 方法
 * // import { chunk } from 'libra-js-kit/array';
 * 
 * // 示例：将数组 [1,2,3,4,5] 按大小 2 分块
 * arrayKit.chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
 * 
 * ```
 */
export * as arrayKit from './array/index';

/**
 * 字符串处理工具，支持校验、截取、编码、模板填充、驼峰转换等。
 */
export * as stringKit from './string/index';

/**
 * 【验证工具集】基于正则表达式的一些简单验证方法
 */
export * as validateKit from './validate/index';



// ----------------------------
// 全局元信息
// ----------------------------

/**
 * 当前 `libra-js-kit` 的版本号。
 * @example
 * ```javascript
 * import * as libra from 'libra-js-kit';
 * console.log(libra.VERSION); // "1.0.0"
 * ```
 */
export const VERSION: string = '1.1.0';

/**
 * 工具包的名称标识
 */
export const NAME: string = 'libra-js-kit';
