
const { expext } = require('@playwright/test')

exports.OrderApple = class OrderApple {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.Nextbtn = page.locator('#next2');
        this.Apple_btn = page.getByRole('link', { name: 'Apple monitor' });
        this.AddToCart_btn = page.getByRole('link', { name: 'Add to cart' });
        this.Monitors_btn = page.getByRole('link', { name: 'Monitors' });
        this.Cart_btn = page.getByRole('link', { name: 'Cart', exact: true });
        this.Place_order_btn = page.getByRole('button', { name: 'Place Order' });
        
    }

    async Order_and_AddCart() {
        await this.Monitors_btn.click();
        await this.Apple_btn.click();
        await this.AddToCart_btn.click();
        await this.Cart_btn.click();

    }
    async Cart_page() {
       
        await this.Cart_btn.click();
        await this.Place_order_btn.click();

    }
   

}