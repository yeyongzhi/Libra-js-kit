[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidOrgCode

# Function: isValidOrgCode()

> **isValidOrgCode**(`orgCode`): `boolean`

Defined in: [validate/index.ts:272](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/validate/index.ts#L272)

验证组织机构代码

## Parameters

### orgCode

`string`

组织机构代码

## Returns

`boolean`

是否为有效的组织机构代码

## Example

```javascript
isValidOrgCode('12345678-9'); // true
isValidOrgCode('12345678'); // false
```
