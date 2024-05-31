QUnit.test('unescape', assert => {
  assert.isFunction(unescape);
  assert.name(unescape, 'unescape');
  assert.arity(unescape, 1);
  assert.looksNative(unescape);
  assert.same(unescape('%21q2%u0444'), '!q2ф');
  assert.same(unescape('%u044q2%21'), '%u044q2!');
  assert.same(unescape(null), 'null');
  assert.same(unescape(undefined), 'undefined');

  if (typeof Symbol == 'function' && !Symbol.sham) {
    assert.throws(() => unescape(Symbol('unescape test')), 'throws on symbol argument');
  }
});
