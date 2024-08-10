const { expext } = require('@playwright/test')

exports.HomePage = class HomePage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.LogOutbtn = page.getByRole('link', { name: 'Log out' });
       
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/');
        await this.page.waitForLoadState('load');
    }
    async User_can_logOut(param3) {
        await this.LogOutbtn.click();
        
    }

}
