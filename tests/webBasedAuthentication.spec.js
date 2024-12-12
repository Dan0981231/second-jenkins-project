import { test, expect } from "@playwright/test";

test("Bypass authentication by embedding the credentials in the URL", async ({ page }) => {

  //https://username:password@practice.cydeo.com/basic_auth

  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
  await expect(page.locator("//p[contains(text(), 'Congratulations!')]")).toBeVisible();
});

test("Bypass authentication by encoding credentials base64 format", async ({ page }) => {
 let encodedCredentials =  Buffer.from("admin:admin").toString("base64");
 console.log(encodedCredentials);

// Add the credentials to the HTML header
await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});
await page.goto("https://practice.cydeo.com/basic_auth");

await expect(page.locator("//p[contains(text(), 'Congratulations!')]")).toBeVisible();

});
