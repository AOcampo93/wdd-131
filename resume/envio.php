<?php

    // Obteniendo variables
    $nombre = $_POST['clientName'];
    $email = $_POST['clientEmail'];
    $mensaje = $_POST['clientMessage'];

    //Validando variables
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        header("Location: contacto.php?action=empty");
        exit;
    }

    //Envio de mensaje a mi email
    $to = "arturo.ocampo93@gmail.com";
    $subject = "Mensaje desde arturoocampo.com - formulario";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    $message = "
    <html>
        <head>
            <title>Mensaje de $nombre</title>
        </head>
        <body>
            <h2>Mensaje desde el sitio arturoocampo.com de $nombre</h2>
            <h4>Email: $email</h4>
            <p>$mensaje</p>
        </body>
    </html>";
    
    mail($to, $subject, $message, $headers);

    header("Location: contacto.php?action=success");
    exit;

?>