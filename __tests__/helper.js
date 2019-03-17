import getProp from '../src/getProp';

const parser = require('babylon');

function parse(code) {
  return parser.parse(code, {
    plugins: [
      'estree',
      'functionBind',
      'jsx',
      'objectRestSpread',
      'optionalChaining',
    ],
  });
}

export function getOpeningElement(code) {
  return parse(code).program.body[0].expression.openingElement;
}

export function extractProp(code, prop = 'foo') {
  const node = getOpeningElement(code);
  const { attributes: props } = node;
  return getProp(props, prop);
}
