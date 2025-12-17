import{test,expect} from '@playwright/test'
test('find a product from flipkart and click on it',async({page})=>{
    await page.goto("https://www.flipkart.com/");
     const fash = await page.locator("//div[@aria-label='Fashion']");
     await fash.hover();

     const men = await page.locator("//a[contains(text(),'Men Footwear')]");
      await men.click();

     
     

})