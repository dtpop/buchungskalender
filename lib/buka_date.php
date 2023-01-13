<?php
/**
 * The buka_date object is one day with all its properties.
 */


class buka_date {

    public $date;
    public $booking;
    private static $test = false;
    private static $objects;

    function __construct ($y,$m,$d) {
        if (!self::$test) {
            self::$test = true;
        }
        $this->date = new buka_datetime();
        $this->date->setDate($y, $m, $d);
        $this->date->wd = $this->date->format('N');

        return $this->date;
    }



    /**
     * get_date_period
     * 
     * Liefert ein Period Array aus Datestrings
     */
    public static function get_date_period ($start,$end) {
        $startDate = new DateTime($start);
        $endDate = new DateTime($end);
        return buka_cal::getDatePeriod($startDate,$endDate);
    }

}
