import { STRICT } from '../helpers/constants.js';
import { createIterator } from '../helpers/helpers.js';

import Iterator from 'core-js-pure/full/iterator';

QUnit.test('Iterator#asIndexedPairs', assert => {
  const { asIndexedPairs } = Iterator.prototype;

  assert.isFunction(asIndexedPairs);
  assert.arity(asIndexedPairs, 0);
  assert.nonEnumerable(Iterator.prototype, 'asIndexedPairs');

  assert.arrayEqual(asIndexedPairs.call(createIterator(['a', 'b', 'c'])).toArray().toString(), '0,a,1,b,2,c', 'basic functionality');

  if (STRICT) {
    assert.throws(() => asIndexedPairs.call(undefined), TypeError);
    assert.throws(() => asIndexedPairs.call(null), TypeError);
  }

  assert.throws(() => asIndexedPairs.call({}).next(), TypeError);
  assert.throws(() => asIndexedPairs.call([]).next(), TypeError);
});
