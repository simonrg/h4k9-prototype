document.addEventListener('DOMContentLoaded', function() {
	var date = new Date();
	var left = document.getElementsByClassName('arrow-left')[0];
	var right = document.getElementsByClassName('arrow-right')[0];
	var cart = document.getElementsByClassName('add-to-cart')[0];
	var slider = document.getElementsByClassName('testimonial-wrapper__container');
	var slidepos = 0;

	//footer full year
	document.getElementsByClassName('year')[0].innerHTML = date.getFullYear();


	//navigation for testimonials
	right.className += ' disabled';

	left.addEventListener('click', function(){
		if(slidepos == slider.length-1) { return; }

		slider[slidepos].className += ' left-swipe';
		slider[slidepos].classList.remove('testimonial-active');
		slider[slidepos].classList.add('testimonial-hidden');
		slidepos++;

		slider[slidepos].classList.remove('right-swipe');
		slider[slidepos].classList.add('testimonial-active');
		slider[slidepos].classList.remove('testimonial-hidden');

		if(slidepos == slider.length-1) { left.className += ' disabled'; }

		if(slidepos > 0) { right.classList.remove('disabled'); }
	});
	right.addEventListener('click', function(){
		if(slidepos == 0) { return; }

		slider[slidepos].classList.remove('testimonial-active');
		slider[slidepos].classList.add('right-swipe');
		slidepos--;

		slider[slidepos].classList.remove('left-swipe');
		slider[slidepos].classList.add('testimonial-active');

		if(slidepos < 2) { left.classList.remove('disabled'); }
		if(slidepos == 0) { right.className += ' disabled'; }
	});

	//adding items to cart
	cart.addEventListener('click', function(){
		//update cart total
		var cart = document.getElementsByClassName('checkout-cart__total')[0].innerHTML;
		var newtotal = parseInt(cart);
		newtotal += 1;
		document.getElementsByClassName('checkout-cart__total')[0].innerHTML = String(newtotal);

		//toggle loading indicator
		document.getElementsByClassName('add-to-cart__text')[0].innerText = '';
		document.getElementsByClassName('loader-icon')[0].style.display = 'block';

		setTimeout(loadingTimer, 1000);
	});

	function loadingTimer() {
		document.getElementsByClassName('add-to-cart__text')[0].innerText = 'ADD TO CART';
		document.getElementsByClassName('loader-icon')[0].style.display = 'none';
	}

	//slideshow
	var activeIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var dots = document.getElementsByClassName('dot');
		var slide = document.getElementsByClassName('slide__image');

		if(activeIndex >= dots.length) { activeIndex = 0; }

		if(document.getElementsByClassName('dot-active').length > 0) {
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' dot-active', '');
				slide[i].className = slide[activeIndex].className.replace(' slide__image--active', '');
			}
		}

		slide[activeIndex].className += ' slide__image--active';
		dots[activeIndex].className += ' dot-active';
		activeIndex++;

		setTimeout(showSlides, 3000);
	}

}, false);