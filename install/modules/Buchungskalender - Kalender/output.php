<?php


$var1 = rex_var::toArray("REX_VALUE[1]");
$object = buka_objects::get_object_for_id($var1['object_id']);
if (!$object) {
    return;
}

if (rex_config::get('buchungskalender','booking_page')) {
    $buchen_link = rex_config::get('buchungskalender','booking_page');
} else {
    $buchen_link = "REX_LINK[1]";
}

?>

<section class="uk-section txt-img">
    <div class="uk-container">
        <h3><?= $object->name ?> Belegungskalender</h3>
        <div class="minikalender-wrapper">
            <?= buka_cal::get_mini_calendar($var1['object_id']) ?>
        </div>
        <?php if ("REX_LINK[2]") : ?>
            <a class="uk-button uk-button-primary uk-margin-right" href="<?= rex_getUrl("REX_LINK[2]") ?>">Buchungsinformationen</a>
        <?php endif ?>
        <?php if ($buchen_link) : ?>
            <a class="uk-button uk-button-primary" href="<?= rex_getUrl($buchen_link,'',['object_id'=>$var1['object_id']]) ?>"><?= $object->reservation == 'book' ? 'Direkt buchen' : 'anfragen' ?></a>
        <?php endif ?>

    </div>
</section>