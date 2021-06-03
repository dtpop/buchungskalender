<?php
$seasons = buka_season::get_seasons();
// dump($seasons);
$objects = buka_objects::get_objects_with_prices();
// dump($objects);
$cal = new buka_cal();
$cal->season_calendar = true;
$cal->cal_wrapper_class = 'buka-cal-wrapper season-calendar minikalender';


?>

<section class="uk-section uk-padding-remove">
    <div class="uk-container uk-container-wide">
        <h2>Saisonkalender</h2>
        <?= $cal->getCalendar(); ?>
        <?= $cal->get_season_legend() ?>
    </div>
    <div class="uk-container uk-container-small uk-margin-large-top">
        <?php foreach ($objects as $object) : ?>
            <h2><?= $object->name ?></h2>
            <?php foreach ($seasons as $season) : ?>
                <h3><?= $season->name ?></h3>
                <table class="uk-table uk-table-small uk-table-striped">
                    <?php foreach ($object->prices as $price) : ?>
                        <?php if ($price->season_id != $season->id) {
                            continue;
                        } ?>
                        <?php if ($price->nightscount == 1) : ?>
                            <tr>
                                <td>3 Nächte (Mindestbuchungszeit)</td>
                                <td class="uk-text-right"><?= number_format($price->price * 3 + $object->grundpreis, 2, ',', '.') ?> EUR</td>
                            </tr>
                            <tr>
                                <td>Weitere Nacht</td>
                                <td class="uk-text-right"><?= number_format($price->price, 2, ',', '.') ?> EUR</td>
                            </tr>
                        <?php else : ?>
                            <tr>
                                <td><?= $price->nightscount ?> Nächte</td>
                                <td class="uk-text-right"><?= number_format($price->price * $price->nightscount + $object->grundpreis, 2, ',', '.') ?> EUR</td>
                            </tr>
                            <tr>
                                <td>Weitere Nacht</td>
                                <td class="uk-text-right"><?= number_format($price->price, 2, ',', '.') ?> EUR</td>
                            </tr>

                        <?php endif ?>
                    <?php endforeach ?>
                </table>
            <?php endforeach ?>
        <?php endforeach ?>



        <?php /* Nette Idee ;-) foreach ($seasons as $season) : ?>
            <h4><?= $season->name ?></h4>
            <?php if (!json_decode($season->dates)) : ?>
                <p>Übrige Zeit</p>
                <?php continue; ?>
            <?php endif ?>
            <?php foreach (json_decode($season->dates) as $date) : ?>
                <?php if ($date[2] < date('Y-m-d')) continue; ?>
                <p class="uk-margin-remove"><?= buka_cal::reformat_date($date[1]) ?> - <?= buka_cal::reformat_date($date[2]) ?> (<?= $date[0] ?>)</p>
            <?php endforeach ?>

            <?php // dump(json_decode($season->dates,true)); ?>
        <?php endforeach */ ?>

    </div>
</section>