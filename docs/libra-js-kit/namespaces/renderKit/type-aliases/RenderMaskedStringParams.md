[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / RenderMaskedStringParams

# Type Alias: RenderMaskedStringParams

> **RenderMaskedStringParams** = `object`

Defined in: [render/index.ts:179](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L179)

## Properties

### hideFirst?

> `optional` **hideFirst**: `number`

Defined in: [render/index.ts:184](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L184)

隐藏前 N 个字符
与 hideLast 互斥，若同时传入，优先使用 hideFirst

***

### hideLast?

> `optional` **hideLast**: `number`

Defined in: [render/index.ts:190](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L190)

隐藏后 N 个字符
仅在未设置 hideFirst 时生效

***

### hideMiddle?

> `optional` **hideMiddle**: `number`

Defined in: [render/index.ts:196](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L196)

隐藏中间的字符数量（从中间开始隐藏）
若 hideFirst / hideLast 未设置，则默认使用此模式（如 hideMiddle: 4）

***

### keepFormat?

> `optional` **keepFormat**: `boolean`

Defined in: [render/index.ts:207](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L207)

是否保留原始字符串中的所有字符（包括空格、符号等）
默认 true；若设为 false，会先过滤掉非字母数字字符（类似手机号清理）

***

### maskChar?

> `optional` **maskChar**: `string`

Defined in: [render/index.ts:201](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/render/index.ts#L201)

自定义掩码字符，默认为 '*'
