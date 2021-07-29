<?php
 // $booking = rex_session('buka_booking');

 $booking = json_decode("REX_YFORM_DATA[field='booking_json']",true);


 $object = buka_objects::get_object_for_id($booking['object_id']);


?>

<?php if ($object->reservation == 'book') : ?>


Eingegangene Buchung.

<?= $object->name ?> 

<?php else : ?>

Eingegangene Anfrage.

<?= $object->name ?> 
<?php endif ?>

Anreisedatum: <?= $booking['date_start'] ?> 

Abreisedatum: <?= $booking['date_end'] ?> 

<?= $booking['vorname'] ?> <?= $booking['nachname'] ?> 

<?= $booking['anschrift'] ?> 

<?= $booking['plz'] ?> <?= $booking['ort'] ?> 

Telefon: <?= $booking['telefon'] ?> 

E-Mail: <?= $booking['email'] ?> 

Personen: <?= $booking['personen'] ?> 

Anreisezeit: <?= $booking['anreisezeit'] ?> 

Preis: <?= $booking['price'] ?> 


Nachricht:
<?= $booking['nachricht'] ?> 


