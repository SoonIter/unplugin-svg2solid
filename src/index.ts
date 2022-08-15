import fs, { readFileSync } from 'fs';
import path from 'path';
import { createUnplugin } from 'unplugin';
import resolve from 'resolve';
import type { Options } from './types';
import { SolidCompiler } from './utils/solidCompCompiler';

export default createUnplugin<Options>((options) => {
  const m = new Map<string, string>();

  return {
    name: 'unplugin-svg2solid',
    enforce: 'pre',

    resolveId(id, importee) {
      if (id.endsWith('.svg')) {
        const where = path.resolve(path.dirname(importee as string), id);
        const code = fs.readFileSync(where, 'utf-8');
        const resolveId = where.replace('.svg', '.tsx');
        m.set(resolveId, code);
        return resolveId;
      }
    },
    async load(id: string) {
      const key = [...m.keys()].find(i => i.includes(id));

      if (key)
        return { code: SolidCompiler(m.get(key) ?? '') ?? '' };
    },
  };
});
