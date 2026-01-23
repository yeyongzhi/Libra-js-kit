# libra-js-kit

一个适用于各个业务系统的 JavaScript 工具包，使用 TypeScript 实现，支持子路径导出。
目的是为了让你的代码看上去更加优雅，更加规范
拒绝"屎山"，代码也是我们程序猿的艺术品

## 安装

```bash
npm install libra-js-kit
```

## 使用

```javascript
import * as libra from 'libra-js-kit'; // 导入所有工具包

import { libKit, dataTypeKit, renderKit } from 'libra-js-kit'; // 导入指定工具包

libra.libKit.isDefined('a'); // true
// or
libKit.isDefined('a'); // true
```

## 各个模块详解

### 🔥libKit【定义工具】（位置：src/lib/index.ts）
提供了一些常用的定义工具

#### 📌`isDefined`

判断变量是否已定义（非 null 或 undefined）

使用方法
js：`isDefined(value)`
ts: `isDefined<T>(value)`

```javascript
isDefined('a') // true
isDefined(null) // false
isDefined(undefined) // false
```

#### 📌`isNotDefined`

判断值是否为 null 或 undefined（isDefined 的反向）

使用方法
js：`isNotDefined(value)`

```javascript
isNotDefined('a') // false
isNotDefined(null) // true
isNotDefined(undefined) // true
```

#### 📌`defaultValue`

为未定义的值提供默认值

使用方法
js：`defaultValue(value, defaultValue)`
ts：`defaultValue<T>(value, defaultValue)`

```javascript
defaultValue('a', 'b') // 'a'
defaultValue(null, 'b') // 'b'
defaultValue(undefined, 'b') // 'b'
```

#### 📌`firstDefined`

从多个值中返回第一个已定义的值（类似 SQL COALESCE）

使用方法
js：`firstDefined(...values)`
ts：`firstDefined<T>(...values: T[])`

```javascript
firstDefined('a', null, 'b') // 'a'
firstDefined(null, undefined, 'b') // 'b'
firstDefined(null, undefined, null) // null
```

#### 📌`assertDefined`

断言值已定义（非 null 且非 undefined），否则**抛出错误**

使用方法
js：`assertDefined(value)`
ts：`assertDefined<T>(value)`

```javascript
assertDefined('a') // 无错误
assertDefined(null) // 抛出错误：Value is not defined
assertDefined(undefined) // 抛出错误：Value is not defined
```

### 🔥dataTypeKit【数据类型工具】

判断数据类型的工具函数集合，非常全面，你一定会用到

#### 📌`isString`

判断是否为`string`类型的数据

使用方法
js：`isString(value)`

```javascript
isString('a') // true
isString(123) // false
```

#### 📌`isNumber`

判断是否为`number`类型的数据

使用方法
js：`isNumber(value)`

```javascript
isNumber('a') // false
isNumber(123) // true
```

#### 📌`isBoolean`

判断是否为`boolean`类型的数据

使用方法
js：`isBoolean(value)`

```javascript
isBoolean('a') // false
isBoolean(true) // true
```

#### 📌`isNull`

判断是否为`null`类型的数据

使用方法
js：`isNull(value)`

```javascript
isNull('a') // false
isNull(null) // true
```

#### 📌`isUndefined`

判断是否为`undefined`类型的数据

使用方法
js：`isUndefined(value)`

```javascript
isUndefined('a') // false
isUndefined(undefined) // true
```

#### 📌`isSymbol`

判断是否为`symbol`类型的数据

使用方法
js：`isSymbol(value)`

```javascript
isSymbol('a') // false
isSymbol(Symbol('a')) // true
```

#### 📌`isBigInt`

判断是否为`bigint`类型的数据

使用方法
js：`isBigInt(value)`

```javascript
isBigInt('a') // false
isBigInt(123n) // true
```

#### 📌`isArray`

判断是否为`array`类型的数据

使用方法
js：`isArray(value)`

```javascript
isArray('a') // false
isArray([1,2,3]) // true
```

#### 📌`isObject`

判断是否为`object`类型的数据

使用方法
js：`isObject(value)`

```javascript
isObject('a') // false
isObject({a:1}) // true
```

#### 📌`isFunction`

判断是否为`function`类型的数据

使用方法
js：`isFunction(value)`

```javascript
isFunction('a') // false
isFunction(() => {}) // true
```

#### 📌`isDate`

判断是否为`date`类型的数据

使用方法
js：`isDate(value)`

```javascript
isDate('a') // false
isDate(new Date()) // true
```

#### 📌`isRegExp`

判断是否为`regExp`类型的数据

使用方法
js：`isRegExp(value)`

```javascript
isRegExp('a') // false
isRegExp(/a/) // true
```

#### 📌`isError`

判断是否为`error`类型的数据

使用方法
js：`isError(value)`

```javascript
isError('a') // false
isError(new Error('a')) // true
```

#### 📌`isMap`

判断是否为`map`类型的数据

使用方法
js：`isMap(value)`

```javascript
isMap('a') // false
isMap(new Map()) // true
```

#### 📌`isSet`

判断是否为`set`类型的数据

使用方法
js：`isSet(value)`

```javascript
isSet('a') // false
isSet(new Set()) // true
```

#### 📌`isPromise`

判断是否为`promise`类型的数据

使用方法
js：`isPromise(value)`

```javascript
isPromise('a') // false
isPromise(new Promise(() => {})) // true
```

---

### 🔥renderKit【渲染工具】

#### 📌`renderText`

渲染文本值，对于一些序列化的数据，请自行使用JSON.stringify方法

使用方法
js：`renderText(value)`

```javascript
renderText('a') // 'a'
renderText(123) // '123'
renderText(null) // ''
renderText(undefined) // ''
```

#### 📌`renderObjectValue`

渲染对象中的属性值

使用方法
js：`renderObjectValue(obj, key)`

```javascript
renderObjectValue({a:1}, 'a') // '1'
renderObjectValue({a:1}, 'b') // ''
renderObjectValue(null, 'a') // ''
renderObjectValue(undefined, 'a') // ''
```

#### 📌`renderTextByArray`

把数组中的每个元素依次渲染为字符串，并用指定的分隔符连接起来
常用于渲染人名、标签等场景

使用方法
js：`renderTextByArray(items, { separator = '、' })`

```javascript
renderTextByArray(['a', 'b', 'c']) // 'a、b、c'
renderTextByArray(['a', 'b', 'c'], { separator: '；' }) // 'a；b；c'
renderTextByArray(null) // ''
renderTextByArray(undefined) // ''
```

#### 📌`renderValueAndUnit`

渲染值和单位，常用于渲染文件大小、时间范围等场景

使用方法
js：`renderValueAndUnit(value, unit, { needBlock = true })`

```javascript
renderValueAndUnit(123, 'MB') // '123 MB'
renderValueAndUnit(123, 'MB', { needBlock: false }) // '123MB'
renderValueAndUnit(null, 'MB') // ''
renderValueAndUnit(undefined, 'MB') // ''
```

#### 📌`renderArrayLabelByValue`

渲染数组中指定值的标签
常用于渲染选项列表、状态显示等场景

使用方法
js：`renderArrayLabelByValue(value, options)`

```javascript
renderArrayLabelByValue('a', [{value:'a', label:'标签A'}, {value:'b', label:'标签B'}]) // '标签A'
renderArrayLabelByValue(['a', 'b'], [{value:'a', label:'标签A'}, {value:'b', label:'标签B'}]) // '标签A、标签B'
renderArrayLabelByValue(null, [{value:'a', label:'标签A'}, {value:'b', label:'标签B'}]) // ''
renderArrayLabelByValue(undefined, [{value:'a', label:'标签A'}, {value:'b', label:'标签B'}]) // ''
```

#### 📌`renderPercentage`

渲染百分比值，常用于渲染进度条、百分比显示等场景

使用方法
js：`renderPercentage(value, { precision = 2 })`

```javascript
renderPercentage(0.2634222, { precision: 2 }) // '26.34%'
renderPercentage(0.5, { precision: 0 }) // '50%'
```

#### 📌`renderFileSize`

渲染文件大小值，常用于渲染文件大小、下载速度等场景

使用方法
js：`renderFileSize(value, { precision = 2 })`

```javascript
renderFileSize(123456) // '123.46 KB'
renderFileSize(123456789) // '123.46 MB'
```

#### 📌`renderBoolean`

渲染布尔值，常用于渲染开关状态、权限显示等场景

使用方法
js：`renderBoolean(value, { trueText = '是', falseText = '否' })`

```javascript
renderBoolean(true) // '是'
renderBoolean(false) // '否'
```

#### 📌`renderEnum`

渲染枚举值，常用于渲染选项列表、状态显示等场景

使用方法
js：`renderEnum(value, Enums)`

```javascript
renderEnum('a', { a:'标签A', b:'标签B' }) // '标签A' 
```

#### 📌`renderEmpty`

渲染空值，当value不存在的时候，返回指定的占位符，默认值为空字符串

使用方法
js：`renderEmpty(value, placeholder = '暂无数据')`

```javascript
renderEmpty('a') // 'a'
renderEmpty(null, '暂无数据') // '暂无数据'
```

#### 📌`renderMaskedString`

渲染脱敏字符串（经过隐藏），常用于渲染手机号、身份证号等场景

使用方法
js：`renderMaskedString(value, options)`

参数说明：
- `value`：待脱敏的字符串或数字
- `options`：脱敏配置对象，包含以下属性：
  - `hideFirst`（可选）：隐藏前 N 位，默认值为 0
  - `hideLast`（可选）：隐藏后 N 位，默认值为 0
  - `hideMiddle`（可选）：隐藏中间 N 位，默认值为 0
  - `maskChar`（可选）：脱敏字符，默认值为 '*'
  - `keepFormat`（可选）：是否保留原始格式（清除非字母数字字符），默认值为 true

```javascript
renderMaskedString('12345678910', { hideMiddle: 4 }) // '1234****910'
```

#### 📌`renderTruncatedText`

渲染截断文本（超出最大长度时添加省略号）

使用方法
js：`renderTruncatedText(value, options)`

参数说明：
- `value`：待截断的字符串
- `options`：截断配置对象，包含以下属性：
  - `maxLength`（可选）：最大长度，默认值为 10
  - `ellipsis`（可选）：省略号，默认值为 '...'

```javascript
renderTruncatedText('12345678910', { maxLength: 5 }) // '12345...'
```

#### 📌`renderListSummary`

渲染列表摘要（最多显示前 N 个项，超出部分用 '等x项' 表示）

使用方法
js：`renderListSummary(items, options)`

参数说明：
- `items`：待渲染的列表项数组
- `options`：截断配置对象，包含以下属性：
  - `maxCount`（可选）：最大项数，默认值为 2
  - `suffix`（可选）：超出部分后缀，默认值为 '项'

```javascript
renderListSummary(['a', 'b', 'c', 'd', 'e'], { maxCount: 3 }) // 'a、b、c等2项'
```

### 🔥arrayKit【数组工具】

提供一些数组常用工具、补充原生Array数组方法的不足之处，提供更安全、便捷的操作。

工具函数如下所示：

#### 📌`chunk(array, size)`

将`数组(array)`拆分成多个大小为`size`的小数组

```javascript
chunk([1,2,3,4,5], 2)

// 得到
// [[1,2], [3,4], [5]]
```

#### 📌`flattenDeep(array)`

深度扁平化数组（递归展开所有嵌套层级）

```javascript
flattenDeep([1, [2, [3, [4]]]])

// 得到
// [1,2,3,4]
```

#### 📌`unique(array， key?)`

数组去重（支持基本类型和对象按 key 去重）

```javascript
unique([1,2,2,3])

// 得到
// [1,2,3]

unique([{id:1}, {id:2}, {id:1}], 'id')

// 得到
// [{id:1}, {id:2}]
```

### 🔥stringKit【字符串工具】

提供一些字符串常用工具、补充原生String字符串方法的不足之处，提供更安全、便捷的操作。

工具函数如下所示：

#### 📌`capitalize(str)`

首字母大写

```javascript
capitalize("hello world")

// 得到
// Hello world
```

#### 📌`reverse(str)`

字符串反转

```javascript
reverse("hello world")

// 得到
// dlrow olleh
```
