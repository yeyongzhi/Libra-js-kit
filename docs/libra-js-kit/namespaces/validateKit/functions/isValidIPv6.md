[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidIPv6

# Function: isValidIPv6()

> **isValidIPv6**(`ip`): `boolean`

Defined in: [validate/index.ts:213](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/validate/index.ts#L213)

验证IPv6地址

## Parameters

### ip

`string`

IPv6地址

## Returns

`boolean`

是否为有效的IPv6地址

## Example

```javascript
isValidIPv6('2001:0db8::1'); // true
isValidIPv6('invalid-ipv6'); // false
```
