[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidMAC

# Function: isValidMAC()

> **isValidMAC**(`mac`): `boolean`

Defined in: [validate/index.ts:322](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L322)

验证MAC地址

## Parameters

### mac

`string`

MAC地址

## Returns

`boolean`

是否为有效的MAC地址

## Example

```javascript
isValidMAC('00:11:22:33:44:55'); // true
isValidMAC('invalid-mac'); // false
```
