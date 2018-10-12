import { module, test } from 'qunit';
import pick from 'lodash/pick';

module('Unit | Utility | foo', function(/* hooks */) {
  test('it works', function(assert) {
    let x = {
      foo: 1,
      bar: 2,
      baz: 3
    };

    let result = pick(x, ['foo', 'baz']);
    assert.ok(result);
  });
});
