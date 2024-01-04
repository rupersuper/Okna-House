const btn = document.querySelectorAll('.btn');
const navForm = document.querySelectorAll('.nav_form');
const navForms = document.querySelector('.nav_forms');
const close = document.querySelectorAll('.form_close');
const bg = document.querySelector('.bg');
const body = document.querySelector('body');

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', () => {
		navForm[i].classList.add('active');
		navForms.classList.add('active');
		bg.classList.add('active');
		body.classList.add('active')
	})	
}

for (let x = 0; x < close.length; x++) {
	close[x].addEventListener('click', () => {
		navForm[x].classList.remove('active');
		navForms.classList.remove('active');
		bg.classList.remove('active');
		body.classList.remove('active')
	})	
}

const navBtn = document.querySelector('.nav_btn');
const navList = document.querySelector('.nav_list');

navBtn.addEventListener('click', () => {
	navList.classList.toggle('active');
	navBtn.classList.toggle('active');
	bg.classList.toggle('active');
	body.classList.toggle('active');
})

bg.addEventListener('click', () => {
	for (let q = 0; q < navForm.length; q++) {
		navForm[q].classList.remove('active')
	}
	bg.classList.remove('active');
	navList.classList.remove('active');
	navBtn.classList.remove('active');
	body.classList.remove('active');
	navForms.classList.remove('active');
})

const navBtns = document.querySelector('.nav_btns');

window.addEventListener('scroll', () => {
	if (window.scrollY != 0) {
		navBtns.classList.add('active')
	} else {
		navBtns.classList.remove('active')
	}
})

