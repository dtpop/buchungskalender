<?php
if (rex::isBackend()) {
    echo rex_view::info('Buchung Zusammenfassung Formular - Ausgabe nur im Frontend');
    return;
}

$val1 = rex_var::toArray("REX_VALUE[1]");

$booking = rex_session('buka_booking','array');

if (count($booking) > 5) {

    $hash_val = sha1(microtime(true) . rand(111, 999) . 'gehasht', false);

    $buka = new buka_cal($booking['object_id']);
    $price = $buka->get_booking_price();
    $booking['price'] = number_format($price['price'], 2, ',', "'");
    $booking['hashval'] = $hash_val;

    $email_me = explode(',',rex_config::get('buchungskalender','email_me'));

    // dump($booking);

    rex_set_session('buka_booking', $booking);

    $object = buka_objects::get_object_for_id($booking['object_id']);


    $fragment = new rex_fragment();
    $fragment->setVar('price', $price);
    $fragment->setVar('booking', $booking);



    $confirm_html = $fragment->parse('buka_confirm.php');

    $yform = new rex_yform();

    $yform->setObjectparams('form_ytemplate', 'uikit,bootstrap,classic');
    $yform->setObjectparams('form_action', rex_getUrl());
    $yform->setObjectparams('error_class', 'uk-form-danger has-error');
    $yform->setObjectparams('form_class', 'uk-form rex-yform');

    $yform->setValueField('hidden', ['email', $booking['email']]);
    $yform->setValueField('hidden', ['vorname', $booking['vorname']]);
    $yform->setValueField('hidden', ['nachname', $booking['nachname']]);
    $yform->setValueField('hidden', ['date_start', $booking['date_start']]);
    $yform->setValueField('hidden', ['date_end', $booking['date_end']]);
    $yform->setValueField('hidden', ['object_name', $object->name]);
    $yform->setValueField('hidden', ['booking_type', $object->reservation == 'book' ? 'Buchung' : 'Anfrage']);
    $yform->setValueField('hidden', ['booking_json', json_encode($booking)]);

    $yform->setValueField('html', ['', $confirm_html]);

    $yform->setValueField('html', ['', '<a href="' . rex_getUrl($booking['last_art_id']) . '" class="uk-button uk-button-default uk-margin-right">Zurück</a>']);

    $yform->setValueField('submit', ['Submit', 'Absenden', 'no_db', '', '', 'uk-active']);

    $yform->setActionField('callback', ['buka_booking::save_in_db']);
    $yform->setActionField('tpl2email', ['booking_confirm', 'email']);
    foreach ($email_me as $email) {
        $yform->setActionField('tpl2email', ['booking_message', $email]);
    }

    $yform->setActionField('showtext', ['<h1>' . $val1['headline'] . '</h1><p>' . $val1['maintext'] . '</p>', '', '', 1]);



}


?>


<section class="uk-section">
    <div class="uk-container uk-container-small">
        <?php if (count($booking) > 5) : ?>
            <?= $yform->getForm() ?>
        <?php else : ?>
            <h1>Keine Buchungsdaten vorhanden</h1>
        <?php endif ?>
    </div>
</section>