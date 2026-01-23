[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [array/index.ts:15](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L15)

将数组按指定大小size依次分块

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

要分块的数组

### size

`number`

每个分块的大小

## Returns

`T`[][]

分块后的数组

## Example

```ts
chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
```
