import './style.css';

function createContact() {
	const contact =  document.createElement('div');

	contact.innerHTML = `<span><i class="fa-solid fa-phone"></i>+14032765499</span>
	<span><i class="fa-solid fa-house"></i> 3W5W+C9 Calgary, Alberta, Canada</span>
	<iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10029.78820325369!2d-114.0605450756041!3d51.06329708282476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371655a15e0fc79%3A0x3b178b91ca3ea231!2sdiner%20deluxe!5e0!3m2!1sen!2set!4v1686605265319!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

	// const span1 = document.createElement('span');
	// const span2 = document.createElement('span');
	// const i1 = document.createElement('i');
	// const i2 = document.createElement('i');
	// const iframe = document.createElement('iframe');

	// i1.classList.add("fa-solid", "fa-phone");
	// // fa-phone
	// i2.classList.add("fa-house", "fa-house");
	// // fa-solid 

	// span1.textContent = '+14032765499';
	// span2.textContent = ' 3W5W+C9 Calgary, Alberta, Canada';
	// span1.append(i1);
	// span2.append(i2);

	// iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10029.78820325369!2d-114.0605450756041!3d51.06329708282476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371655a15e0fc79%3A0x3b178b91ca3ea231!2sdiner%20deluxe!5e0!3m2!1sen!2set!4v1686605265319!5m2!1sen!2set";
	// // iframe.width = "100%";
	// // console.log(contact);

	// contact.append(span1, span2, iframe);

	return contact;
}

function loadContact() {
	const main = document.getElementById('main');
	main.classList.add("contact");
	main.textContent = "";
	main.append(createContact());
}

export default loadContact;