//скрипт для закрытия меню бутстрап при клике вне него
$(document).bind("mouseup touchend", function (e) {
    var container = $('.navbar-collapse');
    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.collapse('hide');
    }
});

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
$(".block-services .owl-carousel").owlCarousel({
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
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false,
    responsive: {
        320: {
            items: 1
        },
        1300: {
            items: 2
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
    loop: false,
    margin: 50,
    stagePadding: 0,
    nav: false,
    autoplaySpeed: 4000,
    dotsSpeed: 4000,
    navText: "",
    dots: false,
    paginationNumbers: true,
    lazyLoad: true,
    autoplay: false,
    autoplayTimeout: 6000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    freeDrag: false,
    responsive: {
        320: {
            items: 1
        },
        1000: {
            items: 2
        },
        1800: {
            items: 3
        }
    }
});

//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
var owl = $(".slider-news");
var owl1 = $(".slider-about");
owl.owlCarousel();
owl1.owlCarousel();
//$(".next") - находим нашу кнопку
$(".btn-next").click(function () {
    owl.trigger("next.owl.carousel");
    owl1.trigger("next.owl.carousel");
});
$(".btn-prev").click(function () {
    owl.trigger("prev.owl.carousel");
    owl1.trigger("prev.owl.carousel");
});


//Добавление класса фиксированного меню при спуске
$(document).on("scroll", function () {

    if ($(document).scrollTop() > 90) {
        $("header").addClass("fixed-top-menu");
    }
    else
    {
        $(".fixed-top-menu").removeClass("fixed-top-menu");
    }
});

//подсвечивание активного пункта лемого меню
var menu_selector = ".menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " li").each(function () {
        var hash = $(this).children('a').attr("href");
        var target = $(hash);
        if (target.position().top -70 <= scroll_top && target.position().top + target.outerHeight() -70 > scroll_top) {
            $(menu_selector + " li.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("a[href=#jack]").click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " li.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).children('a').attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});

//анимация перехода по якорям
$("body").on("click","a[href^='#jack']", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top-65;
    $('body,html').animate({scrollTop: top-0}, 800);
});

