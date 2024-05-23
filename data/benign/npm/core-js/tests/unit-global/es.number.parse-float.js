import { GLOBAL, WHITESPACES } from '../helpers/constants.js';

QUnit.test('Number.parseFloat', assert => {
  const { parseFloat } = Number;
  assert.isFunction(parseFloat);
  assert.name(parseFloat, 'parseFloat');
  assert.arity(parseFloat, 1);
  assert.looksNative(parseFloat);
  assert.nonEnumerable(Number, 'parseFloat');
  assert.same(parseFloat, GLOBAL.parseFloat);
  assert.same(parseFloat('0'), 0);
  assert.same(parseFloat(' 0'), 0);
  assert.same(parseFloat('+0'), 0);
  assert.same(parseFloat(' +0'), 0);
  assert.same(parseFloat('-0'), -0);
  assert.same(parseFloat(' -0'), -0);
  assert.same(parseFloat(`${ WHITESPACES }+0`), 0);
  assert.same(parseFloat(`${ WHITESPACES }-0`), -0);
  assert.same(parseFloat(null), NaN);
  assert.same(parseFloat(undefined), NaN);

  if (typeof Symbol == 'function' && !Symbol.sham) {
    const symbol = Symbol('Number.parseFloat test');
    assert.throws(() => parseFloat(symbol), 'throws on symbol argument');
    assert.throws(() => parseFloat(Object(symbol)), 'throws on boxed symbol argument');
  }
});
