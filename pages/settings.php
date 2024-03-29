<?php
$form = rex_config_form::factory('buchungskalender');
$form->addFieldset('Buchungskalender - Einstellungen');
foreach (rex_clang::getAll() as $clang) {
    $field = $form->addTextField('weekdays_'.$clang->getId());
    if (!$field->getValue()) {
        $field->setValue('Mo,Di,Mi,Do,Fr,Sa,So');
    }    
    $field->setLabel('Wochentage '.$clang->getName());
    $field->setNotice('Wochentage durch Komma getrennt eingeben');
}

foreach (rex_clang::getAll() as $clang) {
    $field = $form->addTextField('months_'.$clang->getId());
    if (!$field->getValue()) {
        $field->setValue('Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember');
    }    
    $field->setLabel('Monate '.$clang->getName());
    $field->setNotice('Monate durch Komma getrennt eingeben');
}


$field = $form->addTextField('max_booking_time');
if (!$field->getValue()) {
    $field->setValue('365 * 24 * 60 * 60');
}    
$field->setLabel('Maximale Buchungszeit');
$field->setNotice('Zeitraum, wie lange im voraus Buchungen vorgenommen werden können in Sekunden. Auch Formel möglich. z.B. <code>365 * 1.25 * 24 * 60 * 60</code> ergibt ein Jahr und drei Monate.');

$field = $form->addTextField('min_booking_days_futur');
if (!$field->getValue()) {
    $field->setValue('3');
}    
$field->setLabel('Mindestens Tage vor Anreise');
$field->setNotice('Anzahl Tage, die die Buchung mindestens vor der Anreise liegen muss.');

$field = $form->addTextField('min_booking_days');
if (!$field->getValue()) {
    $field->setValue('3');
}    
$field->setLabel('Mindestbuchungszeit');
$field->setNotice('Anzahl Nächte, die mindestens gebucht werden müssen.');

$field = $form->addTextAreaField('message_min_booking_days');
if (!$field->getValue()) {
    $field->setValue('Die Mindestbuchungsdauer beträgt drei Nächte.');
}
$field->setLabel('Meldung Mindestbuchungszeit');
$field->setNotice('Die Nachricht wird angezeigt, wenn die Mindestbuchungszeit nicht erreicht ist.');

$field = $form->addTextField('ical_interval');
$field->setLabel('Ical Cachedauer in Sekunden');
$field->setNotice('Leer lassen, wenn keine ical Synchronisation verwendet wird. Sinnvoller Eintrag: <code>900</code> für 15 Minuten.');

$field = $form->addTextField('ical_uid');
$field->setLabel('Ical Uid');
$field->setNotice('Leer lassen, wenn keine ical Synchronisation verwendet wird. Sinnvoller Eintrag: <code>ical@ferien-am-tressower-see.de</code>.');

$field = $form->addCheckboxField('ignore_airbnb_blocked');
$field->setLabel('Geblockte Airbnb Termine ignorieren');
$field->addOption('Geblockte Airbnb Termine ignorieren', "1");
$field->setNotice('Wenn ical Synchronisation mit airbnb verwendet wird, werden standardmäßig in airbnb geblockte Termine auch synchronisiert. Dies kann durch anklicken dieser Checkbox verhindert werden. Es können dann in airbnb Termine blockiert werden, ohne dass diese dann automatisch im Buchungskalender blockiert werden. <code>rex_config::get(\'buchungskalender\',\'ignore_airbnb_blocked\')</code>.');

$field = $form->addLinkmapField('booking_page');
$field->setLabel('Buchungsseite');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'booking_page\')</code>.');

$field = $form->addLinkmapField('summary_page');
$field->setLabel('Buchung Zusammenfassung');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'summary_page\')</code>.');

$field = $form->addLinkmapField('confirmation_page');
$field->setLabel('E-Mail-Link Bestätigungsseite');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'confirmation_page\')</code>.');

$field = $form->addTextField('email_me');
$field->setLabel('E-Mail Adressen des Betreibers');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'email_me\')</code>. Mehrere Adressen durch Komma trennen. An diese E-Mail Adressen werden die Reservierungsmails geschickt.');

$field = $form->addTextField('asked_offset');
$field->setLabel('Reservierungsdauer');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'asked_offset\')</code>. Wenn das Feld ausgefüllt wird, werden reservierte Termine im Kalender als belegt gekennzeichnet.
Leer lassen für keine Reservierungsdauer. Mögliche Werte (Beispiele): <code>10 minutes</code>, <code>2 hours</code>, <code>7 days</code>.');

$field = $form->addSelectField('calendar_view');
$field->setLabel('Kalender Darstellung');
$select = $field->getSelect();
$select->addOptions([
    'month'=>'Monatskalender',
    'gant'=>'Gant Ansicht'
]);
$field->setNotice('<code>rex_config::get("buchungskalender","calendar_view")</code>');

$field = $form->addTextField('minicalendar_count_month');
$field->setLabel('Anzahl Monate im Minikalender');
$field->setNotice('Hier kann eine abweichende Anzahl von Monaten eingestellt werden, die im Minikalender dargestellt werden sollen: <code>rex_config::get(\'buchungskalender\',\'minicalendar_count_month\')</code>.');


$form->addFieldset('Währungseinstellungen');

$field = $form->addTextField('currency_default');
$field->setLabel('Standardwährung');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'currency_default\')</code>. Beispiel: <code>EUR</code>.');

$field = $form->addTextField('currency_formula');
$field->setLabel('Währungsformel');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'currency_formula\')</code>. Beispiel: <code>{"10":0,"100":1,"1000":2}</code>. Bis zu einem Wert von 10 wird auf ganze Stellen gerundet (9.6 => 10, 3.3 => 3) Bis zu einem Wert von 100 wird auf 10er gerundet (123 => 120, 178 => 180), ab 1000 wird auf 100er gerundet. Als Rundungswert sind auch negative Angaben möglich. -2 rundet z.B. auf die zweite Nachkommastelle. Wichtig: die Angaben müssen vom kleinsten Rundungsbetrag zum größten gesetzt werden. Die Rundung bezieht sich immer auf den Einzelpreis. Summen werden nicht gerundet.');

$field = $form->addTextField('currency_factor');
$field->setLabel('Umrechnungskurs');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'currency_factor\')</code>. Beispiel: <code>9.9</code>.');

$field = $form->addTextField('currency_name');
$field->setLabel('Währung');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'currency_name\')</code>. Beispiel: <code>CHF</code>.');

$field = $form->addSelectField('currency_langs');
$field->setLabel('Sprachen');
$field->setAttribute('class','form-control selectpicker');
// $field->setStyle('class="form-control selectpicker"');



$select = $field->getSelect();
$select->setAttribute('multiple',1);
$select->addSqlOptions('SELECT name, id FROM rex_clang ORDER BY priority');
$field->setNotice('<code>rex_config::get("buchungskalender","currency_langs")</code>');




/*
$form->addFieldset('Terminbuchung - Einstellungen');

$field = $form->addLinkmapField('summary_datebooking_page');
$field->setLabel('Buchung Zusammenfassung');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'summary_datebooking_page\')</code>.');

$field = $form->addLinkmapField('confirmation_datebooking_page');
$field->setLabel('E-Mail-Link Bestätigungsseite');
$field->setNotice('<code>rex_config::get(\'buchungskalender\',\'confirmation_datebooking_page\')</code>.');
*/





$content = $form->get();

$fragment = new rex_fragment();
$fragment->setVar('title', 'Einstellungen');
$fragment->setVar('body', $content, false);
$content = $fragment->parse('core/page/section.php');

echo $content;
