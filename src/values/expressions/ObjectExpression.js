import getValue from './index';

/**
 * Extractor function for an ObjectExpression type value node.
 * An object expression is using {}.
 *
 * @returns - a representation of the object
 */
export default function extractValueFromObjectExpression(value) {
  return value.properties.reduce((obj, property) => {
    const object = Object.assign({}, obj);
    if (property.type === 'SpreadProperty') {
      if (property.argument.type === 'ObjectExpression') {
        return Object.assign(object, extractValueFromObjectExpression(property.argument));
      }
    } else {
      object[getValue(property.key)] = getValue(property.value);
    }
    return object;
  }, {});
}
