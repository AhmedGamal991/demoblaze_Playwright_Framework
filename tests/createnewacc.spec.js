// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homepage');
const { Registertion } = require('../pages/Login');
test.describe('Create new account(Login_and_Logout)',()=>{
test('Create New account', async ({ page }) => {
    // Go to URL
    const homepage = new HomePage(page);
    await homepage.goto();
    // Go to new account icon and chose SignUp
    const accounts = new Registertion(page);
    await accounts.user_can_register('Nawy Company');
});
test('User_Login', async ({ page }) => {
    // Go to URL
    const homepage = new HomePage(page);
    await homepage.goto();
    // Go to new account icon and Login
    const accounts = new Registertion(page);
    await accounts.User_can_login('Nawy Company');
});
test('User_logOut', async ({ page }) => {
    // Go to URL
    const homepage = new HomePage(page);
    await homepage.goto();
    // Go to new account icon and chose SignUp
    const accounts = new Registertion(page);
    await accounts.User_can_login('Nawy Company');
    await homepage.User_can_logOut('param3');
});
});