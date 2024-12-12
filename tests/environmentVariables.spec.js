import { test, expect } from "@playwright/test";

test("Environment variables practice @qa_login", async ({ page }) => {
  console.log(`Username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`Password is ${process.env.PRACTICE_PASSWORD}`);

  let encodedCredentials = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64");
  console.log(encodedCredentials);

  // Add the credentials to the HTML header
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  await page.goto("https://practice.cydeo.com/basic_auth");

  await expect(
    page.locator("//p[contains(text(), 'Congratulations!')]")
  ).toBeVisible();
});

/**
 * SEP Login Task:
 * 1. Automate the login process for the SEP application.
 * 2. Make sure to not reveal any sensative data such as username, password, or any other login details.
 * 3. You will need to set separate environment variables for SEP_USERNAME and SEP_PASSWORD.
 * 4. Add @sepLogin tag to the test to run it from the package.json file.
 *  */
test("Environment variables practice @sep_login", async ({ page }) => {
  console.log(`Username is ${process.env.SEP_USERNAME}`);
  console.log(`Password is ${process.env.SEP_PASSWORD}`);

  let encodedCredentials = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");
  console.log(encodedCredentials);

  // Add the credentials to the HTML header
  await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}`});
  await page.goto("https://qa.sep.tdtm.cydeo.com/taws");

  await expect(page.locator("//p/b[text()='Enter personal details']")).toBeVisible();
});
