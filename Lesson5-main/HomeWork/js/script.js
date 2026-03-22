//====Завдання 1===

// const printer = {
//   showInfo: function () {
//     console.group(`Інформація про студента: ${this.name}`);
//     console.log(`Студент: ${this.name}`);
//     console.log(`Спеціальність: ${this.specialty}`);
//     console.log(`Середній бал: ${this.avgGrade}`);
//     console.log(`Пропущено занять: ${this.missedClasses}`);
//     console.groupEnd();
//   },
// };

// const student1 = {
//   name: "Іван",
//   specialty: "Комп'ютерні науки",
//   avgGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Олена",
//   specialty: "Графічний дизайн",
//   avgGrade: 4.8,
//   missedClasses: 0,
// };

// const student3 = {
//   name: "Петро",
//   specialty: "Маркетинг",
//   avgGrade: 4.2,
//   missedClasses: 5,
// };

// printer.showInfo.call(student1);
// printer.showInfo.apply(student2);
// const logStudent3 = printer.showInfo.bind(student3);
// logStudent3();

//====Завдання 2===

// function showHtmlInfo() {
//   alert(
//     "HTML (HyperText Markup Language) — це мова розмітки, яка використовується для створення структури веб-сторінок.",
//   );
// }

// function showCssInfo() {
//   alert(
//     "CSS (Cascading Style Sheets) — це мова стилів, яка використовується для опису зовнішнього вигляду та оформлення веб-документів.",
//   );
// }

// document.getElementById("htmlBtn").onclick = showHtmlInfo;
// document.getElementById("cssBtn").onclick = showCssInfo;
//////

// const webWiki = {
//   html: "HTML — мова розмітки для створення структури сторінок.",
//   css: "CSS — мова для роботи зі стилями та елементами сторінки.",

//   showDefinition: function (tech) {
//     alert(this[tech]);
//   },
// };

// const getHtml = webWiki.showDefinition.bind(webWiki, "html");
// const getCss = webWiki.showDefinition.bind(webWiki, "css");

// document.getElementById("htmlBtn").onclick = getHtml;
// document.getElementById("cssBtn").onclick = getCss;

//====Завдання 3===

// function shop(productName, pricePerKg, quantity) {
//   const totalCost = pricePerKg * quantity;
//   return `Товар: ${productName}, загальна вартість: ${totalCost.toFixed(2)} грн`;
// }

// console.log(shop("banana", 30, 4.5)); 
// // Результат: Товар: banana, загальна вартість: 135.00 грн

// console.log(shop("cherry", 58, 1.3)); 
// // Результат: Товар: cherry, загальна вартість: 75.40 грн

// console.log(shop("orange", 89, 3.4)); 
// // Результат: Товар: orange, загальна вартість: 302.60 грн