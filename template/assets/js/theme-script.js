const themeDropdown = function (e) {
	$('[theme-action=dropdown] > a').click(function (e) {
		e.stopPropagation();
		let elm = $(this).parent();
		if (elm.is('.show')) {
			elm.removeClass('show');
			elm.closest('.table-responsive').css('overflow', 'auto');
		} else {
			$('.show[theme-action=dropdown]').removeClass('show');
			if (elm.attr('theme-position')) {
				elm.addClass(elm.attr('theme-position'));
			} else {
				elm.addClass('left');
			}
			elm.closest('.table-responsive').css('overflow', 'inherit');
			elm.addClass('show');
		}
	});
	
	$('html').click(function (e) {
		if (e.target != $('[theme-action=dropdown]').hasClass('show')) {
			$('[theme-action=dropdown]').removeClass('show')
		}
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

$(function () {
	themeDropdown();
	closeMessege();
	changeLocation();
});