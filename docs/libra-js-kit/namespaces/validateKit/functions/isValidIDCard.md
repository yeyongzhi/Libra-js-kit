[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidIDCard

# Function: isValidIDCard()

> **isValidIDCard**(`idCard`): `boolean`

Defined in: validate/index.ts:63

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
