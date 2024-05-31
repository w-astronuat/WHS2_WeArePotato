/* eslint-disable no-restricted-globals -- safe */
import { DESCRIPTORS } from '../helpers/constants.js';

QUnit.test('self', assert => {
  assert.same(self, Object(self), 'is object');
  assert.same(self.Math, Math, 'contains globals');
  if (DESCRIPTORS) {
    const descriptor = Object.getOwnPropertyDescriptor(self, 'self');
    // can't be properly defined (non-configurable) in some ancient engines like PhantomJS
    // assert.isFunction(descriptor.get, 'a getter');
    // assert.true(descriptor.configurable, 'configurable');
    assert.true(descriptor.enumerable, 'enumerable');
  }
});
