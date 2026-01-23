[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [libKit](../README.md) / firstDefined

# Function: firstDefined()

> **firstDefined**\<`T`\>(...`values`): `T` \| `null` \| `undefined`

Defined in: [lib/index.ts:32](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/lib/index.ts#L32)

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
