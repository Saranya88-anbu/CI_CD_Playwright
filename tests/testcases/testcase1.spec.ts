import{test,expect} from "@playwright/test";
test("testcase1",async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main');
    //await expect(page).toHaveTitle(/Google/);
});