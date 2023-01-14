<?php

rex_yform_manager_table::deleteCache();


$content = rex_file::get(rex_path::addon('buchungskalender', 'install/tablesets/buchungskalender.json'));
rex_yform_manager_table_api::importTablesets($content);

if (!rex_yform_manager_table::get(rex::getTable('buka_bookingstate'))->query()->count()) {
    $data = rex_yform_manager_dataset::create(rex::getTable('buka_bookingstate'));
    $data->name = "Normale Buchung";
    $data->save();
}

rex_delete_cache();
rex_yform_manager_table::deleteCache();
