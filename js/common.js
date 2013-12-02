$(document).ready(function() {

function classwitch() {
	$('body').append('<div class="sss" style="position: fixed; top: 0; left: 0; z-index: 100000;"><button data-class="blue-style">blue </button><button data-class="red-style">red </button><button data-class="green-style">green </button></div>')
	$('.sss button').bind('click', function(){
		$('body').removeClass('red-style');
		$('body').removeClass('blue-style');
		$('body').removeClass('green-style');
		var s = $(this).attr('data-class');
		$('body').addClass(s);
	});
}
classwitch();

//main
function main_page() {
	var wnd_height = $(window).height();
	var el = $('.main');
	var el_in = $('.main__in');
	var btn = el.find('.main__btn-down');
	el.height(wnd_height);
	el_in.height(wnd_height);
	btn.bind('click', function(){
		var wnd_height = $(window).height();
		$('body').animate({scrollTop: wnd_height}, 500);
		return false;
	});
}
main_page();

//sliders
function sliders() {
	var el = $('.js-slider');
	if (el.length > 0) {
		el.each(function(){
			el_next = $(this).find('.slider__next');
			el_prev = $(this).find('.slider__prev');
			el_pager = $(this).find('.slider__pager');
			el_item = $(this).find('.slider__item');
			el_in = $(this).find('.slider__in');
			el_in.cycle({
					fx: 'fade',
			    timeout: 0,
			    prev: el_prev,
			    next: el_next,
			    pager: el_pager,
			    slides: el_item
			});
		});
	};
}
sliders();

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

//footer nav
$('.js-footer-nav').bind('click', function(){
	if (!$(this).hasClass('is-open')) {
		$(this).addClass('is-open');
		$(this).text('Скрыть');
		$('.footer__nav').slideDown(200);
	}
	else{
		$(this).removeClass('is-open');
		$(this).text('Раскрыть');
		$('.footer__nav').slideUp(200);
	}
});

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

$(window).resize(function() {
	main_page();
})

});