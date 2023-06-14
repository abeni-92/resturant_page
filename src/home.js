import './style.css';
import Img from './images/chef.jpg';

function createHome() {
	const home = document.createElement('div');
	// home.classList.add('main');

	const p1 = document.createElement('p');
	const img = document.createElement('img');
	const p2 = document.createElement('p');

	p1.textContent = 'Made with quality since 2000';
	img.src = Img;
	p2.textContent = 'order online or visit us';

	home.append(p1,img,p2);

	return home;
}

function loadHome() {
	const main = document.getElementById('main');
	main.classList.add("main");
	main.textContent = "";
	main.append(createHome());
}

export default loadHome;