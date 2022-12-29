let arrayOfCelsiusValues = [-2, 34, 56, -10];

const arrayOfFahrenheitValues = arrayOfCelsiusValues.map(value => {

    let celsiusToFahrenheit = ((value * (9 / 5)) + 32);

    return celsiusToFahrenheit;
});

console.log(arrayOfFahrenheitValues);