<?php
$post = (!empty($_POST)) ? true : false;
    if ($post) {
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
<p>Месяц' . $month . '</p>
<p>День' . $day . '</p>
</body>
    </html>';
    }
    echo $message ;
    $admin_mail = 'fessal@rambler.ru';
    $mail = mail($admin_mail, $subject, $message,
        "From: " . $name . " <" . $admin_mail . ">\r\n"
        . "Reply-To: " . $admin_mail . "\r\n"
        . "Content-type: text/html; charset=utf-8 \r\n"
        . "X-Mailer: PHP/" . phpversion());
    if ($mail) {
        echo 'OK';

    } else {
        echo "not ok";
    }

?>