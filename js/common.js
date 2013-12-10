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
			  slides: el_item,
			  autoHeight: 'container'
			});
		});
	};
	var el_main = $('.js-slider-main');
	if (el.length > 0) {
		el_main.each(function(){
			el_next = $(this).find('.slider__next');
			el_prev = $(this).find('.slider__prev');
			el_item = $(this).find('.slider__item');
			el_in = $(this).find('.slider__in');
			el_in.cycle({
				fx: 'fade',
			  timeout: 4000,
			  prev: el_prev,
			  next: el_next,
			  slides: el_item
			});
		});
	};
	var el_many = $('.js-slider-many');
	if (el.length > 0) {
		if ($(window).width() < 999) {
			el_animate = 'fade';
		}
		else{
			el_animate = 'carousel';
		}
		el_many.each(function(){
			el_next = $(this).find('.slider__next');
			el_prev = $(this).find('.slider__prev');
			el_item = $(this).find('.slider__item');
			el_in = $(this).find('.slider__in');
			el_in.cycle({
				fx: el_animate,
			  timeout: 0,
			  prev: el_prev,
			  next: el_next,
			  slides: el_item
			});
		});
	};
	var el_popup = $('.js-popup-gallery');
	if (el_popup.length > 0) {
		el_popup.each(function(){
			el_next = $(this).find('.p-gallery__next');
			el_prev = $(this).find('.p-gallery__prev');
			el_in = $(this).find('.p-gallery__in');
			el_items = $(this).find('.p-gallery__item');
			el_in.cycle({
				fx: 'fade',
			  timeout: 0,
			  prev: el_prev,
			  next: el_next,
			  slides: el_items
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
		$('.sl-category__item').removeClass('is-active');
	};
}
menu();

//search-type
$('.js-search-type a').bind('click', function(){
	var item = $(this).attr('href');
	if (!$(this).hasClass('is-active')) {
		$(this).parents('.search-prod').find('.search-prod__in').slideUp();
		$('.' + item).slideDown();
		$(this).parents('.search-prod__type').find('a').removeClass('is-active');
		$(this).addClass('is-active');
	};	
	return false;
});
$('.search-prod__slide').bind('click', function(){
	$('.search-prod__drop, .search-prod__type').slideToggle();
	$(this).toggleClass('is-active');
});

//mob nav
$('.js-mob-nav').bind('click', function(){
	$('.mob-nav').slideToggle();
});

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
	var hash = window.location.hash;
	$(hash).addClass('is-active');
	$(hash).find('.faq__content').show();
	item.find('.faq__head').bind('click', function(){
		var el_this = $(this);
		el_this.parent().toggleClass('is-active');
		var pos_top = $(this).parent().offset().top;
		$('body').animate({scrollTop: pos_top}, 500, function() {
			el_this.next().slideToggle();	
			var el_id = el_this.parent().attr('id');	
			window.location.hash = el_id;		
		});		
	});
}
faq();

//map
function map() {
	var el = $('.js-map');
	var point = el.find('.map__point');
	var head = el.find('.map__el-head');
	point.bind('click', function() {
		el.find('.map__el-in').slideUp();
		$(this).prev().slideDown();
	});
	head.bind('click', function() {
		$(this).parent().slideUp();
	});
}
map();

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