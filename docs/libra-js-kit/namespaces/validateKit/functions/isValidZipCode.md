[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidZipCode

# Function: isValidZipCode()

> **isValidZipCode**(`zipCode`): `boolean`

Defined in: [validate/index.ts:242](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/validate/index.ts#L242)

验证邮政编码（中国大陆）

## Parameters

### zipCode

`string`

邮政编码

## Returns

`boolean`

是否为有效的邮政编码

## Example

```javascript
isValidZipCode('100000'); // true
isValidZipCode('12345'); // false
```
