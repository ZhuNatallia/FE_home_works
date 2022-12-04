/* First level: Необходимо реализовать интерфейс, с полем ввода(textarea). 
При обновлении страницы текст должен сохраняться в поле ввода. 
Реализуйте данное приложение через textarea и событие input. */

const feedback = document.querySelector('.feedback');
const textareaContent = document.querySelector('.textarea');

textareaContent.innerText = '';
let content;

textareaContent.addEventListener('input', (e) => {
	let content = e.target.value;
	localStorage.setItem('text_content', content);
});

if (localStorage.getItem('text_content')) {
	textareaContent.innerText = localStorage.getItem('text_content');
}

