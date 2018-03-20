<?php
//адресс сайта с которого заявка
$hostname = trim($_POST["hostname"]);

$pagetitle = "Новая заявка с сайта ".$hostname;

//получатель
$recepient = trim($_POST["recepient"]);

//имя формы
$formname = trim($_POST["formname"]);

//имя клиента
$name = trim($_POST["name"]);

//телефон клиента
$phone = trim($_POST["phone"]);

//IP адресс клиента
$ip = $_SERVER['REMOTE_ADDR'];

//utm referer
$utm_referer = $_POST['utm_referer'];

//utm метки
$utm_string = $_POST['utm_string'];


$message = "<b>Имя формы с которой сделана заявка:</b> $formname <br>
            <b>Имя клиента:</b> $name <br>
            <b>Телефон клиента:</b> $phone <br>";

if ($ip) {
	$message .= '<b>IP адрес клиента:</b> '. $ip . "<br>";
}

if ($utm_referer) {
	$message .= '<b>REFERER (Адрес с которого пришел клиент на сайт):</b> '. $utm_referer . "<br>";
}

if ($utm_string) {
	$message .= "<b>UTM метки:</b><br>";

    $utm = json_decode(urldecode($utm_string), TRUE);
    foreach ($utm as $key => $value) {
        $message .= $key . ": " . $value . "<br>";
    }
}


mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
?>
