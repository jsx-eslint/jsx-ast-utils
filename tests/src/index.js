/* eslint-env mocha */
import assert from 'assert';
import core from '../../src/index';
import fs from 'fs';
import path from 'path';

const src = fs.readdirSync(path.resolve(__dirname, '../../src'))
  .map(f => path.basename(f, '.js'));

describe('main export file tests', () => {
  it('should export an object', () => {
    const expected = 'object';
    const actual = typeof core;

    assert.equal(expected, actual);
  });

  src.filter(f => f !== 'index').forEach(f => {
    it(`should export ${f}`, () => {
      assert.equal(
        core[f],
        require(path.join('../../src/', f)).default // eslint-disable-line
      );
    });
  });
});