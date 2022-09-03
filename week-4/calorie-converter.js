/**
 * Title: calorie-converter.js
 * Author: Walter McCue
 * Date: 09/03/22
 * Description: module for mccue-calorie.html
 * References: WEB 330 GitHub; WEB 330 Assign_3;
 */
// Imports the FoodModel class constructor
import { FoodModel } from "./food-model.js";
//Exports the class CalorieConverter
export class CalorieConverter {
    // an array of objects created with the FoodModel class
    static data = [
        new FoodModel (1007, 'Egg', 78),
        new FoodModel (1008, 'Apple', 95),
        new FoodModel (1009, 'Hamburger', 354),
        new FoodModel (1010, 'Fries', 400),
        new FoodModel (1011, 'Banana', 105),
        new FoodModel (1012, 'Soda', 150),
    ];
    // function to search the array for an object that matches input from the user
    static find(string) {
        // returns the data from the matched object
        return this.data.filter((foodData) => foodData.name.toLowerCase().includes(string.toLowerCase()));
    }
}