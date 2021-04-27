<?php

$sql = rex_sql::factory();
$sql->setQuery('DELETE FROM `'.rex::getTable('yform_table').'` WHERE table_name = "'.rex::getTable('buka_bookings').'"');
$sql->setQuery('DELETE FROM `'.rex::getTable('yform_field').'` WHERE table_name = "'.rex::getTable('buka_objects').'"');
$sql->setQuery('DELETE FROM `'.rex::getTable('yform_history').'` WHERE table_name = "'.rex::getTable('buka_season').'"');
$sql->setQuery('DELETE FROM `'.rex::getTable('yform_history').'` WHERE table_name = "'.rex::getTable('buka_price').'"');


rex_sql_table::get(rex::getTable('buka_bookings'))->drop();
rex_sql_table::get(rex::getTable('buka_objects'))->drop();
rex_sql_table::get(rex::getTable('buka_season'))->drop();
rex_sql_table::get(rex::getTable('buka_price'))->drop();

rex_yform_manager_table::deleteCache();
