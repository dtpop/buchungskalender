<?php

$row_start_1_2 = '<div class="row"><div class="col-md-6">';
$next_col_1_2 = '</div><div class="col-md-6">';
$row_start_1_4 = '<div class="row"><div class="col-md-3">';
$next_col_3_4 = '</div><div class="col-md-9">';
$row_end = '</div></div>';

$params = $_REQUEST;
$func = rex_request('func','string');
$id = rex_request('data_id','int');

$qry = buka_booking::get_query();

if (rex_request('filter','string') == 'next_arrival') {
    $qry->resetWhere();
    $qry->whereRaw('dateend >= "'.date('Y-m-d').'" AND status = "confirmed"');
    $qry->orderBy('datestart');
}

// Achtung! Indexwerte des Arrays sind abhängig von der Feldposition

$next_arrival = [
    'FORM' => [
        'rex_yform_searchvars-rex_buka_bookings' => [
            2 => '>'.date('Y-m-d'),
            9 => [0 => 'confirmed']
        ],
    ],
    'sort'=>'datestart',
    'sorttype'=>'asc'
];

if ($func == 'edit' && $id) {

    $yform = new rex_yform();
    $yform->setObjectparams('form_name', 'table-rex_buka_bookings');
    $yform->setObjectparams('form_action','index.php');
    $yform->setValueField('hidden',['page','buchungskalender/bookings','REQUEST','no_db']);
    $yform->setValueField('hidden',['func','edit','REQUEST','no_db']);
    $yform->setValueField('hidden',['src',rex_request('src','string'),'REQUEST','no_db']);
    $yform->setValueField('hidden',['data_id',$id,'REQUEST','no_db']);
//    $yform->setDebug(TRUE);
    $yform->setObjectparams('form_showformafterupdate', 0);
    $yform->setObjectparams('getdata', true);
    $yform->setObjectparams('main_id', $id);
    $yform->setObjectparams('main_table', rex::getTable('buka_bookings'));
    $yform->setObjectparams('main_where', 'id='.$id);
    $yform->setObjectparams('submit_btn_label', rex_i18n::msg('buka_send_button'));
    
    $yform->setValueField('html', ['html1','HTML','<div class="buka-be-datefields buka-three-cols">']);
    $yform->setValueField('date', ['datestart','translate:buka_startdate','2019','2050','d.m.Y','0','0','input:date']);
    $yform->setValueField('date', ['dateend','translate:buka_enddate','2019','2050','d.m.Y','0','0','input:date']);
    $yform->setValueField('text', ['anreisezeit','translate:buka_arrivaltime','','0']);
    $yform->setValueField('html', ['html2','html2','</div><div class="buka-two-cols">']);
    $yform->setValueField('be_manager_relation', ['object_id','translate:buka_object','rex_buka_objects','name','0','1','translate:buka_please_select_object']);
    $yform->setValueField('be_manager_relation', ['bookingtype_id','translate:booking_type','rex_buka_bookingtype','name','0','1']);
    $yform->setValueField('html', ['html3','html3','</div><div class="buka-two-cols">']);
    $yform->setValueField('text', ['vorname','translate:buka_firstname','','0']);
    $yform->setValueField('text', ['nachname','translate:buka_lastname','','0']);
    $yform->setValueField('html', ['html4','html4','</div><div class="buka-three-cols">']);
    $yform->setValueField('text', ['personen','translate:buka_participants','','0']);
    $yform->setValueField('choice', ['status','translate:buka_state','translate:buka_asked=asked,translate:buka_confirmed=confirmed,translate:buka_canceled=storno,translate:buka_pre_booking=pre_booking','0','0','asked','','','-- bitte auswählen --','','','','','0']);
    $yform->setValueField('text', ['price','translate:buka_price','','0']);
    $yform->setValueField('html', ['html5','html5','</div>']);
    $yform->setValueField('textarea', ['nachricht','translate:buka_message','','0']);
    $yform->setValueField('html', ['html6','html6','<div class="buka-two-cols">']);
    $yform->setValueField('text', ['telefon','translate:buka_phone','','0']);
    $yform->setValueField('text', ['email','E-Mail']);
    $yform->setValueField('html', ['html7','html7','</div><div class="buka-three-cols">']);
    $yform->setValueField('text', ['anschrift','translate:buka_address','','0']);
    $yform->setValueField('text', ['plz','translate:buka_zip','','0']);
    $yform->setValueField('text', ['ort','translate:buka_city','','0']);
    $yform->setValueField('html', ['html8','html8','</div>']);
    $yform->setValueField('text', ['land','translate:buka_country','','0']);
    $yform->setValueField('choice', ['bookingstate_id','Buchungsstatus','SELECT id value, name label FROM rex_buka_bookingstate ORDER BY prio','1','1','','','','','','','','','0']);
    $yform->setValueField('be_manager_relation', ['participants','translate:buka_participants','rex_buka_participants','booking_id','5','0']);
    $yform->setValueField('text', ['hashval','','','','{"type":"hidden"}']);
    $yform->setValueField('datestamp', ['bookingdate','translate:buka_bookingdate','Y-m-d H:i:s','0','1']);

//    $yform->setValidateField('customfunction', ['datestart,dateend,object_id,status','buka_booking::unique_booking','','Dieses Buchungsdatum ist ungültig. Es gibt bereits eine Buchung für dieses Datum.','0']);
    
    $yform->setValidateField('customfunction', ['datestart,dateend,object_id,status','buka_booking::unique_booking','',rex_i18n::msg('buka_booking_uncorrect'),'0']);

    $yform->setActionField('db',['rex_buka_bookings','main_where']);

    if (rex_request('src','string') == 'calendar') {
        $yform->setActionField('redirect',['index.php?page=buchungskalender/calendar']);
    } elseif (rex_session('returnto')) {
        $yform->setActionField('redirect',[str_replace('&amp;','&',rex_session('returnto'))]);
    } else {
        $yform->setActionField('redirect',['index.php?page=buchungskalender/bookings']);
    }

    $fragment = new rex_fragment();
    $fragment->setVar('class', 'edit', false);
    $fragment->setVar('title', rex_i18n::msg('buka_edit_booking'), false);
    $fragment->setVar('body', $yform->getForm(), false);
    echo $fragment->parse('core/page/section.php');
   

} else {

    echo '<nav class="navbar navbar-default"><ul class="nav navbar-nav">
        <li><a href="/redaxo'.rex_getUrl('','',['page'=>$params['page']]).'">'.rex_i18n::msg('buka_all').'</a></li>
        <li><a href="/redaxo'.rex_getUrl('','',array_merge($params,$next_arrival)).'">'.rex_i18n::msg('buka_next_arrival').'</a></li>
        <li><a href="/redaxo'.rex_getUrl('','',array_merge($params,['page'=>'bukabookingsprint','filter'=>'next_arrival'])).'" target="_blank">'.rex_i18n::msg('buka_next_arrival_print').'</a></li>
    </ul></nav>';


    $_REQUEST['table_name'] = 'rex_buka_bookings';
    include \rex_path::plugin('yform','manager','pages/data_edit.php');

}

?>