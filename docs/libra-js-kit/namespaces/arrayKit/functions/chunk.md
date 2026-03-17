[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [array/index.ts:14](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/array/index.ts#L14)

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

```javascript
// 示例：将数组 [1,2,3,4,5] 按大小 2 分块
chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
```
