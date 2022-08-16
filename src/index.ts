import { readFileSync } from 'fs';
import path from 'path';
import { createUnplugin } from 'unplugin';
import type { Options } from './types';
import { SolidCompiler } from './utils/solidCompCompiler';

export default createUnplugin<Options>((options) => {
  const m = new Map<string, string>();

  return {
    name: 'unplugin-svg2solid',
    enforce: 'pre',

    resolveId(id, importer) {
      if (id.endsWith('.svg')) {
        const where = path.resolve(path.dirname(importer as string), id);
        const code = readFileSync(where, 'utf-8');
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
