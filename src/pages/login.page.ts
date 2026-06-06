import BasePage from './base.page';

class LoginPage extends BasePage {
  private get usernameInput() { return $('#user-name'); }
  private get passwordInput() { return $('#password'); }
  private get loginButton() { return $('#login-button'); }
  private get errorMessage() { return $('[data-test="error"]'); }

  public async openLoginPage(): Promise<void> {
    await this.open('/');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  public async getErrorMessage(): Promise<string> {
    await this.errorMessage.waitForDisplayed();
    return this.errorMessage.getText();
  }
}

export default new LoginPage();
