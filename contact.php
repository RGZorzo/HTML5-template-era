<?php
extract($_POST);

$header = "To: Reservas <example@email.com>"."\r\n";
$header .= "From: $name <$email>";

$asunto="Reserva Era";
$comments="Reserva recibida a través de la web a nombre de ".$name.", email: ".$email.". El día ".$date." a las ".$hour." y para ".$number." personas";

if( mail("example@email.com",$asunto,$comments,$header) ){
     $mng="Hemos recibido tu reserva, te confirmaremos enseguida ;)."; 
}else{
      $mng="Error en el envio, vuelve a intentarlo.";
}
header("location:index.php?mng=$mng#contacto");