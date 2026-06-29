# dataType — 类型检测

`dataType` 模块提供精准的 JavaScript 数据类型判断函数，**所有检测函数都是类型守卫（type guard）**，可直接用于 TypeScript 的类型收窄。

## 导入

```ts
// 全量引入
import { dataTypeKit } from "libra-js-kit";

// 按需引入（推荐）
import { isString, isArray, isPromise } from "libra-js-kit/dataType";
```

## 基础类型判断

| 函数 | 说明 |
|------|------|
| `isString(value)` | 判断是否为字符串 |
| `isNumber(value)` | 判断是否为数字 |
| `isNaN(value)` | 判断是否为 NaN |
| `isBoolean(value)` | 判断是否为布尔值 |
| `isNull(value)` | 判断是否为 null |
| `isUndefined(value)` | 判断是否为 undefined |
| `isSymbol(value)` | 判断是否为 Symbol |
| `isBigInt(value)` | 判断是否为 BigInt |

```ts
import { isString, isNumber, isNaN, isBoolean } from "libra-js-kit/dataType";

isString("hello");   // true
isString(123);       // false

isNumber(42);        // true
isNumber(NaN);       // true — 注意 NaN 的 typeof 也是 "number"
isNaN(NaN);          // true — 用 isNaN 来精确判断

isBoolean(true);     // true
isBoolean(1);        // false — 不进行隐式转换
```

## 引用类型判断

| 函数 | 说明 |
|------|------|
| `isArray(value)` | 判断是否为数组 |
| `isObject(value)` | 判断是否为对象（非 null） |
| `isFunction(value)` | 判断是否为函数 |
| `isDate(value)` | 判断是否为 Date 对象 |
| `isRegExp(value)` | 判断是否为正则表达式 |
| `isError(value)` | 判断是否为 Error 对象 |
| `isMap(value)` | 判断是否为 Map |
| `isSet(value)` | 判断是否为 Set |
| `isPromise(value)` | 判断是否为 Promise |

```ts
import { isArray, isObject, isPromise } from "libra-js-kit/dataType";

isArray([1, 2, 3]);  // true
isArray({ 0: "a" }); // false — 不会误判类数组对象

isObject({});         // true
isObject(null);       // false — null 不是对象
isObject([]);         // true — 数组也是对象，如需区分请用 isArray

isPromise(Promise.resolve()); // true
isPromise({ then: () => {} }); // true — 检测 thenable
```

## 类型守卫示例

所有检测函数都返回 `value is T` 类型守卫，TypeScript 可据此自动收窄类型：

```ts
import { isString, isArray } from "libra-js-kit/dataType";

function process(input: unknown) {
  if (isString(input)) {
    // 此处 input 的类型自动收窄为 string
    return input.toUpperCase();
  }
  if (isArray(input)) {
    // 此处 input 的类型自动收窄为 unknown[]
    return input.length;
  }
  return null;
}
```

## `toString(value)`

将任意值转为字符串，`null`/`undefined` 返回空字符串。

```ts
import { toString } from "libra-js-kit/dataType";

toString(123);       // "123"
toString(true);      // "true"
toString(null);      // ""
toString(undefined); // ""
```
