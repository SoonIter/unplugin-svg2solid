import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import solidPlugin from 'vite-plugin-solid';
import svgCompiler from 'unplugin-svg-solidcomp/vite';
import Inspect from 'vite-plugin-inspect';
export default defineConfig({
  plugins: [
    solidPlugin(),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/types/auto-imports.d.ts',
    }),
    svgCompiler(),
    Inspect(),
  ],
  build: {
    target: 'esnext',
  },
});
