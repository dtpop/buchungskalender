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
    var $bookings;
    var $show_form = false;
    var $seasons = [];
    var $objects;



    function __construct($object_id = null, $date = null, $year = null, $month = null)
    {
        $this->baselink = rex_url::currentBackendPage();

        $this->weekdays = explode(',', rex_config::get('buchungskalender', 'weekdays_' . rex_clang::getCurrentId()));
        $this->months = explode(',', rex_config::get('buchungskalender', 'months_' . rex_clang::getCurrentId()));
        $this->seasons = buka_season::get_seasons();

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
        $query = buka_booking::get_query()
            ->where('status','confirmed')
            ->whereRaw('((dateend >= :start AND datestart <= :end) OR (dateend <= :start AND datestart >= :end) OR (datestart >= :start AND datestart <= :end))',['start'=>$start,'end'=>$end])
        ;
//        dump($query->getQuery());
        $this->bookings = $query->find();
    }

    public function set_month_count ($monthcount) {
        $this->monthcount = $monthcount;
    }


    public function set_show_form ($switch = true) {
        $this->show_form = $switch;
    }



    public function getMonth($year = 0, $month = 0) {
        if (!$year) {
            $year = date('Y');
        }
        if (!$month) {
            $month = date('m');
        }

        /*
        if (($year . '-' . str_pad($month, 2, '0', STR_PAD_LEFT)) > date('Y-m', time() + $this->maxBookingTime)) {
            return '';
        }
        */

        /*
        $abcprices = new abcprices();
        $abcprices->object_id = $this->objectId;
        $abcprices->getCalendar();
        */

        $dt = new DateTime();
        $dt->setDate($year, $month, 1);

        //        $bookings = $this->getBookingsForMonth($year, $month, $dt);
        //      out(array($bookings),1);

        $out = '<ul class="y-wrapper">';
        $out .= '<li class="bk_month_title">' . $this->months[$month - 1] . ' ' . $year . '</li>';
        foreach ($this->weekdays as $wd) {
            $out .= '<li class="bk-weekday">' . $wd . '</li>';
        }
        $out .= str_repeat('<li class="bk-dummy bk-day">&nbsp;</li>', ($dt->format('N') - 1));
        $day = 1;
        while ($day <= $dt->format('t')) {
            $date = $year . '-' . $dt->format('m') . '-' . str_pad($day, 2, '0', STR_PAD_LEFT);
            //            $priceclass = $abcprices->findPriceClass($date);
            $bookingData = $this->get_booking_data_for_date($date);
            $season = $this->get_season($date);
            // data-priceclass 1 = Hauptsaison, data-priceclass 2 = Nebensaison
            $out .= '<li class="bk-day bk-cal-day priceclass_ '.implode(' ',$bookingData['class']).'" data-date="' . $date . '" data-priceclass="'. $season->id .'" data-fullweek="'. $season->full_week .'" data-minbookingdays="'.$season->minddays.'" data-bookingid="'.$bookingData['booking_id'].'">' . $day . '</li>';
            $day++;
        }
        $out .= '</ul>';
        return $out;
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

    private function get_booking_data_for_date ($date) {
        $bd = [
            'class'=>[],
            'bookable'=>false,
            'booking_id'=>0
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
            } elseif ($b->dateend == $date) {
                $bd['class'][] = 'fix-booked-end';
                $end = true;
            }
        }
        if ($start && $end) {
            $bd['class'][] = 'fix-booked-change';
        } elseif (($start || $end) && $bookable) {
            $bd['class'][] = 'bookable';
        }
        if (!$bd['class']) {
            $bd['class'][] = 'free';
            if ($bookable) {
                $bd['class'][] = 'bookable';
                $bd['bookable'] = true;
            }
        }
        return $bd;
    }


    public function getCalendar() {
        $year = $this->year;
        $month = $this->month;

        $out = '';
        if ($this->navType == 'long') {
            $out .= $this->getNavigation();
        } elseif ($this->navType == 'short') {
            $out .= $this->getNavigation('short');
        }

        $out .= '<div class="buka-cal-wrapper">';
        if ($this->show_form) {
            $fragment = new rex_fragment();
            $out .= $fragment->parse('frag_buka_form.php');
        }

        $n = 1;
        while ($n <= $this->monthcount) {
            $out .= $this->getMonth($year, $month);
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
            $backlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . ($this->year - 1) . '&month=' . $this->month . '&objectid=' . $this->objectId . '">&lt;&lt; ' . $this->months[$this->month - 1] . ' ' . ($this->year - 1) . '</a>&nbsp;|&nbsp;';
        }
        $backlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . $prevYear . '&month=' . $prevMonth . '&objectid=' . $this->objectId . '">&lt; ' . $this->months[$prevMonth - 1] . ' ' . $prevYear . '</a>';

        if (rex::isFrontend() && ($this->year . '-' . str_pad($this->month, 2, '0', STR_PAD_LEFT)) <= date('Y-m')) {
            $backlink = '';
        }


        $nextlink = '';
        $nextlink .= '<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . $nextYear . '&month=' . $nextMonth . '&objectid=' . $this->objectId . '">' . $this->months[($nextMonth + $nextShift) % 12] . ' ' . ($this->year + $yearShift) . ' &gt;</a>';
        if ($navType == 'long') {
            $nextlink .= '&nbsp;|&nbsp;<a rel="nofollow" href="' . $this->baselink . $deli . 'year=' . ($this->year + 1) . '&month=' . $this->month . '&objectid=' . $this->objectId . '">' . $this->months[($this->month + 10) % 12] . ' ' . ($this->year + $yearShift2) . ' &gt;&gt;</a>';
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



}

