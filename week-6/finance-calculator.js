/**
 * Title: finance-calculator.js
 * Author: Walter McCue
 * Date: 09/17/22
 * Description: Creates and exports the FinanceCalculator class
 * References: WEB 330 GitHub; WEB 330 Assign_6;
 */

// Creates and Exports the class, static properties/functions, and currencyFormatter
export class FinanceCalculator {
    // static property
    static MONTHS_IN_YEAR = 12;
    // static function
    static calculateFutureValue(monthlyPayment, rate, years) {
        // variables that calculate the future value
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }
    //static function that formats and returns a currency in USD
    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        return currencyFormatter.format(field);
    }
}