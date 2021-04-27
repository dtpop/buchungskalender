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
                    'from'=>$date[1],
                    'to'=>$date[2]
                ];
            }
        }
        $this->season_dates = $season_dates;
        return $this;
    }


}