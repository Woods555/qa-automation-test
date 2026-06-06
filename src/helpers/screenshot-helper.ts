import allureReporter from '@wdio/allure-reporter';

export default class ScreenshotHelper {
  public static async attachScreenshotToAllure(name = 'Screenshot'): Promise<void> {
    const screenshot = await browser.takeScreenshot();

    allureReporter.addAttachment(
      name,
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  }
}
