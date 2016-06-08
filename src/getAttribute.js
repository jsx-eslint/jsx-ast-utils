const DEFAULT_OPTIONS = {
  ignoreCase: true,
};

/**
 * Returns the JSXAttribute itself or undefined, indicating the attribute
 * is not present on the JSXOpeningElement.
 *
 */
export default function getAttribute(attributes = [], attribute = '', options = DEFAULT_OPTIONS) {
  let nodeAttribute = undefined;
  const attributeName = options.ignoreCase ? attribute.toUpperCase() : attribute;

  const hasAttr = attributes.some(attr => {
    // If the attributes contain a spread attribute, then skip.
    if (attr.type === 'JSXSpreadAttribute') {
      return false;
    }

    const currentAttribute = options.ignoreCase ? attr.name.name.toUpperCase() : attr.name.name;

    if (attributeName === currentAttribute) {
      nodeAttribute = attr;
      return true;
    }

    return false;
  });

  return hasAttr ? nodeAttribute : undefined;
}
