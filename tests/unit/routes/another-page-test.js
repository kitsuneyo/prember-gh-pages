import { module, test } from 'qunit';
import { setupTest } from 'prember-gh-pages/tests/helpers';

module('Unit | Route | another-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:another-page');
    assert.ok(route);
  });
});
