//скрипты для слайдеров
$('.work .slider-project').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.work1 .slider-project-nav',
    arrows: false,
    dots: false,
    fade: true
});
$('.work .slider-project-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.work1 .slider-project',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    infinite: false
});