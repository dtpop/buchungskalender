<?php
class buka_date_cal extends buka_cal {

    var $time_slots;
    var $places = [];
    public static $radio_values = [];

    function __construct ($object_id = null, $date = null, $year = null, $month = null) {
        parent::__construct($object_id,$date,$year,$month);
        $this->set_slots();
        $this->set_places();

    }


    private function set_slots () {
        foreach (json_decode($this->object->available_times) as $item) {
            $day_str = str_replace($this->weekdays,array_keys($this->weekdays),$item[0]); // Mo-Fr => 0-4
            $days = explode('-',$day_str);
            if (count($days) > 1) {
                for ($i = $days[0]; $i <= $days[1]; $i++) {
                    $this->time_slots[$i] = array_merge($this->time_slots[$i] ?? [],$this->fill_slots($item[1],$item[2]));
                }
            } else {
                $this->time_slots[$days[0]] = array_merge($this->time_slots[$days[0]] ?? [], $this->fill_slots($item[1],$item[2]));
            }
        }
    }


    private function set_places () {
        foreach (json_decode($this->object->places) as $pl) {
            $this->places[$pl[0]] = $pl[0];
        }
    }

    private function fill_slots($start,$end) {
        $slots = [];
        $start = str_pad(str_replace('.',':',$start),5,'0',STR_PAD_LEFT);
        $end = str_pad(str_replace('.',':',$end),5,'0',STR_PAD_LEFT);

        $period_sek = strtotime($this->object->period) - strtotime('TODAY'); // Sekunden, z.B. 00:45:00 = 2700

        $period = new DateInterval('PT'.$period_sek.'S');
        $d0 = new DateTime('2021-09-02 '.$start);

        $current = $d0->format('H:i');

        while($current < $end) {
            $slots[$current] = ['start'=>$current];            
            $d0->add($period);
            $current = $d0->format('H:i');
        }
        array_pop($slots);

        return $slots;
    }


    public function getMonth($year = 0, $month = 0, $nth_month = 0) {
        if (!$year) {
            $year = date('Y');
        }
        if (!$month) {
            $month = date('m');
        }

        $dt = new DateTime();
        $dt->setDate($year, $month, 1);

        $class = '';

        foreach ($this->mobile_month_count as $k=>$mclass) {
            if ($nth_month > $k) {
                $class = $mclass;
            }
        }

        $out = '<ul class="y-wrapper '.$class.'">';
        $out .= '<li class="bk_month_title">' . $this->months[$month - 1] . ' ' . $year . '</li>';
        foreach ($this->weekdays as $wd) {
            $out .= '<li class="bk-weekday">' . $wd . '</li>';
        }
        $out .= str_repeat('<li class="bk-dummy bk-day">&nbsp;</li>', ($dt->format('N') - 1));
        $day = 1;
        while ($day <= $dt->format('t')) {
            $date = $year . '-' . $dt->format('m') . '-' . str_pad($day, 2, '0', STR_PAD_LEFT);
            $bookingData = $this->get_booking_data_for_date($date);
            $season = $this->get_season($date);
            $out .= '<li class="bk-day bk-cal-day '.implode(' ',$bookingData['class']).'" data-date="' . $date . '" data-priceclass="'. $season->id .'" data-fullweek="'. $season->full_week .'" data-minbookingdays="'.$season->minddays.'" data-bookingid="'.$bookingData['booking_id'].'">' . $day . '</li>';
            if ($date >= date('Y-m-d')) {
                $this->set_radio_values_for_date($date);
            }
            $day++;

        }
        $out .= '</ul>';

        return $out;
    }

    public function set_radio_values_for_date($date) {
//        dump($this->bookings);
        $dateval = strtotime($date);
        if (!isset($this->time_slots[date('N',$dateval)-1])) {
            return;
        }
//        dump($this->bookings[0]->slotvalue);
//        dump(count(json_decode($this->object->places)));

        foreach ($this->time_slots[date('N',$dateval)-1] as $time) {
            self::$radio_values[$date][$time['start']] = $time;
            self::$radio_values[$date][$time['start']]['countbookings'] = $this->get_bookings_for_time($date . ' ' . $time['start'],$date,$time['start']);
            self::$radio_values[$date][$time['start']]['places'] = $this->get_places_for_time($date,$time['start']);
            self::$radio_values[$date][$time['start']]['bookedout'] = self::$radio_values[$date][$time['start']]['countbookings'] >= count(json_decode($this->object->places));
            $this->set_available($date,$time['start']);
        }
    }


    public static function format_slot_date ($date) {
        $weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
        return $weekdays[date('N',strtotime($date))-1] .', '. date('d.m.Y - H:i',strtotime($date)).' Uhr';
    }


    public function get_bookings_for_time($datetime,$date,$time) {
        $datebookings = [];
        foreach ($this->bookings as $booking) {
            if (strpos($booking->slotvalue,$datetime) === 0) {
                $datebookings[] = $booking;
            }
        }
        self::$radio_values[$date][$time]['bookings'] = $datebookings;
        return count($datebookings);
    }

    public function get_places_for_time($date,$time) {
        return $this->places;
    }

    /**
     * Hier lässt sich noch Urlaub einklinken
     */

    private function set_available($date,$time) {
        $bookings = self::$radio_values[$date][$time]['bookings'];
        $places = self::$radio_values[$date][$time]['places'];
        $new_places = [];
        foreach ($places as $place_name=>$val) {
            $new_places[$place_name] = ['status'=>1,'name'=>$val];
            foreach ($bookings as $booking) {
                if ($booking->place == $place_name) {
                    $new_places[$place_name]['status'] = 0;
                }
            }
        
        }
        self::$radio_values[$date][$time]['places'] = $new_places;
        $available = [];
        foreach ($new_places as $place_name=>$val) {
            if ($val['status'] == 1) {
                $available[] = $place_name;
            }
        }
        self::$radio_values[$date][$time]['available'] = '"'.implode('","',$available).'"';
    }


    public function set_date_bookings() {        
        $query = rex_yform_manager_table::get(rex::getTable('buka_date_bookings'))->query();
        $query->whereRaw('status = :status AND object_id = :object_id',['status'=>'confirmed','object_id'=>$this->objectId]);
        $this->bookings = $query->find();
    }




    
}