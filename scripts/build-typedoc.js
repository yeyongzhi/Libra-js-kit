import { readdir, writeFile } from 'node:fs/promises';
import { statSync } from 'fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const srcDir = resolve(__dirname, '../src');
const rootDir = resolve(__dirname, '..');
const typedocConfigPath = resolve(__dirname, '../typedoc.json');

// 忽略的目录
const ignoreDirs = [];
async function generateTypedocConfig() {
    const items = await readdir(srcDir);
    const entryPoints = items
        .filter(item => {
            try {
                const fullPath = `src/${item}`;
                const stats = statSync(fullPath);
                return stats.isDirectory() && !ignoreDirs.includes(item);
            } catch (error) {
                // 如果路径不存在或无法访问，则不包含在结果中
                return false;
            }
        })
        .map(item => `src/${item}/index.ts`);
    console.log(`✅ 共获取到 ${entryPoints.length} 个入口文件`);
    const config = {
        entryPoints: ['src/index.ts'],
        out: 'docs',
        // plugin: [],
        plugin: ['typedoc-plugin-markdown'],
        tsconfig: "tsconfig.typedoc.json",  // 👈 关键！
        readme: "none",
        entryPointStrategy: "resolve",
        // disableOutputCheck: true,
        githubPages: false,
        hideGenerator: true,
        excludePrivate: true,
        excludeProtected: true,
        excludeNotDocumented: false
    };
    await writeFile(typedocConfigPath, JSON.stringify(config, null, 4));
    console.log('✅ TypeDoc 配置【typedoc.json】已生成');
}

async function main() {
    await generateTypedocConfig();
    execSync('npx typedoc', {
        stdio: 'inherit',
        cwd: rootDir,
    });
    console.log('✅ Markdown 文档已生成到 docs/');
}

main().catch(console.error);