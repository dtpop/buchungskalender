<?php


$var1 = rex_var::toArray("REX_VALUE[1]");
$object = buka_objects::get_object_for_id($var1['object_id']);
if (!$object) {
    return;
}

?>

<section class="uk-section">
    <div class="uk-container">

        <h3><?= $object->name ?> Belegungskalender</h3>
        <div class="minikalender-wrapper">
            <?= buka_cal::get_mini_calendar($var1['object_id']) ?>
        </div>
        <?php if ("REX_LINK[2]") : ?>
            <a class="uk-button uk-button-primary uk-margin-right" href="<?= rex_getUrl("REX_LINK[2]") ?>">Buchungsinformationen</a>
        <?php endif ?>
        <?php if ("REX_LINK[1]") : ?>
            <a class="uk-button uk-button-primary" href="<?= rex_getUrl("REX_LINK[1]") ?>"><?= $object->reservation == 'book' ? 'Direkt buchen' : 'anfragen' ?></a>
        <?php endif ?>

    </div>
</section>