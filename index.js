'use strict';

/**
 * Checks if a specifier is an extensionless Babel runtime specifier. If so,
 * adds the extension.
 * @param {string} specifier Specifier to check.
 * @returns {boolean} Is the specifier an extensionless Babel runtime specifier.
 */
function transform(specifier) {
  if (
    specifier.value.startsWith('@babel/runtime/helpers/') &&
    !specifier.value.endsWith('.js')
  ) {
    specifier.value = `${specifier.value}.js`;
  } else if (specifier.value === '@babel/runtime/regenerator') {
    specifier.value = `${specifier.value}/index.js`;
  }
}

/**
 * A Babel plugin that adds file extensions to Babel runtime import specifiers
 * and require paths for Node.js ESM compatibility.
 * @returns {object} Babel plugin object.
 * @see [babel/babel#8462](https://github.com/babel/babel/issues/8462).
 */
module.exports = function babelPluginTransformRuntimeFileExtensions() {
  return {
    name: 'transform-runtime-file-extensions',
    visitor: {
      // Example ImportDeclaration:
      //   import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
      // Example ExportNamedDeclaration (unlikely to occur):
      //   export { default as _objectWithoutPropertiesLoose } from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
      'ImportDeclaration|ExportNamedDeclaration'(path) {
        if (path.node.source) {
          transform(path.node.source);
        }
      },

      // Example CallExpression:
      // require("@babel/runtime/helpers/objectWithoutPropertiesLoose");
      CallExpression(path) {
        if (path.node.callee.name === 'require') {
          const [specifier] = path.node.arguments;
          if (specifier && specifier.type === 'StringLiteral') {
            transform(specifier);
          }
        }
      },
    },
  };
};
