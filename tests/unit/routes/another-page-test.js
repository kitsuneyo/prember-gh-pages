import { module, test } from 'qunit';
import { setupTest } from 'prember-ghpages-example/tests/helpers';

module('Unit | Route | another-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:another-page');
    assert.ok(route);
  });
});
