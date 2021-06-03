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

echo $mform->show();