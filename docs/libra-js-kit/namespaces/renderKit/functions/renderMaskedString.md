[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderMaskedString

# Function: renderMaskedString()

> **renderMaskedString**(`value`, `params`): `string`

Defined in: [render/index.ts:217](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/render/index.ts#L217)

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
