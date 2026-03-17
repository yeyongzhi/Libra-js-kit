[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [libKit](../README.md) / firstDefined

# Function: firstDefined()

> **firstDefined**\<`T`\>(...`values`): `T` \| `null` \| `undefined`

Defined in: [lib/index.ts:32](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/lib/index.ts#L32)

从多个值中返回第一个已定义的值（类似 SQL COALESCE）

## Type Parameters

### T

`T`

## Parameters

### values

...(`T` \| `null` \| `undefined`)[]

要检查的值列表

## Returns

`T` \| `null` \| `undefined`

第一个已定义的值，或 undefined 如果所有值都是 null 或 undefined
