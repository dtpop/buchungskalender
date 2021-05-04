<?php

$addon = rex_addon::get('buchungskalender');

rex_yform_manager_dataset::setModelClass('rex_buka_bookings', buka_booking::class);
rex_yform_manager_dataset::setModelClass('rex_buka_season', buka_season::class);
rex_yform_manager_dataset::setModelClass('rex_buka_objects', buka_objects::class);

if (rex::isBackend() && isset($_REQUEST['page'])) {
    rex_view::addCssFile(rex_addon::get('buchungskalender')->getAssetsUrl('css/buchungskalender.css'));
    rex_view::addJsFile(rex_addon::get('buchungskalender')->getAssetsUrl('js/buchungskalender.js'));
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
        $copy_js = false;
        if (!file_exists($this->getAssetsPath('js/buchungskalender.js'))) {
            $copy_js = true;
        } elseif (filemtime($this->getPath('assets/js/buchungskalender.js')) > filemtime($this->getAssetsPath('js/buchungskalender.js'))) {
            $copy_js = true;
        }
    }
}

if (rex::isFrontend()) {    
    rex_extension::register('PACKAGES_INCLUDED', function() {
        if (rex::getConfig('buka','ical_interval')) {
            buka_ical::check_ical_data();
        }

        if (rex_request('action','string') == 'get_ical_data' && rex_request('object_id','int')) {
            echo buka_ical::send_ical_data_for_obj(rex_request('object_id','int'));
            exit;
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
