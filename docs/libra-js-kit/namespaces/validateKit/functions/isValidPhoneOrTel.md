[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidPhoneOrTel

# Function: isValidPhoneOrTel()

> **isValidPhoneOrTel**(`phone`): `boolean`

Defined in: validate/index.ts:351

验证手机号或电话号码（支持固话）

## Parameters

### phone

`string`

手机号或电话号码

## Returns

`boolean`

是否为有效的电话号码

## Example

```javascript
isValidPhoneOrTel('13800138000'); // true
isValidPhoneOrTel('invalid'); // false
```
