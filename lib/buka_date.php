<?php
/**
 * The buka_date object is one day with all its properties.
 */


class buka_date {

    public $date;
    private static $test = false;
    private static $objects;

    function __construct ($y,$m,$d) {
        if (!self::$test) {
            self::$test = true;
        }
        $this->date = new DateTime();
        $this->date->setDate($y, $m, $d);
        $this->date->wd = $this->date->format('N');
        
        return $this->date;
    }

}
