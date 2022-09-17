/**
 * Title: float-field.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: Creates and exports the FloatField class
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */

// Creates and exports the class FloatField, constructor, and functions
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    // parseFloat user input
    validate() {
        return !isNaN(parseFloat(this.field));
    }
    // Sends error if the value is false
    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}