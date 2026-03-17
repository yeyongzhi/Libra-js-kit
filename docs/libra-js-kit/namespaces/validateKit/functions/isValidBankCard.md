[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidBankCard

# Function: isValidBankCard()

> **isValidBankCard**(`cardNumber`): `boolean`

Defined in: [validate/index.ts:117](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/validate/index.ts#L117)

验证中国大陆银行卡号（Luhn算法）

## Parameters

### cardNumber

`string`

银行卡号

## Returns

`boolean`

是否为有效的银行卡号

## Example

```javascript
isValidBankCard('6222021234567890'); // true
isValidBankCard('1234567890123456'); // false
```
