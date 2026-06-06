import { expect } from '@wdio/globals';

export default class AssertionHelper {
  public static async expectElementDisplayed(element: WebdriverIO.Element): Promise<void> {
    await expect(element).toBeDisplayed();
  }

  public static async expectTextToEqual(actualText: string, expectedText: string): Promise<void> {
    await expect(actualText).toEqual(expectedText);
  }

  public static async expectTextToContain(actualText: string, expectedText: string): Promise<void> {
    await expect(actualText).toContain(expectedText);
  }

  public static async expectValueToBeTrue(value: boolean): Promise<void> {
    await expect(value).toBe(true);
  }

  async expectUrlToContain(
    expectedUrl: string
  ): Promise<void> {
    await expect(browser).toHaveUrl(
      expect.stringContaining(expectedUrl)
    );
  }
  async expectElementToBeDisplayed(
    element: WebdriverIO.Element
  ): Promise<void> {
    await expect(element).toBeDisplayed();
  }
}
