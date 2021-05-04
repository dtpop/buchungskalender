<?php
$form = rex_config_form::factory('buchungskalender');
$form->addFieldset('Buchungskalender - Einstellungen');
foreach (rex_clang::getAll() as $clang) {
    $field = $form->addTextField('weekdays_'.$clang->getId());
    $field->setLabel('Wochentage '.$clang->getName());
    $field->setNotice('Wochentage durch Komma getrennt eingeben');
}

foreach (rex_clang::getAll() as $clang) {
    $field = $form->addTextField('months_'.$clang->getId());
    $field->setLabel('Monate '.$clang->getName());
    $field->setNotice('Monate durch Komma getrennt eingeben');
}


$field = $form->addTextField('max_booking_time');
$field->setLabel('Maximale Buchungszeit');
$field->setNotice('Zeitraum, wie lange im voraus Buchungen vorgenommen werden können in Sekunden. Auch Formel möglich. z.B. <code>365 * 1.25 * 24 * 60 * 60</code> ergibt ein Jahr und drei Monate.');

$field = $form->addTextField('min_booking_days_futur');
$field->setLabel('Mindestens Tage vor Anreise');
$field->setNotice('Anzahl Tage, die die Buchung mindestens vor der Anreise liegen muss.');

$field = $form->addTextField('min_booking_days');
$field->setLabel('Mindestbuchungszeit');
$field->setNotice('Anzahl Nächte, die mindestens gebucht werden müssen.');

$field = $form->addTextAreaField('message_min_booking_days');
$field->setLabel('Meldung Mindestbuchungszeit');
$field->setNotice('Die Nachricht wird angezeigt, wenn die Mindestbuchungszeit nicht erreicht ist.');

$field = $form->addTextField('ical_interval');
$field->setLabel('Ical Cachedauer in Sekunden');
$field->setNotice('Leer lassen, wenn keine ical Synchronisation verwendet wird. Sinnvoller Eintrag: <code>900</code> für 15 Minuten.');

$field = $form->addTextField('ical_uid');
$field->setLabel('Ical Uid');
$field->setNotice('Leer lassen, wenn keine ical Synchronisation verwendet wird. Sinnvoller Eintrag: <code>ical@ferien-am-tressower-see.de</code>.');


$content = $form->get();

$fragment = new rex_fragment();
$fragment->setVar('title', 'Einstellungen');
$fragment->setVar('body', $content, false);
$content = $fragment->parse('core/page/section.php');

echo $content;
