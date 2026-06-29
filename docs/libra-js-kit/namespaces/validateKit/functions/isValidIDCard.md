[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidIDCard

# Function: isValidIDCard()

> **isValidIDCard**(`idCard`): `boolean`

Defined in: [validate/index.ts:63](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L63)

验证中国大陆身份证号码（支持15位和18位）

## Parameters

### idCard

`string`

身份证号码

## Returns

`boolean`

是否为有效的身份证号码

## Example

```javascript
isValidIDCard('110101199001011234'); // true
isValidIDCard('123456789012345'); // false
```
