//настройка Owl Carousel на стартовой
$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		stagePadding: 0,
		nav: false,
		autoplaySpeed: 4000,
		dotsSpeed: 4000,
		navText: "<>",
		dots: true,
		paginationNumbers: true,
		items: 1,
		lazyLoad: true,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayTimeout: 6000,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
});

				//фиксация top-menu
		//		$(document).on("scroll",function(){
		//				if($(document).scrollTop() > 20){
		//						$("header").addClass("top-menu-fixed");
		//				}
		//				else{
		//						$("header").removeClass("top-menu-fixed");
		//				}
		//		});

//анимация перехода по якорям
$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 800);
return false;
});
});

//скрытие меню bootstrap при клике вне его
$(".navbar-nav>li").on("click", "a", function () {
    $('.navbar-collapse').collapse('hide');
});

//смена позиции для owl dots
$(".owl-dots").addClass("container position-dots");

//объявляем массив с точек на карте

var markersData = [
    {
        lat: 55.754400,     // Широта
        lng: 37.636958,    // Долгота
        name: "Шоколадница", // Произвольное название, которое будем выводить в информационном окне
        address:"Большой Спасогленищевский пер., 9/1 стр. 16"   // Адрес, который также будем выводить в информационном окне
    },

    {
        lat: 55.823442,
        lng: 37.497552,
        name: "Шоколадница",
        address:"Тц Метрополис, 3 этаж"
    },

		{
				lat: 55.730659,
				lng: 37.611545,
				name: "Шоколадница",
				address:"ул. Большая Якиманка, 58/2, Москва, 117049"
		},

		{
				lat: 55.757161,
				lng: 37.658919,
				name: "Шоколадница",
				address:"Тц Атриум, 1 и 3 этаж"
		}
];


// Объявляем переменные map и infoWindow за пределами функции initMap,
// тем самым делая их глобальными и теперь мы их можем использовать внутри любой функции, а не только внутри initMap, как это было раньше.
var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8,
				scrollwheel: false
    };



    map = new google.maps.Map(document.getElementById("map"), mapOptions);
		$.getJSON("./styles/map-style.json", function (data) {
							 map.setOptions({styles: data});
					 });

    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();

    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });

		// активация карты при клике по ней
		google.maps.event.addListener(map, 'click', function(event){
		this.setOptions({scrollwheel:true});
		});

		// деактивация карты при выходе курсора за боласть карты
		google.maps.event.addListener(map, 'mouseout', function(event){
		this.setOptions({scrollwheel:false});
		});

		// Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++){

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;

        // Добавляем маркер с информационным окном
        addMarker(latLng, name, address);

				// Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }

		// Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    map.fitBounds(bounds);


}
google.maps.event.addDomListener(window, "load", initMap);

// Функция добавления маркера с информационным окном
function addMarker(latLng, name, address) {

		var icon = {
			url: "./images/system/marker.png", // url
			scaledSize: new google.maps.Size(50, 50), // scaled size
			origin: new google.maps.Point(0,0), // origin
			anchor: new google.maps.Point(0, 0) // anchor
		};

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name,
				icon: icon          // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
    });

    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function() {

        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                            '</div>';

        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);

        // Показываем информационное окно
        infoWindow.open(map, marker);

    });
}

//инициализация wow js
    new WOW().init();

// обработка опроса
$(document).ready(function(){

	var btnNextText = "Далее";
	var btnCloseText = "Закрыть";
	var thanksText = "Спасибо";
	var questions = [
		'1 answer',
		'2 answer',
		'3 answer',
		'4 answer'
	];

	var IsThanks = false;

	var counter = 0;

	//сброс параметров на начальное значение
	function Reset(){
		counter = 0;
		IsThanks = false;
		ReplaceText(questions[counter])
		$('#nextQuestion').text(btnNextText);
		$('.fa-star').show()
	}

	//устанавливает переданный текст в область вопроса
	function ReplaceText(text){
			$('#type_text').text(text);
	}

	//устанаыливает следующий вопрос из массива вопросов
	function SetNextText(){
		counter++;
		ReplaceText(questions[counter])
	}

	//проверяет последний ли вопрос сейчас на экране
	function IsLastQuestion(){
		return counter == questions.length - 1
	}

	//активация кнопки при клике по звезде
	function EnableBtn() {
		$('#nextQuestion').attr('disabled', false);
	}

	//деактивация кнопки
	function DisableBtn() {
		$('#nextQuestion').attr('disabled', true);
	}

	//удаление класса для активации звезд
	function removeClassBtnStar() {
		$('.btn-star').removeClass('star-active');
	}

	// //вызов активации кнопки при клике по звезде
	 $('.btn-star').click(function(event){
	 EnableBtn();
	 })

	$('.btn-star').click(function(event) {
		$(this).addClass('star-active')
	})

	//обработчик открытия попапа
	$('#openInterview').click(function(){
		Reset()
	})

	//обработчик нажатия кнопки далее
	$('#nextQuestion').click(function(){
		if(IsThanks){
			$('#interview').modal('hide');
		}

		else if(IsLastQuestion()){
			$('.fa-star').hide();
			$('#nextQuestion').text(btnCloseText)
			ReplaceText(thanksText)
			IsThanks = true;
		}
		else{
			SetNextText()
			DisableBtn()
			removeClassBtnStar()
		}
	})
})
