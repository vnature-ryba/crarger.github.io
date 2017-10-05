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