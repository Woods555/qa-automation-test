class CartPage {
  private get checkoutButton() { return $('#checkout'); }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.waitForClickable();
    await this.checkoutButton.click();
  }
}

export default new CartPage();
