import { Page, Locator } from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator ('#login-button');
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async goToLoginPage(){
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginToPage(name: string, pass: string){
        await this.username.fill(name);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

}