<?php
$id = 1;
$result = rex_sql::factory()->setTable(rex::getTable('buka_objects'))->select()->getArray();
$objects = [];
foreach ($result as $res) {
    $objects[$res['id']] = $res['name'];
}

$var1 = (array) rex_var::toArray("REX_VALUE[1]");

// dump($objects);
$mform = new MForm();

$mform->addSelectField("$id.object_id",$objects,['label'=>'Objekt auswählen']);

if (rex_config::get('buchungskalender','booking_page')) {
    $mform->addHtml('
    <div class="form-group">
        <div class="col-sm-2 control-label"></div>
        <div class="col-sm-10">
            <p class="help-block">Buchungsseite ist in den Settings <a href="/redaxo/index.php?page=buchungskalender/settings" target="_blank">Settings</a> eingestellt.<br>
            Aktuelle Seite: <a href="'.rex_getUrl(rex_config::get('buchungskalender','booking_page'),'',['object_id'=>$var1['object_id'] ?? '']).'" target="_blank">'.rex_getUrl(rex_config::get('buchungskalender','booking_page')).'</a>
            </p>
        </div>
    </div>
    ');

} else {
    $mform->addLinkField(1,['label'=>'Buchungsseite']);
    $mform->addHtml('
    <div class="form-group">
        <div class="col-sm-2 control-label"></div>
        <div class="col-sm-10"><p class="help-block">Die Einstellung für die Buchungsseite kann auch zentral in den <a target="_blank" href="/redaxo/index.php?page=buchungskalender/settings">Settings</a> des AddOns im Feld Buchungsseite vorgenommen werden.</p></div>
    </div>
    ');
}


$mform->addLinkField(2,['label'=>'Buchungsinfo']);



echo $mform->show();