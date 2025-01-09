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
// function greeting(name) {
//   return `Hello ${name}`;
// }
// //console.log(greeting("ali"));

// // function expression
// const square = function (number) {
//   return number * number;
// };
// //console.log(square(5));

// // arrow functions
// const multiply = (a, b) => a * b;
// //console.log(multiply(3, 3));

// // anonymous functions  mostly used in callbacks
// setTimeOut(function () {
//   //console.log("this is delayed in 2 seconds");
// }, 2000);

// function calculateLateFee(overdueDays) {
//   const feePerDay = 0.25;
//   const totalFee = overdueDays * feePerDay;
//   return totalFee.toFixed(2);
// }

// input = process.argv[2];
// const overdueDays = Number(input);

// if (isNaN(overdueDays) || overdueDays < 0) {
//   console.log("Please enter a valid number of overdue days.");
// } else {
//   const lateFee = calculateLateFee(overdueDays);
//   console.log(`The late fee is $${lateFee}.`);
// }
// console.log(calculateLateFee(6));

// function findColorMeaning() {
//   // Prompt the user for their favorite color
//   const color = "purple";

//   // Use if-else statements to determine the meaning of the color
//   if (color === "blue") {
//     console.log("Blue: You love calm and peace.");
//   } else if (color === "red") {
//     console.log("Red: You are passionate and bold.");
//   } else if (color === "green") {
//     console.log("Green: You are connected to nature.");
//   } else if (color === "yellow") {
//     console.log("Yellow: You radiate happiness and energy.");
//   } else {
//     console.log("That's a unique choice!");
//   }
// }

// findColorMeaning();

// const calculateLateFee = function (overdueDays) {
//   const feePerDay = 0.25;
//   const totalFee = overdueDays * feePerDay;
//   return totalFee.toFixed(2);
// };

// const input = process.argv[2];
// const overdueDays = Number(input);

// if (isNaN(overdueDays) || overdueDays < 0) {
//   console.log("Please enter a valid number of overdue days.");
// } else {
//   const lateFee = calculateLateFee(overdueDays);
//   console.log(`The late fee is $${lateFee}.`);
// }

// console.log(calculateLateFee(6));
// function calculateLateFees(overDueDays) {
//   const feesPerDay = 0.25;

//   const totalFees = feesPerDay * overDueDays;
//   return totalFees.toFixed(2);
// }

// const input = process.argv[2];
// const overDueDays = Number(input);
// if (isNaN(overDueDays) || overDueDays < 0) {
//   console.log("please provide a valid over due days");
// } else {
//   const lateFee = calculateLateFees(overDueDays);
//   console.log(`the late fee is $${lateFee}`);
// }
// console.log(calculateLateFees(10));

// function logCase(clientName, caseNumber) {
//   return `case#${caseNumber}: ${clientName}'s case is now logged`;
// }
// console.log(logCase("johm", 12345));

// const logCase = (clientName, caseNumber) => {
//   return `case#${caseNumber}: ${clientName}'s case is now logged`;
// };

// console.log(logCase("ali", 32324));

// const calculateAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const determineGrade = (average) => {
//   if (average >= 90) {
//     return "A";
//   } else if (average >= 80) {
//     return "B";
//   } else if (average >= 70) {
//     return "C";
//   } else {
//     return "F";
//   }
// };

// const generateReport = (studentName, score1, score2, score3) => {
//   const average = calculateAverage(score1, score2, score3);
//   const letterGrade = determineGrade(average);
//   return `${studentName} - average score: ${average.toFixed(
//     2
//   )}, Grade: ${letterGrade}`;
// };
// const studentName = "amina";
// const score1 = 85;
// const score2 = 90;
// const score3 = 78;

// console.log(generateReport(studentName, score1, score2, score3));

// const calculateAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const deternineGrade = (average) => {
//   if (average >= 90) {
//     return "A";
//   } else if (average >= 80) {
//     return "B";
//   } else if (average >= 70) {
//     return "C";
//   } else {
//     return "F";
//   }
// };
// const generateReport = (studentName, score1, score2, score3) => {
//   const average = calculateAverage(score1, score2, score3);
//   const letterGrade = deternineGrade(average);
//   return `${studentName} - average score: ${average.toFixed(
//     2
//   )} Grade: ${letterGrade}`;
// };

// const students = [
//   { name: "Amina", scores: [90, 80, 70] },
//   { name: "Mohamud", scores: [95, 80, 74] },
//   { name: "Duraan", scores: [93, 83, 74] },
//   { name: "Aisha", score: [90, 86, 74] },
// ];

// students.forEach((student) => {
//   const [score1, score2, score3] = student.scores;
//   console.log(generateReport(student.name, score1, score2, score3)); // Corrected to use student.name
// });

// Step 1: Function to calculate average
// const calculateAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// // Step 2: Function to determine the letter grade
// const determineGrade = (average) => {
//   if (average >= 90) {
//     return "A";
//   } else if (average >= 80) {
//     return "B";
//   } else if (average >= 70) {
//     return "C";
//   } else {
//     return "F";
//   }
// };

// // Step 3: Function to generate the full report for a single student
// const generateReport = (studentName, score1, score2, score3) => {
//   const average = calculateAverage(score1, score2, score3);
//   const letterGrade = determineGrade(average);
//   return `${studentName} - Average Score: ${average.toFixed(
//     2
//   )}, Grade: ${letterGrade}`;
// };

// // Step 4: Generate reports for multiple students
// const students = [
//   { name: "Amina", scores: [85, 90, 78] },
//   { name: "Mohamud", scores: [95, 92, 93] },
//   { name: "Aisha", scores: [70, 75, 74] },
//   { name: "Abdullahi", scores: [50, 60, 64] },
// ];

// students.forEach((student) => {
//   const [score1, score2, score3] = student.scores;
//   console.log(generateReport(student.name, score1, score2, score3)); // Corrected to use student.name
// });

const logCase = (clientName, caseNumber) => {
  return `case#${caseNumber}: ${clientName}'s case is now logged in`;
};

console.log(logCase("ali", 43242));
