[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderMaskedString

# Function: renderMaskedString()

> **renderMaskedString**(`value`, `params`): `string`

Defined in: [render/index.ts:206](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/render/index.ts#L206)

通用字符串脱敏渲染器
支持隐藏前/后/中间部分，适用于手机号、身份证、银行卡、邮箱等

## Parameters

### value

`unknown`

任意值（会被转为字符串）

### params

[`RenderMaskedStringParams`](../type-aliases/RenderMaskedStringParams.md) = `{}`

脱敏配置

## Returns

`string`

脱敏后的字符串
