<?php
// Überschrift headline
// Überschrift 1-2-3
// Text
// Text2
// Bild
// Layout (Bild links, Bild rechts, Bild full)
// kleiner Abstand oben.

$id = 1;

$mform = new MForm();

$mform->addTextAreaField("$id.headline", ['label'=>'Headline','class'=>'tinyMCE-headline']);
$mform->addTextAreaField("$id.maintext", ['label'=>'Haupttext','class'=>'tinyMCE-text']);

echo $mform->show();

