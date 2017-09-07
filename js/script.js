//настройка Owl Carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 4000,
    dots: false,
    paginationNumbers: true,
    items: 1,
    navText: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    mouseDrag: true,
    touchDrag: true,

        responsive : {

        768 : {
            nav : true
}
}
});