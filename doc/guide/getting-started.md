# 快速开始

## 安装

使用你喜欢的包管理器安装：

::: code-group

```bash [npm]
npm install libra-js-kit
```

```bash [yarn]
yarn add libra-js-kit
```

```bash [pnpm]
pnpm add libra-js-kit
```

:::

## 基础用法

### 全量引入

```ts
import { arrayKit, validateKit, stringKit } from "libra-js-kit";

// 数组去重
const result = arrayKit.unique([1, 2, 2, 3]);
console.log(result); // [1, 2, 3]

// 验证手机号
const isValid = validateKit.isValidPhone("13800138000");
console.log(isValid); // true

// 首字母大写
const capitalized = stringKit.capitalize("hello");
console.log(capitalized); // "Hello"
```

### 按需引入（推荐）

利用子路径导入，只引入需要的模块，减小打包体积：

```ts
// 只引入数组模块
import { chunk, unique, groupBy } from "libra-js-kit/array";

// 只引入验证模块
import { isValidPhone, isValidEmail } from "libra-js-kit/validate";

// 只引入渲染模块
import { renderFileSize, renderPercentage } from "libra-js-kit/render";
```

## 模块一览

| 模块       | 导入路径                    | 说明                                  |
| ---------- | --------------------------- | ------------------------------------- |
| lib        | `libra-js-kit/lib`          | 基础工具函数，null/undefined 安全处理  |
| dataType   | `libra-js-kit/dataType`     | 数据类型检测与判断，全部为类型守卫      |
| array      | `libra-js-kit/array`        | 数组操作，分块、扁平化、分组、树形转换等 |
| string     | `libra-js-kit/string`       | 字符串大小写转换、反转等              |
| render     | `libra-js-kit/render`       | 数据渲染，文件大小、脱敏、截断等      |
| validate   | `libra-js-kit/validate`     | 表单/数据格式验证                     |

## 版本信息

```ts
import { VERSION, NAME } from "libra-js-kit";

console.log(NAME);    // "libra-js-kit"
console.log(VERSION); // "1.0.0"
```
