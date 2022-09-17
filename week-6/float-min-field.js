/**
 * Title: float-min-field.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: Creates and exports the FloatMinField class
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */

// Creates and exports the class, constructor, and functions
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    // Checks to see if the field value is greater than the min value
    validate() {
        return parseFloat(this.field) > this.min;
    }
    // Sends an error message if the field value is less than the min value
    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;
    }
}