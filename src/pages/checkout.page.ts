class CheckoutPage {
  private get firstNameInput() { return $('#first-name'); }
  private get lastNameInput() { return $('#last-name'); }
  private get postalCodeInput() { return $('#postal-code'); }
  private get continueButton() { return $('#continue'); }
  private get finishButton() { return $('#finish'); }
  private get confirmationMessage() { return $('.complete-header'); }

  public async fillCustomerInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }

  public async finishOrder(): Promise<void> {
    await this.finishButton.waitForClickable();
    await this.finishButton.click();
  }

  public async getConfirmationMessage(): Promise<string> {
    await this.confirmationMessage.waitForDisplayed();
    return this.confirmationMessage.getText();
  }
}

export default new CheckoutPage();
