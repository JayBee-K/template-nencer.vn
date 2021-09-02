$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$('header .header-bottom .navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
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
	
	$('.input-effect').blur(function () {
		$(this).val() != '' ? $(this).addClass('valid') : $(this).removeClass('valid');
	});
	
	$('.callModal').click(function (e) {
		console.log($('.modal-theme #' + $(this).data('name')));
		$('.modal-template .modal').modal('hide');
		$('.modal-template #' + $(this).data('name')).modal('show');
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
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`;
			},
		},
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
	
	$(document).on('click', '#return-to-top', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	
	$('#viewPass').click(function () {
		if ($(this).closest('.form-group').hasClass('show-pass')) {
			$(this).closest('.form-group').removeClass('show-pass');
			$(this).parent().next('input').attr('type', 'password');
			$(this).html('<i class="fas fa-eye"></i>');
		} else {
			$(this).closest('.form-group').addClass('show-pass');
			$(this).parent().next('input').attr('type', 'text');
			$(this).html('<i class="fas fa-eye-slash"></i>');
		}
	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.float-button').fadeIn();
	} else {
		$('.float-button').fadeOut();
	}
	
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('.float-button').fadeOut();
	}
});