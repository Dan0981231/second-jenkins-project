import { test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
      await page.waitForTimeout(1000);
});

  test("Left click", async ({ page }) => {
     await page.click("text='A/B Testing'");
     await page.waitForTimeout(1000);
});

  test("Right Click", async ({ page }) => {
     await page.click("text='A/B Testing'", { button: "right" });
     await page.waitForTimeout(1000);
});

  test("Mouse Hover", async ({ page }) => {
     await page.click("text='Hovers'");
    //  await page.hover("//img[@alt='User Avatar']");     
     let userProfiles = await page.locator("//img[@alt='User Avatar']").all();
     for (let profile of userProfiles) {
        await profile.hover();
        await page.waitForTimeout(1000);
     }
});

  test("Drag and drop", async ({ page }) => {
     await page.click("text='Drag and Drop'");
     await page.waitForTimeout(1000);

     await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
     await page.waitForTimeout(1000);

});

  test("Double click", async ({ page }) => {
     await page.dblclick("text='Drag and Drop'");
     await page.waitForTimeout(1000);
});

  test("Scrolling", async ({ page }) => {
    //  page.mouse.wheel(0, 1000);
    //  await page.waitForTimeout(1000);

    let element = page.locator("text='Inputs'");
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
});
});
