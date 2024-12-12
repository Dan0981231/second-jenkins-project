import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/javascript_alerts");
});

  test("Regular JS Alert", async ({ page }) => {

     let clickForJsAlertButton = page.locator("button[onclick='jsAlert()']");
     await clickForJsAlertButton.click();
     await expect(page.locator("//p[text()='You successfully clicked an alert']")).toBeVisible();

});

  test("JS Confirmation Alerts", async ({ page }) => {
  page.on('dialog', async (alert) => {
  console.log(`Alert message: ${alert.message()}`); 
  expect(alert.message()).toBe("I am a JS ")
  let clickForJsConfirmAlertButton = page.locator("button[onclick='jsConfirm()']");
  await clickForJsConfirmAlertButton.click();
  await alert.accept();
  await expect(page.locator("//p[text()='You clicked: Ok']")).toBeVisible();

  // Now cancel
  await clickForJsConfirmAlertButton.click();
  await alert.dismiss();
  await expect(page.locator("//p[text()='You clicked: Cancel']")).toBeVisible();
});
});

  test("JS Prompt Alerts", async ({ page }) => {
  page.on('dialog', async (dialog) => {
  let clickForJsPromptAlertButton = page.locator("button[onclick='jsConfirm()']");
  await clickForJsPromptAlertButton.click();
  await dialog.accept('Hello World');
  await expect(page.locator("//p[text()='You entered: Hello World']")).toBeVisible();

  // Now cancel
  await clickForJsPromptAlertButton.click();
  await dialog.dismiss("Hello World");
  await expect(page.locator("//p[text()='You entered: null']")).toBeVisible();

  });
});
});
