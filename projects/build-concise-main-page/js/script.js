
/**
 * Add class fixed for header
 */
$(function () {
    $(document).trigger('pageLoaded.firstTime');
    $(document).trigger('pageLoaded');

    var fixedHeight = $('header').height();
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= fixedHeight) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


/**
 * Our services
 */
if ($('.app-services-cards-slider').length > 0) {
  $('.app-services-cards-slider').not('.slick-initialized').slick({
    settings: "unslick",
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 9200,
        arrows: false,
        settings: "unslick"
      },
      {
        breakpoint: 767.9,
        settings: {
          settings: "slick",
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1
        }
      }
    ]
  });
}


/**
 * Labels animation on inputs
 */
$(document).ready(function () {
    $('.form-control').focusout(function () {
        if ($(this).val().length > 0) {
            $(this).siblings("label").addClass('not-null');
        } else if ($(this).val().length === 0) {
            $(this).siblings("label").removeClass('not-null');
        }
    })
});
