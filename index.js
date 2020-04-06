'use strict';

/**
 * Checks if a specifier is an extensionless Babel runtime specifier.
 * @param {string} specifier Specifier to check.
 * @returns {boolean} Is the specifier an extensionless Babel runtime specifier.
 */
function isExtensionlessBabelRuntimeSpecifier(specifier) {
  return (
    specifier.startsWith('@babel/runtime/helpers/') &&
    !specifier.endsWith('.js')
  );
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
        if (
          path.node.source &&
          isExtensionlessBabelRuntimeSpecifier(path.node.source.value)
        )
          path.node.source.value = `${path.node.source.value}.js`;
      },

      // Example CallExpression:
      // require("@babel/runtime/helpers/objectWithoutPropertiesLoose");
      CallExpression(path) {
        if (path.node.callee.name === 'require') {
          const [specifier] = path.node.arguments;
          if (
            specifier &&
            specifier.type === 'StringLiteral' &&
            isExtensionlessBabelRuntimeSpecifier(specifier.value)
          )
            specifier.value = `${specifier.value}.js`;
        }
      },
    },
  };
};
