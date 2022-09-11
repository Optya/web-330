/**
 * Title: shopping-cart.js
 * Author: Walter McCue
 * Date: 09/10/22
 * Description: Module for shopping cart generator function for mccue-bobs-auto-repair.html
 * References: WEB 330 GitHub; WEB 330 Assign_5;
*/

// Exports the created class Shopping Cart along with the functions within it
export class ShoppingCart {
    constructor() {
        this.products = [];
    }
    count() {
        return this.products.length;
    }
    add(product) {
        this.products.push(product);
    }
    *generator() {
        for (let product of this.products) {
            yield product;
        }
    }
}