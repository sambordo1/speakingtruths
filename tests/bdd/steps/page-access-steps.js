const { Given, When, Then } = require('@cucumber/cucumber');
const { page } = require('../support/playwright');

Given('I am a visitor', async () => {
  // This can be left empty for now, or used for set-up logic.
});

When('I navigate to the homepage', async function () {
  await this.page.goto('http://staging.speakingtruths.com/');
});

Then('I should see the title {string}', async function (expectedTitle) {
  const title = await this.page.title();
  if (title !== expectedTitle) {
    throw new Error(`Expected title "${expectedTitle}", but got "${title}"`);
  }
});
