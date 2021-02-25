$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$("header .header-bottom .navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	$('header .header-bottom .navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
	
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	const myBanner = new Swiper('#swiper-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 250,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 1000000,
			disableOnInteraction: false,
		}
	});
	
	const myWebsite = new Swiper('#swiper-website', {
		slidesPerView: 4,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		spaceBetween: 20,
		autoplay: {
			delay: 1000000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		}
	});
})