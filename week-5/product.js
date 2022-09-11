/**
 * Title: product.js
 * Author: Walter McCue
 * Date: 09/10/22
 * Description: Module for product creation for mccue-bobs-auto-repair.html
 * References: WEB 330 GitHub; WEB 330 Assign_5;
 */

// Exports the created class of Product with its constructor properties
export class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}