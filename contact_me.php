<?php
// Revisa si los campos están vacíos
if(empty($_POST['name']) ||
   empty($_POST['email']) ||
   empty($_POST['phone']) ||
   empty($_POST['message']) ||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
{
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Crea el mensaje que va a enviar
$to = 'suNombre@suDominio.com'; // Añada su dirección de correo electrónico
$email_subject = "Formulario web enviado por: $name";
$email_body = "Ha recibido un nuevo mensaje de su formulario de contacto del sitio web.\n\n"."Aquí están los detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n$message";
$headers = "From: noresponder@suDominio.com\n";
$headers .= "Reply-To: $email_address";    
mail($to, $email_subject, $email_body, $headers);

// Redirige al usuario de vuelta al formulario con un parámetro de éxito
header("Location: /path/to/your/form/page.php?success=true");
exit();
?>