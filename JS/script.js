
//1.	Интерполяция
let name = "Ivan",
age = 30,
mail = 'ex@mail.ru';

document.write('Пользователю ' + name + '' + age + ' лет. Его почтовый адрес: ' + mail);



let name = "Ivan",
age = 30,
mail = 'ex@mail.ru';
document.write('Пользователю ${name}  ${age} лет. Его почтовый адрес: ' ${mail}');


//2.	let

function varTest() {
	var x = 1;
	if (true) {
	var x = 2;	
	console.log(x);
	
}
console.log(x);
}

function letTest() {
	let x = 1;
if (true) {
	let x = 2;
console.log(x);
	
}
console.log(x);
}

//3.	const 
const MY_FAV = 7;
MY_FAV = 20;
console.log("my favorit number is: " + MY_FAV);
const MY_FAV = 20;
var MY_FAV = 20;
let MY_FAV = 20;

function makeArray(){
	var items = [];
	for (var i = 0; i < 10; i++) {
var item = function () {
	console.log(i);
};
items.push(item);
	}
	return items;
}
var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();

//4.	Стрелочные функции
(param1, param2, ..., paramN) => { statements }
(param1, param2, ..., paramN) => expression

(singleParam) => { statements }
       // ||
singleParam => { statements }


() => { statements }
() => expression


let fun = () => {
	console.log(this);
};
let obj = {
	number: 5,
	sayNumber: function () {
		let say = () => {
			console.log(this);
		};
		say();
	}
};

obj.sayNumber();
		
	//5.	Параметры по умолчанию
//Ranwe
	function calcOrDouble(number, basis) {
		basis = basis || 2;
		console.log(number*basis);
	}
calcOrDouble(3,5);
calcOrDouble(6);

//Teper ES6
function calcOrDouble(number, basis = 2) {
	//basis = basis || 2;
	console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);


//6.	Классы

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}
const square = new Rectangle(10, 10);
console.log(square.calcArea());

//7.	Spread-операторы

let video = ['youtube', 'vimeo', 'rutube'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internrt = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a + b + c);
}
let numbers = [2, 5, 7];
log(...numbers);