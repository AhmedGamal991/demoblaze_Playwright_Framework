
const { expext, expect } = require('@playwright/test')

exports.Registertion = class SingnUp {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.Sign_upbtn = page.getByRole('link', { name: 'Sign up' });
        this.userLabel = page.getByLabel('Username:');
        this.passwordLabel = page.getByLabel('Password:');
        this.Fin_Signup = page.getByRole('button', { name: 'Sign up' });

        this.Login_btn = page.getByRole('link', { name: 'Log in' });
        this.userLogin = page.locator('#loginusername');
        this.passwordLogin = page.locator('#loginpassword');
        this.Fin_Login = page.getByRole('button', { name: 'Log in' });

        this.LogOutbtn = page.getByRole('link', { name: 'Log out' });
        
        
    }

    async user_can_register(param1) {
        await expect.soft(this.Sign_upbtn).toBeEnabled();
        await this.Sign_upbtn.click();
        await this.userLabel.click();
        await this.userLabel.fill(param1);
        await this.passwordLabel.click();
        await this.passwordLabel.fill('0000');
        await this.Fin_Signup.click();
        await this.Fin_Signup.press('Tab');
        await this.Fin_Signup.press('Enter');
       
    }
    async User_can_login(param2) {
        await expect.soft(this.Login_btn).toBeEnabled();
        await this.Login_btn.click();
        await this.userLogin.click();
        await this.userLogin.fill(param2);
        await this.passwordLogin.click();
        await this.passwordLogin.fill('0000');
        await this.Fin_Login.click();
    }
    async User_can_logOut(param3) {
        await expect.soft(this.LogOutbtn).toBeEnabled();
        await this.LogOutbtn.click();
        
    }
}