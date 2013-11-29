$(document).ready(function() {

function main_page() {
	var wnd_height = $(window).height();
	var el = $('.main');
	var el_in = $('.main__in');
	el.height(wnd_height);
	el_in.height(wnd_height);
}
main_page();

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

//calculate
function calculate() {
	var el = $('.js-calculate');
	el.find('.calculate__in .btn').bind('click', function(){
		el.find('.calculate__form').slideToggle();
	});
}
calculate();

//faq
function faq() {
	var el = $('.js-faq');
	var item = el.find('.faq__item');
	el.find('.faq__content').hide();
	item.first().addClass('is-active');
	item.first().find('.faq__content').show();
	item.bind('click', function(){
		$(this).toggleClass('is-active');
		$(this).find('.faq__content').slideToggle();
	});
}
faq();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

$(window).resize(function() {
	main_page();
})

});