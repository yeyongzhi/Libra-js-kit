[**libra-js-kit**](../../../../README.md)

***

[libra-js-kit](../../../../README.md) / [validateKit](../README.md) / isValidIPv4

# Function: isValidIPv4()

> **isValidIPv4**(`ip`): `boolean`

Defined in: [validate/index.ts:198](https://github.com/yeyongzhi/Libra-js-kit/blob/4fd7ed01bac541377557cf39d16aac87ef73b371/src/validate/index.ts#L198)

验证IPv4地址

## Parameters

### ip

`string`

IPv4地址

## Returns

`boolean`

是否为有效的IPv4地址

## Example

```javascript
isValidIPv4('192.168.1.1'); // true
isValidIPv4('256.1.1.1'); // false
```
