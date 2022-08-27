/**
 * Title: appetizer.js
 * Author: Walter McCue
 * Date: 08/25/22
 * Description: appetizer scripting for mccue-restaurant.html
 * References: WEB 330 GitHub; WEB 330 Assign_3;
 */
import { Product } from "./product.js";
export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
} 