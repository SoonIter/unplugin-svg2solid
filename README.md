# unplugin-svg2solidcomp

[![NPM version](https://img.shields.io/npm/v/unplugin-svg2solidcomp?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-svg2solidcomp)

svg2solidcomp template for [unplugin](https://github.com/unjs/unplugin).

## Install

```bash
npm i unplugin-svg2solidcomp
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import svg2solidcomp from 'unplugin-svg2solidcomp/vite'

export default defineConfig({
  plugins: [
    svg2solidcomp({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import svg2solidcomp from 'unplugin-svg2solidcomp/rollup'

export default {
  plugins: [
    svg2solidcomp({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-svg2solidcomp/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-svg2solidcomp/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import svg2solidcomp from 'unplugin-svg2solidcomp/esbuild'

build({
  plugins: [svg2solidcomp()],
})
```

<br></details>
