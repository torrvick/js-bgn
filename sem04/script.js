const logTitleStyle = "font-size:14px; font-weight:bold";
const logTextStyle = "padding-left: 20px";
// Задание 1
console.log("%cЗадание 1", logTitleStyle);
console.log(`%c0 - это ноль (вообще-то четное число)`, logTextStyle);
for (i = 1; i < 11; i++) {
	i % 2 != 0 
		? console.log(`%c${i} - нечетное число`, logTextStyle) 
		: console.log(`%c${i} - четное число`, logTextStyle);
}

// Задание 2
console.log("\n%cЗадание 2", logTitleStyle);
const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3, 2);
console.log(`%c${arr2.join(", ")}`, logTextStyle);

// Задание 3
console.log("\n%cЗадание 3", logTitleStyle);
const arr3 = [];
for (let i = 0; i < 5; i++) {
	arr3.push(Math.floor(Math.random() * 10));
}
console.log(`%cИсходный массив: ${arr3.join(", ")}`, logTextStyle);
console.log(`%cСумма элементов массива равна ${arr3.reduce((sum, curr) => sum + curr)}`, logTextStyle);
console.log(`%cМинимальный элемент равен ${Math.min(...arr3)}`, logTextStyle);
console.log(`%cВ массиве ${arr3.includes(3) ? "присутствует" : "отсутствует"} число 3`, logTextStyle);

// Задание 4
console.log("\n%cЗадание 3", logTitleStyle);
for (let i = 1; i < 21; i++) {
	console.log("x".repeat(i));
}