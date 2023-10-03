// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// }

// while

// let index = 0;

// while (index <= 10) {
//   console.log(`Value ${index}`);
//   index = index + 2;
// }

// let myArray = ["Hero", "Super Her", "Zero"];

// let arr = 0;

// while (arr < myArray.length) {
//   console.log(`Value ${myArray[arr]}`);
//   arr = arr + 1;
// }

// let score = 1;

// do {
//   console.log(`score ${score}`);
//   score++;
// } while (score <= 10);

// let arr = [1, 2, 3, 4, 5, 6];
//  for for array
// for (const item of arr) {
//   console.log(`Printed item ${item}`);
// }

// let greetings = "Hello World";

// for (const greet of greetings) {
//   console.log(`Each Char is ${greet}`);
// }

// Maps

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("USA", "America");
// map.set("UAE", "Dubai");
// map.set("FR", "France");

// for (const [key, value] of map) {
//   return console.log(key, value);
// }

// const myObject = {
//   game: "1",
//   gameTwo: "COC",
// };

// for (const [key, value] of myObject) {
//   console(key, "<<>>", value);
// }

// const languages = {
//   js: "javasacript",
//   cpp: "C++",
//   rj: "React Js",
// };

// in for object
// for (const item in languages) {
//   console.log(`Key is ${item} Value is ${languages[item]}`);
// }

// const myArray = ["js", "jave", "cpp", "react"];

// for (const item in myArray) {
//   console.log(item);
// }

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("USA", "America");
// map.set("UAE", "Dubai");
// map.set("FR", "France");

// for (const item in map) {
//   console.log(item);
// }

// const coding = ["js", "python", "node", "java"];

// coding.forEach((item, i) => {
//   return console.log(`Hello world ${item}`);
// });

// coding.map((item, i) => {
//   return console.log(`Hello world ${item}`);
// });

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let newBooks = books.filter((bk) => bk.genre === "History");
// newBooks = books.filter((bk) => {
//   return bk.publish >= 1995 && bk.genre === "History";
// });

// console.log(newBooks);

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterNum = myNumber.map((item) => {
//   return item + 10;
// });

// console.log(filterNum);

// reduce

// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNumber.reduce((acc, currval) => {
//   console.log(`Acc Val ${acc} CurrVal ${currval}`);
//   return acc + currval;
// }, 1);

// console.log(myTotal);
