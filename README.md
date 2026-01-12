# libra-js-kit

一个适用于各个业务系统的 JavaScript 工具包，使用 TypeScript 实现，支持子路径导出。

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

### libKit【定义工具】（位置：src/lib/index.ts）
提供了一些常用的定义工具，如判断变量是否已定义`isDefined`、获取默认值`defaultValue`等等。

### dataTypeKit【数据类型工具】


### renderKit【渲染工具】

### arrayKit【数组工具】

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