<?php
class buka_additionals extends rex_yform_manager_dataset {
    public static function get_query() {
        return self::query();
    }

    public static function get_additionals_for_object_and_season ($object_id = 0, $season = false) {

        $query = self::get_query();
        if ($season) {
            $query->whereRaw('(saison = "" OR saison = :saison)',['saison'=>(int) $season->id]);
        }
        if ($object_id) {
            $query->whereRaw('(objects = "" OR :object_id IN (objects))',['object_id'=>(int) $object_id]);
        }
        $items = $query->find();

        if (buka_cal::is_change_lang()) {
            foreach ($items as $item) {
                $item->price = buka_cal::change_price($item->price);
            }
        }
        
        return $items;

    }

}
