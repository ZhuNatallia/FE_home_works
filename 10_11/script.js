//1)Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать -
// Какой-то текст! - input
const btn_block = document.querySelector('.block');
const input_elem = document.querySelector('.input');
const btn_unlock = document.querySelector('.unlock');

btn_block.addEventListener('click', function (event) {
	if (input_elem.hasAttribute('disabled')) {
		input_elem.removeAttribute('disabled');
	} else {
		input_elem.setAttribute('disabled', true);
	}
});
btn_unlock.addEventListener('click', function (event) {
	input_elem.value = '';
});

//2)Задача querySelectorAll
//Поменяйте содержимое абзацев на их порядковый номер в коде.
//Используйте перебор, индексы и textContent
// Заголовок, не поменяется.
// Абзац, поменяется.
const text_box = document.querySelectorAll('#text-box');
const text_elem = document.querySelector('.text');

text_box.forEach((item, index) => {
	item.addEventListener('click', (event) => {
		text_elem.textContent = 'Здесь могла быть ваша реклама!';
		console.log(event.target.dataset);
	});
});
//объясните, пожалуста, не до конца понимаю!!!
//Если в 25 строке пишу, тогда не срабатывает смена текста, 
//либо срабатывает только первый обзац