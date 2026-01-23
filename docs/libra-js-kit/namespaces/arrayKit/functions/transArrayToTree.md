[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [arrayKit](../README.md) / transArrayToTree

# Function: transArrayToTree()

> **transArrayToTree**\<`T`\>(`list`, `options`): `T`[]

Defined in: [array/index.ts:160](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/array/index.ts#L160)

将扁平数组转换为树形结构

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### list

`T`[]

输入扁平数组

### options

[`TreeOptions`](../interfaces/TreeOptions.md) = `{}`

转换选项

## Returns

`T`[]

转换后的树形结构数组

## Example

```ts
const list = [
  { id: 1, name: 'A', parentId: 0 },
  { id: 2, name: 'B', parentId: 1 },
  { id: 3, name: 'C', parentId: 1 },
  { id: 4, name: 'D', parentId: 2 }
];
transArrayToTree(list, { idKey: 'id', parentKey: 'parentId', rootValue: 0 });
// =>
// [
//   { id: 1, name: 'A', parentId: 0, children: [
//     { id: 2, name: 'B', parentId: 1, children: [...] },
//     { id: 3, name: 'C', parentId: 1, children: [] }
//   ]}
// ]
```
