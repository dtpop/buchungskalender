<?php
class buka_season extends rex_yform_manager_dataset {

    public static function get_query() {
        return self::query();
    }

    public static function get_seasons () {
        $items = self::get_query()
        ->orderBy('prio')
        ->find();
        foreach ($items as $item) {
            $item = $item->get_dates();
        }
        return $items;
    }

    public function get_dates () {
        $dates = json_decode($this->dates,true);
        $season_dates = [];
        foreach ($dates as $date) {
            if (count($date) == 3) {
                $season_dates[] = [
                    'from'=>self::chk_date_format($date[1]),
                    'to'=>self::chk_date_format($date[2])
                ];
            }
        }
        $this->season_dates = $season_dates;
        return $this;
    }

    public static function chk_date_format($string) {
        if (strpos($string,'.')) {
            $string = implode('-',array_reverse(explode('.',$string)));
        }
        return $string;
    }


}