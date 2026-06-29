# 🛠️ libra-js-kit

<p align="center">
  <a href="https://www.npmjs.com/package/libra-js-kit">
    <img src="https://img.shields.io/npm/v/libra-js-kit?color=blue&label=npm" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/libra-js-kit">
    <img src="https://img.shields.io/npm/dm/libra-js-kit?color=blue" alt="npm downloads">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/npm/l/libra-js-kit?color=green" alt="license">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.0+">
  </a>
</p>

> 一个专为各类业务系统打造的现代化 JavaScript 工具包，助你写出更优雅、更规范、更可维护的代码。

## ✨ 特性

- 🚀 **TypeScript 编写** — 类型安全，IDE 智能提示开箱即用
- 🧱 **Tree-shakable** — 支持子路径导入，按需引入，零冗余
- 📦 **场景丰富** — 覆盖数组操作、类型判断、数据渲染、字符串处理、格式校验等常用场景
- ✅ **单元测试** — 关键逻辑有测试覆盖，稳定可靠
- 📖 **模块化设计** — 每个功能独立成模块，结构清晰，易于扩展

## 📦 安装

```bash
npm install libra-js-kit
```

```bash
yarn add libra-js-kit
```

```bash
pnpm add libra-js-kit
```

> **环境要求**：Node.js >= 16，TypeScript >= 5.0

## 🚀 快速开始

```typescript
// 方式一：从主入口导入
import { arrayKit, validateKit } from 'libra-js-kit';

arrayKit.unique([1, 2, 2, 3]);          // [1, 2, 3]
validateKit.isValidEmail('a@b.com');     // true

// 方式二：子路径导入（推荐，支持 Tree-shaking）
import { chunk, groupBy } from 'libra-js-kit/array';
import { isValidPhone, isValidIDCard } from 'libra-js-kit/validate';

chunk([1, 2, 3, 4, 5], 2);              // [[1, 2], [3, 4], [5]]
isValidPhone('13800138000');             // true
```

## 📚 模块

| 模块 | 导入路径 | 说明 |
|------|---------|------|
| **arrayKit** | `libra-js-kit/array` | 数组操作：分块、去重、扁平化、分组、交集/差集、随机取值、转树形结构 |
| **dataTypeKit** | `libra-js-kit/dataType` | 类型判断：`isArray`、`isObject`、`isString`、`isPromise` 等 17 个精准判断方法 |
| **libKit** | `libra-js-kit/lib` | 通用工具：断言 `assertDefined`、默认值 `defaultValue`、空值判断等 |
| **renderKit** | `libra-js-kit/render` | 数据渲染：布尔值、文件大小、百分比、时间范围、脱敏字符串、截断文本等 |
| **stringKit** | `libra-js-kit/string` | 字符串处理：首字母大写、全大写/全小写、反转 |
| **validateKit** | `libra-js-kit/validate` | 格式校验：身份证、手机号、邮箱、银行卡、车牌、统一社会信用代码等 17 项 |

## 📖 API 文档

完整 API 文档请查看 [docs/README.md](./docs/README.md)

## 📝 更新日志

版本变更记录请查看 [CHANGELOG.md](./CHANGELOG.md)

## 📄 许可证

本项目基于 [MIT](./LICENSE) 协议开源。

## 🤝 参与贡献

欢迎提交 Issue 反馈问题或提出改进建议，也欢迎直接提交 Pull Request。
