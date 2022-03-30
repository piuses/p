const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

	// Custom JS

const body = document.querySelector('body')
const homesection = document.querySelector('.home-section')
	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

		mouseCoords(e)
		cursor.classList.remove('hidden')
		follower.classList.remove('hidden')
	})
	

	function updateMe() {

		dx     = clientX - cx
		dy     = clientY - cy
		tiltx  = dy / cy
		tilty  = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 25
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

	}
	parallaxMouse({ elements: '.cherry', moveFactor: 170, wrap: 'body'})
	parallaxMouse({ elements: '.pic', moveFactor: 70, wrap: 'body'})

const cursor = document.getElementById('cursor'),
			follower = document.getElementById('aura'),
			links = document.getElementsByTagName('a'),
			button = document.getElementsByTagName('button')
			mouseX = 0, mouseY = 0, posX = 0, posY = 0

			function mouseCoords(e) {

				mouseX = e.pageX
				mouseY = e.pageY
		
			}
		
			gsap.to({}, .01, {
		
				repeat: -1,
		
				onRepeat: () => {
		
					posX += (mouseX - posX) / 5
					posY += (mouseY - posY) / 5
		
					gsap.set(cursor, {
						css: {
							left: mouseX,
							top: mouseY
						}
					})
		
					gsap.set(follower, {
						css: {
							left: posX - 24,
							top: posY - 24
						}
					})
		
				}
		
			})
			for(let i = 0; i < links.length; i++) {

				links[i].addEventListener('mouseover', () => {
					cursor.classList.add('active')
					follower.classList.add('active')
				})
		
				links[i].addEventListener('mouseout', () => {
					cursor.classList.remove('active')
					follower.classList.remove('active')
				})
		
			}

			for(let i = 0; i < button.length; i++) {

				button[i].addEventListener('mouseover', () => {
					cursor.classList.add('active')
					follower.classList.add('active')
				})
		
				button[i].addEventListener('mouseout', () => {
					cursor.classList.remove('active')
					follower.classList.remove('active')
				})
		
			}

			body.addEventListener('mouseout', () => {
				cursor.classList.add('hidden')
				follower.classList.add('hidden')
			})

			$('.burger-btn').on('click', function(){
				$('.burger-btn,.burger').toggleClass('active');
			})


$('.offer__btn, .menu__item_link_modal').on('click', function(){
	$('.overlay, .modal-contacts').removeClass('d-none')
});
$('.modal-close, .overlay').click(function(){
	$('.overlay, .modal-contacts').addClass('d-none')
})

			$(function () {
				$(window).scroll(function() {
						$('.benefits__title').each(function(){
								var imagePos = $(this).offset().top;
			
								var topOfWindow = $(window).scrollTop();
								if (imagePos < topOfWindow+750) {
										$(this).addClass("fadeInLeft");
								}
						});
				});
			$(window).scroll(function() {
				$('.portfolio__title').each(function(){
						var imagePos = $(this).offset().top;
	
						var topOfWindow = $(window).scrollTop();
						if (imagePos < topOfWindow+800) {
								$(this).addClass("fadeInUp");
						}
				});
		});
$(window).scroll(function() {
	$('.technology-left').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
					$(this).addClass("fadeInLeft");
			}
	});
});
$(window).scroll(function() {
	$('.technology-right').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
					$(this).addClass("fadeInRight");
			}
	});
});
$(window).scroll(function() {
	$('.technology-right').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
					$(this).addClass("fadeInRight");
			}
	});
});
			})
