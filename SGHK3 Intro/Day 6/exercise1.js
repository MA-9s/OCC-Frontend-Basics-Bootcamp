// 1. The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
// The value saved to kelvin will stay constant. Choose the variable type with this in mind.

// set kelvin to 293 as forcast for today
const kelvin = 293;

// 2. Write a comment above that explains this line of code.


// 3. Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

//difference between celsius and kelvin is 273
const celsius = kelvin - 273;


// 4. Write a comment above that explains this line of code.


// 5. Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32

//equation for fahrenheit
let fahrenheit = celsius * (9/5) + 32

// 6. Write a comment above that explains this line of code.


// 7. When you convert from Celsius to Fahrenheit, you often get a decimal number. (Don't worry about this just yet). Log the temperature in farenheit to the console.

console.log(fahrenheit);