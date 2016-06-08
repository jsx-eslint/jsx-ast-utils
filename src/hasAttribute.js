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

/**
 * Given the attributes on a node and a list of attributes to check, this returns a boolean
 * indicating if any of them exist on the node.
 */
export function hasAnyAttribute(nodeAttributes = [], attributes = [], options = DEFAULT_OPTIONS) {
  const attributesToCheck = typeof attributes === 'string' ? attributes.split(' ') : attributes;

  return attributesToCheck.some(attribute => hasAttribute(nodeAttributes, attribute, options));
}

/**
 * Given the attributes on a node and a list of attributes to check, this returns a boolean
 * indicating if all of them exist on the node
 */
export function hasEveryAttribute(nodeAttributes = [], attributes = [], options = DEFAULT_OPTIONS) {
  const attributesToCheck = typeof attributes === 'string' ? attributes.split(' ') : attributes;

  return attributesToCheck.every(attribute => hasAttribute(nodeAttributes, attribute, options));
}
