let windowWidth = $(window).width();

const themeDropdown = function (e) {
	if ($('[theme-action=dropdown]').attr('theme-position')) {
		$('[theme-action=dropdown]').addClass($('[theme-action=dropdown]').attr('theme-position'));
	} else {
		$('[theme-action=dropdown]').addClass('left');
	}
	
	$('[theme-action=dropdown] > a').click(function (e) {
		e.stopPropagation();
		$('[theme-action=dropdown]').removeClass('show');
		let elm = $(this).parent();
		if (elm.is('.show')) {
			elm.removeClass('show');
			if (windowWidth > 991)
				elm.closest('.table-responsive').css('overflow', 'auto');
		} else {
			elm.addClass('show');
			if (windowWidth > 991)
				elm.closest('.table-responsive').css('overflow', 'inherit');
		}
	});
	
	$(document).mouseup(function (e) {
		let elm = $('[theme-action=dropdown]');
		elm.is(e.target) || 0 !== elm.has(e.target).length || (
			elm.removeClass('show')
		)
	})
}

const closeMessege = function (e) {
	$('[theme-action=dismiss-messege]').click(function (e) {
		e.stopPropagation();
		$(this).parent().fadeOut(250, function () {
			$(this).remove();
		});
	});
}

const changeLocation = function (e) {
	$('[theme-action=location]').click(function (e) {
		e.stopPropagation();
		let elm = $(this).closest('[theme-parent=location]');
		elm.find('[theme-id=setLocation] > span').text($(this).attr('data-value'));
		elm.removeClass('show');
	});
}

function handleTouchMove(ev) {
	if (!$(ev.target).closest('#navigation').length) {
		ev.preventDefault();
	}
}

const themeNavigation = function (e) {
	let elm = $('#navigation');
	$('[theme-action=navigation]').click(function (e) {
		e.stopPropagation();
		$(this).removeClass('no-animation');
		if (elm.is('.show')) {
			elm.removeClass('show');
			document.removeEventListener('touchmove', handleTouchMove);
			$('body').css('overflow', '');
		} else {
			elm.addClass('show');
			document.addEventListener('touchmove', handleTouchMove, {passive: false});
			$('body').css('overflow', 'hidden');
		}
	});
	
	$('[theme-action=overlay]').click(function () {
		$(this).parent().removeClass('show');
		$('body').css('overflow', '');
	})
}

const initSelect2_only = function () {
	$('[theme-action=select2-only]').each(function () {
		$(this).select2({
			dropdownParent: $(this).parent()
		});
	});
}

const viewPass = function () {
	$('[theme-action=view-pass] > a').click(function () {
		if ($(this).parent().hasClass('show-pass')) {
			$(this).parent().removeClass('show-pass');
			$(this).parent().find('input').attr('type', 'password');
			$(this).html('<i class="fas fa-eye"></i>');
		} else {
			$(this).parent().addClass('show-pass');
			$(this).parent().find('input').attr('type', 'text');
			$(this).html('<i class="fas fa-eye-slash"></i>');
		}
	});
}
const showEdit = function () {
	$('[theme-action=edit] a').click(function () {
		$(this).closest('[theme-action=edit]').toggleClass('show');
		$(this).tooltip('hide');
	});
}

$(document).ready(function () {
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
	
	const myDemo = new Swiper('#swiper-demo', {
		slidesPerView: 4,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		loop: true,
		spaceBetween: 20,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 3,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 4,
				slidesPerGroup: 2
			},
		}
	});
	
	
	// Dashboard
	
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
	
	themeDropdown();
	closeMessege();
	changeLocation();
	themeNavigation();
	initSelect2_only();
	viewPass();
	showEdit();
	$('[data-toggle="tooltip"]').tooltip();
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