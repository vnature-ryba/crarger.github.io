//скрипт для закрытия меню бутстрап при клике вне него
$(document).bind("mouseup touchend", function (e) {
    var container = $('.navbar-collapse');

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.collapse('hide');
    }
});


//progressbar owl
$(document).ready(function () {
    //Init the carousel
    initSlider();

    function initSlider() {
        $("#first-slider").owlCarousel({
            loop: true,
            margin: 0,
            stagePadding: 0,
            nav: false,
            autoplaySpeed: 4000,
            dotsSpeed: 4000,
            navText: "",
            dots: false,
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
            freeDrag: false,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar,
            navigation: true,
            navigationText: ['&lsaquo;', '&rsaquo;'],
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            afterInit: makePages,
            afterUpdate: makePages
        });

    }

    function startProgressBar() {
        // apply keyframe animation
        $('.slide-progress').css({
            'width': '100%',
            'transition': 'width 5000ms'
        });
    }

    function makePages() {
        $.each(this.owl.userItems, function (i) {
            $('.owl-controls .owl-page').eq(i)
                .text($(this).find('p').text());
        });
    }

    function resetProgressBar() {
        $('.slide-progress').css({
            'width': 0,
            'transition': 'width 0s'
        });
    }
});

//инициализация owl для screen-two
$(".screen-two .owl-carousel").owlCarousel({
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

//инициализация owl для третьего экрана
$(".screen-stages .owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 1000,
    dotsSpeed: 500,
    navText: "",
    dots: true,
    paginationNumbers: true,
    items: 4,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    mouseDrag: true,
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
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
});

//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
var owl = $(".slider2");
owl.owlCarousel();
//$(".next") - находим нашу кнопку
$(".btn-next").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".btn-prev").click(function () {
    owl.trigger("prev.owl.carousel");
});

//инициализация постраничного скролла
$.scrollify({
    section: ".example-classname",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () {
    },
    after: function () {
    },
    afterResize: function () {
    },
    afterRender: function () {
    }
});

// открытие/закрытие блока калькулятора при клике на кнопки
var
    $this = $(this),
    content = $('#calc'),
    footer = $('.footer');

$('#show-discount').on('click', function (e) {
    e.preventDefault();
    content.slideDown();
    footer.toggle();
});


$('#hide-discount').on('click', function (e) {
    e.preventDefault();
    content.slideUp();
    footer.show('fast');
});


if ($(window).width() > 1280) {

    //Добавление класса при спуске до опредененной позиции
    $(document).on("scroll", function () {


        if (jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height()) {
            content.slideDown();
            footer.css("opacity", "0");
            footer.hide();

        }
        if ($(document).scrollTop() > 1350) {
            $(".footer").addClass("light-footer");
        }
        else {
            $(".footer").removeClass("light-footer");
        }
        if ($(document).scrollTop() > 1850) {
            $(".header").addClass("navbar-setting").removeClass("nav-default");
        }
        else {
            $(".header").removeClass("navbar-setting").addClass("nav-default");
        }
        if ($(document).scrollTop() > 3100) {
            $(".footer").removeClass("light-footer").addClass("dark-footer");
        }
        else {
            $(".footer").removeClass("dark-footer");
        }
        if ($(document).scrollTop() > 500) {
            $(".left-menu").addClass("gray-color");
        }
        else
            $(".left-menu").removeClass("gray-color");
        if ($(document).scrollTop() > 1700) {
            $(".left-menu").addClass("dark-color").removeClass("gray-color");
        }
        else
            $(".left-menu").removeClass("dark-color");
        if ($(document).scrollTop() > 70) {
            $(".footer").css("opacity", "1");
            $(".footer").css("z-index", "5");
        }
        else
            $(".footer").css("opacity", "0");
        if ($(document).scrollTop() < 10) {
            $(".footer").css("z-index", "-500");
        }
    });

}


//подсвечивание активного пункта лемого меню
var menu_selector = ".left-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " li").each(function () {
        var hash = $(this).children('a').attr("href");
        var target = $(hash);
        if (target.position().top - 500 <= scroll_top && target.position().top + target.outerHeight() - 500 > scroll_top) {
            $(menu_selector + " li.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("a[href^=#]").click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " li.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).children('a').attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});


//настройка набегания цифр
let marker = true;
$(document).on("scroll", function () {
    let block1 = $(".screen-five").offset().top;
    let block3 = $(window).height();
    if ($(document).scrollTop() > block1 - block3 && marker) {
        $('.timer').countTo();
        marker = false;
    }
});


//анимация перехода по якорям
$(document).ready(function(){
    $("#jackar,#logo").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



//иницавлизация всплывающих подсказок
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

