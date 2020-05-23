# babel-plugin-transform-runtime-file-extensions changelog

## Next

### Major

- Updated Node.js support to `^10.13.0 || ^12.0.0 || >= 13.7.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.

### Patch

- Also run GitHub Actions with Node.js v14.
- Transform `@babel/runtime/regenerator` require or import specifiers to `@babel/runtime/regenerator/index.js`, via [#1](https://github.com/jaydenseric/babel-plugin-transform-runtime-file-extensions/pull/1).
- Added more tests.

## 1.0.0

Initial release.
