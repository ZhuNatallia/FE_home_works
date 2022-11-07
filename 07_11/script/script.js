//First level: 1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

const btn_hi = document.querySelector('.btn');

btn_hi.addEventListener('click', function () {
	console.log('Привет');
});

//2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

const photo_elem = document.querySelector('.photo');
const btn_toggle = document.querySelector('.toggle');

btn_toggle.addEventListener('click', function () {
	photo_elem.classList.toggle('photo');
});
//надеюсь все правильно)
