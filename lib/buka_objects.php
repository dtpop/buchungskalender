<?php
class buka_objects extends rex_yform_manager_dataset {
    public static function get_query() {
        return self::query();
    }

    public function find_related() {
        if ($this->combination) {
            return self::get_query()->whereRaw('FIND_IN_SET(id,"'.$this->object_ids.'")')->find();
        } else {
            return self::get_query()->whereRaw('FIND_IN_SET('.$this->id.',object_ids)')->find();
        }
    }

}