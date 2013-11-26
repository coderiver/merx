$(document).ready(function() {

//menu
function menu() {
	var el = $('.js-sl-category');
	var item = $('.menu__item-in');
	item.hoverIntent(nav_1, nav_2);
	function nav_1() {
		$(this).addClass('is-hover').next().fadeIn();
		var item = $(this).attr('data-item');
		el.find('.sl-category__item').removeClass('is-active');
		$('.'+ item).addClass('is-active');
	};
	function nav_2() {
		$(this).removeClass('is-hover').next().fadeOut();		
	};
}
menu();

//select
function select() {
	var el = $('.js-select');
	var el_title = el.find('.select__value');
	var item = el.find('.select__options li');
	var list = el.find('.select__options');
	el_title.click(function() {
		el.removeClass('is-open');
		list.hide();
		$(this).parent().toggleClass('is-open');
		$(this).next().toggle();
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().html(val);
		$(this).parent().next().val(val);
		$(this).parent().hide();
		el.removeClass('is-open');
	});
	el.click(function(event){
	  event.stopPropagation();
	});
};
select();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

});