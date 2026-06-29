[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidPhone

# Function: isValidPhone()

> **isValidPhone**(`phone`): `boolean`

Defined in: [validate/index.ts:48](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L48)

验证中国大陆手机号码

## Parameters

### phone

`string`

手机号

## Returns

`boolean`

是否为有效的中国大陆手机号

## Example

```javascript
isValidPhone('13800138000'); // true
isValidPhone('12345'); // false
```
