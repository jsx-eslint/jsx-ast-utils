/* eslint-env mocha */
import assert from 'assert';
import { getOpeningElement } from '../helper';
import hasAttribute from '../../src/hasAttribute';

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
