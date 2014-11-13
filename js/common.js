$(document).ready(function() {


$('.header__category').click(function(event) {
	$(this).toggleClass('is-clicked');
});

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



//js-pictures-load
function pictures_load () {
	var el = $('.js-pictures-load');
	el.find('img').each(function(){
		var width = $(this).attr('width');
		width = parseInt(width);
		var height = $(this).attr('height');
		height = parseInt(height);
		var src = $(this).attr('src');
		console.log(width+'_'+height);
		if (width > height) {
			el.next().append('<div class="sl-category__item" style="background-image: url('+src+')"></div>');
		}
		else{
			el.next().append('<div class="sl-category__item bg-size-contain" style="background-image: url('+src+')"></div>');
		}
	});
}
pictures_load();



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
				fx: 'scrollHorz',
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

function slider_section() {
	var el_section = $('.js-slider-section');
	var el_section_pic = $('.js-slider-section-pic');
	if (el_section.length > 0 && el_section_pic.length > 0) {
		el_next = el_section.find('.slider__next');
		el_prev = el_section.find('.slider__prev');
		el_pager = el_section.find('.slider__pager');
		el_item = el_section.find('.slider__item');
		el_item_pic = el_section_pic.find('.sl-category__item');
		el_in = el_section.find('.slider__in');		
		el_in.cycle({
			fx: 'fade',
		  timeout: 4000,
		  prev: el_prev,
		  next: el_next,
		  pager: el_pager,
		  slides: el_item
		});
		el_section_pic.cycle({
			fx: 'fade',
		  timeout: 4000,
		  prev: el_prev,
		  next: el_next,
		  pager: el_pager,
		  slides: el_item_pic,
		  pagerTemplate: ''
		});
	};
}
slider_section();

//menu
function menu() {
	var el = $('.js-sl-category');
	var item = $('.menu__item-in');
	var menu = $('.menu');
	var bg = $('.sl-category__bg');
	item.hoverIntent(nav_1, nav_2);
	function nav_1() {
		bg.fadeOut(400);
		$(this).addClass('is-hover').next().fadeIn(400);
		var pic = $(this).attr('data-item');
		el.find('.sl-category__item').removeClass('is-active');
		$('.'+ pic).addClass('is-active');
	};
	function nav_2() {
		bg.fadeOut(400);
		$(this).removeClass('is-hover').next().fadeOut(400);		
	};
	menu.hoverIntent(nav_3, nav_4);
	function nav_3() {
		bg.fadeOut(400);
	};
	function nav_4() {		
		bg.fadeIn(400);
		if (!menu.parent().hasClass('menu-sl')) {$('.sl-category__item').removeClass('is-active');};
	};
}
menu();

//search-type
function search_type() {
	var el = $('.js-search-type');
	el.find('.search-prod__type a').bind('click', function(){
		var item = $(this).attr('href');
		if (!$(this).hasClass('is-active')) {
			$(this).parents('.search-prod').find('.search-prod__in').slideUp();
			$('.' + item).slideDown();
			$(this).parents('.search-prod__type').find('a').removeClass('is-active');
			$(this).addClass('is-active');
		};	
		return false;
	});
	el.find('.search-prod__slide').bind('click', function(){
		var text_1 = "Развернуть";
		var text_2 = "Свернуть";
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$(this).find('span').html(text_2);
		}
		else{
			$(this).addClass('is-open');
			$(this).find('span').html(text_1);
		}
		el.find('.search-prod__drop, .search-prod__type').slideToggle();
		$(this).toggleClass('is-active');
	});
}
search_type();

//mob nav
$('.js-mob-nav').bind('click', function(){
	$('.mob-nav').slideToggle();
});

//select
function select() {
	var el = $('.js-select');
	el.find('.select__value').bind('click', function(){		
		if ($(this).parent().hasClass('is-open')) {
			$(this).parent().removeClass('is-open');
			$(this).next().hide();
		}
		else {
			el.removeClass('is-open');
			el.find('.select__options').hide();
			$(this).parent().addClass('is-open');
			$(this).next().slideDown();
		}
	})
	el.find('.select__options li').bind('click', function(){
		var val = $(this).text();
		$(this).parent().prev().html(val);
		$(this).parent().next().val(val);
		$(this).parent().hide();
		$(this).parent().parent().removeClass('is-open');
	})
	el.click(function(event){
		event.stopPropagation();
	});
	$(document).click(function() {
		el.find('.select__options').hide();
		el.removeClass('is-open');
	});
}
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
		$(this).prev().slideToggle();
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

//popup
function popup() {
	var btn = $('.js-popup');
	var btn_close = $('.js-popup-close');
	var el = $('.popup');
	btn.bind('click', function(){
		var popup = $(this).attr('data-popup');
		$('#' + popup).fadeIn();
	});
	btn_close.bind('click', function(){		
		el.fadeOut();
	});
}
popup();

//masonry box
function masonry_box() {	
	if ($('.js-masonry-box').length) {	
		var container = document.querySelector('.js-masonry-box');
		var msnry = new Masonry( container, {
		  columnWidth: 300,
		  itemSelector: '.box',
		  gutter: 10
		});
		var window_width = $(window).width();
		if (window_width < 989) {
			msnry = new Masonry( container, {
				columnWidth: 300,
				itemSelector: '.box',
				gutter: 10
			});
		}
		else {
			msnry.destroy();
		}
	};
};
masonry_box();

$(window).resize(function() {
	main_page();
	masonry_box();
})

	// new main page 
	var newmain = $('.js-newmain');
	if (newmain.length) {
		newmain.addClass('is-visible');
	};

});