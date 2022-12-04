/* First level: Необходимо реализовать интерфейс, с полем ввода(textarea). 
При обновлении страницы текст должен сохраняться в поле ввода. 
Реализуйте данное приложение через textarea и событие input. */

const feedback = document.querySelector('.feedback');
const textareaContent = document.querySelector('.textarea');
let content;
/* if (localStorage.getItem('text_content')) {
	textareaContent.text = localStorage.getItem('text_content');
} else {
	textareaContent.text = '';
} */

textareaContent.addEventListener('input', (e) => {
	let content = e.target.value;
	localStorage.setItem('text_content', content);
	console.log(content);
});

/* if (textareaContent.innerText.value === '') {
    
} */
