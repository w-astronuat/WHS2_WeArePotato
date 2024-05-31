const {
  getOwnPropertyNames,
  getOwnPropertySymbols,
  create,
} = Object;

QUnit.test('Object.getOwnPropertySymbols', assert => {
  assert.isFunction(getOwnPropertySymbols);
  assert.nonEnumerable(Object, 'getOwnPropertySymbols');
  assert.same(getOwnPropertySymbols.length, 1, 'arity is 1');
  assert.name(getOwnPropertySymbols, 'getOwnPropertySymbols');
  assert.looksNative(getOwnPropertySymbols);
  const prototype = { q: 1, w: 2, e: 3 };
  prototype[Symbol('getOwnPropertySymbols test 1')] = 42;
  prototype[Symbol('getOwnPropertySymbols test 2')] = 43;
  assert.deepEqual(getOwnPropertyNames(prototype).sort(), ['e', 'q', 'w']);
  assert.same(getOwnPropertySymbols(prototype).length, 2);
  const object = create(prototype);
  object.a = 1;
  object.s = 2;
  object.d = 3;
  object[Symbol('getOwnPropertySymbols test 3')] = 44;
  assert.deepEqual(getOwnPropertyNames(object).sort(), ['a', 'd', 's']);
  assert.same(getOwnPropertySymbols(object).length, 1);
  assert.same(getOwnPropertySymbols(Object.prototype).length, 0);
  const primitives = [42, 'foo', false];
  for (const value of primitives) {
    assert.notThrows(() => getOwnPropertySymbols(value), `accept ${ typeof value }`);
  }
});
