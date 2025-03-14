<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $email = htmlspecialchars($_POST['email']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    $destinatario = "sleonarholz@gmail.com";
    $asuntoCorreo = $asunto;

    $cuerpo = "Has recibido un nuevo mensaje de contacto:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Asunto: $asunto\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($destinatario, $asuntoCorreo, $cuerpo, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Intenta nuevamente.";
    }
}
?>
