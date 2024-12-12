import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

  test.beforeEach(async ({ page }) => {
       await page.goto("https://practice.cydeo.com/");
});

  test("Check(): check radio buttons and checkboxes if they haven't been checked yet", async ({ page }) => {
    let checkBoxesLink = page.locator("text='Checkboxes'");
    await checkBoxesLink.click();

    let firstCheckBox = page.locator("#box1");
    let secondCheckBox = page.locator("#box2");
    await firstCheckBox.check();
    await secondCheckBox.check();
    await expect(firstCheckBox).toBeChecked();
    await expect(secondCheckBox).toBeChecked();
});

  test("UnCheck(): unCheck radio buttons and checkboxes if they haven't been unChecked yet", async ({
    page,
  }) => {
 let checkBoxesLink = page.locator("text='Checkboxes'");
 await checkBoxesLink.click();

 let firstCheckBox = page.locator("#box1");
 let secondCheckBox = page.locator("#box2");
 await firstCheckBox.uncheck();
 await secondCheckBox.uncheck();
 await expect(firstCheckBox).not.toBeChecked();
 await expect(secondCheckBox).not.toBeChecked();  });

  test("Select options method: for dropdown boxes", async ({ page }) => {
 let cdropdownLink = page.getByText("Dropdown");
 await cdropdownLink.click(); 

 let dropdownBox = page.locator("//select[@id='dropdown']");
 // select by value
 await dropdownBox.selectOption("1")

 // select by text
 await dropdownBox.selectOption({label: "Option 2"});

 // select by index
 await dropdownBox.selectOption({ index: 1 });
});

  test("Inner Text method: retrieves the visible text of the element", async ({ page }) => {
 let pageHeader = page.locator("//span[@class='h1y']");
 let expectedText = "Test Automation Practice";
 // first way
 let actualText = await pageHeader.innerText();
 expect(actualText).toEqual(expectedText);
 // second way
 await expect (pageHeader).toHaveText(expectedText);

});

  test("Input value method", async ({
    page,
  }) => {
  let inputText = "98765";
  let inputsLink = page.locator("text='Inputs'");
  await inputsLink.click();

  let inputBox = page.locator("input[type='number']");
  await inputBox.fill(inputText);
  let inputValie = await inputBox.inputValue();
  expect(inputValie).toEqual(inputText);
  console.log(inputValie);
});

  test("getAttribute()", async ({ page }) => {

     let abtestingLink = page.getByText("A/B Testing");
     let hrefValue = await abtestingLink.getAttribute("href")
     console.log(hrefValue);
     expect(hrefValue).toEqual("/abtest");
});
    
  test("State methods of locator object", async ({ page }) => {
       
    let header2Element = page.getByText("Available Examples");
    let abtestingLink = page.getByText("A/B Testing");

    // first way
    expect(await header2Element.isVisible()).toBeTruthy();
    expect(await abtestingLink.isEnabled()).toBeTruthy();

    // second way
    await expect(header2Element).toBeVisible();
    await expect (abtestingLink).toBeEnabled();
  
});

});
