# string — 字符串处理

`string` 模块提供常用的字符串变换函数。

## 导入

```ts
// 全量引入
import { stringKit } from "libra-js-kit";

// 按需引入（推荐）
import { capitalize, reverse } from "libra-js-kit/string";
```

## API

### `capitalize(str)`

将字符串的首字母转为大写。

```ts
import { capitalize } from "libra-js-kit/string";

capitalize("hello world");  // "Hello world"
capitalize("a");            // "" — 长度为 1 时返回空字符串
```

### `allUpperCase(str)`

将字符串全部转为大写。

```ts
import { allUpperCase } from "libra-js-kit/string";

allUpperCase("hello world"); // "HELLO WORLD"
allUpperCase("Hello");       // "HELLO"
```

### `allLowerCase(str)`

将字符串全部转为小写。

```ts
import { allLowerCase } from "libra-js-kit/string";

allLowerCase("HELLO WORLD"); // "hello world"
allLowerCase("Hello");       // "hello"
```

### `reverse(str)`

反转字符串。

```ts
import { reverse } from "libra-js-kit/string";

reverse("hello world"); // "dlrow olleh"
reverse("12345");       // "54321"
reverse("a");           // "" — 长度为 1 时返回空字符串
```
