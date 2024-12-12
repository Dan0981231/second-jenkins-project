import { test, expect } from "@playwright/test";

test("SEP iframe", async ({ page }) => {
  const code = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${code}` });
  await page.goto(process.env.SEP_QA_URL);

  // step 1
  const firstNameInputBox = page.locator('input[formcontrolname="firstName"]');
  await firstNameInputBox.fill('Bohdan');

  const lastNameInputBox = page.locator('input[formcontrolname="lastName"]');
  await lastNameInputBox.fill('Zaiets');

  let emailInputBox = page.locator('input[formcontrolname="email"]');
  await emailInputBox.fill('bohdan.zaiets@gmail.com');

  let phoneInputBox = page.locator('input[formcontrolname="phoneNumber"]');
  await phoneInputBox.fill('7326646999');

  let howDidYouHearDropdown = page.locator('//mat-label[text()="How did you hear about us?"]');
  await howDidYouHearDropdown.click();
  
  let emailOption = page.locator("//span[text()= 'Email']");
  emailOption.click();

  let nextButton = page.locator("button[type='submit']");
  await nextButton.click();

  // step 2
  let upfrontPaymentPlanOption = page.locator("//mat-expansion-panel-header[.//span[text()=' Upfront ']]");
  await upfrontPaymentPlanOption.click();

  let nextButton02 = page.locator("//button[text()='Next']");
  await nextButton02.click();

  // step 3
  const paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
  let cardNumberInput = paymentFrame.locator("input[name='number']");
  await cardNumberInput.fill(process.env.SEP_CARD_NUMBER);

  let expirationDateInput = paymentFrame.locator("input[name='expiry']");
  await expirationDateInput.fill(process.env.SEP_CARD_EXPIRATION_DATE);

  let cvcInput = paymentFrame.locator("input[name='cvc']");
  await cvcInput.fill(process.env.SEP_CVV);

  let zipCodeInput = paymentFrame.locator("input[name='postalCode']");
  await zipCodeInput.fill(process.env.ZIP);

  let checkBox = page.locator("input[type='checkbox']");
  await checkBox.check();

  let payButton = page.locator("button[type='button']");
  await payButton.click();

  // step 4
//   let confirmationMessage = page.locator("//p[text()='Payments confirmation ']");
//   await expect(confirmationMessage).toBeVisible();
  
});
