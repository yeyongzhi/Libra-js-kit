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