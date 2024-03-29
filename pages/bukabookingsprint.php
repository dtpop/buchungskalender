<style>
    @page {
        size: 297mm 210mm;
        /* Chrome sets own margins, we change these printer settings */
        margin: 5mm 5mm 5mm 5mm;
    }

    body {
        font-size: <?= rex_request('fontsize','int',14) ?>px;
        margin: 0;
    }

    td:nth-child(8),
    th:nth-child(8) {
        width: 40%;
        min-width: 90mm;
    }

    tr:nth-child(2n) td {
        background-color: #dddddd;
    }

    .rex-page-main-inner {
        padding: 0;
    }
    .table > tbody > tr > td {
        line-height: 1.2;
    }

    #rex-js-nav-top {
        display: none;
    }

    .rex-page-main {
        padding-top: 0 !important;
    }

    @media print {
        .rex-page-container {
            padding-top: 5mm !important;
        }
        .hidden-print {
            display: none;
        }
        td {
            padding-top: 1.5mm !important;
            padding-bottom: 1.5mm !important;
        }
        tr:nth-child(2n) td {
            background-color: #dddddd !important;
        }
    }
</style>
<?php

$qry = buka_booking::get_query();

if (rex_request('filter', 'string') == 'next_arrival') {
    $qry->resetWhere();
//    $qry->selectRaw('CONCAT(telefon," ",email) kontakt');
//    $qry->selectRaw('CONCAT(anschrift,"\n",plz," ",ort,"\n",land) fulladdress');
    $qry->whereRaw('dateend >= "' . date('Y-m-d') . '" AND status = "confirmed"');
    $qry->orderBy('datestart');
}


$list = rex_list::factory($qry);
$list->removeColumn('hashval');
$list->removeColumn('telefon');
$list->removeColumn('email');
$list->removeColumn('datestart');
$list->removeColumn('dateend');
$list->removeColumn('startyear');
$list->removeColumn('endyear');
$list->removeColumn('vorname');
$list->removeColumn('nachname');
$list->removeColumn('anschrift');
$list->removeColumn('plz');
$list->removeColumn('ort');
$list->removeColumn('land');
$list->removeColumn('status');
$list->removeColumn('id');
$list->removeColumn('bookingdate');
$list->removeColumn('object_id');
$list->removeColumn('bookingstate_id');
$list->removeColumn('bookingtype_id');

$list->addColumn('Reisezeit','###datestart###<br>###dateend###',1);
$list->addColumn('Objekt','',2);
$list->setColumnFormat('Objekt', 'custom', function($params) { return buka_objects::get_name_by_id(['value'=>$params['list']->getValue('object_id')]); });
$list->addColumn('Name','###vorname###<br>###nachname###',3);
$list->addColumn('Kontakt','###telefon###<br>###email###',10);
$list->setColumnLabel('nachricht', 'Nachricht');
$list->setColumnLabel('anreisezeit', 'Anreisezeit');
$list->setColumnLabel('price', 'Preis');
$list->setColumnLabel('personen', 'Personen');

// $list->setColumnFormat('nachricht', 'custom', function($params) { return nl2br($params['list']->getValue('nachricht')); });





?>

<form action="index.php<?= trim(rex_getUrl('','',$_GET),'/') ?>" class="hidden-print">
    <input type="hidden" name="page" value="bukabookingsprint">
    <input type="hidden" name="filter" value="next_arrival">
    <label for="fs-input">Schriftgröße: </label>
    <input type="text" name="fontsize" value="<?= rex_get('fontsize','int') ?>" id="fs-input">

</form>
<?= $list->get() ?>