import { createConversionChecker } from '../helpers/helpers.js';

QUnit.test('Math.signbit', assert => {
  const { signbit } = Math;
  assert.isFunction(signbit);
  assert.name(signbit, 'signbit');
  assert.arity(signbit, 1);
  assert.looksNative(signbit);
  assert.nonEnumerable(Math, 'signbit');
  assert.false(signbit(NaN));
  assert.false(signbit());
  assert.true(signbit(-0));
  assert.false(signbit(0));
  assert.false(signbit(Infinity));
  assert.true(signbit(-Infinity));
  assert.false(signbit(13510798882111488));
  assert.true(signbit(-13510798882111488));
  assert.false(signbit(42.5));
  assert.true(signbit(-42.5));

  const checker = createConversionChecker(-13510798882111488);
  assert.true(signbit(checker), 'object wrapper');
  assert.same(checker.$valueOf, 1, 'valueOf calls');
  assert.same(checker.$toString, 0, 'toString calls');
});
