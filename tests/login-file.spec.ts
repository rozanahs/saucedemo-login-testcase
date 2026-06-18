import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.ts'
import  usersData  from '../test-data/usersData.json'

usersData.forEach((data) => {
    if(!data.run) return;

    test(`login test - ${data.id}`, async ({page}) => {
        
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.loginToPage(data.username, data.password);  
    
        if (data.expected === "success"){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        } else if (data.expected === "error"){
            await expect(loginPage.errorMessage).toBeVisible();
        }
    })    
});

