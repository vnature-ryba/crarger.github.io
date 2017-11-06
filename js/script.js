//инициализация owl
$(".block-about .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 4000,
    dotsSpeed: 4000,
    navText: "",
    dots: true,
    paginationNumbers: true,
    lazyLoad: true,
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false,
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 2
        },
        1148: {
            items: 3
        },
        1533: {
            items: 4
        },
        1800: {
            items: 5
        }
    }
});

//инициализация owl
$(".block-advantages .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 4000,
    dotsSpeed: 4000,
    navText: "",
    dots: true,
    paginationNumbers: true,
    items: 1,
    lazyLoad: true,
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false,
    responsive: {
        320: {
            items: 1
        }
    }
});

//инициализация owl
$(".news .owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 4000,
    dotsSpeed: 4000,
    navText: "",
    dots: false,
    paginationNumbers: true,
    items: 3,
    lazyLoad: true,
    autoplay: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false
});

// //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
// var owl = $(".slider-news");
// var owl1 = $(".slider-about");
// owl.owlCarousel();
// owl1.owlCarousel();
// //$(".next") - находим нашу кнопку
// $(".btn-next").click(function () {
//     owl.trigger("next.owl.carousel");
//     owl1.trigger("next.owl.carousel");
// });
// $(".btn-prev").click(function () {
//     owl.trigger("prev.owl.carousel");
//     owl1.trigger("prev.owl.carousel");
// });

// //скрипт для закрытия меню бутстрап при клике вне него
// $(document).bind("mouseup touchend", function (e) {
//     var container = $('.navbar-collapse');
//     if (!container.is(e.target)
//         && container.has(e.target).length === 0) {
//         container.collapse('hide');
//     }
// });

// //кнопки для переключения nav-tabs
// $('.btn-next').click(function(){
//     $('.nav-tabs > .active').next('li').find('a').trigger('click');
// });

// $('.btn-prev').click(function(){
//     $('.nav-tabs > .active').prev('li').find('a').trigger('click');
// });
//

//анимация перехода по якорям
$("body").on("click","a[href^='#jack']", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-0}, 800);
});


// //отображение и скрытие кнопки прокрутки вверх
//  $(document).on("scroll", function () {
//     if ($(document).scrollTop() > 500) {
//         $(".btn-scroll-to-top").css({'display' : 'block','opacity' : '1'});
//     }
//     else $(".btn-scroll-to-top").css({'opacity' : '0', 'display': 'none'});
// });
