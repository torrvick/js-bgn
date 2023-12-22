const logTitleStyle = "font-size:14px; font-weight:bold";
const logTextStyle = "padding-left: 20px";
// Задание 1
console.log("%cЗадание 1", logTitleStyle);
const cubeIt = (number) => number ** 3;
console.log(`%c2^3 + 3^3 = ${cubeIt(2) + cubeIt(3)}`, logTextStyle);

// Задание 2
console.log("\n%cЗадание 2", logTitleStyle);
const salNet = (money) => (money -= money * 0.13).toFixed(2);
let salGross = prompt("Укажите Вашу чистую зарплату");
isNaN(salGross)
	? console.log(`%cВведено неверное значение`, logTextStyle)
	: console.log(`%cРазмер заработной платы за вычетом налогов равен ${salNet(salGross)}`, logTextStyle);

// Задание 3
console.log("\n%cЗадание 3", logTitleStyle);
let numbers = prompt("Введите 3 числа через пробел").replace(/\s+/g, " ").trim().split(" ").map(Number);
const findMax = (array) => Math.max(...array);
console.log(`%cМаксимальное число из ${numbers.join(", ")} равно ${findMax(numbers)}`, logTextStyle);

// Задание 4
console.log("\n%cЗадание 4", logTitleStyle);
const calcAdd = (a, b) => a + b;
const calcSub = (a, b) => (a > b ? a - b : b - a);
const calcMult = (a, b) => a * b;
const calcDiv = (a, b) => a / b;
let calcNumbers = prompt("Введите 2 числа через пробел").replace(/\s+/g, " ").trim().split(" ").map(Number);
let [num1, num2] = calcNumbers;
console.log(`%c${num1} + ${num2} = ${calcAdd(num1, num2)}`, logTextStyle);
console.log(`%c${num1 > num2 ? num1 : num2} - ${num1 > num2 ? num2 : num1} = ${calcSub(num1, num2)}`, logTextStyle);
console.log(`%c${num1} * ${num2} =  ${calcMult(num1, num2)}`, logTextStyle);
console.log(`%c${num1} / ${num2} =  ${calcDiv(num1, num2)}`, logTextStyle);
