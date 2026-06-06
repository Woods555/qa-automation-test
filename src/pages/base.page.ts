export default class BasePage {
  public async open(path: string): Promise<void> {
    await browser.url(path);
  }
}
