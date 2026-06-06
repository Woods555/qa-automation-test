import { Before, After } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import ScreenshotHelper from '../helpers/screenshot-helper';

Before(async function (scenario) {
  allureReporter.addFeature(scenario.pickle.name);
  await browser.maximizeWindow();
  await browser.deleteCookies();
});

After(async function (scenario) {
  const scenarioStatus = scenario.result?.status?.toString().toUpperCase();

  if (scenarioStatus === 'FAILED') {
    await ScreenshotHelper.attachScreenshotToAllure('Screenshot on failure');
  }

  await browser.deleteCookies();
  await browser.reloadSession();
});
