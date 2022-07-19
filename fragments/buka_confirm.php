<?php
$booking = $this->booking;
$price = $this->price;
$object = buka_objects::get_object_for_id($booking['object_id']);



$str_summery			= 'Zusammenfassung Ihrer ';
$str_booking 			= 'Buchung';
$str_request 			= 'Anfrage';
$str_object 			= 'Objekt';
$str_arrival			= 'Anreise';
$str_departure			= 'Abreise';
$str_overnightstays	= 'Übernachtungen';
$str_country			= 'Land';
$str_tel					= 'Telefon';
$str_email				= 'E-Mail';
$str_no_persons		= 'Anzahl Personen';
$str_arrival_time		= 'Anreisezeit';
$str_price				= 'Preis';
$str_agree_1 			= 'Mit dem Absenden dieser';
$str_agree_2 			= 'erklären Sie sich mit unserer Hausordnung und AGB einverstanden.';

// schön wäre wenn "Hausordnung und AGB" ein Link wäre 




if (rex_addon::get('sprog')->isAvailable()) {
	$str_summery			= sprogcard('buka_summery')			?: $str_summery;
	$str_booking			= sprogcard('buka_booking')			?: $str_booking;
	$str_request			= sprogcard('buka_request')			?: $str_request;
	$str_object				= sprogcard('buka_object')				?: $str_object;
	$str_arrival			= sprogcard('buka_arrival')			?: $str_arrival;
	$str_departure			= sprogcard('buka_departure')			?: $str_departure;
	$str_overnightstays	= sprogcard('buka_overnightstays')	?: $str_overnightstays;
	$str_country			= sprogcard('buka_country')			?: $str_country;
	$str_tel					= sprogcard('buka_tel')					?: $str_tel;
	$str_email				= sprogcard('buka_email')				?: $str_email;
	$str_no_persons		= sprogcard('buka_no_persons')		?: $str_no_persons;
	$str_arrival_time		= sprogcard('buka_arrival_time')		?: $str_arrival_time;
	$str_price				= sprogcard('buka_price')				?: $str_price;
	$str_agree_1			= sprogcard('buka_agree_1')			?: $str_agree_1;
	$str_agree_2			= sprogcard('buka_agree_2')			?: $str_agree_2;
}
        

?>

<div class="alert alert-success">

	<h2><?= $str_summery	.' '.($object->reservation == 'book' ? $str_booking : $str_request) ?></h2>
	<p><?= $str_object	.': '.$object->name ?></p>
	<p><?= $str_arrival	.': '.date('d.m.Y', strtotime($booking['datestart'])) ?></p>
	<p><?= $str_departure.': '.date('d.m.Y', strtotime($booking['dateend'])) ?></p>
	<p><?= $str_overnightstays.': '.count($price['period'])  ?></p>
	<p>
		<?php if ($booking['vorname'] . $booking['nachname']) : ?>
			<?= $booking['vorname'] . ' ' . $booking['nachname'] ?><br>
		<?php endif ?>
		<?php if ($booking['anschrift']) : ?>
			<?= $booking['anschrift'] ?><br>
		<?php endif ?>
		<?php if ($booking['plz'] . $booking['ort']) : ?>
			<?= $booking['plz'] . ' ' . $booking['ort'] ?><br>
		<?php endif ?>
		<?php if ($booking['land']) : ?>
			<?= $str_country.': '.$booking['land'] ?><br>
		<?php endif ?>
		<?php if ($booking['telefon']) : ?>
			<?= $str_tel.': '.$booking['telefon'] ?><br>
		<?php endif ?>
		<?php if ($booking['email']) : ?>
			<?= $str_email.': '.$booking['email'] ?>
		<?php endif ?>
	</p>
	<?php if ($booking['personen']) : ?>
		<p><?= $str_no_persons.': '.$booking['personen'] ?></p>
	<?php endif ?>
	<?php if ($booking['anreisezeit']) : ?>
		<p><?= $str_arrival_time.': '.$booking['anreisezeit'] ?></p>
	<?php endif ?>
	<p><?= $str_price.': '.number_format($price['price'], 2, ',', ".") ?> EUR</p>
	<p><?= $str_price_warn ?></p>
	<p><?= $str_agree_1.' '.($object->reservation == 'book' ? $str_booking : $str_request).' '.$str_agree_2 ?> </p>

</div>