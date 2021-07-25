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

const themeNavigation = function (e) {
	function handleTouchMove(ev) {
		if (!$(ev.target).closest('#header').length) {
			ev.preventDefault();
		}
	}
	
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
	})
}

$(function () {
	themeDropdown();
	closeMessege();
	changeLocation();
	themeNavigation();
});