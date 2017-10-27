//объявляем массив с точек на карте

var markersData = [
    {
        lat: 59.141007,     // Широта
        lng: 37.947110,    // Долгота
        name: "Дом недорого", // Произвольное название, которое будем выводить в информационном окне
        address: "Вологодская обл., г. Череповец, ул. Проезжая 6, офис 311"   // Адрес, который также будем выводить в информационном окне
    },

    {
        lat: 55.687279,
        lng: 37.660862,
        name: "Дом недорого",
        address: "г. Москва, ул. Автозаводская 23/16"
    },

    {
        lat: 43.632150,
        lng: 39.720879,
        name: "Дом недорого",
        address: "Краснодарский край, г. Сочи, Виноградный переулок 10а, офис 6"
    },

];


// Объявляем переменные map и infoWindow за пределами функции initMap,
// тем самым делая их глобальными и теперь мы их можем использовать внутри любой функции, а не только внутри initMap, как это было раньше.
var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(59.141007, 37.947110);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8,
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    $.getJSON("./json/map-style.json", function (data) {
        map.setOptions({styles: data});
    });

    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();

    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function () {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });

    // активация карты при клике по ней
    google.maps.event.addListener(map, 'click', function (event) {
        this.setOptions({scrollwheel: true});
    });

    // деактивация карты при выходе курсора за боласть карты
    google.maps.event.addListener(map, 'mouseout', function (event) {
        this.setOptions({scrollwheel: false});
    });

    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++) {

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
        url: "./img/system/marker.png", // url
        scaledSize: new google.maps.Size(23, 35), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name,
        icon: icon          // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
    });

    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function () {

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