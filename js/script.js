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
    items: 5,
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
    freeDrag: false
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


// //скрипт для закрытия меню бутстрап при клике вне него
// $(document).bind("mouseup touchend", function (e) {
//     var container = $('.navbar-collapse');
//
//     if (!container.is(e.target)
//         && container.has(e.target).length === 0) {
//         container.collapse('hide');
//     }
// });
//
// //кнопки для переключения nav-tabs
// $('.btn-next').click(function(){
//     $('.nav-tabs > .active').next('li').find('a').trigger('click');
// });
//
// $('.btn-prev').click(function(){
//     $('.nav-tabs > .active').prev('li').find('a').trigger('click');
// });
//
//
// //вызов функции набегания цифр
// $('.timer').countTo();
//
//
// //анимация перехода по якорям
// $("body").on("click","a[href^='#jack']", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top-0}, 800);
// });
//
// //отображение и скрытие кнопки прокрутки вверх
//  $(document).on("scroll", function () {
//     if ($(document).scrollTop() > 500) {
//         $(".btn-scroll-to-top").css({'display' : 'block','opacity' : '1'});
//     }
//     else $(".btn-scroll-to-top").css({'opacity' : '0', 'display': 'none'});
// });
