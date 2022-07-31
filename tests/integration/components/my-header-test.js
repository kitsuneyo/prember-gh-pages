import { module, test } from 'qunit';
import { setupRenderingTest } from 'prember-ghpages-example/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('text', 'FOO');

    await render(hbs`<MyHeader @text={{this.text}} />`);

    assert.dom('h2[data-test-header]').hasText(this.text);
  });
});
