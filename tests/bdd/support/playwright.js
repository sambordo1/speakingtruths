const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

AfterAll(async () => {
  await browser.close();
});

module.exports = { page };