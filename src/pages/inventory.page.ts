class InventoryPage {
  private get title() { return $('.title'); }
  private get cartButton() { return $('.shopping_cart_link'); }

  public async isDisplayed(): Promise<boolean> {
    await this.title.waitForDisplayed();
    return (await this.title.getText()) === 'Products';
  }

  public async addProductToCart(productName: string): Promise<void> {
    const productCard = await $(`//div[@class="inventory_item" and .//div[text()="${productName}"]]`);
    await productCard.waitForDisplayed();
    await productCard.$('button').click();
  }

  public async openCart(): Promise<void> {
    await this.cartButton.click();
  }
}

export default new InventoryPage();
