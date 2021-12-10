<?php

class aw_helper {
    
    public static function get_css_tag ($fpath,$arguments = []) {
        $arguments = array_merge(['media'=>'all','rel'=>'stylesheet','type'=>'text/css'],$arguments);
        $arguments_string = '';
        foreach ($arguments as $k=>$v) {
            $arguments_string .= $k.'="'.$v.'" ';
        }

        return '<link href="'.$fpath.'?t='.@filemtime(rex_path::base($fpath)).'" '.$arguments_string.' />';        

    }

    

    public static function get_js_tag ($fpath) {
        return '<script src="'.$fpath.'?t='.@filemtime(rex_path::base($fpath)).'" type="text/javascript"></script>';
    }


    public static function get_custom_link($url, $text = '', $url_only = false)
    {

        if ($url) {

            $url = self::get_custom_url($url);

            if ($text != '') {
                $linkText = $text;
            } else {
                $linkText = 'Es wurde kein Linktext oder Inhalt übergeben';
            }

            // Beipiel für die Rückgabe , gerne selbst anpassen
            $link = '<a class="link" href="' . $url . '">' . $linkText . '</a>';
            return $link;
        }
        return '';
    }

    public static function get_custom_url($url)
    {
        if (!$url) {
            return '';
        }
        // Ist es eine Mediendatei?
        if (file_exists(rex_path::media($url)) === true) {
            $url = rex_url::media($url);
        } else {
            // Ist es keine Mediendatei oder URL, dann als REDAXO-Artikel-ID behandeln
            if (filter_var($url, FILTER_VALIDATE_URL) === FALSE and is_numeric($url)) {
                $url = rex_getUrl($url);
            }
        }
        return $url;
    }

    public static function get_short_date($date) {
        return implode('.',array_reverse(explode('-',$date)));
    }




}
