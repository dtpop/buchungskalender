<?php

$addon = rex_addon::get('buchungskalender');

rex_yform_manager_dataset::setModelClass('rex_buka_bookings', buka_booking::class);
rex_yform_manager_dataset::setModelClass('rex_buka_season', buka_season::class);
rex_yform_manager_dataset::setModelClass('rex_buka_objects', buka_objects::class);
rex_yform_manager_dataset::setModelClass('rex_buka_additionals', buka_additionals::class);

rex_yform::addTemplatePath($addon->getPath('ytemplates'));

if (rex::isBackend() && isset($_REQUEST['page'])) {
    rex_view::addCssFile(rex_addon::get('buchungskalender')->getAssetsUrl('css/buchungskalender.css'));
    rex_view::addJsFile(rex_addon::get('buchungskalender')->getAssetsUrl('js/buchungskalender.js'));
}

if (rex::isBackend() && rex_request('table_name') == 'rex_buka_objects') {
    rex_extension::register('YFORM_DATA_LIST', function( $ep ) {
        $list = $ep->getSubject();
        $list->setColumnFormat('colorcode', 'custom', function ($params ) {
            return '<div style="background-color:'.$params['list']->getValue('colorcode').'" title="'.$params['list']->getValue('colorcode').'">&emsp;</div>';
        });
    });
}

if (rex::isBackend() && rex::getUser()) {
    if (rex::isDebugMode() && rex_request_method() == 'get') {
        $run_compiler = false;
        if (!file_exists($this->getPath('assets/css/buchungskalender.css'))) {
            $run_compiler = true;
        } elseif (!file_exists($this->getAssetsPath('css/buchungskalender.css'))) {
            $run_compiler = true;
        } elseif (filemtime($this->getPath('scss/buchungskalender.scss')) > filemtime($this->getAssetsPath('css/buchungskalender.css'))) {
            $run_compiler = true;
        }
        if ($run_compiler) {
            $compiler = new rex_scss_compiler();
            $compiler->setRootDir($this->getPath());
            $compiler->setScssFile($this->getPath('scss/buchungskalender.scss'));
            $compiler->setCssFile($this->getPath('assets/css/buchungskalender.css'));
            $compiler->compile();
            rex_file::copy($this->getPath('assets/css/buchungskalender.css'), $this->getAssetsPath('css/buchungskalender.css'));
        }

        // Backend JS
        $copy_js = false;
        if (!file_exists($this->getAssetsPath('js/buchungskalender.js'))) {
            $copy_js = true;
        } elseif (filemtime($this->getPath('assets/js/buchungskalender.js')) > filemtime($this->getAssetsPath('js/buchungskalender.js'))) {
            $copy_js = true;
        }
        if ($copy_js) {
            rex_file::copy($this->getPath('assets/js/buchungskalender.js'), $this->getAssetsPath('js/buchungskalender.js'));
        }

        // Frontend JS
        $copy_js = false;
        if (!file_exists($this->getAssetsPath('frontend/js/buchungskalender.js'))) {
            $copy_js = true;
        } elseif (filemtime($this->getPath('assets/frontend/js/buchungskalender.js')) > filemtime($this->getAssetsPath('frontend/js/buchungskalender.js'))) {
            $copy_js = true;
        }
        if ($copy_js) {
            rex_file::copy($this->getPath('assets/frontend/js/buchungskalender.js'), $this->getAssetsPath('frontend/js/buchungskalender.js'));
        }
    }



    rex_extension::register('PACKAGES_INCLUDED', function() {
        if (rex_request('addon','string') == 'buka' && rex_request('action','string') == 'editrecord') {
            $data_id = rex_get('data_id','int');
            $_csrf_key = rex_yform_manager_table::get('rex_buka_bookings')->getCSRFKey();
            $token = rex_csrf_token::factory($_csrf_key)->getUrlParams();
            $params = [
                'page'=>'yform/manager/data_edit',
                'table_name'=>'rex_buka_bookings',
                'data_id'=>$data_id,
                'func'=>'edit',
                '_csrf_token' => $token['_csrf_token']
            ];
            rex_response::sendRedirect(rex_url::backendPage('yform/manager/data_edit', $params,false));
        }
    });
}

if (rex::isFrontend()) {
    rex_extension::register('PACKAGES_INCLUDED', function() {

//        rex_file::copy($this->getPath('assets/frontend/js/buchungskalender.js'), $this->getAssetsPath('frontend/js/buchungskalender.js'));
        
        rex_login::startSession();
        if (rex_config::get('buchungskalender','ical_interval') && !rex_request::isXmlHttpRequest()) {
            buka_ical::check_ical_data();
        }

        if (rex_request('action','string') == 'get_ical_data' && rex_request('object_id','int')) {
            rex_logger::factory()->log('info',(string) $_SERVER['HTTP_REFERER'],[],__FILE__,__LINE__);
            echo buka_ical::send_ical_data_for_obj(rex_request('object_id','int'));
            exit;
        }
        if (rex_request::isXmlHttpRequest() && rex_request('minicalendar','int') == 1) {
            echo buka_cal::get_mini_calendar(rex_request('object_id','int'));
            exit;
        }

        // Buchungskalender

        if (rex_request::isXmlHttpRequest() && rex_request('bukacal','int') == 1) {
            $art = new rex_article_content();
            if (rex_config::get('buchungskalender','booking_page')) {
                $art->setArticleId(rex_config::get('buchungskalender','booking_page'));
            } else {
                $art->setArticleId(rex_article::getCurrentId());
            }
            $content = $art->getArticle();
            if (rex_addon::get('sprog')->isAvailable()) {
                $content = sprogdown($content);
            }
            $dom = new DOMDocument('1.0', 'UTF-8');
            libxml_use_internal_errors(true);
            $dom->preserveWhiteSpace = false;
            $dom->formatOutput       = true;
            $dom->loadHTML('<?xml encoding="UTF-8"><html><body>'.$content.'</body></html>');
            libxml_clear_errors();
            $node = $dom->getElementById('bookingform-step1');
            echo $dom->saveHTML($node);
            exit;
        }

        // Termine Kalender

//        if (rex_request::isXmlHttpRequest() && rex_request('bukadate','int') == 1) {
        if (rex_request('bukadate','int') == 1) {
            $art = new rex_article_content();
            $art->setArticleId(rex_article::getCurrentId());
            $dom = new DOMDocument('1.0', 'UTF-8');
            libxml_use_internal_errors(true);
            $dom->preserveWhiteSpace = false;
            $dom->formatOutput       = true;
            $dom->loadHTML('<?xml encoding="UTF-8"><html><body>'.$art->getArticle().'</body></html>');
            libxml_clear_errors();
            $node = $dom->getElementById('datebookingform-step1');
            echo $dom->saveHTML($node);
            exit;
        }


        // Buchungsbestätigungslink aktiviert
        if (rex_request('action') == 'booking_confirm' && rex_request('email') && rex_request('hash')) {
            if (buka_booking::confirm_booking()) {
                rex_redirect(rex_config::get('buchungskalender','confirmation_page'),'',['success'=>1]);
            } else {
                rex_redirect(rex_config::get('buchungskalender','confirmation_page'),'',['success'=>0]);
            }
        }
        // Terminbestätigungslink aktiviert
        if (rex_request('action') == 'date_booking_confirm' && rex_request('email') && rex_request('hash')) {
            if (buka_booking::confirm_date_booking()) {
                rex_redirect(rex_config::get('buchungskalender','confirmation_page'),'',['success'=>1]);
            } else {
                rex_redirect(rex_config::get('buchungskalender','confirmation_page'),'',['success'=>0]);
            }
        }



    });
}





// register a custom yrewrite scheme
// rex_yrewrite::setScheme(new rex_project_rewrite_scheme());

// register yform template path
// rex_yform::addTemplatePath($addon->getPath('yform-templates'));

// register yorm class
// rex_yform_manager_dataset::setModelClass('rex_my_table', my_classname::class);

// Example of mediapool Whitelist
/*
rex_addon::get('mediapool')->setProperty('allowed_mime_types', [
    'gif'   => ['image/gif'],
    'jpg'   => ['image/jpeg', 'image/pjpeg'],
    'jpeg'  => ['image/jpeg', 'image/pjpeg'],
    'png'   => ['image/png'],
    'eps'   => ['application/postscript'],
    'tif'   => ['image/tiff'],
    'tiff'  => ['image/tiff'],
    'svg'   => ['image/svg+xml'],
    'pdf'   => ['application/pdf'],
    'xls'   => ['application/vnd.ms-excel'],
    'xlsx'  => ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    'xlsm'  => ['application/vnd.ms-excel.sheet.macroEnabled.12'],
    'doc'   => ['application/msword'],
    'docx'  => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    'docm'  => ['application/vnd.ms-word.document.macroEnabled.12'],
    'dot'   => ['application/msword'],
    'dotx'  => ['application/vnd.openxmlformats-officedocument.wordprocessingml.template'],
    'dotm'  => ['application/vnd.ms-word.template.macroEnabled.12'],
    'ppt'   => ['application/vnd.ms-powerpoint'],
    'pptx'  => ['application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    'pptm'  => ['application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
    'pot'   => ['application/vnd.ms-powerpoint'],
    'potx'  => ['application/vnd.openxmlformats-officedocument.presentationml.template'],
    'potm'  => ['application/vnd.ms-powerpoint.template.macroEnabled.12'],
    'pps'   => ['application/vnd.ms-powerpoint'],
    'ppsx'  => ['application/vnd.openxmlformats-officedocument.presentationml.slideshow'],
    'ppsm'  => ['application/vnd.ms-powerpoint.slideshow.macroEnabled.12'],
    'rtf'   => ['application/rtf'],
    'txt'   => ['text/plain', 'application/octet-stream'],
    'csv'   => ['text/plain', 'application/octet-stream'],
    'zip'   => ['application/x-zip-compressed','application/zip'],
    'gz'    => ['application/x-gzip'],
    'tar'   => ['application/x-tar'],
    'mov'   => ['video/quicktime'],
    'movie' => ['video/quicktime'],
    'mp3'   => ['audio/mpeg'],
    'mpe'   => ['video/mpeg'],
    'mpeg'  => ['video/mpeg'],
    'mpg'   => ['video/mpeg'],
]);
*/
