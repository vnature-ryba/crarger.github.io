//инициализация owl для страницы услуги
$(".page-services .owl-carousel").owlCarousel({
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
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false
});

//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
var owl = $(".slider-services");
owl.owlCarousel();
//$(".next") - находим нашу кнопку
$(".btn-next").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".btn-prev").click(function () {
    owl.trigger("prev.owl.carousel");
});