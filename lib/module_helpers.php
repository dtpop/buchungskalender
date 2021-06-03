<?php
class module_helpers
{

    public static function getSpacingClass($value, $type = 'margin', $direction = 'top', $standard = 'medium')
    {
        $return = '';
        switch ($value):
            case '2':
                $return = 'uk-' . $type . '-small-' . $direction;
                break;
            case '3':
                $return = 'uk-' . $type . '-' . $direction;
                break;
            case '4':
                $return = 'uk-' . $type . '-large-' . $direction;
                break;
            case '5':
                $return = 'uk-' . $type . '-xlarge-' . $direction;
                break;
            case '6':
                $return = 'uk-' . $type . '-remove-' . $direction;
                break;
            default:
                $return = 'uk-' . $type . '-' . $standard . '-' . $direction;
        endswitch;
        return $return;
    }

    public static function get_formatted_filesize_mb($size)
    {
        return sprintf("%4.1f MB", $size / 1048576);
    }

    public static function get_formatted_number($val, $decimals = 2)
    {
        $clang_id = rex_clang::getCurrentId();
        $format = array($decimals, '.', ',');
        if ($clang_id == 2) :
            $format = array($decimals, ',', '.');
        endif;
        return rex_formatter::number($val, $format);
    }

    public static function getCustomHref($url)
    {
        $target = '';
        if ($url) {
            // Prüfe ob es sich um eine URL handelt, dann weiter
            if (filter_var($url, FILTER_VALIDATE_URL) !== false) {
                $target = ' target="_blank"';
            }
            // Ist es eine Mediendatei?
            if (file_exists(rex_path::media($url)) === true) {
                $url = "/media/" . $url;
                $target = ' target="_blank"';
                // Ist es keine Mediendatei oder URL, dann als Redaxo-Artikel-ID behandeln
            } else if (filter_var($url, FILTER_VALIDATE_URL) === FALSE and is_numeric($url)) {
                $url = rex_getUrl($url);
                $target = '';
            }
            $return = array($url, $target);
            return $return;
        }
    }

    public static function getcustomLink($url, $text, $linkclass, $target123 = '', $target = '')
    {

        // Wurde ein Wert für $url übergeben?
        if ($url) {
            if ($target == '') {
                if (filter_var(filter_var($url, FILTER_SANITIZE_URL), FILTER_VALIDATE_URL)) {
                    $target = '_blank';
                }
            }

            // Prüfe ob es sich um eine URL handelt, dann weiter
            if ($target == '_blank') {
                $target = ' target="' . $target . '" rel="noopener"';
            } else if ($target != '') {
                $target = ' target="' . $target . '"';
            }

            // Ist es eine Mediendatei?
            if (file_exists(rex_path::media($url)) === true) {
                $url = rex_url::media($url);
            } else {
                // Ist es keine Mediendatei oder URL, dann als Redaxo-Artikel-ID behandeln
                if (filter_var($url, FILTER_VALIDATE_URL) === FALSE and is_numeric($url)) {
                    $url = rex_getUrl($url);
                }
            }
            // wurde ein Linktext übergeben?
            if ($text != '') {
                $linkText = $text;
            } else {
                $linkText = 'Es wurde kein Linktext oder Inhalt übergeben';
            }
            // Beipiel für die Rückgabe , gerne selbst anpassen
            $link = '<a class="' . $linkclass . '"' . $target . ' data-test="' . $target123 . '" href="' . $url . '">' . $linkText . '</a>';
            return $link;
        }
    }

    public static function downloadYoutubeThumbnailImage($youTubeLink = '', $thumbNamilQuality = '', $fileNameWithExt = '', $fileDownLoadPath = '')
    {
        $videoIdExploded = explode('?v=', $youTubeLink);
        if (sizeof($videoIdExploded) == 1) {
            $videoIdExploded = explode('&v=', $youTubeLink);
            $videoIdEnd = end($videoIdExploded);
            $removeOtherInVideoIdExploded = explode('&', $videoIdEnd);
            $youTubeVideoId = current($removeOtherInVideoIdExploded);
        } else {
            $videoIdExploded = explode('?v=', $youTubeLink);
            $videoIdEnd = end($videoIdExploded);
            $removeOtherInVideoIdExploded = explode('&', $videoIdEnd);
            $youTubeVideoId = current($removeOtherInVideoIdExploded);
        }
        switch ($thumbNamilQuality) {
            case 'LOW':
                $imageUrl = 'http://img.youtube.com/vi/' . $youTubeVideoId . '/sddefault.jpg';
                break;
            case 'MEDIUM':
                $imageUrl = 'http://img.youtube.com/vi/' . $youTubeVideoId . '/mqdefault.jpg';
                break;
            case 'HIGH':
                $imageUrl = 'http://img.youtube.com/vi/' . $youTubeVideoId . '/hqdefault.jpg';
                break;
            case 'MAXIMUM':
                $imageUrl = 'http://img.youtube.com/vi/' . $youTubeVideoId . '/maxresdefault.jpg';
                break;
            default:
                return 'Choose The Quality Between [ LOW (or) MEDIUM  (or) HIGH  (or)  MAXIMUM]';
                break;
        }
        if (empty($fileNameWithExt) || is_null($fileNameWithExt) || $fileNameWithExt === '') {
            $toArray = explode('/', $imageUrl);
            $fileNameWithExt = md5(time() . mt_rand(1, 10)) . '.' . substr(strrchr(end($toArray), '.'), 1);
        }
        if (!is_dir($fileDownLoadPath)) {
            mkdir($fileDownLoadPath, 0777, true);
        }
        file_put_contents($fileDownLoadPath . $fileNameWithExt, file_get_contents($imageUrl));
        return $fileNameWithExt;
    }
    // Sprachumschaltung
    public static function getUrlOfOtherLanguage()
    {
        $other_language = rex_clang::getCurrentId() == 1 ? 2 : 1;
        if (rex_article::get(rex_article::getCurrentId(), $other_language)->isOnline()) {
            $other_id = rex_article::getCurrentId();
        } else {
            $other_id = rex_article::getSiteStartArticle()->getId();
        }
        return rex_yrewrite::getFullUrlByArticleId($other_id, $other_language);
    }

    public static function getArticlesOfList($list)
    {
        $return = [];
        $list = explode(",", $list);
        foreach ($list as $art) {
            $article = rex_article::get($art);
            if ($article && $article->isOnline()) {
                $return[] = $article;
            }
        }
        return $return;
    }


    public static function get_icon ($article) {
        while (!$article->getValue('art_icon')) {
            $article = $article->getParent();
            if (!$article) {
                break;
            }
        }
        if ($article) {
            return $article->getValue('art_icon');
        }
        return false;
    }

}
