import './style.css';

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createNav() {
	const nav = document.createElement('div');
	nav.setAttribute("id", "nav");
	const h1 = document.createElement('h1');
	h1.textContent = 'Abizar Pizaa';
	
	const ul = document.createElement('ul');
	const li = document.createElement('li');
	const home = document.createElement('a');
	home.textContent = 'Home';
	home.classList.add("active");
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

	const navItems = ul.querySelectorAll("a");
	home.addEventListener("click", (e) => {
		if(e.target.classList.contains("active")) return;	
		navItems.forEach((item) => {
			if(item != home){
				item.classList.remove("active");
			}
		})	
		e.target.classList.add("active");
		loadHome();
	});

	menu.addEventListener("click", (e) => {
		if(e.target.classList.contains("active"))return;
		navItems.forEach((item) => {
			if (item != menu){
				item.classList.remove("active");
			}
		})
		e.target.classList.add("active");
		loadMenu();
		
	});

	contact.addEventListener("click", (e) => {
		if(e.target.classList.contains("active"))return;
		navItems.forEach((item) => {
			if (item != contact){
				item.classList.remove("active");
			}
		})
		e.target.classList.add("active");
		loadContact();
	});

	return nav;
}

function createMain() {
	const main = document.createElement("div");
	// main.classList.add("main");
	main.setAttribute("id", "main");
	return main;
} 

function createFooter() {
	const footer = document.createElement("div");
	footer.classList.add("footer");
	
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
  
  const content = document.querySelector('body');
  
  content.append(createNav(), createMain(), createFooter());
 
  loadHome();
  
//   console.log(nav);
