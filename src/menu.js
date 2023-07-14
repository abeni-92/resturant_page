import './style.css';

import Pizza1 from './images/pizza1.jpg';
import Pizza2 from './images/pizza2.jpg';
import Pizza3 from './images/pizza3.jpg';
import Pizza4 from './images/pizza4.jpg';
import Pizza5 from './images/pizza5.jpg';
import Pizza6 from './images/pizza6.jpg';

function createMenu() {
	const menu = document.createElement('div');
	menu.setAttribute("id", "menu");
	// menu.classList.add("menu");

	const article1 = createArticle('Salsiccia', Pizza1, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
	const article2 = createArticle('Gamberi', Pizza2, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
	const article3 = createArticle('Pepe', Pizza3, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil')
	const article4 = createArticle('Disgustoso', Pizza4, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
	const article5 = createArticle('Colorato', Pizza5, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
	const article6 = createArticle('Pomorodo', Pizza6, 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');

	const item1 = createItem(article1, article2);
	const item2 = createItem(article3, article4);
	const item3 = createItem(article5, article6);

	menu.append(item1, item2, item3);

	return menu;
}

function createItem(article1, article2) {
	const item = document.createElement('div');
	item.classList.add('item');

	item.append(article1, article2);

	return item;
}

function createArticle(name, src, desc){
	const article = document.createElement('article');

	const img = new Image();
	img.src = src;

	const h2 = document.createElement('h2');
	h2.textContent = name;

	const p = document.createElement('p');
	p.textContent = desc;
	
	article.append(img, h2, p);

	return article;
}

function loadMenu() {
	const main = document.getElementById('main');
	// main.setAttribute("id", "menu");
	main.classList.add("menu");
	main.textContent = "";
	main.append(createMenu());
}

export default loadMenu;