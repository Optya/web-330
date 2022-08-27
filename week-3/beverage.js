/**
 * Title: beverage.js
 * Author: Walter McCue
 * Date: 08/25/22
 * Description: beverage scripting for mccue-restaurant.html
 * References: WEB 330 GitHub; WEB 330 Assign_3;
 */
import { Product } from "./product.js";
export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
} 