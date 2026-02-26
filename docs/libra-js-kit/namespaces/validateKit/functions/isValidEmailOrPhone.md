[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidEmailOrPhone

# Function: isValidEmailOrPhone()

> **isValidEmailOrPhone**(`value`): `boolean`

Defined in: validate/index.ts:337

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
