import './style.css';
import Img from './images/chef.jpg';

import loadHome from './home.js';

const content = document.getElementById("content");

function createNav() {
	const nav = document.createElement('div');
	nav.setAttribute("id", "nav");

	const h1 = document.createElement('h1');
	h1.textContent = 'Abizar Pizaa';

	const ul = document.createElement('ul');

	const li = document.createElement('li');
	const home = document.createElement('a');
	home.textContent = 'Home';
	li.append(home);
	ul.append(li);

	const li2 = document.createElement('li');
	const menu = document.createElement('a');
	menu.textContent = 'Menu';
	li2.append(menu);
	ul.append(li2);

	const li3 = document.createElement('li');
	const contact = document.createElement('a');
	contact.textContent = 'Contact';
	li3.append(contact);
	ul.append(li3);

	nav.append(h1);
	nav.append(ul);

	return nav;
}

function createMain() {
	const main = document.createElement("div");
	main.classList.add("main");
	main.setAttribute("id", "main");
	return main;
} 

function createFooter() {
	const footer = document.createElement("div");
	footer.setAttribute("id", "footer");
  
	const copyright = document.createElement("p");
	copyright.textContent = `Copyright © ${new Date().getFullYear()} Abenezer`;
  
	const githubLink = document.createElement("a");
	githubLink.href = "https://github.com/abeni-92";
  
	const githubIcon = document.createElement("i");
	githubIcon.classList.add("fab");
	githubIcon.classList.add("fa-github");
  
	githubLink.appendChild(githubIcon);
	footer.appendChild(copyright);
	footer.appendChild(githubLink);
  
	return footer;
  }

content.append(createNav());
content.append(createMain());
content.append(createFooter());

loadHome();
