[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / flattenDeep

# Function: flattenDeep()

> **flattenDeep**\<`T`\>(`arr`): `T`[]

Defined in: [array/index.ts:31](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L31)

深度扁平化数组（递归展开所有嵌套层级）

## Type Parameters

### T

`T`

## Parameters

### arr

`any`[]

输入数组

## Returns

`T`[]

扁平化后的数组

## Example

```ts
flattenDeep([1, [2, [3, [4]]]]) => [1,2,3,4]
```
