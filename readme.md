# babel-plugin-transform-runtime-file-extensions

[![npm version](https://badgen.net/npm/v/babel-plugin-transform-runtime-file-extensions)](https://npm.im/babel-plugin-transform-runtime-file-extensions) [![CI status](https://github.com/jaydenseric/babel-plugin-transform-runtime-file-extensions/workflows/CI/badge.svg)](https://github.com/jaydenseric/babel-plugin-transform-runtime-file-extensions/actions)

A [Babel](https://babeljs.io) plugin that adds file extensions to Babel runtime `import` specifiers and `require` paths for [Node.js ESM compatibility](https://nodejs.org/api/esm.html#esm_mandatory_file_extensions).

This is a temporary workaround for [babel/babel#8462](https://github.com/babel/babel/issues/8462).

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install babel-plugin-transform-runtime-file-extensions --save-dev
```

Configure Babel to use the plugin, after [`@babel/plugin-transform-runtime`](https://npm.im/@babel/plugin-transform-runtime):

```json
{
  "plugins": ["@babel/transform-runtime", "transform-runtime-file-extensions"]
}
```
