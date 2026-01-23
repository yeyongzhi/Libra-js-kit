[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / unique

# Function: unique()

> **unique**\<`T`\>(`arr`, `key?`): `T`[]

Defined in: [array/index.ts:45](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L45)

数组去重（支持基本类型和对象按 key 去重）

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

输入数组

### key?

可选，用于对象按 key 去重的键名或回调函数

keyof `T` | (`item`) => `unknown`

## Returns

`T`[]

去重后的数组

## Examples

```ts
unique([1,2,2,3]) => [1,2,3]
```

```ts
unique([{id:1}, {id:2}, {id:1}], 'id') => [{id:1}, {id:2}]
```
