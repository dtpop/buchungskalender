<?php
class buka_barcal {
    private $start_year;
    private $start_month;
    private $num_of_months = 12;
    private $current_month;
    private $current_year;
    private $months = [];

    static $weekdays = [];
    static $start_date;
    static $end_date;
    static $objects;


    function __construct($start_date = false) {
        if ($start_date) {
            $this->set_start_date($start_date);
        }
        $this->set_weekdays();
        return $this;
    }

    public function set_num_of_months ($num) {
        $this->num_of_months = $num;
    }

    public function set_start_date ($start_date = false) {
        if (!$start_date) {
            $start_date = date('Y-m-d');
        }
        $this->months = [];
        self::$start_date = $start_date;
        $this->init_start_end_date();
        $this->init_calendar();
        return $this;
    }

    public function get_calendar () {        
        return $this;
    }

    public function get_months () {
        if (!$this->months) {
            $this->set_start_date();
        }
//        dump($this->months);
        return $this->months;
    }

    public function init_calendar () {
        $n = 0;
        $this->current_year = $this->start_year;
        $this->current_month = $this->start_month;

        $objects = buka_objects::get_query()->find();
        foreach ($objects as $object) {
            $qry = buka_booking::get_query($object->id,true);
            if (rex_config::get('buchungskalender','asked_offset')) {
                $qry->whereRaw('((
                    status = "confirmed" AND ((dateend >= :start AND datestart <= :end)
                     OR (dateend <= :start AND datestart >= :end)
                     OR (datestart >= :start AND datestart <= :end))
                 
                    ) OR (status = "asked" AND bookingdate > :bookingdate))',['start'=>self::$start_date,'end'=>self::$end_date,'bookingdate'=>date('Y-m-d H:i:s',strtotime('-'.rex_config::get('buchungskalender','asked_offset')))])
                ;
            } else {
                $qry->whereRaw('((
                    status = "confirmed" AND ((dateend >= :start AND datestart <= :end)
                     OR (dateend <= :start AND datestart >= :end)
                     OR (datestart >= :start AND datestart <= :end))
                 
                    ))',['start'=>self::$start_date,'end'=>self::$end_date])
                ;

            }
            $object->bookings = $qry->find();
        }

        self::$objects = $objects;
//        dump(self::$objects);

        while ($n < $this->num_of_months) {
            $this->months[] = $this->get_month($this->current_month,$this->current_year);
            $this->current_month ++;

            if ($this->current_month > 12) {
                $this->current_month = 1;
                $this->current_year ++;
            }

            $n++;
        }

    }

    private function set_weekdays () {

        self::$weekdays = [
            rex_formatter::intlDate(strtotime('2021-12-13'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-14'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-15'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-16'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-17'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-18'),'ccc'),
            rex_formatter::intlDate(strtotime('2021-12-19'),'ccc'),
        ];
    }

    private function get_month ($month,$year) {
        $dt = new DateTime();
        $out = [];
        $dt->setDate($year, $month, 1);
        $day = 1;
        while ($day <= $dt->format('t')) {
            $date = new buka_date($year,$month,$day);
            $date->booking = $this->get_bookings_for_date($date->date->format('Y-m-d'));    
            $out[] = $date;
            $day++;
        }
        return $out;
    }

    private function get_bookings_for_date($date) {
        $bookings = [];
        foreach (self::$objects as $object) {
            foreach ($object->bookings as $booking) {                
                if (($date >= $booking->datestart) && ($date <= $booking->dateend)) {                    
                    $booking->is_start = $date == $booking->datestart;
                    $booking->is_end = $date == $booking->dateend;
                    if (!isset($bookings[$object->id])) {
                        $bookings[$object->id] = [];    
                    }
                    $bookings[$object->id][] = clone $booking;
                }
            }
        }
        return $bookings;
    }

    private function init_start_end_date () {
        $this->start_year = date('Y',strtotime(self::$start_date));
        $this->start_month = date('m',strtotime(self::$start_date));

        
        $dt2 = new DateTime();
        $dt2->setDate($this->start_year, $this->start_month, 1);
        $dt2->modify('+ '.($this->num_of_months - 1).' months');

        self::$end_date = $dt2->format('Y-m-t');

    }
}