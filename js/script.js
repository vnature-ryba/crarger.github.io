//скрипт для закрытия меню бутстрап при клике вне него
$(document).bind("mouseup touchend", function (e) {
    var container = $('.navbar-collapse');

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        container.collapse('hide');
    }
});

//кнопки для переключения nav-tabs
$('.btn-next').click(function(){
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('.btn-prev').click(function(){
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});


//вызов функции набегания цифр
$('.timer').countTo();


//анимация перехода по якорям
$("body").on("click","a[href^='#jack']", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-0}, 800);
});


$(document).on("scroll", function () {
    if ($(document).scrollTop() > 500) {
        $(".btn-scroll-to-top").css({'display' : 'block','opacity' : '1'});
    }
    else $(".btn-scroll-to-top").css({'opacity' : '0', 'display': 'none'});
});


// $(document).bind('scroll',function(e){
//     parallaxScroll();
// });
//
// function parallaxScroll(){
//     var scrolled = window.pageYOffset;
//     document.getElementById('line1').style.top = (0-(scrolled*0.25)) + 'px';
// }