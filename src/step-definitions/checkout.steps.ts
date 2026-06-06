import { When, Then } from '@wdio/cucumber-framework';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutPage from '../pages/checkout.page';
import assertionHelper from '../helpers/assertion-helper';

When('I add the product {string} to the cart', async (productName: string) => {
  await InventoryPage.addProductToCart(productName);
});

When('I open the cart', async () => {
  await InventoryPage.openCart();
});

When('I proceed to checkout', async () => {
  await CartPage.proceedToCheckout();
});

When(
  'I complete checkout information with first name {string}, last name {string} and postal code {string}',
  async (
    firstName: string,
    lastName: string,
    postalCode: string
  ) => {
    await CheckoutPage.fillCustomerInformation(
      firstName,
      lastName,
      postalCode
    );
  }
);

When('I finish the order', async () => {
  await CheckoutPage.finishOrder();
});

Then(
  'I should see the order confirmation message {string}',
  async (expectedMessage: string) => {
    const actualMessage =
      await CheckoutPage.getConfirmationMessage();

    await assertionHelper.expectTextToEqual(
      actualMessage,
      expectedMessage
    );
  }
);