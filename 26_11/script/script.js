/* First level: необходимо реализовать страницу, которая получает данные о товаре и выводит информационные карточки с товарами. 
В нижней части страницы должен быть расчет общей суммы.  */

const form_product = document.querySelector('#form_product');
const products = document.querySelector('.products');
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
	data.forEach((product) => {
		const { title, price, count } = product;
		const container = document.createElement('div');
		const title_p = document.createElement('p');
		const price_p = document.createElement('p');
		const count_p = document.createElement('p');
		container.append(title_p, price_p, count_p);
		products.append(container);
		title_p.innerText = title;
		price_p.innerText = price;
		count_p.innerText = count;
	});
}
