<?php

class buka_ical {

    /**
     * prüft, ob ein ical Datum schon gebucht ist. Wenn nicht, wird der Datensatz eingefügt
     */

    public static function CheckIcalSource($source, $objectid = 0) {
        $dates = self::ics_string_to_dates($source);

        array_shift($dates);
        foreach ($dates as $date) {
            $anreise = $date['DTSTART;VALUE=DATE'];
            $abreise = $date['DTEND;VALUE=DATE'];

            $oAnreise = new DateTime($anreise);
            $oAbreise = new DateTime($abreise);

            $strAnreise = $oAnreise->format('Y-m-d');
            $strAbreise = $oAbreise->format('Y-m-d');

            $booked = buka_booking::is_booked($strAnreise, $strAbreise, $objectid);

            // wenn die Periode noch frei ist, eintragen ....
            if (!$booked && $strAnreise && $strAbreise) {

                $name = explode(' ', $date['SUMMARY']);
                $nachricht = isset($date['DESCRIPTION']) ? str_replace('\n', "\n", $date['DESCRIPTION']) : 'ical-Buchung';

                $sql = rex_sql::factory()->setTable(rex::getTable('buka_bookings'));
                $values = [
                    'vorname' => $name[0],
                    'nachname' => $name[1],
                    'nachricht' => $nachricht,
                    'email' => $date['UID'] ?? '',
                    'object_id' => $objectid,
                    'datestart' => $strAnreise,
                    'dateend' => $strAbreise,
                    'bookingdate' => date('Y-m-d H:i:s'),
                    'status' => 'confirmed'
                ];
                $sql->setValues($values);
                $sql->insert();
            }
        }
    }

    
    public static function ics_string_to_dates ($icsText) {
        $icsDates = [];
//      $icsFile = file_get_contents($paramUrl);
//      print_r($icsFile);
        $icsText = preg_replace('/\r\n |\r |\n /', '', $icsText);

        $icsData = explode("BEGIN:", $icsText);

        foreach ($icsData as $key => $value) {
            $icsDatesMeta[$key] = explode("\n", $value);
        }

        foreach ($icsDatesMeta as $key => $value) {
            foreach ($value as $subKey => $subValue) {
                if ($subValue != "") {
                    if ($key != 0 && $subKey == 0) {
                        $icsDates[$key]["BEGIN"] = $subValue;
                    } else {
                        $subValueArr = explode(":", $subValue, 2);
                        $icsDates[$key][$subValueArr[0]] = $subValueArr[1];
                    }
                }
            }
        }

        return $icsDates;
        
    }


    public static function send_ical_data_for_obj ($object_id = 0) {
        $query = buka_booking::get_query($object_id);
        // nur Daten aus der Zukunft ausliefern
        $query->whereRaw('(datestart > :today OR dateend > :today)',['today'=>date('Y-m-d')]);
        $query->where('status','confirmed');

        $out = 'BEGIN:VCALENDAR
VERSION:2.0
PRODID;X-RICAL-TZSOURCE=TZINFO:-//Agile Websites//buchungskalender 0.5//EN
CALSCALE:GREGORIAN
';

        foreach ($query->find() as $i => $data) {
            // Terminstart
            $out .= 'BEGIN:VEVENT
DTSTART;VALUE=DATE:' . str_replace('-', '', $data->datestart) . PHP_EOL;
            $out .= 'DTEND;VALUE=DATE:' . str_replace('-', '', $data->dateend) . '
UID:'.rex_config::get('buchungskalender','ical_uid').'
SUMMARY:Booked date
END:VEVENT
';
        }

        $out .= 'END:VCALENDAR';

        return $out;

        
    }


    /**
     * Erneuert den Ical Cache alle 15 Minuten
     * Wenn ical Source nicht erreichbar ist, bleibt die Datei für 24 Stunden gültig
     * Danach wird false zurück gegeben.
     * 
     * @param type $src
     * @param type $file
     * @return boolean
     */
    public static function check_ical_data() {

        $objects = rex_yform_manager_table::get(rex::getTable('buka_objects'))->query()->where('ical_sync_link',"",'>')
        ->find();

        foreach ($objects as $object) {
            $ical_urls = preg_split('/\R/',$object->ical_sync_link);
            foreach ($ical_urls as $ical_url) {
                self::fetch_ical_data($object,$ical_url);
            }
        }       
        
    }

    public static function fetch_ical_data ($object,$ical_url) {
        $ical_url = trim($ical_url);
        $icalfile = rex_path::cache('buka/' . md5($object->name.$ical_url).'.ics');

        // Alter prüfen
        if (file_exists($icalfile)) {
            // Wenn Datei erst 15 Minuten alt, dann ok
            if (filemtime($icalfile) > time() - intval(rex_config::get('buchungskalender','ical_interval'))) {
                return true;
            }
        }

        $ch = curl_init($ical_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $content = curl_exec($ch);
        curl_close($ch);
        
        if (strlen($content) > 5) {
            rex_file::put($icalfile,$content);
            self::CheckIcalSource($content,$object->id);
            return true;
        }

        // Falls nicht erfolgreich, wird geprüft, ob das Alter älter als 1 Tag ist.
        if (file_exists($icalfile) && filemtime($icalfile) > time() - 86400) {
            return true;
        }
        
        return false;

    }

}
