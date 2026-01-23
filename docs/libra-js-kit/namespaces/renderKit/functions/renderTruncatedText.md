[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderTruncatedText

# Function: renderTruncatedText()

> **renderTruncatedText**(`text`, `params`): `string`

Defined in: [render/index.ts:275](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/render/index.ts#L275)

渲染截断文本（超出最大长度时添加省略号）

## Parameters

### text

`unknown`

任意值（会被转为字符串）

### params

[`RenderTruncatedTextParams`](../type-aliases/RenderTruncatedTextParams.md) = `{}`

配置项

## Returns

`string`

截断后的字符串

## Example

```ts
renderTruncatedText('这是一段很长的描述...', { maxLength: 10 }) → "这是一段很..."
```
