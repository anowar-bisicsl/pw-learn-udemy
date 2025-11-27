import {test} from "@playwright/test";

test('first test', async ({page}) => {
    await page.goto('https://demo.akveo.com/ngx-admin/pages/dashboard');
    await page.screenshot({path: 'screenshots/firstTest.png'});

    await page.getByText('Material Light').click();
    // await expect(page).toHaveTitle('dashboard');

    await page.getByText('Forms').click();
    await page.screenshot({path: 'screenshots/firstTest2.png'});

    await page.getByText('Form Layouts').click();

    await page.close();
})