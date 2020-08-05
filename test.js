'use strict';

const { strictEqual } = require('assert');
const babel = require('@babel/core');
const { TestDirector } = require('test-director');
const babelPluginTransformRuntimeFileExtensions = require('.');

const tests = new TestDirector();

tests.add('Import from Babel runtime, no extension.', () => {
  strictEqual(
    babel.transform(
      'import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";'
  );
});

tests.add('Import from Babel runtime, with extension.', () => {
  strictEqual(
    babel.transform(
      'import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";'
  );
});

tests.add('Import from Babel runtime core-js, no extension.', () => {
  strictEqual(
    babel.transform(
      'import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _Promise from "@babel/runtime-corejs3/core-js-stable/promise.js";'
  );
});

tests.add('Import from Babel runtime core-js, with extension.', () => {
  strictEqual(
    babel.transform(
      'import _Promise from "@babel/runtime-corejs3/core-js-stable/promise.js";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _Promise from "@babel/runtime-corejs3/core-js-stable/promise.js";'
  );
});

tests.add('Import from Babel runtime regenerator, no extension.', () => {
  strictEqual(
    babel.transform(
      'import _regeneratorRuntime from "@babel/runtime/regenerator";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _regeneratorRuntime from "@babel/runtime/regenerator/index.js";'
  );
});

tests.add('Import from Babel runtime regenerator, with extension.', () => {
  strictEqual(
    babel.transform(
      'import _regeneratorRuntime from "@babel/runtime/regenerator/index.js";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'import _regeneratorRuntime from "@babel/runtime/regenerator/index.js";'
  );
});

tests.add('Import not from Babel runtime.', () => {
  strictEqual(
    babel.transform('import a from "a";', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'import a from "a";'
  );
});

tests.add(
  'Import expression not from Babel runtime, string literal specifier.',
  () => {
    strictEqual(
      babel.transform('import("a");', {
        plugins: [babelPluginTransformRuntimeFileExtensions],
      }).code,
      'import("a");'
    );
  }
);

tests.add(
  'Import expression not from Babel runtime, non string literal specifier.',
  () => {
    strictEqual(
      babel.transform('import(`a`);', {
        plugins: [babelPluginTransformRuntimeFileExtensions],
      }).code,
      'import(`a`);'
    );
  }
);

tests.add('Export from Babel runtime, no extension.', () => {
  strictEqual(
    babel.transform(
      'export { default as _objectWithoutPropertiesLoose } from "@babel/runtime/helpers/objectWithoutPropertiesLoose";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'export { default as _objectWithoutPropertiesLoose } from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";'
  );
});

tests.add('Export from Babel runtime, with extension.', () => {
  strictEqual(
    babel.transform(
      'export { default as _objectWithoutPropertiesLoose } from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'export { default as _objectWithoutPropertiesLoose } from "@babel/runtime/helpers/objectWithoutPropertiesLoose.js";'
  );
});

tests.add('Export from Babel runtime regenerator, no extension.', () => {
  strictEqual(
    babel.transform(
      'export { default as _regeneratorRuntime } from "@babel/runtime/regenerator";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'export { default as _regeneratorRuntime } from "@babel/runtime/regenerator/index.js";'
  );
});

tests.add('Export from Babel runtime regenerator, with extension.', () => {
  strictEqual(
    babel.transform(
      'export { default as _regeneratorRuntime } from "@babel/runtime/regenerator/index.js";',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'export { default as _regeneratorRuntime } from "@babel/runtime/regenerator/index.js";'
  );
});

tests.add('Export not from Babel runtime.', () => {
  strictEqual(
    babel.transform('export { default as a } from "a";', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'export { default as a } from "a";'
  );
});

tests.add('Require from Babel runtime, no extension.', () => {
  strictEqual(
    babel.transform(
      'require("@babel/runtime/helpers/objectWithoutPropertiesLoose");',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'require("@babel/runtime/helpers/objectWithoutPropertiesLoose.js");'
  );
});

tests.add('Require from Babel runtime, with extension.', () => {
  strictEqual(
    babel.transform(
      'require("@babel/runtime/helpers/objectWithoutPropertiesLoose.js");',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'require("@babel/runtime/helpers/objectWithoutPropertiesLoose.js");'
  );
});

tests.add('Require from Babel runtime core-js, no extension.', () => {
  strictEqual(
    babel.transform(
      'require("@babel/runtime-corejs3/core-js-stable/promise");',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'require("@babel/runtime-corejs3/core-js-stable/promise.js");'
  );
});

tests.add('Require from Babel runtime core-js, with extension.', () => {
  strictEqual(
    babel.transform(
      'require("@babel/runtime-corejs3/core-js-stable/promise.js");',
      { plugins: [babelPluginTransformRuntimeFileExtensions] }
    ).code,
    'require("@babel/runtime-corejs3/core-js-stable/promise.js");'
  );
});

tests.add('Require from Babel runtime regenerator, no extension.', () => {
  strictEqual(
    babel.transform('require("@babel/runtime/regenerator");', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'require("@babel/runtime/regenerator/index.js");'
  );
});

tests.add('Require from Babel runtime regenerator, with extension.', () => {
  strictEqual(
    babel.transform('require("@babel/runtime/regenerator/index.js");', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'require("@babel/runtime/regenerator/index.js");'
  );
});

tests.add('Require not from Babel runtime, string literal specifier.', () => {
  strictEqual(
    babel.transform('require("a");', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'require("a");'
  );
});

tests.add(
  'Require not from Babel runtime, non string literal specifier.',
  () => {
    strictEqual(
      babel.transform('require(`a`);', {
        plugins: [babelPluginTransformRuntimeFileExtensions],
      }).code,
      'require(`a`);'
    );
  }
);

tests.run();
