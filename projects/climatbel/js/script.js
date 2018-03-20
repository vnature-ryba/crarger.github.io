$(document).ready(function () {

		//строковые константы для модального окна
		var okTitle = "Успех";
		var okText = "Ваше обращение успешно зарегистрировано";
		var buyConditionTitle = "Купить кондиционер";
		var callbackTitle = "Заказать звонок";
		var callbackText = "Специалист перезвонит Вам в ближайшее время";

		//обработчик нажатия на кнопку заказа обраттного звонка
		$('button[data-target="#RequestCall"]').click(function(){
			if($(this).val() == "callback"){
				$("div#RequestCall.modal-title").html(callbackTitle)
				$("div#RequestCall.modal-text").html(callbackText)
			}
		})

		//обработчик нажатия на кнопку покупки кондиционера
		$(".btn-buy").click(function(){
			var text = $(this).parents("div.tovar").find("p.tovar-title").html();
			$("div#RequestCall.modal-title").html(buyConditionTitle)
			$("div#RequestCall.modal-text").html(text)
		})

		//обработчик нажатия на кнопку заказа услуги
		$(".btn--to-order-service").click(function(){
			var text = $(this).val();
			// $(".modal-text").html(text)
			$("div#RequestCall.modal-title").html(text);
			$("div#RequestCall.modal-text").html(callbackText)
		})

    //настройка маски телефона
    $(".phone-mask").mask("+7 (999) 999-99-99");

    //настройка Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 0,
        nav: true,
        navText: ["",""],
        dots: false,
        items: 1,
        responsive: {
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

		//настройка анимации на стартовой
		AdobeEdge.loadComposition('AIR5', 'EDGE-332351892', {
			scaleToFit: "none",
			centerStage: "none",
			minW: "0px",
			maxW: "undefined",
			width: "1920px",
			height: "765px"
		}, {
			dom: []
		}, {
			dom: []
		});

    //настройка анимации input
    (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
            // in case the input is already filled..
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
            }

            // events:
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
            }
        }
    })();


});
