<?php
// Файлы phpmailer
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';

    $email = $_POST['email'];
    $title = "Новое обращение по email";
    $body = "
    <h2>Новое обращение</h2>
    <b>Email:</b> $email
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'q1zin2@gmail.com'; // Логин на почте
    $mail->Password   = 'Djdfdjdf-152005'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('q1zin2@gmail.com', 'Владимир Шарапов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('q1zin@mail.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    header('Location: thanksyou.html');
    exit;