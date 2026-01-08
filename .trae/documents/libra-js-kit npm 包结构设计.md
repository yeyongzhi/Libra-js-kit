# libra-js-kit npm 包结构设计

## 目录结构
```
libra-js-kit/
├── src/                  # 源代码目录
│   ├── index.ts          # 主入口文件
│   ├── render/           # render 子模块
│   │   ├── index.ts      # render 子模块入口
│   │   └── ...           # render 相关功能文件
│   ├── calculate/        # calculate 子模块
│   │   ├── index.ts      # calculate 子模块入口
│   │   └── ...           # calculate 相关功能文件
│   └── utils/            # 通用工具模块
│       ├── index.ts      # utils 子模块入口
│       └── ...           # 通用工具文件
├── dist/                 # 构建输出目录（自动生成）
│   ├── index.js          # 主入口构建文件
│   ├── index.d.ts        # 主入口类型声明
│   ├── render/           # render 子模块构建输出
│   │   ├── index.js
│   │   └── index.d.ts
│   ├── calculate/        # calculate 子模块构建输出
│   │   ├── index.js
│   │   └── index.d.ts
│   └── utils/            # utils 子模块构建输出
│       ├── index.js
│       └── index.d.ts
├── package.json          # 包配置文件
├── tsconfig.json         # TypeScript 配置
├── tsconfig.build.json   # TypeScript 构建配置
├── vite.config.ts        # Vite 构建配置
├── .gitignore            # Git 忽略配置
└── README.md             # 包说明文档
```

## 核心配置

### package.json
- 配置包名、版本、描述等基本信息
- 配置 `exports` 字段实现子路径导出
- 配置 `main`、`module`、`types` 字段确保兼容性
- 添加必要的脚本命令（build、test、lint 等）

### TypeScript 配置
- 使用 `tsconfig.json` 配置开发环境
- 使用 `tsconfig.build.json` 配置构建环境
- 配置 `declaration: true` 生成类型声明文件
- 配置 `outDir` 指向 `dist` 目录

### 构建工具
- 使用 Vite 作为构建工具，配置多入口构建
- 支持 ES Module 和 CommonJS 输出
- 自动生成类型声明文件

## 子路径导出配置

在 package.json 中配置 `exports` 字段：
```json
{
  "exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    },
    "./render": {
      "require": "./dist/render/index.js",
      "import": "./dist/render/index.mjs",
      "types": "./dist/render/index.d.ts"
    },
    "./calculate": {
      "require": "./dist/calculate/index.js",
      "import": "./dist/calculate/index.mjs",
      "types": "./dist/calculate/index.d.ts"
    },
    "./utils": {
      "require": "./dist/utils/index.js",
      "import": "./dist/utils/index.mjs",
      "types": "./dist/utils/index.d.ts"
    }
  }
}
```

## 实现步骤

1. 初始化 package.json
2. 安装必要依赖（TypeScript、Vite、@types/node 等）
3. 配置 TypeScript 相关文件
4. 配置 Vite 构建文件
5. 创建 .gitignore 文件
6. 创建源代码目录结构
7. 编写基础的模块代码示例
8. 配置构建脚本
9. 测试构建流程

这个结构设计支持：
- TypeScript 开发
- 子路径导出（如 `import { xxx } from 'libra-js-kit/render'`）
- 同时支持 ES Module 和 CommonJS
- 自动生成类型声明文件
- 现代化的构建流程

所有配置都将基于当前目录 `libra-js-kit` 进行设置，无需创建新目录。