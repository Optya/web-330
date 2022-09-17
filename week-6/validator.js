/**
 * Title: validator.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: validator script to run values from user against the statements in other modules and return an error message if false
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */

// Import statements
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Creates and exports the validator class, constructor, and functions
export class Validator {
    validator = [];
    messages = [];
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    // These 4 functions validate user input against the 4 imported classes
    addRequiredField() {
        this.validator.push(new RequiredField(this.name, this.field));
    }
    addRequiredFloatField() {
        this.validator.push(new FloatField(this.name, this.field));
    }
    addFloatMinField(min) {
        this.validator.push(new FloatMinField(this.name, this.field, min));
    }
    addFloatMaxField(max) {
        this.validator.push(new FloatMaxField(this.name, this.field, max));
    }
    // Returns an error message if any of the 4 validations return false
    validate() {
        for (let validator of this.validators) {
            if (validator.validate()) {
                this.messages.push(validator.getMessage());
                return false;
            }
        }
        return true;
    }
}