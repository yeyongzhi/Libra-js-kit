[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidIP

# Function: isValidIP()

> **isValidIP**(`ip`): `boolean`

Defined in: [validate/index.ts:228](https://github.com/yeyongzhi/Libra-js-kit/blob/66ee5c799a446936408217b16c0bf38b1094a7a0/src/validate/index.ts#L228)

验证IP地址（IPv4或IPv6）

## Parameters

### ip

`string`

IP地址

## Returns

`boolean`

是否为有效的IP地址

## Example

```javascript
isValidIP('192.168.1.1'); // true
isValidIP('invalid-ip'); // false
```
