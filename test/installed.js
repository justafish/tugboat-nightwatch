module.exports = {
  'Test Drupal site was installed' : function(browser) {
    browser
      .url('http://localhost')
      .waitForElementVisible('body')
      .assert.titleContains('Log in')
      .assert.visible('input[data-drupal-selector=name]')
      .end();
  }
};
