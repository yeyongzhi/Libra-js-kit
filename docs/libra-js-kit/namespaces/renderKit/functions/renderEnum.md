[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [renderKit](../README.md) / renderEnum

# Function: renderEnum()

> **renderEnum**(`value`, `mapping`): `string`

Defined in: [render/index.ts:159](https://github.com/yeyongzhi/Libra-js-kit/blob/e262d86e95a7b517dd819db2acdaf5f1d8b83c45/src/render/index.ts#L159)

渲染枚举值（基于映射对象）和上面的renderObjectValue类似

## Parameters

### value

枚举值

`string` | `number`

### mapping

`Record`\<`string` \| `number`, `string`\>

映射对象，键为枚举值，值为对应的标签

## Returns

`string`

渲染后的字符串

## Example

```ts
renderEnum(status, { 0: '待处理', 1: '已完成' })
```
