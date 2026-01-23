/**
 * 数组操作工具集，提供去重、扁平化、分组等常用方法。
 * 
 * @packageDocumentation
 */

import { isArray, isNumber } from "../dataType/index";

/**
 * 将数组按指定大小size依次分块
 * @example chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
 * @param {Array<T>} arr 要分块的数组
 * @param {number} size 每个分块的大小
 * @returns {Array<Array<T>>} 分块后的数组
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (!isNumber(size) || !isArray(arr)) return [];
  if (size <= 0 || size >= arr.length) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 深度扁平化数组（递归展开所有嵌套层级）
 * @example flattenDeep([1, [2, [3, [4]]]]) => [1,2,3,4]
 * @param {Array<T>} arr 输入数组
 * @returns {Array<T>} 扁平化后的数组
 */
export function flattenDeep<T>(arr: any[]): T[] {
  return arr.reduce<T[]>((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenDeep(val) : val);
  }, []);
}

/**
 * 数组去重（支持基本类型和对象按 key 去重）
 * @example unique([1,2,2,3]) => [1,2,3]
 * @example unique([{id:1}, {id:2}, {id:1}], 'id') => [{id:1}, {id:2}]
 * @param {Array<T>} arr 输入数组
 * @param {keyof T | ((item: T) => unknown)} key 可选，用于对象按 key 去重的键名或回调函数
 * @returns {Array<T>} 去重后的数组
 */
export function unique<T>(arr: T[], key?: keyof T | ((item: T) => unknown)): T[] {
  if (arr.length === 0) return [];
  const seen = new Set<unknown>();
  const result: T[] = [];
  const getKey = (item: T): unknown => {
    if (typeof key === 'function') return key(item);
    if (typeof key === 'string') return item[key];
    return item;
  };
  for (const item of arr) {
    const k = getKey(item);
    if (!seen.has(k)) {
      seen.add(k);
      result.push(item);
    }
  }
  return result;
}

/**
 * 返回在 a 中但不在 b 中的元素（差集）
 * @example difference([1,2,3], [2,3,4]) => [1]
 * @param {Array<T>} a 第一个数组
 * @param {Array<T>} b 第二个数组
 * @returns {Array<T>} a 中不在 b 中的元素数组  
 */
export function difference<T>(a: T[], b: T[]): T[] {
  const bSet = new Set(b);
  return a.filter(x => !bSet.has(x));
}

/**
 * 返回 a 和 b 的交集
 * @example intersection([1,2,3], [2,3,4]) => [2,3]
 * @param {Array<T>} a 第一个数组
 * @param {Array<T>} b 第二个数组
 * @returns {Array<T>} a 和 b 的交集数组
 */
export function intersection<T>(a: T[], b: T[]): T[] {
  const bSet = new Set(b);
  return a.filter(x => bSet.has(x));
}

/**
 * 根据回调函数对数组进行分组
 * @example groupBy([{age:20}, {age:30}, {age:20}], x => x.age)
 * => { '20': [{age:20}, {age:20}], '30': [{age:30}] }
 * @param {Array<T>} arr 输入数组
 * @param {function(item: T): K} keyFn 分组键函数，返回分组键
 * @returns {Array<{ value: K, data: T[] }>} 分组后的数组，每个元素包含分组键和对应数据数组
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Array<{ value: K, data: T[] }> {
  let list = [];
  const result = {} as Record<K, T[]>;
  for (const item of arr) {
    const key = keyFn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }
  list = (Object.keys(result) as K[]).map((item: K) => {
    return {
      value: item,
      data: result[item]
    }
  });
  return list;
}

/**
 * 从数组中随机返回一个元素
 * @example randomItem([1,2,3]) => 2 (可能)
 * @param {Array<T>} arr 输入数组
 * @returns {T | undefined} 随机返回的元素，若数组为空则返回 undefined
 */
export function randomItem<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export interface TreeOptions {
  /** 节点唯一标识的字段名，默认 'id' */
  idKey?: string;
  /** 父节点标识的字段名，默认 'parentId' */
  parentKey?: string;
  /** 根节点的 parentId 值，默认 null */
  rootValue?: unknown;
  /** 子节点数组的字段名，默认 'children' */
  childrenKey?: string;
}

/**
 * 将扁平数组转换为树形结构
 * @example
 * const list = [
 *   { id: 1, name: 'A', parentId: 0 },
 *   { id: 2, name: 'B', parentId: 1 },
 *   { id: 3, name: 'C', parentId: 1 },
 *   { id: 4, name: 'D', parentId: 2 }
 * ];
 * transArrayToTree(list, { idKey: 'id', parentKey: 'parentId', rootValue: 0 });
 * // =>
 * // [
 * //   { id: 1, name: 'A', parentId: 0, children: [
 * //     { id: 2, name: 'B', parentId: 1, children: [...] },
 * //     { id: 3, name: 'C', parentId: 1, children: [] }
 * //   ]}
 * // ]
 * @param {Array<T>} list 输入扁平数组
 * @param {TreeOptions} options 转换选项
 * @returns {Array<T>} 转换后的树形结构数组
 */
export function transArrayToTree<T extends Record<string, any>>(
  list: T[],
  options: TreeOptions = {}
): T[] {
  const {
    idKey = 'id',
    parentKey = 'parentId',
    rootValue = null,
    childrenKey = 'children'
  } = options;

  // 创建映射：id => 节点（带 children）
  const map = new Map<unknown, T & { [key: string]: any }>();
  const roots: (T & { [key: string]: any })[] = [];

  // 第一次遍历：初始化所有节点并加入 map
  for (const item of list) {
    const id = item[idKey];
    if (id == null) continue; // 跳过无效 id

    // 深拷贝或浅拷贝？这里选择浅拷贝 + 添加 children
    // 如果你不希望修改原对象，可使用 {...item}
    const node = { ...item };
    (node as any)[childrenKey] = [];
    map.set(id, node);
  }

  // 第二次遍历：构建父子关系
  for (const item of list) {
    const id = item[idKey];
    const parentId = item[parentKey];

    if (id == null) continue;

    const node = map.get(id)!;

    if (parentId === rootValue || parentId == null && rootValue == null) {
      // 是根节点
      roots.push(node);
    } else {
      // 尝试找到父节点
      const parent = map.get(parentId);
      if (parent) {
        parent[childrenKey].push(node);
      } else {
        // 父节点不存在，视为根节点（可选行为，也可忽略）
        // 这里按“孤立节点视为根”处理，避免数据丢失
        roots.push(node);
      }
    }
  }

  return roots as T[];
}