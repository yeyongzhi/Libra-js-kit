[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / randomItem

# Function: randomItem()

> **randomItem**\<`T`\>(`arr`): `T` \| `undefined`

Defined in: [array/index.ts:121](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/array/index.ts#L121)

从数组中随机返回一个元素

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

输入数组

## Returns

`T` \| `undefined`

随机返回的元素，若数组为空则返回 undefined

## Example

```ts
randomItem([1,2,3]) => 2 (可能)
```
