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
        lib: resolve(__dirname, 'src/lib/index.ts'),
        dataType: resolve(__dirname, 'src/dataType/index.ts'),
        render: resolve(__dirname, 'src/render/index.ts'),
        array: resolve(__dirname, 'src/array/index.ts'),
        string: resolve(__dirname, 'src/string/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      output: {
        preserveModules: true,
        exports: 'named'
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
