/* First level:     1)
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
    То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
 */

function camelize(str) {
	let camelizeTransform = str.split('-');
	let camelizeUpp =
		camelizeTransform[0][0].toUpperCase() +
		camelizeTransform[0].slice(1) +
		camelizeTransform[1][0].toUpperCase() +
		camelizeTransform[1].slice(1) +
		camelizeTransform[2][0].toUpperCase() +
		camelizeTransform[2].slice(1);

	return camelizeUpp;
}
console.log(camelize('my-short-string'));
console.log(camelize('list-style-image'));

//перепробовала кучу вариантов и методов, но что-то пишу не так, раз не работает.
//console.log(camelize('background-color')); не работает тогда

function camelize(str) {
	let splitedString = str.split('-');
	for (let i = 0; i < splitedString.length; i++) {
		// splitedString[i] = splitedString[i].slice(0, 1).toUpperCase() + splitedString[i].slice(1); //мой вариант
		splitedString[i] = firstSymbolUp(splitedString[i]);
	}
	let joinSring = splitedString.join('');
	return joinSring;
}

function firstSymbolUp(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(camelize('my-short-string'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

console.log('---------------------------------------');

/* 2)
    Задача: написать функцию, принимающую массив чисел
    и возвращающую сумму всех его положительных элементов и отрицательных 
    чисел отдельно в виде нового массива
    например функция принимает как аргумент следующий массив
    и должна вернуть [14, -11] */

const numbers = [1, -2, 3, 4, -9, 6];

//function count(numbers) {
let pos = 0;
let neg = 0;
let result;
//let result = positive
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		pos += numbers[i];
	} else {
		neg += numbers[i];
	}
	//return numbers
}
//}
/* console.log(pos); //14
console.log(neg); //-11 */

// let arr = function([1, -2, 3, 4, -9, 6]);
// let arr = sumPositiveElement([]);
// let arr = sumNegativeElement([]);

let sum = function (arrNumbers) {
	let positive = 0;
	let negative = 0;
	for (let i = 0; i < arrNumbers.length; i++) {
		const element = arrNumbers[i];
		if (element < 0) {
			negative += element;
		} else {
			positive += element;
		}
	}
	return [negative, positive];
};
console.log(sum([1, -2, 3, 4, -9, 6]));

console.log('-_-_-_-_-_-_-_-_-_-_-_-_-');

let sumPosAndNeg = function (arrNumbers) {
	let positive = sumWithStatus(arrNumbers, '+');
	let negative = sumWithStatus(arrNumbers, '-');
	return [negative, positive];
};

let sumWithStatus = function (arrNumbers, status) {
	let sum = 0;
	for (let i = 0; i < arrNumbers.length; i++) {
		const element = arrNumbers[i];
		if (status === '-' && element < 0) {
			sum += element;
		}
		if (status === '+' && element > 0) {
			sum += element;
		}
	}
	return sum;
};

console.log(sumPosAndNeg([1, -2, 3, 4, -9, 6]));
