[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderArrayLabelByValue

# Function: renderArrayLabelByValue()

> **renderArrayLabelByValue**(`value`, `options`): `string`

Defined in: [render/index.ts:88](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/render/index.ts#L88)

渲染数组中指定值的标签

## Parameters

### value

值

`string` | `number` | `symbol`

### options

[`ArrayOption`](../type-aliases/ArrayOption.md)[]

数组选项，每个选项包含 value 和 label 属性

## Returns

`string`

匹配值的标签，或空字符串

## Example

```ts
renderArrayLabelByValue('bj', [{ value: 'zj', label: '浙江省' }, { value: 'bj', label: '北京市' }, { value: 'sh', label: '上海市' }])
```
