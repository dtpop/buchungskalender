<?php
$booking = $this->booking;
$price = $this->price;
$object = buka_objects::get_object_for_id($booking['object_id']);

?>

<div class="alert alert-success">

	<h2>Zusammenfassung Ihrer <?= ($object->reservation == 'book' ? 'Buchung' : 'Anfrage') ?></h2>
	<p>Objekt: <?= $object->name ?></p>
	<p>Anreise: <?= date('d.m.Y', strtotime($booking['datestart'])) ?></p>
	<p>Abreise: <?= date('d.m.Y', strtotime($booking['dateend'])) ?></p>
	<p>Übernachtungen: <?= count($price['period'])  ?></p>
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
			Land <?= $booking['land'] ?><br>
		<?php endif ?>
		<?php if ($booking['telefon']) : ?>
			Telefon <?= $booking['telefon'] ?><br>
		<?php endif ?>
		<?php if ($booking['email']) : ?>
			E-Mail <?= $booking['email'] ?>
		<?php endif ?>
	</p>
	<?php if ($booking['personen']) : ?>
		<p>Anzahl Personen: <?= $booking['personen'] ?></p>
	<?php endif ?>
	<?php if ($booking['anreisezeit']) : ?>
		<p>Anreisezeit: <?= $booking['anreisezeit'] ?></p>
	<?php endif ?>
	<p>Preis: <?= number_format($price['price'], 2, ',', "'") ?> EUR</p>
	<p>Mit dem Absenden dieser <?= ($object->reservation == 'book' ? 'Buchung' : 'Anfrage') ?> erklären Sie sich mit unserer Hausordnung und AGB einverstanden.</p>

</div>