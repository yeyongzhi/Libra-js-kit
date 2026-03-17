[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / flattenDeep

# Function: flattenDeep()

> **flattenDeep**\<`T`\>(`arr`): `T`[]

Defined in: [array/index.ts:30](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/array/index.ts#L30)

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
