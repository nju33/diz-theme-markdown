---
id: urn:uuid:7b26aff7-616c-437a-a5c7-bb5d0e2c8468
title: Markdown is diz theme
date: 2017-01-27T08:11:38.332Z
---

A is a simple theme with little ornament for diz.

##　Element

### headline

# h1
## h2
### h3
#### h4
##### h5

### List

1. foo
  1. hoge
2. bar
  1. fuga
3. baz
  1. piyo


- hoge
  - foo
- fuga
  - bar
- piyo
  - baz

### Image

![image](https://source.unsplash.com/category/nature/500x300)

### Blockquote

> Lorem ipsum dolor sit amet, tempor mauris suspendisse, velit fusce non. Erat hendrerit nibh. Blandit placerat, eget imperdiet lectus eget pede iaculis, litora massa risus elit et phasellus a, at metus sodales, nulla nisl. Ut tempor, curabitur blandit ut congue porttitor lobortis mauris,

### Table

|left|center|right|
|:--|:-:|--:|
|val|val|val|
|val|val|val|

### Code block

Using [nju33/magu](https://github.com/nju33/magu) and [nju33/magu-plugin-hljs](https://github.com/nju33/magu-plugin-hljs)

#### HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <p>html</p>
</body>
</html>
```

#### CSS

```css
body {
  font-size: 16px;
  overflow: hidden;
  padding: 1em;
}
```

#### JS

```js
mySingleton.getInstance = function () {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = new FooSingleton();
    } else {
      this._instance = new BasicSingleton();
    }
  }
  return this._instance;
};
```

### Inline elements

- `<a/>`
- `<em/>`
- `<strong/>`
- code span

Lorem [ipsum](https://nju33.github.io/diz-theme-minimalist/) dolor *sit* amet, tempor mauris **suspendisse**, velit fusce non. Erat hendrerit nibh. `Blandit placerat`, eget imperdiet lectus eget pede iaculis,
