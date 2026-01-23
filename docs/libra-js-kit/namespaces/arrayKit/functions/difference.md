[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / difference

# Function: difference()

> **difference**\<`T`\>(`a`, `b`): `T`[]

Defined in: [array/index.ts:71](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L71)

返回在 a 中但不在 b 中的元素（差集）

## Type Parameters

### T

`T`

## Parameters

### a

`T`[]

第一个数组

### b

`T`[]

第二个数组

## Returns

`T`[]

a 中不在 b 中的元素数组

## Example

```ts
difference([1,2,3], [2,3,4]) => [1]
```
