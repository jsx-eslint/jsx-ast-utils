/* eslint-env mocha */
import assert from 'assert';
import { getOpeningElement } from '../helper';
import hasAttribute, { hasAnyAttribute, hasEveryAttribute } from '../../src/hasAttribute';

describe('hasAttribute tests', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof hasAttribute;

    assert.equal(expected, actual);
  });

  it('should return false if no arguments are provided', () => {
    const expected = false;
    const actual = hasAttribute();

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is absent', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = false;
    const actual = hasAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if the attribute exists', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = true;
    const actual = hasAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if the attribute may exist in spread loose mode', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      spreadStrict: false,
    };

    const expected = true;
    const actual = hasAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      ignoreCase: false,
    };

    const expected = false;
    const actual = hasAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });
});

describe('hasAnyAttribute tests', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof hasAnyAttribute;

    assert.equal(expected, actual);
  });

  it('should return false if no arguments are provided', () => {
    const expected = false;
    const actual = hasAnyAttribute();

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is absent', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = false;
    const actual = hasAnyAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are absent in array', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = ['id', 'className'];

    const expected = false;
    const actual = hasAnyAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are absent in space delimited string', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = 'id className';

    const expected = false;
    const actual = hasAnyAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return true if the attribute exists', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = true;
    const actual = hasAnyAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if any attribute exists in array', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['className', 'id'];

    const expected = true;
    const actual = hasAnyAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if any attribute exists in space delimited string', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'className id';

    const expected = true;
    const actual = hasAnyAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if the attribute may exist in spread loose mode', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      spreadStrict: false,
    };

    const expected = true;
    const actual = hasAnyAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return true if any attribute may exist in spread loose mode', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['id', 'className'];
    const options = {
      spreadStrict: false,
    };

    const expected = true;
    const actual = hasAnyAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      ignoreCase: false,
    };

    const expected = false;
    const actual = hasAnyAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['id', 'iD', 'className'];
    const options = {
      ignoreCase: false,
    };

    const expected = false;
    const actual = hasAnyAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });
});

describe('hasEveryAttribute tests', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof hasEveryAttribute;

    assert.equal(expected, actual);
  });

  it('should return true if no arguments are provided', () => {
    const expected = true;
    const actual = hasEveryAttribute();

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is absent', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = false;
    const actual = hasEveryAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return false if any attributes are absent in array', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = ['id', 'className'];

    const expected = false;
    const actual = hasEveryAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are absent in array', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = ['id', 'className'];

    const expected = false;
    const actual = hasEveryAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return false if any attributes are absent in space delimited string', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = 'id className';

    const expected = false;
    const actual = hasEveryAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are absent in space delimited string', () => {
    const code = '<div />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attributesToCheck = 'id className';

    const expected = false;
    const actual = hasEveryAttribute(attributes, attributesToCheck);

    assert.equal(expected, actual);
  });

  it('should return true if the attribute exists', () => {
    const code = '<div id="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if all attributes exist in array', () => {
    const code = '<div id="foo" className="box" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['className', 'id'];

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if all attributes exist in space delimited string', () => {
    const code = '<div id="foo" className="box" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'className id';

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute);

    assert.equal(expected, actual);
  });

  it('should return true if the attributes may exist in spread loose mode', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      spreadStrict: false,
    };

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return true if all attributes may exist in spread loose mode', () => {
    const code = '<div {...props} />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['id', 'className'];
    const options = {
      spreadStrict: false,
    };

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return false if the attribute is considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = 'id';
    const options = {
      ignoreCase: false,
    };

    const expected = false;
    const actual = hasEveryAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return false if all attributes are considered absent in case-sensitive mode', () => {
    const code = '<div ID="foo" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['id', 'iD', 'className'];
    const options = {
      ignoreCase: false,
    };

    const expected = false;
    const actual = hasEveryAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });

  it('should return true if all attributes are considered present in case-sensitive mode', () => {
    const code = '<div ID="foo" className="box" />';
    const node = getOpeningElement(code);
    const { attributes } = node;
    const attribute = ['ID', 'className'];
    const options = {
      ignoreCase: false,
    };

    const expected = true;
    const actual = hasEveryAttribute(attributes, attribute, options);

    assert.equal(expected, actual);
  });
});
