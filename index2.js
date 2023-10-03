"use-strict";

// function declaration
// function logger() {
//   console.log("My name is sandeep");
// }

// logger();

// function FruitProcessor(apple, orange) {
//   console.log(apple, orange);
//   const juice = `juice with ${apple} apples and ${orange} oranges`;
//   return juice;
// }

// const appleJuice = FruitProcessor(3, 2);
// console.log(appleJuice);

// const appleOrageJuice = FruitProcessor(10, 5);
// console.log(appleOrageJuice);

// function expression
//before initialization ->>> call hoisting
// function calAge(birthYear) {
//   return 2023 - birthYear;
// }

// const age = calAge(1999);
// console.log(age);

// //can't be before initialization
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearUntilDied = (birthYear, firstName) => {
//   const age = 2030 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };

// const dead = yearUntilDied(1999, "Sandeep");
// console.log(dead);

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function FruitProcessor(apple, orange) {
//   const applePieces = cutFruitPieces(apple);
//   const orangePieces = cutFruitPieces(orange);
//   console.log(apple, orange);
//   const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// const cutFruit = FruitProcessor(2, 5);
// console.log(cutFruit);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilDied = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement;
//   } else {
//     console.log("Already Retired");
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement}`;
// };

// console.log(yearUntilDied(1999, "Sandeep"));
// console.log(yearUntilDied(1960, "Jhon"));
