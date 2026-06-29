# Changelog

本项目的所有重要变更均会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

## [1.1.0] - 2026-06-29

### Added

- **VitePress 文档站点** — 基于 VitePress 搭建的文档站点，支持本地开发和构建部署
  - 首页：项目介绍、特性展示、快速入口
  - 快速开始指南：`doc/guide/getting-started.md`
  - 各模块使用文档：`doc/guide/array.md`、`data-type.md`、`lib.md`、`render.md`、`string.md`、`validate.md`
  - 新增 `doc:dev`、`doc:build`、`doc:preview` 脚本
- **交互式提交脚本** — 新增 `scripts/commit.ts`，提供引导式 git commit 流程
- **文档同步脚本** — 新增 `scripts/sync-docs.js`，自动将 TypeDoc 生成的 API 文档同步到 VitePress 站点

### Changed

- **README.md 规范化** — 补充 npm badges、快速开始示例、模块列表表格、许可证及贡献指南章节
- **CHANGELOG.md 规范化** — 修复日期格式，补充 v1.0.0 完整变更记录，添加版本比较链接
- **TypeDoc API 文档更新** — 重新生成全部 API 参考文档，参数说明更完整
- **.gitignore** — 忽略自动生成的 `doc/api/` 目录

## [1.0.0] - 2026-03-17

### Added

- 首次正式发布 🎉
- **arrayKit** — 数组操作模块
  - `chunk` — 按指定大小分块
  - `difference` — 差集计算
  - `flattenDeep` — 深度扁平化
  - `groupBy` — 按键值分组
  - `intersection` — 交集计算
  - `randomItem` — 随机取元素
  - `transArrayToTree` — 扁平数组转树形结构
  - `unique` — 数组去重（支持对象按 key 去重）
- **dataTypeKit** — 类型判断模块
  - `isArray`、`isBigInt`、`isBoolean`、`isDate`、`isError`、`isFunction`
  - `isMap`、`isNaN`、`isNull`、`isNumber`、`isObject`、`isPromise`
  - `isRegExp`、`isSet`、`isString`、`isSymbol`、`isUndefined`
  - `toString` — 安全转字符串
- **libKit** — 通用工具模块
  - `assertDefined` — 断言值已定义
  - `defaultValue` — 提供默认值
  - `firstDefined` — 返回第一个已定义的值
  - `isDefined` / `isNotDefined` — 空值判断
- **renderKit** — 数据渲染模块
  - `renderArrayLabelByValue` — 按值匹配标签
  - `renderBoolean` — 布尔值格式化
  - `renderEmpty` — 空值占位渲染
  - `renderEnum` — 枚举映射渲染
  - `renderFileSize` — 文件大小格式化
  - `renderListSummary` — 列表摘要渲染
  - `renderMaskedString` — 字符串脱敏
  - `renderObjectValue` — 对象属性值渲染
  - `renderPercentage` — 百分比格式化
  - `renderText` / `renderTextByArray` — 文本渲染
  - `renderTimeRange` — 时间范围渲染
  - `renderTruncatedText` — 文本截断
  - `renderValueAndUnit` — 值与单位拼接
- **stringKit** — 字符串处理模块
  - `allLowerCase` — 全转小写
  - `allUpperCase` — 全转大写
  - `capitalize` — 首字母大写
  - `reverse` — 字符串反转
- **validateKit** — 格式校验模块
  - `isValidBankCard` — 银行卡号（Luhn 算法）
  - `isValidCreditCode` — 统一社会信用代码
  - `isValidEmail` — 邮箱
  - `isValidEmailOrPhone` — 邮箱或手机号
  - `isValidIDCard` — 身份证号（15/18 位）
  - `isValidIP` / `isValidIPv4` / `isValidIPv6` — IP 地址
  - `isValidLicensePlate` — 车牌号
  - `isValidMAC` — MAC 地址
  - `isValidOrgCode` — 组织机构代码
  - `isValidPassport` — 护照号
  - `isValidPhone` — 手机号
  - `isValidPhoneOrTel` — 手机号或固话
  - `isValidQQ` — QQ 号
  - `isValidURL` — URL 地址
  - `isValidWeChat` — 微信号
  - `isValidZipCode` — 邮政编码
- 支持 ESM 和 CJS 双格式输出
- 支持子路径导入（Tree-shaking）
- TypeScript 类型声明完整

[1.1.0]: https://github.com/yeyongzhi/Libra-js-kit/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/yeyongzhi/Libra-js-kit/releases/tag/v1.0.0
