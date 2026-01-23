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
 * 数组操作工具集，涵盖去重、分组、扁平化、打乱、分页等常用方法。
 */
export * as arrayKit from './array/index';

/**
 * 字符串处理工具，支持校验、截取、编码、模板填充、驼峰转换等。
 */
export * as stringKit from './string/index';

// ----------------------------
// 全局元信息
// ----------------------------

/**
 * 当前 `libra-js-kit` 的版本号。
 *
 * @example
 * ```ts
 * console.log(NAME, VERSION); // "libra-js-kit 1.0.0"
 * ```
 */
export const VERSION = '1.0.0';

/**
 * 工具包的名称标识。
 */
export const NAME = 'libra-js-kit';
