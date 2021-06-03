<?php
$var1 = rex_var::toArray("REX_VALUE[1]");
$seasons = buka_season::get_seasons();
// dump($seasons);
$objects = buka_objects::get_objects_with_prices($var1['object_id']);
// dump($objects);
$cal = new buka_cal();
$cal->season_calendar = true;
$cal->cal_wrapper_class = 'buka-cal-wrapper season-calendar minikalender';


?>

<section class="uk-section uk-padding-remove">
    <div class="uk-container uk-container-small uk-margin-large-top text-container">
        <?php foreach ($objects as $object) : ?>
            <h2>Preisbeispiel <?= $object->name ?></h2>
            <table class="uk-table uk-table-small uk-table-striped uk-table-divider">
                <?php foreach ($seasons as $season) : ?>
                    <?php foreach ($object->prices as $price) : ?>
                        <?php if ($price->season_id != $season->id) {
                            continue;
                        } ?>
                        <?php if ($price->nightscount == 7) : ?>
                            <tr>
                                <td><?= $price->nightscount ?> Nächte <?= $season->name ?></td>
                                <td class="uk-text-right"><?= number_format($price->price * $price->nightscount + $object->grundpreis, 2, ',', '.') ?> EUR</td>
                            </tr>
                        <?php endif ?>
                    <?php endforeach ?>
                <?php endforeach ?>
            </table>
            <p><a href="<?= rex_getUrl("REX_LINK[1]") ?>">Alle Preisinformationen</a></p>
        <?php endforeach ?>
    </div>
</section>