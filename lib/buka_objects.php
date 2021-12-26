<?php
class buka_objects extends rex_yform_manager_dataset {
    public static function get_query($online = true) {
        $query = self::query();
        if ($online) {
            $query->where('status',1);
        }
        return $query;
    }

    public function find_related() {
        if ($this->combination) {
            return self::get_query()->whereRaw('FIND_IN_SET(id,"'.$this->object_ids.'")')->find();
        } else {
            return self::get_query()->whereRaw('FIND_IN_SET('.$this->id.',object_ids)')->find();
        }
    }

    public static function get_object_for_id ($id) {
        return self::get_query(false)->where('id',$id)->findOne();
    }

    public static function get_objects_with_prices ($object_id = 0) {
        $query = self::get_query();
        if ($object_id) {
            $query->where('id',$object_id);
        }
        $objects = $query->find();
        foreach ($objects as $object) {
            $object->prices = buka_cal::get_prices($object->id,'ASC');
        }
        /*
        $query->leftJoin(rex::getTable('buka_price'),'price',rex::getTable('buka_objects').'.id','object_id');
        $query->select('price.season_id','price_season_id');
        $query->select('price.nightscount','price_nightscount');
        $query->select('price.price','price_price');
        */
//        return $query->find();
        return $objects;
    }

    public static function get_name_by_id ($params) {
        if (isset($params['value']) && $params['value']) {
            $object_id = $params['value'];
            if (!$object_id) {
                return '-- kein Objekt gewählt --';
            }
            $object = self::get_object_for_id($object_id);
            if (!$object) {
                return '-- Objekt '.$object_id.' nicht gefunden --';
            }
            return $object->name;
        }
        return '--';        

    }



}