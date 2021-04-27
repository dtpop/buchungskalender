<?php

rex_yform_manager_table::deleteCache();


$content = rex_file::get(rex_path::addon('buchungskalender', 'install/tablesets/buchungskalender.json'));
rex_yform_manager_table_api::importTablesets($content);

rex_delete_cache();
rex_yform_manager_table::deleteCache();
