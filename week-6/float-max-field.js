/**
 * Title: float-max-field.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: Creates and Exports the FloatMaxField class
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */
 // Creates and exports the class, constructor, and functions
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    // Checks if field value is less than max value
    validate() {
        return parseFloat(this.field) < this.max;
    }
    // Sends error message if field value is greater than max value
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}