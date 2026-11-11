/**
 * Extractor function for a JSXEmptyExpression type value node.
 * An empty expression is an expression container with nothing in it,
 * for example one that only holds a comment. It renders nothing.
 *
 * @returns - undefined, since there is no value.
 */
export default function extractValueFromJSXEmptyExpression() {
  return undefined;
}
