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

tests.add('Import not from Babel runtime.', () => {
  strictEqual(
    babel.transform('import a from "a";', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'import a from "a";'
  );
});

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

tests.add('Require not from Babel runtime.', () => {
  strictEqual(
    babel.transform('require("a");', {
      plugins: [babelPluginTransformRuntimeFileExtensions],
    }).code,
    'require("a");'
  );
});

tests.run();
