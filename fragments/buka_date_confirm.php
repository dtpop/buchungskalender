<?php
$booking = $this->booking;
$price = $this->price;
$object = buka_objects::get_object_for_id($booking['object_id']);

?>

<div class="alert alert-success">
	<h2>Zusammenfassung Ihrer Reservierung</h2>
	<p>Objekt: <?= $object->name ?></p>
	<?php if ($booking['slot_value']) : ?>
		<h3>Termin: <?= $booking['slot_value'] ?></h3>
		<?php if ($booking['place']) : ?>
			<p>Mein Platz: <?= $booking['place'] ?></p>
		<?php endif ?>
	<?php endif ?>

	<p>
		<?php if ($booking['vorname'] . $booking['nachname']) : ?>
			<?= $booking['vorname'] . ' ' . $booking['nachname'] ?><br>
		<?php endif ?>
		<?php if ($booking['telefon']) : ?>
			Telefon <?= $booking['telefon'] ?><br>
		<?php endif ?>
		<?php if ($booking['email']) : ?>
			E-Mail <?= $booking['email'] ?>
		<?php endif ?>
	</p>
	<p>Wir senden Ihnen eine E-Mail, in der Sie die Terminbuchung bestätigen müssen.</p>
</div>