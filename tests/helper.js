const acorn = require('acorn-jsx');

function parse(code) {
  return acorn.parse(code, {
    plugins: { jsx: true },
  });
}

export function getOpeningElement(code) {
  return parse(code).body[0].expression.openingElement;
}
