[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidEmailOrPhone

# Function: isValidEmailOrPhone()

> **isValidEmailOrPhone**(`value`): `boolean`

Defined in: [validate/index.ts:337](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L337)

验证邮箱或手机号（用于登录场景）

## Parameters

### value

`string`

邮箱或手机号

## Returns

`boolean`

是否为有效的邮箱或手机号

## Example

```javascript
isValidEmailOrPhone('test@example.com'); // true
isValidEmailOrPhone('invalid'); // false
```
