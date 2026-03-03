// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let variable1 = 1;//true
// let variable1 = 0;
// let variable1 = -3;

// if (variable1 > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let variable2 = "test";
// let variable2 = "qwerty";

// if (variable2 === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (variable2 === "qwerty") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let varieble3 = 1;//6
// let varieble3 = 10; //15
// let varieble3 = 13; //8

// if (varieble3 > 10) {
//     console.log(varieble3 - 5);
// } else {
//     console.log(varieble3 + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNavber = 1;
// let monthNavber = 2;
// let monthNavber = 3;
// let monthNavber = 4;
// let monthNavber = 5;
// let monthNavber = 6;
// let monthNavber = 7;
// let monthNavber = 8;
// let monthNavber = 9;
// let monthNavber = 10;
// let monthNavber = 11;
// let monthNavber = 12;

// switch (monthNavber) {
//     case 1:
//         console.log("Січень");
//         break;
//     case 2:
//         console.log("Лютий");
//         break;
//     case 3:
//         console.log("Березень");
//         break;
//     case 4:
//         console.log("Квітень");
//         break;
//     case 5:
//         console.log("Травень");
//         break;
//     case 6:
//         console.log("Червень");
//         break;
//     case 7:
//         console.log("Липень");
//         break;
//     case 8:
//         console.log("Серпень");
//         break;
//     case 9:
//         console.log("Вересень");
//         break;
//     case 10:
//         console.log("Жовтень");
//         break;
//     case 11:
//         console.log("Листопад");
//         break;
//     case 12:
//         console.log("Грудень");
//         break;
//     default:
//         console.log("Введіть число від 1 до 12");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let input = prompt("Введіть тризначне число:");
// let number = parseInt(input);
// let originalNumber = number;
// let sum = 0;

// if (
//   !isNaN(number) &&
//   Number.isInteger(number) &&
//   String(Math.abs(number)).length === 3
// ) {
//   console.log(`Ви ввели тризначне число: ${originalNumber}`);

//   while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }

//   console.log(`Сума цифр числа ${originalNumber} дорівнює: ${sum}`);
//   alert(`Сума цифр: ${sum}`);
// } else {
//   console.log("Помилка! Будь ласка, введіть саме тризначне число.");
//   alert("Помилка! Введіть тризначне число (від 100 до 999).");
// }
