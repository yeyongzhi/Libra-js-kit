# validate — 数据验证

`validate` 模块提供丰富的表单/数据格式验证函数，特别包含大量**中国特色的数据校验**（身份证、银行卡、统一社会信用代码等）。

## 导入

```ts
// 全量引入
import { validateKit } from "libra-js-kit";

// 按需引入（推荐）
import { isValidPhone, isValidEmail, isValidIDCard } from "libra-js-kit/validate";
```

## 通用验证

| 函数 | 说明 |
|------|------|
| `isValidEmail(value)` | 验证邮箱地址 |
| `isValidPhone(value)` | 验证中国大陆手机号码 |
| `isValidURL(value)` | 验证 URL 地址 |
| `isValidIP(value)` | 验证 IP 地址（IPv4 或 IPv6） |
| `isValidIPv4(value)` | 验证 IPv4 地址 |
| `isValidIPv6(value)` | 验证 IPv6 地址 |
| `isValidMAC(value)` | 验证 MAC 地址 |

```ts
import {
  isValidEmail,
  isValidPhone,
  isValidURL,
  isValidIP,
} from "libra-js-kit/validate";

isValidEmail("test@example.com");    // true
isValidEmail("invalid-email");       // false

isValidPhone("13800138000");         // true
isValidPhone("12345");               // false

isValidURL("https://example.com");   // true
isValidURL("not-a-url");             // false

isValidIP("192.168.1.1");            // true
isValidIP("::1");                    // true（IPv6）
```

## 中国身份证与证照

| 函数 | 说明 |
|------|------|
| `isValidIDCard(value)` | 验证身份证号码（15/18位，含校验码计算） |
| `isValidPassport(value)` | 验证护照号码 |
| `isValidLicensePlate(value)` | 验证车牌号码 |

```ts
import {
  isValidIDCard,
  isValidPassport,
  isValidLicensePlate,
} from "libra-js-kit/validate";

// 身份证：支持 18 位（含校验码）和 15 位
isValidIDCard("110101199001011234");  // true

isValidPassport("E12345678");         // true

isValidLicensePlate("京A12345");       // true
isValidLicensePlate("京A123456");      // true（新能源车牌）
```

## 银行与企业

| 函数 | 说明 |
|------|------|
| `isValidBankCard(value)` | 验证银行卡号（Luhn 算法校验） |
| `isValidOrgCode(value)` | 验证组织机构代码 |
| `isValidCreditCode(value)` | 验证统一社会信用代码（含校验码计算） |

```ts
import {
  isValidBankCard,
  isValidCreditCode,
} from "libra-js-kit/validate";

isValidBankCard("6222021234567890");         // true（Luhn 算法）
isValidBankCard("1234567890123456");         // false

// 统一社会信用代码：18位，包含校验码
isValidCreditCode("91350100M000100Y43");     // 示例
```

## 社交账号

| 函数 | 说明 |
|------|------|
| `isValidQQ(value)` | 验证 QQ 号码 |
| `isValidWeChat(value)` | 验证微信 ID |

```ts
import { isValidQQ, isValidWeChat } from "libra-js-kit/validate";

isValidQQ("10001");            // true
isValidWeChat("wxid_abc123");  // true
```

## 其他验证

| 函数 | 说明 |
|------|------|
| `isValidZipCode(value)` | 验证邮政编码（中国大陆） |

```ts
import { isValidZipCode } from "libra-js-kit/validate";

isValidZipCode("100000");  // true
isValidZipCode("1000");    // false
```

## 组合验证

适用于登录等场景，支持多种格式同时验证。

### `isValidEmailOrPhone(value)`

验证邮箱或手机号（常用于登录输入框）。

```ts
import { isValidEmailOrPhone } from "libra-js-kit/validate";

isValidEmailOrPhone("test@example.com");  // true
isValidEmailOrPhone("13800138000");       // true
isValidEmailOrPhone("invalid");           // false
```

### `isValidPhoneOrTel(value)`

验证手机号或固话号码。

```ts
import { isValidPhoneOrTel } from "libra-js-kit/validate";

isValidPhoneOrTel("13800138000");         // true（手机号）
isValidPhoneOrTel("010-12345678");        // true（固话带区号）
```
