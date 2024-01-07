<?php

rex_yform_manager_table::deleteCache();

$content = rex_file::get(rex_path::addon('buchungskalender', 'install/tablesets/buchungskalender.json'));
rex_yform_manager_table_api::importTablesets($content);

$sql = rex_sql::factory();
$sql->setTable(rex::getTable('buka_bookingtype'));
$sql->select();
$rows = $sql->getRows();

if (!$rows) {
    $sql->setTable(rex::getTable('buka_bookingtype'));
    $sql->setValue('name','Normale Buchung');
    $sql->insert();
}

$sql = rex_sql::factory();
$sql->setTable(rex::getTable('buka_objects'));
$sql->setWhere('colorcode = ""');
$sql->setValue('colorcode','rgba(0, 13, 255, 1)');
$sql->update();


rex_delete_cache();
rex_yform_manager_table::deleteCache();
