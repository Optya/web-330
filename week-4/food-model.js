/**
 * Title: food-model.js
 * Author: Walter McCue
 * Date: 09/03/22
 * Description: module for calorie-converter.js
 * References: WEB 330 GitHub; WEB 330 Assign_3;
 */
// export the class FoodModel with constructor for id, name, and calories
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}