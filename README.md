# diz-theme-markdown

A [Diz](https://github.com/nju33/diz) theme. [[demo](https://nju33.github.io/diz-theme-markdown)]

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/diz-theme-markdown.svg)

## Install

```bash
yarn add -D diz-theme-markdown
npm i -D diz-theme-markdown
```

## Customize

Clone this.

```bash
git clone git@github.com:nju33/diz-theme-markdown.git
# or git clone https://github.com/nju33/diz-theme-markdown.git
```

To prepare the environment.

```bash
cd <cloned directory path>
<npm or yarn> install
```

Edit `theme/**/*.jsx` files.

Then read in config.js.

```js
const CustomTheme = require('./path/to/custom-theme');

module.exports = {
  title: '...',
  url: '...',
  theme: {
    Renderer: CustomTheme,
    config: {base: '...'}
  }
}
```

## Options

```js
{
  theme: {
    Renderer: Markdown
    config: {
      //* option
      // Specify the path to the scripts directory
      // (e.g.)
      // When the blog's URL is like this
      // http://example.com/foo/
      // It is good to specify `/foo`
      base: null // default

      //* option
      // Whether to output CSS directly to the style tag of head
      // If wanna use it with your CSS, set it to false
      inlineCSS: true // default
      //* option
      // When A is false,
      // specify the public path up to
      // the CSS that you made
      stylesheetPath: '/styles/index.css' // default

      //* option
      // <html lang={lang}>
      lang: null // default
    }
  }
}
```

## Tips

Import CSS of this theme to your CSS.

### PostCSS

Let's install 2 packages
  - [postcss](https://github.com/postcss/postcss)
  - [postcss-import](https://github.com/postcss/postcss-import)

```bash
yarn add -D postcss postcss-import
```

Setup

```js
const postcss = require('postcss');
const atImport = require('postcss-import');

postcss([atImport])
  .process(cssContents)
  .then(...);
```

Import it at the beginning of the `.css` file.

```css
@import "diz-theme-minimalist";
/* == @import "./node_modules/diz-theme-minimalist/minimalist.css"; */
```

### Less

Let's install 2 packages
  - [less](https://github.com/less/less.js)
  - [less-plugin-npm-import](https://github.com/less/less-plugin-npm-import)

```bash
yarn add -D less less-plugin-npm-import
```

Setup

```js
const less = require('less');
const NpmImportPlugin = require('less-plugin-npm-import');

less.render(lessContents, {plugins: [new NpmImportPlugin()]})
  .then(...);
```

Import it at the beginning of the `*.less` file.

```css
@import (less) "npm://diz-theme-minimalist/minimalist.css";
```

### Sass

Let's install 2 packages
  - [node-sass](https://github.com/sass/node-sass)
  - [sass-module-importer](https://github.com/lucasmotta/sass-module-importer)

```bash
yarn add -D node-sass sass-module-importer
```

Setup

```js
const sass = require('node-sass');
const moduleImporter = require('sass-module-importer');

sass.render({
  file: 'path/to/*.scss',
  importer: moduleImporter()
}, callback);
```

Import it at the beginning of the `*.scss` or `*.sass` file.

```css
@import "diz-theme-minimalist"
```

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 <nju33.ki@gmail.com>
