<?php

$objects = buka_objects::get_query()->find();

if (!count($objects)) {
    echo rex_view::error('Es wurde noch kein Objekt angelegt.');
    return;
}

$start_year = min([buka_booking::get_min_year(), date('Y') - 2]);
$end_year = max([buka_booking::get_max_year(), date('Y') + 2]);

$object_id = rex_request("object_id", 'int',$objects[0]->id);

if (!$object_id) {
    echo rex_view::info('Es muss ein Objekt ausgewählt werden.');
    return;
}


// dump($start_year);
// dump($end_year);

$cal = new buka_cal($object_id);

$cal->set_start_date();
$cal->set_bookings();

// $cal->set_show_form();


// $cal->set_month_count(3);


// echo $cal->getMonth();

$row_start_6 = '<div class="row"><div class="col-md-6">';
$row_start_3 = '<div class="row"><div class="col-md-3">';
$next_col_3 = '</div><div class="col-md-3">';
$next_col_6 = '</div><div class="col-md-6">';
$next_col_9 = '</div><div class="col-md-9">';
$row_end = '</div></div>';
$div_end = '</div>';

$hidden_start = '<div style="display: none">';

$yform = new rex_yform();
$yform->setObjectparams('form_action', rex_url::currentBackendPage());

$yform->setValueField('hidden', ['bookingdate', date('Y-m-d H:i:s')]);
$yform->setValueField('hidden', ['status', 'confirmed']);
$yform->setValueField('hidden', ['object_id', $object_id, 'REQUEST']);

$yform->setValueField('html', ['', $hidden_start]);
$yform->setValueField('text', ['datestart', '', '', '', ['type' => 'hidden', 'id' => 'datestart']]);
$yform->setValueField('text', ['dateend', '', '', '', ['type' => 'hidden', 'id' => 'dateend']]);
$yform->setValueField('html', ['', $div_end]);


$yform->setValueField('html', ['', $row_start_3]);
$yform->setValueField('text', ['date_start', 'Anreise', '', 'no_db', ['id' => 'date_start', 'disabled' => 'disabled']]);
$yform->setValueField('html', ['', $next_col_3]);
$yform->setValueField('text', ['date_end', 'Abreise', '', 'no_db', ['id' => 'date_end', 'disabled' => 'disabled']]);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', '<div id="bookingform-step2">']);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['vorname', 'Vorname']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['nachname', 'Nachname']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('text', ['anschrift', 'Anschrift']);
$yform->setValueField('html', ['', $row_start_3]);
$yform->setValueField('text', ['plz', 'PLZ']);
$yform->setValueField('html', ['', $next_col_9]);
$yform->setValueField('text', ['ort', 'Ort']);
$yform->setValueField('html', ['', $row_end]);
$yform->setValueField('text', ['land', 'Land']);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['telefon', 'Telefon']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['email', 'E-Mail']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['personen', 'Anzahl Personen']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['anreisezeit', 'Anreisezeit']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('textarea', ['nachricht', 'Nachricht']);

$yform->setValueField('submit', ['Submit', 'Buchung speichern', 'no_db']);
$yform->setValueField('html', ['', '<button type="button" id="to-step-1" class="btn btn-primary">Zurück ...</button>']);

$yform->setValueField('html', ['', '</div>']);

$yform->setValueField('html', ['', '<div id="bookingform-step1">']);
$yform->setValueField('html', ['', $cal->getCalendar()]);
$yform->setValueField('html', ['', '<p class="help-block">Eine Buchung kann mit <code>Shift+Click</code> angezeigt und bearbeitet werden.</p>']);
$yform->setValueField('html', ['', '<button type="button" id="to-step-2" disabled="disabled" class="btn btn-primary">Weiter ...</button>']);
$yform->setValueField('html', ['', '</div>']);

$yform->setActionField('db', ['rex_buka_bookings']);
$yform->setActionField('redirect', [rex_url::currentBackendPage()]);



?>

<div class="mind_booking_message">
    <p><?= rex_config::get('buchungskalender', 'message_min_booking_days'); ?></p>
</div>

<div class="row">
    <div class="col-md-6">
        <?php if (count($objects) > 1) : ?>
            <form action="<?= rex_url::currentBackendPage() ?>" method="get">
                <input type="hidden" name="page" value="buchungskalender/calendar">
                <select name="object_id" class="form-control selectpicker" onchange="this.form.submit()">
                    <?php foreach ($objects as $obj) : ?>
                        <option value="<?= $obj->id ?>" <?= $obj->id == rex_request("object_id", 'int') ? ' selected="selected"' : '' ?>><?= $obj->name ?></option>
                    <?php endforeach ?>
                </select>
            </form>
            <br>
        <?php endif ?>
    </div>
</div>

<?= $yform->getForm(); ?>

<script type="text/javascript">
    const min_booking_days = <?= rex_config::get('buchungskalender', 'min_booking_days') ?>;
</script>



<?php /* for ($y = $start_year; $y <= $end_year; $y++) : ?>
    <div class="y-wrapper">
        <div class="y-title"><?= $y ?></div>
        <?php for ($m = 1; $m <= 12; $m++) : ?>
            <div class="m-wrapper">
                <?= $m ?>
            </div>
        <?php endfor ?>
    </div>    
<?php endfor */ ?>