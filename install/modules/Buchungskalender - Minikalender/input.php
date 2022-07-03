<?php
$id = 1;
$result = rex_sql::factory()->setTable(rex::getTable('buka_objects'))->select()->getArray();
$objects = [];
foreach ($result as $res) {
    $objects[$res['id']] = $res['name'];
}
// dump($objects);
$mform = new MForm();

$mform->addSelectField("$id.object_id",$objects,['label'=>'Objekt auswählen']);
if (rex_config::get('buchungskalender','booking_page')) {
    $mform->addHtml('<div class="form-group">
    <div class="col-sm-2 control-label"><label>&nbsp;</label></div>
    <div class="col-sm-10"><p class="help-block">Die Buchungsseite ist über die Einstellungen des AddOns festgelegt.</p>
    </div>
  </div>');
} else {
    $mform->addLinkField(1,array('label'=>'Buchungsseite'));
}
$mform->addLinkField(2,array('label'=>'Buchungsinfo'));



echo $mform->show();