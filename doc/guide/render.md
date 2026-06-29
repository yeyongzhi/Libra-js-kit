# render — 数据渲染

`render` 模块是功能最丰富的模块之一，提供了 14 个渲染函数和配套的 TypeScript 类型定义。适用于将后端数据转换为前端展示格式，涵盖文件大小、百分比、脱敏、截断、列表摘要等常见场景。

## 导入

```ts
// 全量引入
import { renderKit } from "libra-js-kit";

// 按需引入（推荐）
import { renderFileSize, renderPercentage, renderMaskedString } from "libra-js-kit/render";
```

## 文本渲染

### `renderText(value)`

渲染文本值。对于需要序列化的数据，请自行使用 `JSON.stringify`。

```ts
import { renderText } from "libra-js-kit/render";

renderText("hello");  // "hello"
renderText(123);      // "123"
renderText(null);     // ""（空值返回空字符串）
```

### `renderTextByArray(items, params?)`

将字符串数组用指定分隔符拼接。

```ts
import { renderTextByArray } from "libra-js-kit/render";

renderTextByArray(["苹果", "香蕉", "橘子"]);
// "苹果、香蕉、橘子"（默认用中文顿号分隔）

renderTextByArray(["苹果", "香蕉", "橘子"], { separator: ", " });
// "苹果, 香蕉, 橘子"
```

### `renderObjectValue(obj, key)`

安全地渲染对象的某个属性值。

```ts
import { renderObjectValue } from "libra-js-kit/render";

const user = { name: "张三", age: 25 };
renderObjectValue(user, "name"); // "张三"
renderObjectValue(user, "age");  // "25"
```

## 值与单位

### `renderValueAndUnit(value, unit, params?)`

渲染值和单位，支持是否需要空格。

```ts
import { renderValueAndUnit } from "libra-js-kit/render";

renderValueAndUnit(100, "元");
// "100元"

renderValueAndUnit(100, "元", { needBlock: true });
// "100 元"
```

### `renderPercentage(value, params?)`

渲染百分比。

```ts
import { renderPercentage } from "libra-js-kit/render";

renderPercentage(0.856);
// "85.6%"

renderPercentage(0.856, { precision: 0 });
// "86%"

renderPercentage(0.856, { precision: 2, needBlock: true });
// "85.60 %"
```

### `renderFileSize(bytes, params?)`

将字节数自动转换为最合适的文件大小单位（B/KB/MB/GB/TB）。

```ts
import { renderFileSize } from "libra-js-kit/render";

renderFileSize(1024);
// "1.00 KB"

renderFileSize(1048576, { precision: 0 });
// "1 MB"

renderFileSize(1500000, { precision: 2 });
// "1.43 MB"
```

### `renderBoolean(value, params?)`

渲染布尔值，默认显示"是"/"否"。

```ts
import { renderBoolean } from "libra-js-kit/render";

renderBoolean(true);   // "是"
renderBoolean(false);  // "否"

renderBoolean(true, { trueText: "启用", falseText: "禁用" });
// "启用"
```

### `renderEnum(value, mapping)`

根据映射对象渲染枚举值。

```ts
import { renderEnum } from "libra-js-kit/render";

const statusMap = {
  active: "激活",
  inactive: "未激活",
  pending: "待审核",
};

renderEnum("active", statusMap);   // "激活"
renderEnum("deleted", statusMap);  // "deleted"（未映射的 key 返回原值）
```

### `renderEmpty(value, placeholder?)`

渲染空值占位，`null`/`undefined`/`""` 均视为空值。

```ts
import { renderEmpty } from "libra-js-kit/render";

renderEmpty(null);            // "-"（默认占位符）
renderEmpty(undefined, "/");  // "/"
renderEmpty("hello");         // "hello"
renderEmpty("", "无");        // "无"
```

### `renderArrayLabelByValue(value, options)`

根据 value 查找 options 数组中对应的 label 并渲染。

```ts
import { renderArrayLabelByValue } from "libra-js-kit/render";

const options = [
  { value: 1, label: "苹果" },
  { value: 2, label: "香蕉" },
];

renderArrayLabelByValue(1, options); // "苹果"
renderArrayLabelByValue(3, options); // ""（未找到时返回空）
```

## 脱敏与截断

### `renderMaskedString(value, params?)`

通用字符串脱敏渲染，支持遮挡前 N 位、后 N 位或中间部分。

```ts
import { renderMaskedString } from "libra-js-kit/render";

// 手机号脱敏：遮挡中间 4 位
renderMaskedString("13800138000", {
  hideFirst: 3,   // 保留前 3 位
  hideLast: 4,    // 保留后 4 位
});
// "138****8000"

// 身份证脱敏
renderMaskedString("110101199001011234", {
  hideFirst: 6,
  hideLast: 4,
  maskChar: "*",
});

// 邮箱脱敏：只显示前 3 位和域名
renderMaskedString("zhangsan@example.com", {
  hideMiddle: { start: 3, end: "@" },
  keepFormat: true,
});
```

### `renderTruncatedText(text, params?)`

截断过长的文本，超出最大长度时添加省略号。

```ts
import { renderTruncatedText } from "libra-js-kit/render";

renderTruncatedText("这是一段很长的文本内容需要截断", { maxLength: 10 });
// "这是一段很长的文本内..."

renderTruncatedText("短文本", { maxLength: 10 });
// "短文本"（未超出时不截断）

renderTruncatedText("长文本", { maxLength: 5, ellipsis: "…" });
// "长文本…"
```

### `renderListSummary(items, params?)`

渲染列表摘要，最多显示前 N 项，超出的用"等 x 项"表示。

```ts
import { renderListSummary } from "libra-js-kit/render";

renderListSummary(["张三", "李四", "王五"], { maxCount: 2 });
// "张三、李四等1项"

renderListSummary(["张三", "李四", "王五", "赵六"], {
  maxCount: 2,
  suffix: "等人",
});
// "张三、李四等人"
```

## 时间范围

### `renderTimeRange(startTime, endTime, params?)`

渲染时间范围。

```ts
import { renderTimeRange } from "libra-js-kit/render";

renderTimeRange("2024-01-01", "2024-12-31");
// "2024-01-01 ~ 2024-12-31"

renderTimeRange("2024-01-01", "2024-12-31", {
  separator: " 至 ",
  format: "YYYY年MM月DD日",
  needBlock: true,
});
```
