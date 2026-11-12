/**
 * Extractor function for a MetaProperty type value node.
 * A meta property is `new.target` or `import.meta`.
 *
 * @param - value - AST Value object with type `MetaProperty`
 * @returns - The meta property as a string, like 'import.meta'.
 */
export default function extractValueFromMetaProperty(value) {
  return `${value.meta.name}.${value.property.name}`;
}
