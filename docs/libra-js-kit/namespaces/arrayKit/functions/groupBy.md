[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `keyFn`): `object`[]

Defined in: [array/index.ts:96](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L96)

根据回调函数对数组进行分组

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number`

## Parameters

### arr

`T`[]

输入数组

### keyFn

(`item`) => `K`

分组键函数，返回分组键

## Returns

`object`[]

分组后的数组，每个元素包含分组键和对应数据数组

## Example

```ts
groupBy([{age:20}, {age:30}, {age:20}], x => x.age)
=> { '20': [{age:20}, {age:20}], '30': [{age:30}] }
```
