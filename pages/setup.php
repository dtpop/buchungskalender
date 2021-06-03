<?php


if (rex::getUser()->isAdmin()) {
    
    $content = '';


    if (rex_request('install_modules','int') == 1) {

        $modules = [
            ['file'=>'buchung_zusammenfassung'  , 'name'=>'Buchungskalender - Buchung Zusammenfassung'],
            ['file'=>'buchungskalender'  , 'name'=>'Buchungskalender - Kalender'],
            ['file'=>'email_bestaetigung'  , 'name'=>'Buchungskalender - E-Mail Bestätigung'],
            ['file'=>'ical'  , 'name'=>'Buchungskalender ical Ausgabe'],
            ['file'=>'minikalender'  , 'name'=>'Buchungskalender - Minikalender'],
            ['file'=>'preise_kurz'  , 'name'=>'Buchungskalender - Preise kurz'],
            ['file'=>'preise'  , 'name'=>'Buchungskalender - Preise'],
            ['file'=>'text_bild'  , 'name'=>'Buchungskalender - Text und Bild'],
        ];

        foreach ($modules as $module) {
            $module_id = 0;
            

            $gm = rex_sql::factory();
            $mod_found = $gm->getArray('select * from '.rex::getTable('module').' WHERE name LIKE "%' . $module['name'] . '%"');
            
            if (count($mod_found)) {
                $module_id = $mod_found[0]['id'];
            }
            

            $input = rex_file::get(rex_path::addon('buchungskalender', 'install/modules/'.$module['file'].'_input.php'));
            $output = rex_file::get(rex_path::addon('buchungskalender', 'install/modules/'.$module['file'].'_output.php'));

            $mi = rex_sql::factory();
            // $mi->debugsql = 1;
            $mi->setTable(rex::getTable("module"));
            $mi->setValue('input', $input);
            $mi->setValue('output', $output);

            if ($module_id) {
                $mi->setWhere('id="' . $module_id . '"');
                $mi->update();
                echo rex_view::success('Modul "' . $module['name'] . '" wurde aktualisiert');
            } else {
                $mi->setValue('name', $module['name']);
                $mi->insert();
                echo rex_view::success('Buchungskalender Modul wurde angelegt unter "' . $module['name'] . '"');
            }
        }
    }



    
    
    if (rex_request('install_email_templates','int') == 1) {
        $sql = rex_sql::factory();
        $sql->setQuery(
                "INSERT INTO `rex_yform_email_template` (`name`, `mail_from`, `mail_from_name`, `mail_reply_to`, `mail_reply_to_name`, `subject`, `body`, `body_html`, `attachments`, `updatedate`) VALUES ('booking_confirm', 'webserver@example.com', 'Ferienwohnung Alpenblick', 'info@example.com', 'Ferienwohnung Alpenblick', 'Ihre REX_YFORM_DATA[field=\"booking_type\"] der Ferienwohnung Alpenblick', '<?php\r\n \/\/ \$booking = rex_session(\'buka_booking\');\r\n\r\n \$booking = json_decode(\"REX_YFORM_DATA[field=\'booking_json\']\",true);\r\n\r\n\r\n \$object = buka_objects::get_object_for_id(\$booking[\'object_id\']);\r\n \r\n?>\r\n\r\nGuten Tag REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]\r\n\r\n<?php if (\$object->reservation == \'book\') : ?>\r\n\r\n\r\nVielen Dank für Ihre Reservierung.\r\n\r\nW I C H T I G!\r\n\r\nBitte bestätigen Sie diese Reservierung mit einem Klick auf den folgenden Link:\r\n\r\n\r\n<?= trim(rex::getServer(),\'/\').rex_article::getSiteStartArticle()->getUrl([\'hash\'=>\$booking[\'hashval\'],\'email\'=>md5(\"REX_YFORM_DATA[field=\'email\']\"),\'action\'=>\'booking_confirm\'],\'&\'); ?> \r\n\r\nIhre Buchung: <?= \$object->name ?> \r\n\r\n<?php else : ?>\r\nIhre Anfrage: <?= \$object->name ?> \r\n<?php endif ?>\r\n\r\nAnreisedatum: <?= \$booking[\'date_start\'] ?> \r\n\r\nAbreisedatum: <?= \$booking[\'date_end\'] ?> \r\n\r\n<?= \$booking[\'vorname\'] ?> <?= \$booking[\'nachname\'] ?> \r\n\r\n\r\n<?= \$booking[\'anschrift\'] ?> \r\n\r\n<?= \$booking[\'plz\'] ?> <?= \$booking[\'ort\'] ?> \r\n\r\nTelefon: <?= \$booking[\'telefon\'] ?> \r\n\r\nE-Mail: <?= \$booking[\'email\'] ?> \r\n\r\nPersonen: <?= \$booking[\'personen\'] ?> \r\n\r\nAnreisezeit: <?= \$booking[\'anreisezeit\'] ?> \r\n\r\nPreis: <?= \$booking[\'price\'] ?> \r\n\r\n\r\nNachricht:\r\n<?= \$booking[\'nachricht\'] ?> \r\n\r\n\r\n\r\nVielen Dank!', '', '', '2021-06-02 20:50:42');
                    INSERT INTO `rex_yform_email_template` (`name`, `mail_from`, `mail_from_name`, `mail_reply_to`, `mail_reply_to_name`, `subject`, `body`, `body_html`, `attachments`, `updatedate`) VALUES ('booking_message', 'webserver@example.com', 'REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]', 'REX_YFORM_DATA[field=\"email\"]', '', 'REX_YFORM_DATA[field=\"booking_type\"] REX_YFORM_DATA[field=\"object_name\"], REX_YFORM_DATA[field=\"date_start\"] - REX_YFORM_DATA[field=\"date_end\"]', '<?php\r\n \/\/ \$booking = rex_session(\'buka_booking\');\r\n\r\n \$booking = json_decode(\"REX_YFORM_DATA[field=\'booking_json\']\",true);\r\n\r\n\r\n \$object = buka_objects::get_object_for_id(\$booking[\'object_id\']);\r\n\r\n\r\n?>\r\n\r\n<?php if (\$object->reservation == \'book\') : ?>\r\n\r\n\r\nEingegangene Buchung.\r\n\r\n<?= \$object->name ?> \r\n\r\n<?php else : ?>\r\n\r\nEingegangene Anfrage.\r\n\r\n<?= \$object->name ?> \r\n<?php endif ?>\r\n\r\nAnreisedatum: <?= \$booking[\'date_start\'] ?> \r\n\r\nAbreisedatum: <?= \$booking[\'date_end\'] ?> \r\n\r\n<?= \$booking[\'vorname\'] ?> <?= \$booking[\'nachname\'] ?> \r\n\r\n<?= \$booking[\'anschrift\'] ?> \r\n\r\n<?= \$booking[\'plz\'] ?> <?= \$booking[\'ort\'] ?> \r\n\r\nTelefon: <?= \$booking[\'telefon\'] ?> \r\n\r\nE-Mail: <?= \$booking[\'email\'] ?> \r\n\r\nPersonen: <?= \$booking[\'personen\'] ?> \r\n\r\nAnreisezeit: <?= \$booking[\'anreisezeit\'] ?> \r\n\r\nPreis: <?= \$booking[\'price\'] ?> \r\n\r\n\r\nNachricht:\r\n<?= \$booking[\'nachricht\'] ?> \r\n\r\n\r\n', '', '', '2021-06-02 20:51:14');
                    INSERT INTO `rex_yform_email_template` (`name`, `mail_from`, `mail_from_name`, `mail_reply_to`, `mail_reply_to_name`, `subject`, `body`, `body_html`, `attachments`, `updatedate`) VALUES ('confirmation_info', 'webserver@example.com', 'REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]', 'REX_YFORM_DATA[field=\"email\"]', '', 'Buchung wurde bestätigt - REX_YFORM_DATA[field=\"object_name\"] - REX_YFORM_DATA[field=\"date_start\"] - REX_YFORM_DATA[field=\"date_end\"]', 'Die Buchung wurde soeben bestätigt.', '', '', '2021-05-31 09:56:05');                    
                    ")
                ;
                
                
        echo rex_view::success('E-Mail Templates wurden angelegt.');
     
    }   

    $content .= '<h2>Module intallieren</h2>';
    $content .= '<p><a class="btn btn-primary" href="index.php?page=buchungskalender/setup&amp;install_modules=1" class="rex-button">Module installieren</a></p>';
    $content .= '<p><strong>Hinweis:</strong> Module mit gleichem Namen werden überschrieben.</p>';
    
    $content .= '<h2>E-Mail Templates intallieren</h2>';
    $content .= '<p><a class="btn btn-primary" href="index.php?page=buchungskalender/setup&amp;install_email_templates=1" class="rex-button">E-Mail Templates installieren</a></p>';
    
    

    $fragment = new rex_fragment();
    $fragment->setVar('title', $this->i18n('install_modul'), false);
    $fragment->setVar('body', $content, false);
    echo $fragment->parse('core/page/section.php');
}