//функції

// function showMessage(name, city) {
//   console.log("Hello, my name is " + name + " I'am from " + city);
// }

// showMessage("Viktor", "Kyiv");
// showMessage("Olga", "Lviv");

// const userName = "Ann"

// const sayHi = function () {
//   let message = "Hello, my name ";
//   console.log(message + userName);
// };

// sayHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1457, 129999870);
// console.log(result);

// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);

//   return;
// };
// testFunk(4, 9);

// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };

// const b = function () {
//   console.log("function b");
// };

// const c = function () {
//   console.log("function c");
// };
// a();

//аргументи і rest

// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 3, 5);

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 3, 5)y
// addName(1, 3, 5, 67, 89);

//callback

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You say Ok");
// }

// function showCansel() {
//   console.log("You say No");
// }

// ask("Yes or no?", showOk, showCansel);

//HOF

// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);

// hello("Anna");

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   return console.log("Good Bye");
// }

// checkAge(18);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to movie!");
// }

// showMovie(17);

//Стрілкові функції

// const test = (arg) => {
//     console.log(arg);
// }
// test("Hello world");

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log("Hello");
//     }
//      return console.log("Bye!");
// };
// showMovie(12);

//Контексти і виклики

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };

// const c = () => {
//   console.log("c");
//   a();
//   b();
// };
// c();
//Практіка

// console.log(document);

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));
