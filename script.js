// Example Fahrenheit input
// let fahrenheit = 10; // Change this value to test with other temperatures

// // Convert Fahrenheit to Celsius
// let celsius = ((fahrenheit - 32) * 5) / 9;

// // Check the range of the Celsius temperature using if-else
// if (celsius < 0) {
//   console.log(
//     `Ice Alert! It's freezing! The temperature is ${celsius.toFixed(2)}°C.`
//   );
// } else if (celsius > 30) {
//   console.log(
//     `Fire Alert! It's boiling! The temperature is ${celsius.toFixed(2)}°C.`
//   );
// } else {
//   console.log(
//     `The temperature is normal. The temperature is ${celsius.toFixed(2)}°C.`
//   );
// }
// const degreeSymbol = "\u00b0";
// let fahrenheit = 100;
// let celsius = ((fahrenheit - 32) * 5) / 9;
// if (celsius < 0) {
//   console.log(
//     `ice alert! it's freezing! the temperature is${celsius.toFixed(
//       2
//     )} ${degreeSymbol}c`
//   );
// } else if (celsius > 30) {
//   console.log(
//     `Fire alert it's boiling! the temperature is ${celsius.toFixed(
//       2
//     )} ${degreeSymbol}c`
//   );
// } else {
//   console.log(
//     `the temperature is normal. The temperature is ${celsius.toFixed(
//       2
//     )} ${degreeSymbol}c`
//   );
// }

// const degreeSymbol = "\u00b0";
// let celsius = 10;
// let fahrenheit = ((celsius + 32) * 5) / 9;
// if (fahrenheit < 100) {
//   console.log(
//     `ice it's freezing! the temperature is ${fahrenheit.toFixed(
//       2
//     )} ${degreeSymbol}f`
//   );
// } else if (fahrenheit > 10) {
//   console.log(
//     `fire alert it's boiling the temperature is ${fahrenheit.toFixed(
//       2
//     )} ${degreeSymbol}f`
//   );
// } else {
//   console.log(
//     `the temperature is normal. the temperature ${fahrenheit.toFixed(
//       2
//     )}${degreeSymbol}f`
//   );
// }

//fizzbuzz
// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   }
// }
// let feeling = "tired";
// if (feeling === "happy") {
//   console.log("Iam glad that you are happy");
// } else if (feeling === "sad") {
//   console.log("Iam sorry. I hope that you will get better soon");
// } else if (feeling === "tired") {
//   console.log("you need get some rest");
// }

// let day = 7;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("invalid day");
// }

//while loop
// let count = 1;
// while (count <= 4) {
//   console.log(count);
//   count++;
// }
// function outerFunction() {
//   let count = 0;
//   return function innerFunction() {
//     count++;
//     return count;
//   };
// }
// const increment = outerFunction();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3
// console.log(increment()); // 4
// console.log(increment()); // 5
// console.log(increment()); // 6

// let heading = document.getElementById("heading");
// console.log("heading.innerHTML");

//js functions declarations
function greeting(name) {
  return `Hello ${name}`;
}
//console.log(greeting("ali"));

// function expression
const square = function (number) {
  return number * number;
};
//console.log(square(5));

// arrow functions
const multiply = (a, b) => a * b;
//console.log(multiply(3, 3));

// anonymous functions  mostly used in callbacks
setTimeOut(function () {
  //console.log("this is delayed in 2 seconds");
}, 2000);
