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
$mform->addSelectField("19.headline_type", ['1'=>'Grosse Überschrift (h1)','2'=>'Mittlere Überschrift (h2)','3'=>'Kleine Überschrift (h3)'],['label'=>'Überschrift Grösse']);

$mform->addTextAreaField("$id.maintext", ['label'=>'Haupttext','class'=>'tinyMCE-text']);

$mform->addFieldset('Bild');

$mform->addTextAreaField("$id.sidetext", ['label'=>'Bildbeschreibung','class'=>'tinyMCE-text sidetext']);

$mform->addMediaField(1,['label'=>'Bild']);


$mform->addFieldset('Layout');

$mform->addSelectField("19.padding", ['uk-padding-remove'=>'kein Abstand','uk-padding-small'=>'kleiner Abstand','uk-padding'=>'normaler Abstand','uk-padding-large'=>'großer Abstand'],['label'=>'Innerer Abstand']);

$mform->addSelectField("19.background", ['uk-section-muted'=>'Hellgrauer Hintergrund','uk-section-primary'=>'Blauer Hintergrund','uk-section-default'=>'Standard'],['label'=>'Hintergrund']);

$mform->addSelectField("19.layout", ['image_wide'=>'Grosses Bild','image_left'=>'Bild links','image_right'=>'Bild rechts','small-text-center'=>'Schmaler Textblock zentriert'],['label'=>'Layout']);

$mform->addSelectField("19.topmargin", ['uk-margin-remove-top'=>"kein Abstand zum vorhergehenden Element",'uk-margin-small-top'=>"kleiner Abstand zum vorhergehenden Element",'uk-margin-top'=>"normaler Abstand zum vorhergehenden Element",'uk-margin-large-top'=>"großer Abstand zum vorhergehenden Element"],['label'=>'Abstand oben']);
$mform->addSelectField("19.textwidth", ['uk-container-small'=>"Schmaler Textblock",'uk-container-wide'=>"Breiter Textblock"],['label'=>'Breite des Textblocks']);

echo $mform->show();

