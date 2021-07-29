<?php

$row_start_1_2 = '<div class="row"><div class="col-md-6">';
$next_col_1_2 = '</div><div class="col-md-6">';
$row_start_1_4 = '<div class="row"><div class="col-md-3">';
$next_col_3_4 = '</div><div class="col-md-9">';
$row_end = '</div></div>';

$params = $_REQUEST;
$func = rex_request('func','string');
$id = rex_request('id','int');

$qry = buka_booking::get_query();

if (rex_request('filter','string') == 'next_arrival') {
    $qry->resetWhere();
    $qry->whereRaw('dateend >= "'.date('Y-m-d').'" AND status = "confirmed"');
    $qry->orderBy('datestart');
}


// dump($qry->getQuery());

if ($func == 'edit' && $id) {

    $yform = new rex_yform();
    $yform->setObjectparams('form_name', 'table-rex_buka_bookings');
    $yform->setObjectparams('form_action','index.php');
    $yform->setValueField('hidden',['page','buchungskalender/bookings','REQUEST','no_db']);
    $yform->setValueField('hidden',['func','edit','REQUEST','no_db']);
    $yform->setValueField('hidden',['src',rex_request('src','string'),'REQUEST','no_db']);
    $yform->setValueField('hidden',['id',$id,'REQUEST']);
//    $yform->setDebug(TRUE);
    $yform->setObjectparams('form_showformafterupdate', 0);
    $yform->setObjectparams('getdata', true);
    $yform->setObjectparams('main_id', $id);
    $yform->setObjectparams('main_table', rex::getTable('buka_bookings'));
    $yform->setObjectparams('main_where', 'id='.$id);
    
    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('date', ['datestart','Startdatum','2019','2050','DD.MM.YYYY','','','select']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('date', ['dateend','Enddatum','2019','2050','DD.MM.YYYY','','','select']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('be_manager_relation', ['object_id','Objekt','rex_buka_objects','name','0','1','-- bitte Objekt auswählen --']);


    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('text', ['vorname','Vorname']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('text', ['nachname','Nachname']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('text', ['land','Land']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('text', ['anschrift','Anschrift']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('html',['',$row_start_1_4]);
    $yform->setValueField('text', ['plz','PLZ']);
    $yform->setValueField('html',['',$next_col_3_4]);
    $yform->setValueField('text', ['ort','Ort']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('text', ['telefon','Telefon']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('text', ['email','E-Mail']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('text', ['personen','Personen']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('text', ['anreisezeit','Anreisezeit']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setValueField('textarea', ['nachricht','Nachricht']);
    $yform->setValueField('datestamp', ['bookingdate','Buchungsdatum','Y-m-d H:i:s','','1','1']);
    $yform->setValueField('text', ['hashval','','','','{"type":"hidden"}']);

    $yform->setValueField('html',['',$row_start_1_2]);
    $yform->setValueField('choice', ['status','Status','Angefragt=asked,Bestätigt=confirmed,Storniert=storno','','','asked','','','-- bitte auswählen --']);
    $yform->setValueField('html',['',$next_col_1_2]);
    $yform->setValueField('text', ['price','Preis']);
    $yform->setValueField('html',['',$row_end]);

    $yform->setActionField('db',[rex::getTable('buka_bookings'),'main_where']);
    if (rex_request('src','string') == 'calendar') {
        $yform->setActionField('redirect',['index.php?page=buchungskalender/calendar']);
    } else {
        $yform->setActionField('redirect',['index.php?page=buchungskalender/bookings']);
    }

    $fragment = new rex_fragment();
    $fragment->setVar('class', 'edit', false);
    $fragment->setVar('title', 'Buchung bearbeiten', false);
    $fragment->setVar('body', $yform->getForm(), false);
    echo $fragment->parse('core/page/section.php');
   

} else {

    echo '<p>
        <a href="/redaxo'.rex_getUrl('','',['page'=>$params['page']]).'">Alle</a> | 
        <a href="/redaxo'.rex_getUrl('','',array_merge($params,['filter'=>'next_arrival'])).'">Nächste Anreisen</a>
    </p>';

    $list = rex_list::factory($qry);
    $list->removeColumn('hashval');
    $list->removeColumn('startyear');
    $list->removeColumn('endyear');
    $list->setColumnLabel('datestart','Anreise');
    $list->setColumnLabel('dateend','Abreise');
    $list->setColumnLabel('object_id','Objekt');

    $list->setColumnFormat('object_id', 'custom','buka_objects::get_name_by_id');

    $td_icon = '<i class="rex-icon fa-pencil"></i>';
    // $th_icon = '<a href="'.$list->getUrl(['func' => 'add']).'" title="'.rex_i18n::msg('add').'"><i class="rex-icon rex-icon-add-action"></i></a>';
    $th_icon = '';
    $list->addColumn($th_icon, $td_icon, 0, ['<th class="rex-table-icon">###VALUE###</th>', '<td class="rex-table-icon">###VALUE###</td>']);
    $list->setColumnParams($th_icon, ['func' => 'edit', 'id' => '###id###', 'start' => rex_request('start', 'int', NULL)]);


    echo $list->get();
}

?>