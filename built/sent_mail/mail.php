<?php
$post = (!empty($_POST)) ? true : false;
    if ($post) {
        $email = 'alvi@mail.ua';
        $name = stripslashes($_POST['name']);
        $phone = stripslashes($_POST['phone']);
        $user_message = stripslashes($_POST['textar']);
        $day=stripslashes($_POST['day']);
        $month=stripslashes($_POST['month']);
        $subject = 'Заявка';
        $error = '';
        $message = '
<html>
<head>
 <title>Заявка</title>
</head>
    <body>
    <p>Имя: ' . $name . '</p>
    <p>email: ' . $phone . '</p>
<p>Сообщение: ' . $user_message . '</p>
<p>дата звонка</p>
<p>Месяц:' . $month . '</p>
<p>День:' . $day . '</p>
</body>
    </html>';
    }
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Additional headers
$headers .= 'To: ME <fessal@rambler.ru>' . "\r\n";
$headers .= 'From: site apple' . "\r\n";
// $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";
    $admin_mail = 'fessal@rambler.ru';
    $mail = mail($admin_mail, $subject, $message,$headers);
    if ($mail) {
        echo 'OK';
    } else {
        echo "not ok";
    }

?>