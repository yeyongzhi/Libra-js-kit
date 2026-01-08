# libra-js-kit

一个适用于各个业务系统的 JavaScript 工具包，使用 TypeScript 实现，支持子路径导出。

## 安装

```bash
npm install libra-js-kit
```

## 使用

### 整体导入

```javascript
import * as libra from 'libra-js-kit';

// 使用 render 模块
libra.safeRenderHtml('<div>Hello World</div>');

// 使用 calculate 模块
libra.add(0.1, 0.2);

// 使用 utils 模块
libra.deepClone({ name: 'test' });
```

### 子路径导出

```javascript
// 只导入 render 模块
import { safeRenderHtml, createElement } from 'libra-js-kit/render';

// 只导入 calculate 模块
import { add, subtract, multiply, divide } from 'libra-js-kit/calculate';

// 只导入 utils 模块
import { deepClone, debounce, throttle } from 'libra-js-kit/utils';
```

## 模块说明

### render 模块

提供渲染相关的工具函数。

#### `safeRenderHtml(html: string): string`
安全地渲染 HTML 内容，移除潜在的恶意脚本。

```javascript
import { safeRenderHtml } from 'libra-js-kit/render';

const html = '<script>alert("xss");</script><div>Hello</div>';
const safeHtml = safeRenderHtml(html);
// 输出: <div>Hello</div>
```

#### `createElement(tagName, attributes, children): HTMLElement`
创建 DOM 元素，支持设置属性和添加子元素。

```javascript
import { createElement } from 'libra-js-kit/render';

const div = createElement('div', 
  { class: 'container', id: 'main' }, 
  'Hello World'
);
// 创建: <div class="container" id="main">Hello World</div>
```

#### `debounceRender(func, delay): Function`
防抖函数，用于优化频繁触发的渲染操作。

```javascript
import { debounceRender } from 'libra-js-kit/render';

const debouncedRender = debounceRender(() => {
  // 执行渲染操作
}, 200);
```

### calculate 模块

提供精确计算相关的工具函数。

#### `add(a, b): number`
精确加法运算。

```javascript
import { add } from 'libra-js-kit/calculate';

console.log(add(0.1, 0.2)); // 输出: 0.3
```

#### `subtract(a, b): number`
精确减法运算。

```javascript
import { subtract } from 'libra-js-kit/calculate';

console.log(subtract(0.3, 0.1)); // 输出: 0.2
```

#### `multiply(a, b): number`
精确乘法运算。

```javascript
import { multiply } from 'libra-js-kit/calculate';

console.log(multiply(0.1, 0.2)); // 输出: 0.02
```

#### `divide(a, b): number`
精确除法运算。

```javascript
import { divide } from 'libra-js-kit/calculate';

console.log(divide(0.3, 0.1)); // 输出: 3
```

#### `formatNumber(num): string`
格式化数字，添加千分位分隔符。

```javascript
import { formatNumber } from 'libra-js-kit/calculate';

console.log(formatNumber(1234567.89)); // 输出: 1,234,567.89
```

### utils 模块

提供通用工具函数。

#### `getType(value): string`
获取值的类型。

```javascript
import { getType } from 'libra-js-kit/utils';

console.log(getType('string')); // 输出: string
console.log(getType(123)); // 输出: number
console.log(getType({})); // 输出: object
```

#### `deepClone(obj): T`
深拷贝对象。

```javascript
import { deepClone } from 'libra-js-kit/utils';

const obj = { name: 'test', nested: { value: 1 } };
const cloned = deepClone(obj);
// 克隆后的对象与原对象完全独立
```

#### `debounce(func, delay): Function`
防抖函数。

```javascript
import { debounce } from 'libra-js-kit/utils';

const debounced = debounce(() => {
  // 执行操作
}, 300);
```

#### `throttle(func, delay): Function`
节流函数。

```javascript
import { throttle } from 'libra-js-kit/utils';

const throttled = throttle(() => {
  // 执行操作
}, 300);
```

#### `generateId(prefix): string`
生成唯一 ID。

```javascript
import { generateId } from 'libra-js-kit/utils';

const id = generateId('user');
// 输出类似: user_1234567890_abc123
```

## 构建

```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

构建结果将输出到 `dist` 目录。

## 开发

```bash
# 开发模式
npm run dev
```

## 许可证

ISC
