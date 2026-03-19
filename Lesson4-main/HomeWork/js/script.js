// 1

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }
// checkAge(19);

// function checkAgeWithTernary(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// checkAgeWithTernary(16);

// function checkAgeWithOr(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// checkAgeWithOr(17);

// 2

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2, 5)); //результат 2
// console.log(min(5, 5)); //результат 5
// console.log(min(2, -5)); //результат -5

// function min(a, b) {
//     return a < b ? a : b;
// }
//  console.log(min(2, 5)); //результат 2
// console.log(min(5, 5)); //результат 5
// console.log(min(2, -5)); //результат -5

// 3

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   },
// );


// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),        
//   () => alert("Ви скасували виконання.")  
// );