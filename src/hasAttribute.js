const DEFAULT_OPTIONS = {
  spreadStrict: true,
  ignoreCase: true,
};

/**
 * Returns boolean indicating whether an attribute exists on the attributes
 * property of a JSX element node.
 */
export default function hasAttribute(attributes = [], attribute = '', options = DEFAULT_OPTIONS) {
  const attributeName = options.ignoreCase ? attribute.toUpperCase() : attribute;

  return attributes.some(attr => {
    // If the attributes contain a spread attribute, then refer to strict param.
    if (attr.type === 'JSXSpreadAttribute') {
      return !options.spreadStrict;
    }

    const currentAttribute = options.ignoreCase ? attr.name.name.toUpperCase() : attr.name.name;

    return attributeName === currentAttribute;
  });
}
