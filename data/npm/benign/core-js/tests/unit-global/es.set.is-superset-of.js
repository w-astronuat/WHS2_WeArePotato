import { createIterable, createSetLike } from '../helpers/helpers.js';

QUnit.test('Set#isSupersetOf', assert => {
  const { isSupersetOf } = Set.prototype;

  assert.isFunction(isSupersetOf);
  assert.arity(isSupersetOf, 1);
  assert.name(isSupersetOf, 'isSupersetOf');
  assert.looksNative(isSupersetOf);
  assert.nonEnumerable(Set.prototype, 'isSupersetOf');

  assert.true(new Set([1, 2, 3]).isSupersetOf(new Set([1])));
  assert.false(new Set([2, 3, 4]).isSupersetOf(new Set([1])));
  assert.true(new Set([5, 4, 3, 2, 1]).isSupersetOf(new Set([1, 2, 3])));
  assert.false(new Set([5, 4, 3, 2]).isSupersetOf(new Set([1, 2, 3])));
  assert.true(new Set([1, 2, 3]).isSupersetOf(createSetLike([1])));
  assert.false(new Set([2, 3, 4]).isSupersetOf(createSetLike([1])));
  assert.true(new Set([5, 4, 3, 2, 1]).isSupersetOf(createSetLike([1, 2, 3])));
  assert.false(new Set([5, 4, 3, 2]).isSupersetOf(createSetLike([1, 2, 3])));

  // TODO: drop from core-js@4
  assert.true(new Set([1, 2, 3]).isSupersetOf([1]));
  assert.false(new Set([2, 3, 4]).isSupersetOf([1]));
  assert.true(new Set([5, 4, 3, 2, 1]).isSupersetOf([1, 2, 3]));
  assert.false(new Set([5, 4, 3, 2]).isSupersetOf([1, 2, 3]));
  assert.true(new Set([1, 2, 3]).isSupersetOf(createIterable([1])));
  assert.false(new Set([2, 3, 4]).isSupersetOf(createIterable([1])));

  assert.throws(() => new Set([1, 2, 3]).isSupersetOf(), TypeError);
  assert.throws(() => isSupersetOf.call({}, [1, 2, 3]), TypeError);
  assert.throws(() => isSupersetOf.call(undefined, [1, 2, 3]), TypeError);
  assert.throws(() => isSupersetOf.call(null, [1, 2, 3]), TypeError);
});
