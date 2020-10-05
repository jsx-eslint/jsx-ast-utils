/**
 * Extractor function for a MemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `MemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention,
 * or `obj?.property` if it occurs in a `ChainExpression`.
 */
export default function extractValueFromMemberExpression(value) {
  // eslint-disable-next-line global-require
  const getValue = require('./index.js').default;
  const separator = value.optional ? '?.' : '.';
  return `${getValue(value.object)}${separator}${getValue(value.property)}`;
}
