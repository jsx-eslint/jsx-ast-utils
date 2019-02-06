import getProp from '../src/getProp';

const parser = require('@babel/parser');

const defaultPlugins = ['jsx', 'functionBind', 'estree', 'objectRestSpread', 'optionalChaining'];
let plugins = [...defaultPlugins];

export function changePlugins(pluginOrFn) {
  if (Array.isArray(pluginOrFn)) {
    plugins = pluginOrFn;
  } else if (typeof pluginOrFn === 'function') {
    plugins = pluginOrFn(plugins);
  } else {
    throw new Error('changePlugins argument should be either an array or a function');
  }
}

/* eslint-disable */
beforeEach(() => {
  plugins = [...defaultPlugins];
});
/* eslint-enable */

function parse(code) {
  return parser.parse(code, { plugins });
}

export function getOpeningElement(code) {
  return parse(code).program.body[0].expression.openingElement;
}

export function extractProp(code, prop = 'foo') {
  const node = getOpeningElement(code);
  const { attributes: props } = node;
  return getProp(props, prop);
}
