<?php

$addon = rex_addon::get('buchungskalender');

// $content = rex_file::get(rex_path::addon('buchungskalender', 'install/tablesets/buchungskalender.json'));
// rex_yform_manager_table_api::importTablesets($content);

rex_delete_cache();
rex_yform_manager_table::deleteCache();

rex_sql_table::get(rex::getTable('buka_objects'))
    ->ensureColumn(new rex_sql_column('colorcode', 'varchar(255)'))
    ->ensure();

$addon->includeFile(__DIR__.'/install.php');