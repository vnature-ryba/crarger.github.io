'use strict';
(function(){

	var RECEPIENT = "vizavill@yandex.ru";
    var HOSTNAME = document.location.hostname;
    var UTM_REFERER = document.referrer;
    var UTM_STRING = document.location.search;

	$(".form-mail").submit(function(e) {
        var form = $(this);
		e.preventDefault();

        var data = $(this).serialize() + "&utm_referer=" + UTM_REFERER + "&utm_string=" + JSON.stringify(getQueryParams(UTM_STRING)) + "&recepient=" + RECEPIENT + "&hostname=" + HOSTNAME;

		$.post('mail.php', data)
			.then((response)=>{
				form.trigger("reset");
				$('.modal').modal('hide');

				setTimeout(function() {
					$('#success').modal('show');
				}, 500);

				setTimeout(function() {
					$('.modal').modal('hide');
				}, 4000);
			})
			.catch((error)=>{

			});

		return false;
	});

    function getQueryParams(qs) {
        qs = qs.split('+').join(' ');

        var params = {};
        var tokens;
        var re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }
})();
