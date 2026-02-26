[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidLicensePlate

# Function: isValidLicensePlate()

> **isValidLicensePlate**(`licensePlate`): `boolean`

Defined in: validate/index.ts:102

验证中国大陆车牌号码

## Parameters

### licensePlate

`string`

车牌号

## Returns

`boolean`

是否为有效的中国大陆车牌号

## Example

```javascript
isValidLicensePlate('京A12345'); // true
isValidLicensePlate('12345'); // false
```
