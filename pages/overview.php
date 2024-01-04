<?php

$curr_year = rex_request('year', 'int', date('Y'));
$curr_month = rex_request('month', 'int', date('m'));

rex_set_session('returnto', rex_url::currentBackendPage(['year' => $curr_year, 'month' => $curr_month]));

$curr_dt = new DateTime();
$curr_dt->setDate($curr_year, $curr_month, 1);
$next_dt = clone $curr_dt;
$prev_dt = clone $curr_dt;
$next_month = clone $curr_dt;
$prev_month = clone $curr_dt;

$next_dt->modify('+ 12 months');
$prev_dt->modify('- 12 months');
$next_month->modify('+ 1 month');
$prev_month->modify('- 1 month');


$objects = buka_objects::get_query()->find();


$bar_cal = new buka_barcal();
$bar_cal->set_num_of_months(12);
$bar_cal->set_start_date($curr_dt->format('Y-m-d'));

$months = $bar_cal->get_months();

$real_first = true;

$_csrf_key = rex_yform_manager_table::get('rex_buka_bookings')->getCSRFKey();
$token = rex_csrf_token::factory($_csrf_key)->getUrlParams();

// dump($months[0][24]->booking[8][0]->getData());
// dump($months[0][3]->booking);
// dump($months[0][15]->date->wd);
// dump($months[0][14]->booking[1]);

?>
<style>
    <?php foreach ($objects as $obj) : ?>.obj<?= $obj->id ?> .obj_booking:before {
        background-color: <?= $obj->colorcode ?>
    }

    <?php endforeach ?>
</style>

<nav aria-label="Navigation">
    <ul class="pagination pagination-lg">
        <li class="page-item"><a class="page-link" href="<?= rex_url::currentBackendPage(['year' => $prev_dt->format('Y'), 'month' => $prev_dt->format('n')]) ?>">&laquo; 1Y</a></li>
        <li class="page-item"><a class="page-link" href="<?= rex_url::currentBackendPage(['year' => $prev_month->format('Y'), 'month' => $prev_month->format('n')]) ?>">&laquo; 1M</a></li>
        <li class="page-item"><a class="page-link" href="<?= rex_url::currentBackendPage() ?>">NOW</a></li>
        <li class="page-item"><a class="page-link" href="<?= rex_url::currentBackendPage(['year' => $next_month->format('Y'), 'month' => $next_month->format('n')]) ?>">1M &raquo;</a></li>
        <li class="page-item"><a class="page-link" href="<?= rex_url::currentBackendPage(['year' => $next_dt->format('Y'), 'month' => $next_dt->format('n')]) ?>">1Y &raquo;</a></li>
    </ul>

    <ul class="pagination pagination-lg">
        <li class="page-item">
            <a class="page-link" href="/redaxo/index.php?func=add&page=yform%2Fmanager%2Fdata_edit&table_name=rex_buka_bookings&start=0&_csrf_token=<?= $token['_csrf_token'] ?>">NEW</a>
        </li>
    </ul>
</nav>


<?php if (rex_config::get("buchungskalender", "calendar_view") == 'gant') : ?>

    <div class="buka-gant-cal-wrapper">
        <div class="buka-gant-cal-labels">
            <div class="buka-gant-cal-labels-wrapper">
                <?php foreach ($objects as $object) : ?>
                    <div class="obj obj<?= $object->id ?>">
                        <div class="obj_booking">
                            <div class="lbl">
                                <?= $object->name ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach ?>
            </div>
        </div>

        <div class="buka_gant_cal">
            <?php foreach ($months as $month) : ?>
                <div class="buka_gant_cal_month">
                    <div class="gant_cal_month_title">
                        <?= rex_formatter::intlDate($month[3]->date->getTimestamp(), 'LLLL Y') ?>
                    </div>
                    <div class="gant_header_wrapper">
                        <?php foreach ($month as $day) : ?>
                            <?php if ($day->date->format('Y-m-d') < date('Y-m-d') && !rex_get('month','string')) { continue; } ?>
                            <div class="bar_cal_day wd<?= $day->date->wd ?>">
                                <div class="cal_date"><?= $day->date->format('j') ?></div>

                                    <?php foreach ($objects as $object) : ?>                                    
                                        <?php if (isset($day->booking[$object->id])) : ?>
                                            <div class="obj obj<?= $object->id ?>">
                                                <?php foreach ($day->booking[$object->id] as $obj_booking) : ?>                                                    
                                                    <div class="obj_booking <?= $obj_booking->is_start ? 'is_start' : '' ?> <?= $obj_booking->is_end ? 'is_end' : '' ?> status_<?= $obj_booking->status ?> <?= $obj_booking->object_id != $object->id ? 'buka_combi' : '' ?>" data-bookingid="<?= $obj_booking->id ?>">
                                                        <?php if ($obj_booking->is_start || $real_first) : ?>
                                                            <?php if ($obj_booking->lbl_max_len > -1) : ?>
                                                                <div class="lbl max_len_<?= $obj_booking->lbl_max_len + 1 ?>">
                                                                    <?php if ($obj_booking->object_id != $object->id) : // Bei Kombiobjekt Sperrung durch Einzelbuchung nur Objektname ausgeben 
                                                                    ?>
                                                                        <?= $object->name ?>
                                                                    <?php else : ?>
                                                                        <?= $obj_booking->vorname . ' ' . $obj_booking->nachname ?><?= $obj_booking->bookingtype_name ? '<br>['.$obj_booking->bookingtype_name.']' : '' ?>
                                                                    <?php endif ?>


                                                                </div>
                                                                <?php if ($obj_booking->object_id == $object->id) :?>
                                                                    <div class="lbl_tooltip">
                                                                        <?= $obj_booking->vorname .' '.$obj_booking->nachname ?><br>
                                                                        <?= buka_cal::reformat_date($obj_booking->datestart).'-'.buka_cal::reformat_date($obj_booking->dateend) ?>
                                                                        <?= $obj_booking->bookingtype_name ? '<br>'.$obj_booking->bookingtype_name : '' ?>
                                                                        <?= $obj_booking->personen ? '<br>persons: '.$obj_booking->personen : '' ?>
                                                                        <?php // $obj_booking->nachricht ? '<br>'.nl2br($obj_booking->nachricht) : '' ?>
                                                                    </div>
                                                                <?php endif ?>
                                                            <?php endif ?>
                                                        <?php endif ?>
                                                    </div>
                                                    <?php // break ?>
                                                <?php endforeach ?>
                                            </div>
                                        <?php else : ?>
                                            <div class="obj obj-space">&nbsp;</div>
                                        <?php endif ?>
                                    <?php endforeach ?>
                            </div>
                            <?php $real_first = false; ?>
                        <?php endforeach ?>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </div>


<?php else : ?>

    <div class="buka_bar_cal">
        <?php foreach ($bar_cal->get_months() as $month) : ?>
            <?php // dump($month[0]->date) 
            ?>
            <div class="bar_cal_month">
                <div class="bar_cal_month_title">
                    <?= rex_formatter::intlDate($month[3]->date->getTimestamp(), 'LLLL Y') ?>
                </div>
                <?php foreach (buka_barcal::$weekdays as $daystr) : ?>
                    <div class="bar_cal_day">
                        <?= $daystr ?>
                    </div>
                <?php endforeach ?>
                <?php $i = 1 ?>
                <?php while ($i < $month[0]->date->wd) : ?>
                    <div class="bar_cal_day"></div>
                    <?php $i++ ?>
                <?php endwhile ?>
                <?php foreach ($month as $day) : ?>
                    <div class="bar_cal_day">
                        <div class="cal_date"><?= $day->date->format('j') ?></div>
                        <?php foreach ($objects as $object) : ?>
                            <?php if (isset($day->booking[$object->id])) : ?>
                                <div class="obj obj<?= $object->id ?>">
                                    <?php foreach ($day->booking[$object->id] as $obj_booking) : ?>
                                        <div class="obj_booking <?= $obj_booking->is_start ? 'is_start' : '' ?> <?= $obj_booking->is_end ? 'is_end' : '' ?> status_<?= $obj_booking->status ?> <?= $obj_booking->object_id != $object->id ? 'buka_combi' : '' ?>" data-bookingid="<?= $obj_booking->id ?>">
                                            <?php if ($obj_booking->is_start || $day->date->wd == 1 || $day->date->format('j') == 1) : ?>
                                                <?php if ($obj_booking->lbl_max_len > 0) : ?>
                                                    <div class="lbl max_len_<?= $obj_booking->lbl_max_len ?>">
                                                        <?php if ($obj_booking->object_id != $object->id) : // Bei Kombiobjekt Sperrung durch Einzelbuchung nur Objektname ausgeben 
                                                        ?>
                                                            <?= $object->name ?>
                                                        <?php else : ?>
                                                            <?= $obj_booking->vorname . ' ' . $obj_booking->nachname ?> [<?= $object->name ?>]
                                                        <?php endif ?>


                                                    </div>
                                                <?php endif ?>
                                            <?php endif ?>
                                        </div>
                                    <?php endforeach ?>
                                </div>
                            <?php else : ?>
                                <div class="obj obj-space">&nbsp;</div>
                            <?php endif ?>

                        <?php endforeach ?>
                    </div>
                <?php endforeach ?>
            </div>
        <?php endforeach ?>
    </div>

<?php endif ?>