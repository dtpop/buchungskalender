<?php

// dump(rex_config::get('buchungskalender','summary_page'));


$booking = rex_session('buka_booking','array');
// dump($booking);

$var1 = rex_var::toArray("REX_VALUE[1]");

$start_year = min([buka_booking::get_min_year(), date('Y') - 2]);
$end_year = max([buka_booking::get_max_year(), date('Y') + 2]);
// dump($start_year);
// dump($end_year);

$cal = new buka_cal();
$cal->maxBookingYear = date('Y', buka_booking::get_end_time());
$cal->maxBookingMonth = date('m', buka_booking::get_end_time());
$cal->objectId = $var1['object_id'];
$cal->monthcount = 4;
$cal->mobile_month_count = [2=>'uk-visible@m',3=>'uk-visible@l',4=>'uk-visible@xl'];


$cal->set_start_date();
$cal->set_bookings();

$object = buka_objects::get_object_for_id($var1['object_id']);


$row_start_12 = '<div uk-grid class="uk-child-width-1-1@s"><div>';
$row_start_6 = '<div uk-grid class="uk-child-width-1-2@s"><div>';
$row_start_3 = '<div uk-grid><div class="uk-width-1-4@m">';
$next_col_3 = '</div><div class="uk-width-1-4@m">';
$next_col_6 = '</div><div class="uk-width-1-2@s">';
$next_col_9 = '</div><div class="uk-width-3-4@m">';
$row_end = '</div></div>';
$div_end = '</div>';

$hidden_start = '<div style="display: none">';

$yform = new rex_yform();
$yform->setObjectparams('form_ytemplate','uikit,bootstrap,classic');
$yform->setObjectparams('form_action', rex_getUrl());
$yform->setObjectparams('error_class', 'uk-form-danger has-error');
$yform->setObjectparams('form_class', 'uk-form rex-yform');

// $yform->setObjectparams('form_showformafterupdate',1);
// $yform->setObjectparams('debug',true);

$yform->setValueField('hidden', ['bookingdate', date('Y-m-d H:i:s')]);
$yform->setValueField('hidden', ['status', 'confirmed']);
$yform->setValueField('hidden', ['object_id', $cal->objectId]);
$yform->setValueField('hidden', ['last_art_id', rex_article::getCurrentId()]);

$yform->setValueField('html', ['', $hidden_start]);
$yform->setValueField('text', ['datestart', '', $booking['datestart'] ?? '', '', ['type' => 'hidden', 'id' => 'datestart']]);
$yform->setValueField('text', ['dateend', '', $booking['dateend'] ?? '', '', ['type' => 'hidden', 'id' => 'dateend']]);

// $yform->setValueField('html', ['','<input type="hidden" id="datestart" name="datestart" value="'.($booking['datestart'] ?? '').'" />']);
// $yform->setValueField('html', ['','<input type="hidden" id="dateend" name="dateend" value="'.($booking['dateend'] ?? '').'" />']);

// $yform->setValueField('hidden', ['datestart', '', 'REQUEST', '', ['id' => 'datestart']]);
// $yform->setValueField('hidden', ['dateend', '','REQUEST', '',['id' => 'dateend']]);
$yform->setValueField('html', ['', $div_end]);


$yform->setValueField('html', ['', $row_start_3]);
$yform->setValueField('text', ['date_start', 'Anreise', $booking['date_start'] ?? '', 'no_db', ['id' => 'date_start', 'readonly' => 'readonly']]);
$yform->setValueField('html', ['', $next_col_3]);
$yform->setValueField('text', ['date_end', 'Abreise', $booking['date_end'] ?? '', 'no_db', ['id' => 'date_end', 'readonly' => 'readonly']]);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', '<div id="bookingform-step2" class="uk-margin-top">']);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['vorname', 'Vorname*', $booking['vorname'] ?? '']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['nachname', 'Nachname*', $booking['nachname'] ?? '']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', $row_start_12]);
$yform->setValueField('text', ['anschrift', 'Anschrift', $booking['anschrift'] ?? '']);
$yform->setValueField('html', ['', $row_end]);
$yform->setValueField('html', ['', $row_start_3]);
$yform->setValueField('text', ['plz', 'PLZ', $booking['plz'] ?? '']);
$yform->setValueField('html', ['', $next_col_9]);
$yform->setValueField('text', ['ort', 'Ort', $booking['ort'] ?? '']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', $row_start_12]);
$yform->setValueField('text', ['land', 'Land', $booking['land'] ?? '']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['telefon', 'Telefon', $booking['telefon'] ?? '']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['email', 'E-Mail', $booking['email'] ?? '']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('html', ['', $row_start_6]);
$yform->setValueField('text', ['personen', 'Anzahl Personen', $booking['personen'] ?? '']);
$yform->setValueField('html', ['', $next_col_6]);
$yform->setValueField('text', ['anreisezeit', 'Anreisezeit', $booking['anreisezeit'] ?? '']);
$yform->setValueField('html', ['', $row_end]);

$yform->setValueField('textarea', ['nachricht', 'Nachricht', $booking['nachricht'] ?? '']);

$yform->setValueField('html', ['', '<button type="button" id="to-step-1" class="uk-button uk-button-default uk-active uk-margin-right uk-margin-remove-left">Zurück ...</button>']);
$yform->setValueField('submit', ['Submit', 'weiter ...', 'no_db','','','uk-active']);

$yform->setValueField('html', ['', '</div>']);

$yform->setValueField('html', ['', '<div><div id="bookingform-step1">']);
$yform->setValueField('html', ['', $cal->getCalendar()]);
if (rex_request('FORM','array') || $booking) {
    $yform->setValueField('html', ['', '<button type="button" id="to-step-2" class="uk-button uk-button-default uk-active">Weiter ...</button>']);
} else {
    $yform->setValueField('html', ['', '<button type="button" id="to-step-2" disabled="disabled" class="uk-button uk-button-default uk-active">Weiter ...</button>']);
}
$yform->setValueField('html', ['', '</div></div>']);

// $yform->setValidateField('customfunction',['datestart','buka_booking::save_form1_in_session',['datestart','dateend']]);
$yform->setValidateField('type',['email','email','Bitte geben Sie eine gültige E-Mail Adresse an.']);
$yform->setValidateField('empty',['vorname','Bitte füllen Sie die markierten Felder aus.']);
$yform->setValidateField('empty',['nachname','Bitte füllen Sie die markierten Felder aus.']);
$yform->setValidateField('type',['datestart','date','Bitte geben Sie ein gültiges Datum an.']);
$yform->setValidateField('type',['dateend','date','Bitte geben Sie ein gültiges Datum an.']);


// $yform->setActionField('db', ['rex_buka_bookings']);
$yform->setActionField('callback', ['buka_booking::save_in_session']);
$yform->setActionField('redirect', [rex_getUrl(rex_config::get('buchungskalender','summary_page'))]);

?>

<section class="uk-section">
    <div class="uk-container container clearfix">
        <div class="mind_booking_message row">
            <p><?= rex_config::get('buchungskalender', 'message_min_booking_days'); ?></p>            
        </div>
        <h1><?= $object->name .' ' . ($object->reservation == 'book' ? 'buchen' : 'anfragen') ?></h1>
        <?= $yform->getForm() ?>
    </div>
</section>