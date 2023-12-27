const logTitleStyle = "font-size:14px; font-weight:bold";
const logTextStyle = "padding-left: 20px";
// Задание 1
console.log("%cЗадание 1", logTitleStyle);
const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,
};
Object.keys(numbers).forEach((key) => {
	if (numbers[key] >= 3) {
		console.log(`%c${key}: ${numbers[key]}`, logTextStyle);
	}
});

// Задание 2
console.log("%cЗадание 2", logTitleStyle);
const post = {
	author: "John", // вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2, // вывести это число
			},
		},
		{
			userId: 5, // вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", // вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1,
			},
		},
	],
};
console.log(`%c${post.author}`, logTextStyle);
console.log(`%c${post.comments[0].rating.dislikes}`, logTextStyle);
console.log(`%c${post.comments[1].userId}`, logTextStyle);
console.log(`%c${post.comments[1].text}`, logTextStyle);

// Задание 3
console.log("%cЗадание 3", logTitleStyle);
const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];
products.forEach((product) => {
	product.oldPrice = product.price;
	product.price *= 0.85;
	console.log(`%c${product.id}: ` + `old price: ${product.oldPrice}; ` + `new price: ${product.price}`, logTextStyle);
});

// Задание 4
console.log("%cЗадание 4", logTitleStyle);
const products4 = [
	{
		id: 3,
		price: 127,
		photos: ["1.jpg", "2.jpg"],
	},
	{
		id: 5,
		price: 499,
		photos: [],
	},
	{
		id: 10,
		price: 26,
		photos: ["3.jpg"],
	},
	{
		id: 8,
		price: 78,
	},
];
const prodWithPhotos = products4.filter((product) => product.photos && product.photos.length > 0);
const sortedProducts4 = products4.sort((a, b) => a.price - b.price);
console.log(prodWithPhotos);
console.log(sortedProducts4);

// Задание 5
console.log("%cЗадание 5", logTitleStyle);
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const daysTranslate = en.reduce((acc, enKey, index) => {
	acc[enKey] = ru[index];
	return acc;
}, {});
console.log(daysTranslate);
