[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidCreditCode

# Function: isValidCreditCode()

> **isValidCreditCode**(`creditCode`): `boolean`

Defined in: validate/index.ts:287

验证统一社会信用代码

## Parameters

### creditCode

`string`

统一社会信用代码

## Returns

`boolean`

是否为有效的统一社会信用代码

## Example

```javascript
isValidCreditCode('91110108MA12345678'); // true
isValidCreditCode('123456789012345678'); // false
```
