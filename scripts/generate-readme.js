import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import jsdoc2md from 'jsdoc-to-markdown';

// 获取当前文件所在目录（等效于 __dirname）
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// 路径配置
const rootDir = resolve(__dirname, '..');
const srcDir = join(rootDir, 'src');
const readmePath = join(rootDir, 'README.md');

// 异步检查文件是否存在
async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

// 主函数
async function generateDocs() {
  const items = await readdir(srcDir);
  console.log(items)
  const modules = [];

  for (const item of items) {
    const indexPath = join(srcDir, item, 'index.ts');
    if (await fileExists(indexPath)) {
      modules.push(item);
    }
  }
  console.log(modules)
  const docs = [];
  for (const module of modules) {
    const indexPath = join(srcDir, module, 'index.ts');
    console.log("132")
    console.log(module)
    console.log(indexPath)
    try {
      // jsdoc2md.render 支持 async/await
      const doc = await jsdoc2md.render({
        files: indexPath,
        // 可选：自定义模板或配置
      });

      if (doc.trim()) {
        docs.push(`##  $ {module}\n\n $ {doc}`);
      } else {
        console.warn(`⚠️  模块  $ {module} 未生成文档（可能缺少 JSDoc 注释）`);
      }
    } catch (err) {
      console.error(`❌ 处理模块  $ {module} 时出错:`, err.message);
    }
  }

  return docs.join('\n\n');
}

async function updateReadme() {
  const content = await generateDocs();
  let readme = await readFile(readmePath, 'utf8');

  const startTag = '<!-- AUTO-GENERATED-MODULES -->';
  const endTag = '<!-- /AUTO-GENERATED-MODULES -->';
  const regex = new RegExp(` $ {startTag}[\\s\\S]*? $ {endTag}`, 'g');

  const updatedReadme = readme.replace(
    regex,
    ` $ {startTag}\n\n $ {content}\n\n $ {endTag}`
  );

  await writeFile(readmePath, updatedReadme, 'utf8');
  console.log('✅ README.md 已成功更新！');
}

// 执行
updateReadme().catch((err) => {
  console.error('💥 脚本执行失败:', err);
  process.exit(1);
});