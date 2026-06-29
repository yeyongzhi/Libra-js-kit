/**
 * 将 TypeDoc 生成的 docs/ 同步到 VitePress 站点的 doc/api/ 目录
 *
 * 流程：
 * 1. 清空 doc/api/（处理删除的文件）
 * 2. 递归复制 docs/ → doc/api/
 *
 * 运行方式：node scripts/sync-docs.js
 */

import { rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = resolve(__dirname, "..");
const srcDir = resolve(rootDir, "docs");
const destDir = resolve(rootDir, "doc", "api");

async function sync() {
  // 如果源目录不存在，跳过（首次运行前需要先执行 docs:typedoc）
  if (!existsSync(srcDir)) {
    console.log("⚠️  docs/ 目录不存在，请先运行 pnpm docs:typedoc 生成 API 文档");
    return;
  }

  // 清空目标目录
  if (existsSync(destDir)) {
    await rm(destDir, { recursive: true, force: true });
    console.log("🧹 已清空 doc/api/");
  }

  // 递归复制
  await cp(srcDir, destDir, { recursive: true });
  console.log("✅ API 文档已同步至 doc/api/");
}

sync().catch((err) => {
  console.error("❌ 同步失败：", err);
  process.exit(1);
});
