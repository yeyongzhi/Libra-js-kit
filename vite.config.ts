import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        render: resolve(__dirname, 'src/render/index.ts'),
        calculate: resolve(__dirname, 'src/calculate/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return format === 'es' ? 'index.mjs' : 'index.js';
        }
        return `${entryName}/index.${format === 'es' ? 'mjs' : 'js'}`;
      },
    },
    rollupOptions: {
      external: [],
      output: {
        preserveModules: false,
        exports: 'named',
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    }),
  ],
});
