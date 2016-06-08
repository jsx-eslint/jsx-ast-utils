/* eslint-env mocha */
import assert from 'assert';
import { getOpeningElement } from '../helper';
import getNodeType from '../../src/getNodeType';

describe('getNodeType tests', () => {
  it('should export a function', () => {
    const expected = 'function';
    const actual = typeof getNodeType;

    assert.equal(expected, actual);
  });

  it('should throw an error if the argument is missing', () => {
    assert.throws(() => { getNodeType(); }, Error);
  });

  it('should throw an error if the argument not a JSX node', () => {
    assert.throws(() => { getNodeType({ a: 'foo' }); }, Error);
  });

  it('should return the correct type of the DOM element given its node object', () => {
    const code = '<div />';
    const node = getOpeningElement(code);

    const expected = 'div';
    const actual = getNodeType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the custom element given its node object', () => {
    const code = '<Slider />';
    const node = getOpeningElement(code);

    const expected = 'Slider';
    const actual = getNodeType(node);

    assert.equal(expected, actual);
  });

  it('should return the correct type of the custom object element given its node object', () => {
    const code = '<UX.Slider />';
    const node = getOpeningElement(code);

    const expected = 'UX.Slider';
    const actual = getNodeType(node);

    assert.equal(expected, actual);
  });
});
