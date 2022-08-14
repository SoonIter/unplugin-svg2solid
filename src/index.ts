import { readFileSync } from 'fs';
import { createUnplugin } from 'unplugin';
import type { Options } from './types';
import fs from 'fs';
import resolve from 'resolve';
import { SolidCompiler } from './utils/solidCompCompiler';
import path from 'path';

export default createUnplugin<Options>(options => {
  // let resolveId = '.svg';
  // let _code = '';
  const m = new Map<string, string>();

  return {
    name: 'unplugin-svg2solidcomp',
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

      if (key) {
        return { code: SolidCompiler(m.get(key) ?? '') ?? '' };
      }
    },
  };
});
