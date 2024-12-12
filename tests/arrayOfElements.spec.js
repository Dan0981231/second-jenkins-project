import { test, expect } from "@playwright/test";

test.describe("Array Of Elements Test Group", () => {  
    let elements;

    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
      elements = await page.locator("//ul[@class='list-group']/li/a").all(); 
     
});


  test("Verify there are exactly 50 link elements within the <ul> tag", async ({page}) => {
    expect(elements.length).toBe(50);

    // verify there are at least 20 links
    expect(elements.length).toBeGreaterThanOrEqual(20);

    // verify total number of the links on the page is less the 100
    expect(elements.length).toBeLessThan(100);
  
});

  test("Verify that each of the 50 link elements within the <ul> tag are visible and clickable", async ({page}) => {
    for(let element of elements) {
        await expect(element).toBeVisible();
        await expect(element).toBeEnabled();
    }

});

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({page}) => {
    for(let element of elements) {
        await expect(element).toHaveAttribute('href');
        console.log(`${await element.innerText()}: ${await element.getAttribute('href')}`);
    }

});
});

/**
 * 1. Verify there are exactly 50 link elements within the <ul> tag
 *
 * 2. Verify that each of the 50 link elements within the <ul> tag are visible and clickable
 *
 * 3. Verify that each of the 50 link elements within the <ul> tag has a href attribute
 */
