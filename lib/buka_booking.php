<?php
class buka_booking extends rex_yform_manager_dataset {

    public static function get_query ($object_id = 0, $with_related = true) {
        $query = self::query()
        ->selectRaw("YEAR(datestart)",'startyear')
        ->selectRaw("YEAR(dateend)",'endyear')
        ;

        if (!$object_id) {
            $object_id = rex_request('object_id','int',0);
        }

        if ($object_id) {
            $related = self::find_related($object_id);
            if (count($related) && $with_related) {
                $related_ids = [$object_id=>$object_id];
                foreach ($related as $o) {
                    $related_ids[$o->id] = $o->id;
                }
                $query->whereRaw('FIND_IN_SET(object_id,:ids)',['ids'=>implode(',',$related_ids)]);
            } else {
                $query->where('object_id',$object_id);
            }
        }
        return $query;
    }

    public static function find_related ($object_id) {
        $object = buka_objects::get_query()->where('id',$object_id)->findOne();
        if ($object) {
            $related = $object->find_related();
            return $related;
        }
        return false;
    }


    public static function get_min_year () {
        $first = self::get_query()->orderBy('datestart')->findOne();
        return $first->startyear ?? '';
    }
    
    public static function get_max_year () {
        $first = self::get_query()->orderBy('dateend','DESC')->findOne();
        return $first->endyear ?? '';
    }

    public static function get_end_time () {
        $offset = explode('*',rex_config::get('buchungskalender','max_booking_time'));
        $sek = 1;
        foreach ($offset as $num) {
            $sek = $sek * intval($num);
        }
        return time()+$sek;
    }

    /**
     * 
     * $data_id kann verwendet werden, um den aktuellen Datensatz von der Prüfung auszunehmen
     * 
     */
    public static function is_booked($anreise = '', $abreise = '', $object_id = 0, $data_id = 0) {
        if ($anreise >= $abreise) {
            return true;
        }
        $query = self::get_query($object_id);
        if ($data_id) {
            $query->whereNot('id',$data_id);
        }
        if (rex_config::get('buchungskalender','asked_offset')) {
            $query->whereRaw('((
                (status = "confirmed" OR (status = "asked" AND bookingdate > :bookingdate))  
                 AND ((datestart >= :anreise AND dateend <= :abreise)
                 OR (dateend > :abreise AND datestart < :abreise)
                 OR (datestart < :anreise AND dateend > :anreise))
             
                ))',['anreise'=>$anreise,'abreise'=>$abreise,'bookingdate'=>date('Y-m-d H:i:s',strtotime('-'.rex_config::get('buchungskalender','asked_offset')))])
            ;
        } else {
                $query->where('status','confirmed')
                ->whereRaw('((datestart >= :anreise AND dateend <= :abreise)
                OR (dateend > :abreise AND datestart < :abreise)
                OR (datestart < :anreise AND dateend > :anreise))',['anreise'=>$anreise,'abreise'=>$abreise]);
        }
//        dump($query->getQuery());
        return $query->exists();
    }


    /**
     * Kann im yform als Validate Funktion verwendet werden.
     */
    public static function unique_booking ($fields,$values) {
        $data_id = rex_request('data_id','int');
        if (buka_booking::is_booked($values['datestart'],$values['dateend'],$values['object_id'],$data_id)) {
            return true;
        }
    }

    public static function reset_booking () {
        $booking = rex_session('buka_booking','array');
        $booking['object_id'] = 0;
        $booking['datestart'] = '';
        $booking['dateend'] = '';
        $booking['date_start'] = '';
        $booking['date_end'] = '';
        $booking['price'] = 0;
		rex_set_session('buka_booking', $booking);

    }

    public static function save_in_session ($params) {        
		$value_pool = $params->params['value_pool']['email'];
		rex_set_session('buka_booking', $value_pool);
    }


        /**
        array:20 [▼
            "bookingdate" => "2021-05-23 12:10:29"
            "status" => "confirmed"
            "object_id" => "1"
            "last_art_id" => 1
            "datestart" => "2021-09-14"
            "dateend" => "2021-09-23"
            "date_start" => "14.09.2021"
            "date_end" => "23.09.2021"
            "vorname" => ""
            "nachname" => ""
            "anschrift" => ""
            "plz" => ""
            "ort" => ""
            "land" => ""
            "telefon" => ""
            "email" => "wolfgang@gw21.de"
            "personen" => ""
            "anreisezeit" => ""
            "nachricht" => ""
            "Submit" => "no_db"
        ]        
        **/


    public static function save_in_db ($params) {        
		$value_pool = $params->params['value_pool']['email'];
        $booking = json_decode($value_pool['booking_json'],true);
        $error = false;
        $query = rex_yform_manager_table::get(rex::getTable('buka_bookings'));
        $fields = $query->getValueFields();
        foreach (['object_id','datestart','dateend','email'] as $fn) {
            if (!isset($booking[$fn]) || !$booking[$fn]) {
                $error = true;
                break;
            }
        }
        if (self::is_booked($booking['datestart'],$booking['dateend'],$booking['object_id'])) {
            $error = true;
        }

        if ($error) {
            echo '<p class="uk-form-danger">Es ist ein Fehler aufgetreten!</p>';
            exit;
        }
        $record = rex_yform_manager_dataset::create(rex::getTable('buka_bookings'));

        foreach ($booking as $fn=>$val) {
            if (isset($fields[$fn])) {
                $record->{$fn} = $val;
            }
        }
        $record->status = 'asked';
        $record->save();
        rex_set_session('buka_booking',[]);
    }

    public static function save_date_in_db ($params) {        
		$value_pool = $params->params['value_pool']['email'];
        $booking = json_decode($value_pool['booking_json'],true);
        $error = false;
        $query = rex_yform_manager_table::get(rex::getTable('buka_date_bookings'));
        $fields = $query->getValueFields();
        foreach (['object_id','slotvalue','email'] as $fn) {
            if (!isset($booking[$fn]) || !$booking[$fn]) {
                $error = true;
                break;
            }
        }

        
        /*
        if (self::is_booked($booking['datestart'],$booking['dateend'],$booking['object_id'])) {
            $error = true;
        }
        */

        if ($error) {
            echo '<p class="uk-form-danger">Es ist ein Fehler aufgetreten!</p>';
            exit;
        }
        $record = rex_yform_manager_dataset::create(rex::getTable('buka_date_bookings'));

        foreach ($booking as $fn=>$val) {
            if (isset($fields[$fn])) {
                $record->{$fn} = $val;
            }
        }
        $record->status = 'asked';
        $record->save();
        rex_set_session('buka_booking',[]);
    }


    public static function confirm_booking() {
        $email_md5 = rex_request('email');
        $hash = rex_request('hash');
        $query = self::get_query();
        $query->where('hashval',$hash);
        $query->where('status','asked');
        $rows = $query->count();
        if ($rows != 1) {
            rex_set_session('buka_message','Die Buchung ist nicht vorhanden oder wurde bereits bestätigt.');
            return true;
        }
        $data = $query->findOne();
        if (md5($data->email) != $email_md5) {
            rex_set_session('buka_message','Es ist ein Fehler aufgetreten.');
            return true;
        }
        $data->status = 'confirmed';
        $data->save();
        rex_set_session('buka_message','Die Buchung ist nun erfolgreich besätigt.');

        $object = buka_objects::get_object_for_id($data->object_id);

        $yform = new rex_yform();        
        $yform->setObjectparams('csrf_protection',false);
        $yform->setValueField('hidden', ['vorname', $data->vorname]);
        $yform->setValueField('hidden', ['nachname', $data->nachname]);
        $yform->setValueField('hidden', ['object_name', $object->name]);
        $yform->setValueField('hidden', ['email', $data->email]);
        $yform->setValueField('hidden', ['date_start', date('d.m.Y',strtotime($data->datestart))]);
        $yform->setValueField('hidden', ['date_end', date('d.m.Y',strtotime($data->dateend))]);
        
        foreach (explode(',', rex_config::get('buchungskalender', 'email_me')) as $email) {
            $yform->setActionField('tpl2email', ['confirmation_info', $email]);
        }
        $yform->getForm();
        $yform->setObjectparams('send',1);
        $yform->executeActions();    


        return true;
    }

    public static function confirm_date_booking() {
        $email_md5 = rex_request('email');
        $hash = rex_request('hash');

//        $query = self::get_query();
        $query = rex_yform_manager_table::get(rex::getTable('buka_date_bookings'))->query();

        $query->where('hashval',$hash);
        $query->where('status','asked');
        $rows = $query->count();
        if ($rows != 1) {
            rex_set_session('buka_message','Die Buchung ist nicht vorhanden oder wurde bereits bestätigt.');
            return true;
        }
        $data = $query->findOne();
        if (md5($data->email) != $email_md5) {
            rex_set_session('buka_message','Es ist ein Fehler aufgetreten.');
            return true;
        }
        $data->status = 'confirmed';
        $data->save();
        rex_set_session('buka_message','Die Buchung ist nun erfolgreich besätigt.');

        $object = buka_objects::get_object_for_id($data->object_id);

        $yform = new rex_yform();        
        $yform->setObjectparams('csrf_protection',false);
        $yform->setValueField('hidden', ['vorname', $data->vorname]);
        $yform->setValueField('hidden', ['nachname', $data->nachname]);
        $yform->setValueField('hidden', ['slot_value', buka_date_cal::format_slot_date($data->slotvalue)]);
        $yform->setValueField('hidden', ['object_name', $object->name]);
        $yform->setValueField('hidden', ['email', $data->email]);
        
        foreach (explode(',', rex_config::get('buchungskalender', 'email_me')) as $email) {
            $yform->setActionField('tpl2email', ['confirmation_date_info', $email]);
        }
        $yform->getForm();
        $yform->setObjectparams('send',1);
        $yform->executeActions();    


        return true;
    }

}