/**
 * Title: required-field.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: Creates and exports the RequiredField class
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */

// Creates and exports the RequiredField class, constructor, and functions
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    // Returns true if the field value is a string
    validate() {
        return Boolean(this.field);
    }
    // Sends error message if the name value is empty
    getMessage() {
        return `${this.name} is a required field.`;
    }
}