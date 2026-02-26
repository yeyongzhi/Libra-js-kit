[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidPassport

# Function: isValidPassport()

> **isValidPassport**(`passport`): `boolean`

Defined in: validate/index.ts:257

验证护照号码（中国大陆）

## Parameters

### passport

`string`

护照号码

## Returns

`boolean`

是否为有效的护照号码

## Example

```javascript
isValidPassport('E12345678'); // true
isValidPassport('12345'); // false
```
