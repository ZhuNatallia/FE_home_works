/* First level: необходимо реализовать страницу, которая получает данные о товаре и выводит информационные карточки с товарами. 
В нижней части страницы должен быть расчет общей суммы.  */

const form_product = document.querySelector('#form_product');
const products = document.querySelector('.products');
const result = document.querySelector('.result');
const data = [];

form_product.addEventListener('submit', (event) => {
	event.preventDefault();
	const title = form_product.title.value;
	const price = form_product.price.value;
	const count = form_product.count.value;
	data.push({ title, price, count });
	form_product.title.value = '';
	form_product.price.value = '';
	form_product.count.value = '';
	rerender();
});

function rerender() {
	products.innerText = '';
	result.innerText = '';
	data.forEach((product) => {
		const { title, price, count } = product;
		const container = document.createElement('div');
		const title_p = document.createElement('p');
		const price_p = document.createElement('p');
		const count_p = document.createElement('p');
		container.append(title_p, price_p, count_p);
		products.append(container);
		const result_container = document.createElement('div');
		const result_sum = document.createElement('p');
		const result_count = document.createElement('p');
		result_container.append(result_sum, result_count);
		result.append(result_container);
		container.classList.add('card');
		title_p.classList.add('title_card');
		price_p.classList.add('price_card');
		count_p.classList.add('count_card');
		title_p.innerText = title;
		price_p.innerText = price;
		count_p.innerText = count;
		result_sum.innerText = `Общая стоимость: ${price * count}`;
		result_count.innerText = `Общее количество: ${count}`;
	});
}
