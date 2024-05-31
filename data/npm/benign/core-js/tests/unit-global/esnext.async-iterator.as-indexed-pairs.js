import { STRICT } from '../helpers/constants.js';
import { createIterator } from '../helpers/helpers.js';

QUnit.test('AsyncIterator#asIndexedPairs', assert => {
  const { asIndexedPairs } = AsyncIterator.prototype;

  assert.isFunction(asIndexedPairs);
  assert.arity(asIndexedPairs, 0);
  // assert.name(asIndexedPairs, 'asIndexedPairs');
  assert.looksNative(asIndexedPairs);
  assert.nonEnumerable(AsyncIterator.prototype, 'asIndexedPairs');

  if (STRICT) {
    assert.throws(() => asIndexedPairs.call(undefined, () => { /* empty */ }), TypeError);
    assert.throws(() => asIndexedPairs.call(null, () => { /* empty */ }), TypeError);
  }

  return asIndexedPairs.call(createIterator(['a', 'b', 'c'])).toArray().then(it => {
    assert.same(it.toString(), '0,a,1,b,2,c', 'basic functionality');
  });
});
