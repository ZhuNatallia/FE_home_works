/* First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).
Количество символов в строке можно узнать применив к строке свойство length через точку. Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично и для переменной, которая содержит строку. Например:
let someString = 'Hello';
console.log(someString.length) // 5
если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.
если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.
если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'
Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение и как стрелочную функцию.
Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее. */

function typeValue(somevalue = 'неверный тип данных') {
	if (typeof somevalue === 'string') {
		return somevalue.length;
	}
	if (typeof somevalue === 'number' || typeof somevalue === 'boolean') {
		return String(somevalue).length;
	}
	return somevalue;
}
console.log(typeValue('This is my word'));
console.log(typeValue(8769));
//console.log(typeValue(lalala03485));
//не получается с неверным типом данных. через else тоже не вышло

let typeValue2 = function (somevalue = 'неверный тип данных') {
	if (typeof somevalue === 'string') {
		return somevalue.length;
	}
	if (typeof somevalue === 'number' || typeof somevalue === 'boolean') {
		return String(somevalue).length;
	}
	return somevalue;
};
console.log(typeValue2('This is my word'));
console.log(typeValue2(8769));
//console.log(typeValue2(lalala03485));

const typeValue3 = (somevalue) =>
	typeof somevalue === 'string'
		? somevalue.length
		: typeof somevalue === 'number' || typeof somevalue === 'boolean'
		? String(somevalue).length
		: 'неверный тип данных';
console.log(typeValue3('Hello, world'));
console.log(typeValue3(984569));
console.log(typeValue3());

























/* Задача для тех, кто хочет испытать свои силы (необязательная)
Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число(например 5025) и возвращает сумму его цифр (в данном примере возвращаемое из функции значение будет 12). */

let arr = function (summ) {
	let resultArray = String(summ).split('');

	return resultArray;
};
console.log(arr(5025)); //["5", "0", "2", "5"]
//думала привести к стрингу, чтобы разбить на отдельные числа, привести их снова к цифрам и сложить, но никак не могу массив преобразовть назад в число
//как то наверное просто решается задача, через остаток от деления на длину, но не получалось

let arr2 = ['5', '0', '2', '5'];
function getDigitsSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let arrElem = arr[i];
		if (typeof Number(arrElem) == 'number') {
			sum += Number(arrElem);
		}
	}
	return sum;
}
console.log(getDigitsSum(arr2));

//Почему массив arr полученный не виден в функции getDigitsSum, а если точно с таким же
//значением другой arr2 массив подставить, то все работает.
//И как можно вложить одно в другое?
