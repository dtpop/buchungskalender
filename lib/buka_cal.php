<?php
class buka_cal
{

    var $months = array('Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember');
    var $weekdays = array('Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So');
    var $maxBookingTime = 365 * 1.25 * 24 * 60 * 60;
    var $baselink;
    var $objectId = 0;
    var $monthcount = 12;
    var $navType = 'long';
    var $bookings = [];
    var $show_form = false;
    var $seasons = [];
    var $objects;
    var $maxBookingYear; // nur für Frontend
    var $maxBookingMonth;  // nur für Frontend
    var $prices;  // nur für Frontend
    var $object;
    var $datestart = '';
    var $dateend = '';
    var $period = [];
    var $cal_wrapper_class = 'buka-cal-wrapper';
    var $season_calendar = false; // bei true wird nur der Saisonkalender zurückgegeben - keine Buchungsdaten.
    var $with_related = true;
    var $mobile_month_count = [];



    function __construct($object_id = null, $date = null, $year = null, $month = null)
    {
        $this->year = $year ?: date('Y');
        $this->month = $month ?: date('m');
        $this->datestart = rex_request('datestart','string');
        $this->dateend = rex_request('dateend','string');
        if (!$this->datestart && !$this->dateend) {
            $booking = rex_session('buka_booking','array');
            if (isset($booking['datestart']) && isset($booking['dateend'])) {
                $this->datestart = $booking['datestart'];
                $this->dateend = $booking['dateend'];
            }
        }
//        dump($booking);


        $this->set_date_period();

//        dump($this->period);


        $this->baselink = rex_url::currentBackendPage();
        if (rex::isFrontend()) {
            $this->baselink = rex_getUrl();
        }

        $this->weekdays = explode(',', rex_config::get('buchungskalender', 'weekdays_' . rex_clang::getCurrentId()));
        $this->months = explode(',', rex_config::get('buchungskalender', 'months_' . rex_clang::getCurrentId()));
        $this->seasons = buka_season::get_seasons();
        if ($object_id) {
            $this->objectId = $object_id;
        } elseif (rex_request('object_id','int')) {
            $this->objectId = rex_request('object_id','int');
        }
        $this->object = buka_objects::get_object_for_id($this->objectId);

        $this->prices = self::get_prices($this->objectId);

        if (rex_config::get('buchungskalender','max_booking_time')) {
            $this->maxBookingTime = 1;
            foreach (explode('*', rex_config::get('buchungskalender','max_booking_time')) as $v) {
                $this->maxBookingTime = $this->maxBookingTime * trim($v);
            }
        }
    }




    public function set_start_date () {
        $this->month = rex_request('month', 'int', date('m'));
        $this->year = rex_request('year', 'int', date('Y'));
        // Im Frontend Blick zurück verhindern
        if (rex::isFrontend()) {
            if (($this->year . '-' . str_pad($this->month, 2, '0', STR_PAD_LEFT)) < date('Y-m')) {
                $this->month = date('m');
                $this->year = date('Y');
            }
        }
    }


    public function set_bookings() {
        $dt1 = new DateTime();
        $dt1->setDate($this->year, $this->month, 1);

        $dt2 = new DateTime();
        $dt2->setDate($this->year, $this->month, 1);
        $dt2->modify('+ '.($this->monthcount - 1).' months');

        $start = $dt1->format('Y-m-d');
        $end = $dt2->format('Y-m-t');
        $query = buka_booking::get_query($this->objectId, $this->with_related)
            ->whereRaw('((
                status = "confirmed" AND ((dateend >= :start AND datestart <= :end)
                 OR (dateend <= :start AND datestart >= :end)
                 OR (datestart >= :start AND datestart <= :end))
                 
            ) OR (status = "asked" AND bookingdate > :bookingdate))',['start'=>$start,'end'=>$end,'bookingdate'=>date('Y-m-d H:i:s',strtotime('-10minutes'))])
        ;
        $this->bookings = $query->find();
    }

    public function set_month_count ($monthcount) {
        $this->monthcount = $monthcount;
    }


    public function set_show_form ($switch = true) {
        $this->show_form = $switch;
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
            $day++;
        }
        $out .= '</ul>';
        return $out;
    }


    public static function get_prices ($objectId = 0, $order = 'DESC') {
        $query = rex_yform_manager_table::get(rex::getTable('buka_price'))->query()        
        ->orderBy('nightscount',$order);
        if ($objectId) {
            $query->where('object_id', $objectId);
        }
        return $query->find();
    }

    private function get_season($date) {
        foreach ($this->seasons as $season) {
            foreach ($season->season_dates as $sd) {
                if ($date >= $sd['from'] && $date <= $sd['to']) {
                    return $season;
                }
            }
        }
        return $season;
    }

    public function get_booking_data_for_date ($date) {
        $season = $this->get_season($date);        
        $bd = [
            'class'=>[],
            'bookable'=>false,
            'booking_id'=>0,
            'season'=>$season->id,
            'is_start'=>false,
            'is_end'=>false,
            'date'=>$date
        ];
        $start = false;
        $end = false;
        $bookable = true;
        if (rex_config::get('buchungskalender','min_booking_days_futur')) {
            if (date('Y-m-d',strtotime('+ '.rex_config::get('buchungskalender','min_booking_days_futur').' days')) > $date) {
                $bookable = false;
            }
        }
        foreach ($this->bookings as $b) {
            if ($b->datestart < $date && $b->dateend > $date) {
                $bd['class'][] = 'fix-booked';
                $bd['booking_id'] = $b->id;
            } elseif ($b->datestart == $date) {
                $bd['class'][] = 'fix-booked-start';
                $start = true;
                $bd['is_start'] = true;
            } elseif ($b->dateend == $date) {
                $bd['class'][] = 'fix-booked-end';
                $end = true;
                $bd['is_end'] = true;
            }
        }
        if ($start && $end) {
            $bd['class'][] = 'fix-booked-change';
        } elseif (($start || $end) && $bookable) {
            $bd['class'][] = 'bookable';
            $bd['bookable'] = true;
        }
        if (!$bd['class']) {
            $bd['class'][] = 'free';
            if ($bookable) {
                $bd['class'][] = 'bookable';
                $bd['bookable'] = true;
            }
        }
        if ($bookable) {
            if (in_array($date,$this->period)) {
                $bd['class'][] = 'add-reserve';
            }
            if ($this->datestart == $date) {
                $bd['class'][] = 'reserve-start';
            }
            if ($this->dateend == $date) {
                $bd['class'][] = 'reserve-end';
            }
        }
        if ($this->season_calendar) {
            $bd['class'] = ['season_'.$season->id];
        }



        return $bd;
    }


    public function getCalendar() {
        $year = $this->year;
        $month = $this->month;

        $out = '';


        if ($this->season_calendar) {
            $out .= '<style>';
            foreach ($this->seasons as $season) {
                $out .= '.season_'.$season->id.' { background-color: '.$season->color.' }';
            }
            $out .= '</style>';
        }

        if ($this->navType == 'long') {
            $out .= $this->getNavigation();
        } elseif ($this->navType == 'short') {
            $out .= $this->getNavigation('short');
        }

        $out .= '<div class="'.$this->cal_wrapper_class.'">';
        if ($this->show_form) {
            $fragment = new rex_fragment();
            $out .= $fragment->parse('frag_buka_form.php');
        }

        $n = 1;
        while ($n <= $this->monthcount) {
            $out .= $this->getMonth($year, $month, $n);
            $month ++;
            if ($month > 12) {
                $month = 1;
                $year ++;
            }
            $n++;
        }
        $out .= '</div>';

        return $out;
    }


    public function get_season_legend () {
        $out = '';
        $out .= '<div class="season-legend" uk-grid>';
        foreach ($this->seasons as $season) {
            $out .= '<div><span class="season_'.$season->id.'">&nbsp;12&nbsp;</span> '.$season->name.'</div>';
        }
        $out .= '</div>';
        return $out;


    }


    private function getNavigation($navType = 'long') {

        $nextShift = ($navType == 'long') ? 10 : 1;

        if ($navType == 'short' && (int) $this->month < 10) {
            $yearShift = 0;
        } else {
            $yearShift = 1;
        }

        $yearShift2 = ((int) $this->month == 1) ? 1 : 2;


        $deli = (strpos($this->baselink, '?')) ? '&' : '?';

        if ($this->month == 1) {
            $prevMonth = 12;
            $prevYear = $this->year - 1;
        } else {
            $prevMonth = $this->month - 1;
            $prevYear = $this->year;
        }
        if ($this->month == 12) {
            $nextMonth = 1;
            $nextYear = $this->year + 1;
        } else {
            $nextMonth = $this->month + 1;
            $nextYear = $this->year;
        }


        $backlink = '';
        if ($navType == 'long') {
            $backlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . ($this->year - 1) . '&month=' . $this->month . '&object_id=' . $this->objectId . '">&lt;&lt; ' . $this->months[$this->month - 1] . ' ' . ($this->year - 1) . '</a>&nbsp;|&nbsp;';
        }
        $backlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . $prevYear . '&month=' . $prevMonth . '&object_id=' . $this->objectId . '">&lt; ' . $this->months[$prevMonth - 1] . ' ' . $prevYear . '</a>';

        if (rex::isFrontend() && ($this->year . '-' . str_pad($this->month, 2, '0', STR_PAD_LEFT)) <= date('Y-m')) {
            $backlink = '';
        }


        $nextlink = '';
        $nextlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . $nextYear . '&month=' . $nextMonth . '&object_id=' . $this->objectId . '">' . $this->months[($nextMonth + $nextShift) % 12] . ' ' . ($this->year + $yearShift) . ' &gt;</a>';
        if ($navType == 'long') {
            $nextlink .= '&nbsp;|&nbsp;<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . ($this->year + 1) . '&month=' . $this->month . '&object_id=' . $this->objectId . '">' . $this->months[($this->month + 10) % 12] . ' ' . ($this->year + $yearShift2) . ' &gt;&gt;</a>';
        }

        if (rex::isFrontend() && ($this->year . '-' . str_pad($this->month, 2, '0', STR_PAD_LEFT)) >= ($this->maxBookingYear . '-' . $this->maxBookingMonth)) {
            $nextlink = '';
        }


        $out = '<nav class="buka_pager_nav">';

        $out .= '<div class="fl-left">';
        $out .= $backlink;
        $out .= '</div>';

        $out .= '<div class="fl-right">';
        $out .= $nextlink;
        $out .= '</div>';

        $out .= '</nav>';
        return $out;
    }


   /**
    * 
    * @return array
    */
    public function get_booking_price () {


        $bookingVars = rex_session('buka_booking');
        
        $dateFrom = new DateTime($bookingVars['datestart']);
        $dateTo = new DateTime($bookingVars['dateend']);
        
        $period = $this->getDatePeriod($dateFrom, $dateTo);
        
        $price = $this->getPriceForDays($period,$bookingVars['object_id']);
        
        return array('price'=>$price, 'period'=>$period);
     }


     private function set_date_period () {
        if (strlen($this->datestart) == 10 && strlen($this->dateend) == 10) {
            $dateFrom = new DateTime($this->datestart);
            $dateTo = new DateTime($this->dateend);
            $dateTo->add(new DateInterval('P1D'));
            $this->period = self::getDatePeriod($dateFrom,$dateTo);
        }
     }
     
     /**
      * summiert die einzelnen Tagespreise für das Objekt
      *  für jeden Tag wird die passende Saison ermittelt.
      */
     private function getPriceForDays ($period) {

        $pricesum = $this->object->grundpreis;
        $numDays = count($period);
        foreach ($period as $datestr) {
            $season = $this->get_season($datestr);
            $dayprice = 0;
            foreach ($this->prices as $price) {
                if ($price->season_id == $season->id) {
                    $dayprice = $price->price;
                }
                if ($price->season_id == $season->id && $numDays >= $price->nightscount) {
                    break;
                }
            }
            $pricesum += $dayprice;
        }
        return $pricesum;

     }
     
     public static function getDatePeriod ($dateFrom, $dateTo) {
        $out = array();
        $period = new DatePeriod(
           $dateFrom,
           new DateInterval('P1D'),
           $dateTo
        );
        $period = iterator_to_array($period);
        foreach ($period as $oDate) {
           $out[] = $oDate->format('Y-m-d');
        }
        return $out;      
     }    


     public static function get_mini_calendar ($object_id, $months = 6) {
        $object = buka_objects::get_object_for_id($object_id);

        $start_year = min([buka_booking::get_min_year(), date('Y') - 2]);
        $end_year = max([buka_booking::get_max_year(), date('Y') + 2]);
        // dump($start_year);
        // dump($end_year);
        
        $cal = new buka_cal();
        $cal->maxBookingYear = date('Y', buka_booking::get_end_time());
        $cal->maxBookingMonth = date('m', buka_booking::get_end_time());
        $cal->objectId = $object_id;
        
        $cal->set_start_date();
        $cal->set_bookings();
        $cal->cal_wrapper_class = 'minikalender';
        $cal->monthcount = $months;
        return $cal->getCalendar();

        
     }

     public static function reformat_date ($date_string) {
         return date('d.m.Y',strtotime($date_string));
     }




}

