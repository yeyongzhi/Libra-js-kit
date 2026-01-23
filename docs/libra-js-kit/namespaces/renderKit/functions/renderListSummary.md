[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderListSummary

# Function: renderListSummary()

> **renderListSummary**(`items`, `params`): `string`

Defined in: [render/index.ts:295](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/render/index.ts#L295)

渲染列表摘要（最多显示前 N 个项，超出部分用 '等x项' 表示）

## Parameters

### items

`string`[]

字符串数组

### params

[`RenderListSummaryParams`](../type-aliases/RenderListSummaryParams.md) = `{}`

配置项

## Returns

`string`

渲染后的字符串

## Example

```ts
renderListSummary(['张三', '李四', '王五']) → "张三、李四等1项"
renderListSummary(['A']) → "A"
```
