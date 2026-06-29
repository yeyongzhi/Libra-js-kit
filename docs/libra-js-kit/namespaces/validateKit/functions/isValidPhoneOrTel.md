[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidPhoneOrTel

# Function: isValidPhoneOrTel()

> **isValidPhoneOrTel**(`phone`): `boolean`

Defined in: [validate/index.ts:351](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L351)

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
