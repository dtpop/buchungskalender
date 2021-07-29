<?php
if (rex::isBackend()) {
    echo rex_view::info('Ical Kalenderausgabe - Ausgabe nur im Frontend');
    return;
}
$var1 = rex_var::toArray("REX_VALUE[1]");
echo buka_ical::send_ical_data_for_obj($var1['object_id']);
?>