import { STRICT } from '../helpers/constants.js';
import { createIterator } from '../helpers/helpers.js';

QUnit.test('AsyncIterator#indexed', assert => {
  const { indexed } = AsyncIterator.prototype;

  assert.isFunction(indexed);
  assert.arity(indexed, 0);
  assert.name(indexed, 'indexed');
  assert.looksNative(indexed);
  assert.nonEnumerable(AsyncIterator.prototype, 'indexed');

  if (STRICT) {
    assert.throws(() => indexed.call(undefined, () => { /* empty */ }), TypeError);
    assert.throws(() => indexed.call(null, () => { /* empty */ }), TypeError);
  }

  return indexed.call(createIterator(['a', 'b', 'c'])).toArray().then(it => {
    assert.same(it.toString(), '0,a,1,b,2,c', 'basic functionality');
  });
});
