// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homepage');
const { OrderApple } = require('../pages/Order');
const { Registertion } = require('../pages/Login');
test.describe('Create_order: Apple_Monitor)',()=>{
test('AddTo_Cart', async ({ page }) => {
    // Go to URL
    const homepage = new HomePage(page);
    await homepage.goto();
    // Log-in 
    const accounts = new Registertion(page);
    await accounts.User_can_login('Nawy Company');
    // Add Apple Monitor to Cart
    const Order = new OrderApple(page);
    await Order.Order_and_AddCart();
    await homepage.goto();
    await Order.Cart_page();
});

});