//настройка Owl Carousel
$(".owl-carousel").owlCarousel({
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

//инициализация постраничного скролла
$.scrollify({
    section : ".example-classname",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});


//Добавление класса при спуске до опредененной позиции
$(document).on("scroll",function(){
    if($(document).scrollTop()>950){
        $(".navbar-fixed-top").addClass("navbar-setting") .removeClass("nav-default");
    }
    else{
        $(".navbar-fixed-top").removeClass("navbar-setting") .addClass("nav-default");
    }
    if($(document).scrollTop()>700){
        $(".left-menu").addClass("dark-color");
    }
    else
        $(".left-menu").removeClass("dark-color");
    if($(document).scrollTop()>70){
        $(".footer").css("opacity", "1");
    }
    else
        $(".footer").css("opacity", "0");
});

//настройка спуска по меню bootstrap
$('body').scrollspy({target: ".left-menu", offset: 100});
$(".left-menu a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 91
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});



//настройка набегания цифр
let marker = true;

$(document).on("scroll",function(){
    let block1 = $(".screen-five").offset().top;
    let block3 = $(window).height();

    if($(document).scrollTop() > block1 - block3 && marker){
        $('.timer').countTo();
        marker = false;
    }
});


$(document).ready(function() {
    //Init the carousel
    initSlider();

    function initSlider() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar
        });
    }

    function startProgressBar() {
        // apply keyframe animation
        $('.slide-progress').css({
            'width': '100%',
            'transition': 'width 5000ms'
        });
    }

    function resetProgressBar() {
        $('.slide-progress').css({
            'width': 0,
            'transition': 'width 0s'
        });
    }
});

//
// //анимация перехода по якорям
// $(document).ready(function() {
//     $('a[href^="#"]').click(function(){
//         var el = $(this).attr('href');
//         $('body').animate({
//             scrollTop: $(el).offset().top}, 800);
//         return false;
//     });
// });
