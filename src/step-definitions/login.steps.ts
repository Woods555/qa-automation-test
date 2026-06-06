import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import assertionHelper from '../helpers/assertion-helper';

Given('I am on the SauceDemo login page', async () => {
  await LoginPage.openLoginPage();
});

Given('I am logged into SauceDemo as {string}', async (username: string) => {
  await LoginPage.openLoginPage();
  await LoginPage.login(username, 'secret_sauce');
  await assertionHelper.expectValueToBeTrue(await InventoryPage.isDisplayed());
});

When('I login with username {string} and password {string}', async (username: string, password: string) => {
  await LoginPage.login(username, password);
});

Then('I should see the products page', async () => {
  await assertionHelper.expectValueToBeTrue(await InventoryPage.isDisplayed());
});

Then('I should see the login error message {string}', async (expectedError: string) => {
  const actualError = await LoginPage.getErrorMessage();
  await assertionHelper.expectTextToContain(actualError, expectedError);
});