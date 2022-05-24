<?php
class buka_additionals extends rex_yform_manager_dataset {
    public static function get_query() {
        return self::query();
    }

    public static function get_additionals_for_object_and_season ($object_id = 0, $season = false, $where_raw = '', $where_raw_params = []) {

        $query = self::get_query();
        if ($season) {
            $query->whereRaw('(saison = "" OR FIND_IN_SET(:saison,saison))',['saison'=>(int) $season->id]);
        }        
        if ($object_id) {
            $query->whereRaw('(objects = "" OR FIND_IN_SET(:object_id,objects))',['object_id'=>(int) $object_id]);
        }
        if ($where_raw) {
            $query->whereRaw($where_raw,$where_raw_params);
        }

        $query->whereRaw('statustype > 0');

//        dump($query->getQuery());

        $items = $query->find();

        if (buka_cal::is_change_lang()) {
            foreach ($items as $item) {
                $item->price = buka_cal::change_price($item->price);
            }
        }
        
        return $items;

    }

}
