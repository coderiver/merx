$(document).ready(function() {

//menu
function menu() {
	var el = $('.js-main');
	var item = el.find('.menu__item-in');
	item.hoverIntent(nav_1, nav_2);
	function nav_1() {
		$(this).addClass('is-hover').next().fadeIn();
		var item = $(this).attr('data-item');
		el.find('.main__sl-item').removeClass('is-active');
		$('.'+ item).addClass('is-active');
	};
	function nav_2() {
		$(this).removeClass('is-hover').next().fadeOut();		
	};
}
menu();

});