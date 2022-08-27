/**
 * Title: bill.js
 * Author: Walter McCue
 * Date: 08/25/22
 * Description: Scripting to calculate the total bill for mccue-restaurant.html
 * References: WEB 330 GitHub; WEB 330 Assign_3;
 */

/**
 * Bill class constructor (with export function)
 */
export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }
/**
 * Functions to push menu items to the correct arrays
 */
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
    addDessert(dessert) {
        this._desserts.push(dessert);
    }
/**
 * Collects the total from each array and adds them together (to 2 decimal places)
 */
    getTotal() {
        let total = 0;
        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        })
        let appetizerTotal= this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        })
        let mainCourseTotal= this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        })
        let dessertTotal= this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        })
        return total.toFixed(2);
    }
}