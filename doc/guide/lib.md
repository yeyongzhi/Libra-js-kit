# lib — 基础工具

`lib` 模块是最底层的工具模块，提供 null/undefined 安全处理的核心函数，所有函数均使用原生实现，无外部依赖。

## 导入

```ts
// 全量引入
import { libKit } from "libra-js-kit";

// 按需引入（推荐）
import { isDefined, defaultValue, firstDefined } from "libra-js-kit/lib";
```

## API

### `isDefined(value)`

检查值是否已定义（非 `null` 且非 `undefined`），返回类型守卫。

```ts
import { isDefined } from "libra-js-kit/lib";

isDefined("hello");  // true
isDefined(0);        // true
isDefined(null);     // false
isDefined(undefined);// false

// 类型守卫用法
const val: string | null = getSomeValue();
if (isDefined(val)) {
  // 此处 val 的类型被收窄为 string
  console.log(val.toUpperCase());
}
```

### `isNotDefined(value)`

`isDefined` 的反向函数，判断值是否为 `null` 或 `undefined`。

```ts
import { isNotDefined } from "libra-js-kit/lib";

isNotDefined(null);     // true
isNotDefined(undefined);// true
isNotDefined("hello");  // false
isNotDefined(0);        // false
```

### `defaultValue(value, defaultValue)`

为未定义的值提供默认值。如果值已定义则返回该值，否则返回默认值。

```ts
import { defaultValue } from "libra-js-kit/lib";

defaultValue("hello", "world");  // "hello"
defaultValue(null, "world");     // "world"
defaultValue(undefined, 42);     // 42
defaultValue(0, 42);             // 0 — 0 是已定义的值
```

### `firstDefined(...values)`

从多个值中返回第一个已定义的值，类似于 SQL 的 `COALESCE`。

```ts
import { firstDefined } from "libra-js-kit/lib";

firstDefined(null, undefined, "hello", "world"); // "hello"
firstDefined(undefined, null, 0, 42);            // 0
firstDefined(null, undefined);                   // undefined
```

### `assertDefined(value)`

断言某个值一定存在，否则抛出错误。适用于逻辑上不可能为空但 TypeScript 不知道的情况。

```ts
import { assertDefined } from "libra-js-kit/lib";

const map = new Map<string, number>();
map.set("key", 123);

// get 返回 number | undefined，但你知道 "key" 一定存在
const val = assertDefined(map.get("key"));
// val 的类型被收窄为 number
console.log(val * 2); // 246

// 如果传入 null/undefined 会抛出错误
assertDefined(null); // ❌ Error: value is not defined
```
