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

    // The 'ExperimentalSpreadProperty' only has an `argument` property, rather
    // than a `key` and `value`.
    const propKey = property.key || property.argument;
    const propValue = property.value || property.argument;

    object[getValue(propKey)] = getValue(propValue);
    return object;
  }, {});
}
