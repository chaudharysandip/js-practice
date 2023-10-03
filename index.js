// let age = 30; //->>>> let is mutate it's reassign value
// age = 31;

// console.log(typeof age);

// const birthYear = 1999; //->>>> let is immutable, not reassign that
// birthYear = 2000;
// console.log(typeof birthYear);

// const job;

// const now = 2023;
// const birthYear = now - 1999;
// const birthYear2 = now - 1999;
// console.log(birthYear / 2, birthYear2 * 2);

// let x = 10 + 5;
// x += 10;
// console.log(x);

// let MarksWeight = 78;
// let MarksHeight = 1.69;
// let JohnWeight = 92;
// let JohnHeight = 1.95;

// const BMIMark = MarksWeight / MarksHeight ** 2;
// const BMIJohn = JohnWeight / (JohnHeight * JohnHeight);
// const markHeighrBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHeighrBMI);

// const age = 15;

// if (age >= 18) {
//   console.log("Sandeep Can Start Driving");
// } else if (age >= 13) {
//   console.log("Sandeep Is kid");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sandeep Is to Young. Wait Start Driving for ${yearLeft} year`);
// }

// let MarksWeight = 78;
// let MarksHeight = 1.69;
// let JohnWeight = 92;
// let JohnHeight = 1.95;

// const BMIMark = MarksWeight / MarksHeight ** 2;
// const BMIJohn = JohnWeight / (JohnHeight * JohnHeight);
// const markHeighrBMI = BMIMark > BMIJohn;

// if (BMIMark > BMIJohn) {
//   console.log(`Marks BMI (${BMIMark}) is Higher Than Jons`);
// } else {
//   console.log(`Jhons BMI (${BMIMark}) is Higher Than Mark`);
// }

// comperison
// const age = "18";
// if (age === 18) console.log("Sandeep is hero"); //strict comperison

// if (age == 18) console.log("Sandeep is zero"); //(loose)

// const favourite = Number(prompt("Hello World"));
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 Is and Amazing Number");
// }

// Switch Statement

// const day = {
//   title: "monday",
//   title: "tuesday",
//   title: "wednesday",
//   title: "thursday",
// };

// switch (day.title) {
//   case "monday":
//     console.log("Go to my home");
//     console.log("Go to my Office");
//     break;
//   case "tuesday":
//     console.log("Prepare My Exam");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Prepare My Homework");
//     break;
// }

// To localSTring
// const numbers = 100000000;

// console.log(numbers.toLocaleString("en-NP"));

// const math = Math.abs(-1000);
// const round = Math.round(9.5);
// const ceil = Math.ceil(2.2);
// const floor = Math.floor(3.3);
// const min = Math.min(3, 4, 4, 4);
// const max = Math.max(3, 4, 4, 4);
// const random = Math.floor(Math.random() * 10) + 1;
// console.log(math, round, ceil, floor, min, max, random);

// const minValue = 10;
// const maxValue = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + minValue);

// Date
// const date = new Date();
// console.log(date.toLocaleDateString());

// const myCreatedDate = new Date(2023, 15, 23, 5, 3);
// const myCreatedDate = new Date("01-15-2023");
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now() / 1000));

// const newDate = new Date();
// // console.log(newDate.getUTCDate());
// newDate.toLocaleString("default", {
//   weekday: "long",
// });

// Array
// const myArray = [1, 2, 3, 4, 5, 6];
// const myHeros = ["Sandeep", "Pradeep", "Saktiman"];
// const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArray2[0]);

// Array Methods
// myArray.push(7, 8, 9);
// myArray.pop();
// myArray.unshift(0);
// myArray.shift();
// console.log(myArray.includes(6));
// console.log(myArray.indexOf(6));

// const newArray = myArray.join();
// console.log(typeof newArray);
// console.log(myArray);

// slice
// console.log("A", myArray);
// const myn1 = myArray.slice(1, 3);

// console.log(myn1);
// console.log("B", myArray);

// const myn2 = myArray.splice(1, 3);
// console.log("C", myArray);
// console.log(myn2);

// const heros = ["Batman", "Superman", "Spiderman"];
// const myFavHeros = ["Salman", "Tiger", "John"];

// heros.push(myFavHeros);
// const allHeros = heros.concat(myFavHeros);
// const allHeros = [...heros, ...myFavHeros];

// console.log(allHeros);

// const isName = Array.from("Sandeep");
// console.log(isName);

// const score1 = 1000;
// const score2 = 2000;
// const score3 = 3000;

// const allScore = Array.of(score1, score2, score3);

// console.log(allScore);

// Object ...................

// object literal
// const jsUser = {
//   name: "Sandeeep",
//   email: "sandeep@gmail.com",
//   age: 18,
//   location: "Kathmandu",
//   isLoggedIn: true,
//   isLastLoggedIn: ["Monday", "Sunday"],
// };

// console.log(jsUser["name"]);

// singleton
// const tinderUser = {};
// tinderUser.id = "123";
// tinderUser.email = "tinder@gmail.com";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//   email: "user@gmail.com",
//   fullName: {
//     userFullName: {
//       firstName: "Sandeep",
//       lastName: "Chaudhary",
//     },
//   },
// };

// console.log(regularUser?.fullName?.userFullName?.firstName);

// const obj1 = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
//   5: "e",
// };
// const obj2 = {
//   1: "a",
//   2: "b",
//   3: "c",
// };
// const obj3 = {
//   1: "a",
//   2: "b",
//   3: "c",
//   4: "d",
//   5: "e",
// };

// const obje3 = { ...obj1, ...obj2, ...obj3 };
// // const obje3 = Object.assign({}, obj1, obj2, obj3);

// // console.log(obje3);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.isPrototypeOf("isLoggedIn"));

// clousoire function
// is innner function that can access to outer function or aown function

// function outerFunc() {
//   const username = "Sandeep Chaudhary";

//   function innerFunc() {
//     console.log(username);
//   }

//   innerFunc();
// }

// outerFunc();

// hoisting
// hoisting is we cano't defined before intialization

// initialize hunu pailai function lai define garnu lai hoisting vaninxa

// const hoistingFunc = function () {
//   console.log("Hello World");
// };

// hoistingFunc();

// this key
// indicate current ref

// const user = {
//   name: "sandee",
//   email: "sandeep@gmail.com",

//   loggedMessage: function () {
//     console.log(`${this.name}, Welcome to our website`);
//   },
// };

// user.loggedMessage();
