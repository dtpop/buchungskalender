<?php
 // $booking = rex_session('buka_booking');

 $booking = json_decode("REX_YFORM_DATA[field='booking_json']",true);


 $object = buka_objects::get_object_for_id($booking['object_id']);
 
?>

Guten Tag REX_YFORM_DATA[field="vorname"] REX_YFORM_DATA[field="nachname"]

<?php if ($object->reservation == 'book') : ?>


Vielen Dank für Ihre Reservierung.

W I C H T I G!

Bitte bestätigen Sie diese Reservierung mit einem Klick auf den folgenden Link:


<?= trim(rex::getServer(),'/').rex_article::getSiteStartArticle()->getUrl(['hash'=>$booking['hashval'],'email'=>md5("REX_YFORM_DATA[field='email']"),'action'=>'booking_confirm'],'&'); ?> 

Ihre Buchung: <?= $object->name ?> 

<?php else : ?>
Ihre Anfrage: <?= $object->name ?> 
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



Vielen Dank!