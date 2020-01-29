/**
 * mochaChaitestingPrograms/tempraturConversion.
 * @module mochaChaitestingPrograms/tempraturConversion
 */
module.exports = {
    /**
     * it will convert to celsius To Fahrenheit.
     * @param {number} celsius - it take y as a number.
     * @return {number} return fahrenheit .
     */
    celsiusToFahrenheit: (celsius) => {
        return fahrenheit = (9.0/5.0)*celsius + 32;
    },
    /**
     * it will convert to Fahrenheit To celsius.
     * @param {number} fahrenheit - it take fahrenheit as a number.
     * @return {number} return celsius .
     */
    fahrenheitToCelsius: (fahrenheit) => {
        return celsius = (5.0/9.0)*(fahrenheit - 32);
    }
}