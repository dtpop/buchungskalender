# REDAXO-AddOn: Buchungskalender

Backend- und Frontend-Buchungskalender für REDAXO CMS

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-streifenkalender.png)

Der Buchungskalender wurde entwickelt für die Entwicklung von Ferienobjekten (Ferienwohnungen, Ferienhäusern, Wohnmobilen usw.), die "über Nacht" vermietet werden. Daher wird bei diesem Buchungskalender das Startdatum und das Enddatum auch entsprechend gekennzeichnet, z.B. als Anreisetag und Abreisetag. Entsprechende Tools für die Anzeige im Backend werden vom AddOn mitgeliefert und können auch für das Frontend verwendet werden.

## Mehrere Objekte und Kombinationsangebote

Der Buchungskalender kann mehrere Objekte verwalten. Damit können auch mehrere Ferienwohnungen oder Objekte verwaltet werden. Zusätzlich ist der Buchungskalender mit einem speziellen Feature ausgestattet, das Kombinationsobjekte ermöglicht.

Das muss ich an einem Beispiel erklären.

Wir vermieten zwei Ferienwohnungen. Bevorzugt vermieten wir die Wohnungen aber zusammen, also im Doppelpack. Wenn nun eine Wohnung einzeln vermietet ist, dann ist eine Doppelvermietung nicht mehr möglich. Wenn die Wohnungen als Doppelpack vermietet sind, ist logischerweise eine Einzelvermietung nicht mehr möglich. Das ist ein sehr sehr spezielles, aber eben auch sehr praktisches Feature, welches man in anderen Buchungstools sehr lange und zumeist vergeblich sucht. Die Doppelpack (oder Kombinationsvermietung) hat natürlich auch eine eigene Preisgestaltung usw. - das muss ja sehr einfach möglich sein, sonst macht das keinen Sinn und keinen Spaß.

## Preisverwaltung

Apropos Preisgestaltung. Auch hier ist der Buchungskalender sehr gut ausgestattet. In der Grundausstattung kann er einen Fixpreis pro Objekt, also z.B. Reinigungskosten und einen Preis pro Nacht und Objekt - natürlich ganz individuell für jedes Objekt pflegbar. Aber noch viel toller: der Buchungskalender kann Saisonpreise. Man kann also für verschiedene Zeiträume verschiedene Preise vergeben.

Für die Preisverwaltung ist eine eigene Tabelle zuständig. Hier kann man für die unterschiedlichen Buchungszeiträume unterschiedliche Preise eintragen. Auch für unterschiedliche Mietzeiten lassen sich unterschiedliche Preise eintragen.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-preisverwaltung.png)

## Weitere Features

Die Idee des Buchungskalenders ist dabei, die Verwaltung von Ferienimmobilien vollkommen eigenständig zu übernehmen, also die Portale wie booking.com, airbnb, novasol und wie sie alle heißen und hohe Provisionen fordern, außen vor zu lassen. Das ist ein immenser Vorteil für den Gast. Nicht nur kostenmäßig, sondern auch vertragsmäßig ist es natürlich viel schlauer den Vertrag direkt mit dem Gast zu machen. - Aber das kann letzten Endes auch jeder selbst entscheiden. Der Buchungskalender kommt nämlich zusätzlich mit einer ical Schnittstelle, mit der Buchungsdaten z.B. von Airbnb übernommen werden können.

Man kann entscheiden, dass man die Buchungen komplett von Hand vornimmt, man kann aber auch den Gast selber buchen lassen. So machen wir das seit Jahren sehr erfolgreich. Damit hat man den Buchungskalender als stets aktuelle Buchungszentrale. Kein Papierkalender, einfach alles per Internet verwalten - schlicht und easy.

So. Jetzt aber ans eingemachte. Den Kalenderscreenshot seht ihr ja schon oben. Dort kann man im Backend direkt auf grüne zukünftige Felder klicken. - Achja, das habe ich noch vergessen. Für Buchungszeiträume lassen sich Mindestbuchungsdauern hinterlegen. Für uns hat es keinen Sinn gemacht nur für zwei Nächste zu vermieten. Daher vermieten wir nur ab drei Nächten. In der Saison nur wochenweise von Samstag bis Samstag. Auch das packt der Buchungskalender.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-2.png)

Hier wurde im Backend für die kleine Ferienwohnung der Termin vom 21. bis zum 28. August markiert. Nach einem Klick auf den Button "Weiter" wird die Buchungsmaske angezeigt.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-3.png)

Hier können alle relevanten Buchungsdaten eingegeben werden. Wenn dieses Formular abgeschickt wird, so wird die Buchung sogleich auf "gebucht" gestellt.

Alle Tabellen des Buchungskalenders basieren auf YForm Tabellen und können nach eigenen Bedürfnissen erweitert werden. Die vorhandenen Felder würde ich nicht ändern, dies könnte die Funktion negativ beeinflussen.

## Einstellungen

In den Einstellungen können einige Settings für den Kalender vorgenommen werden.

Die meisten Einstellungen sind selbsterklärend.

Interessant ist bei der Verwendung von ical Synchronisation die Cachedauer in Sekunden. Dies ist der Zeitraum, innerhalb dem keine neue Synchronisation stattfindet. Dadurch wird die Seite geringfügig schneller geladen. Eine sinnvolle Einstellung ist hier beispielsweise 600, was zehn Minuten entspricht. Während man eine neue booking.com Synchronisation einrichtet, kann man diese Zeit auch gut mal auf 1 runter setzen. Dann ist man auch sicher, dass immer ein Request zu booking.com ausgeführt wird.

Weiterhin interessant ist die Reservierungsdauer. Man kann das Feld einfach leer lassen, dann werden Reservierungen im Kalender nicht als belegt angezeigt. Wenn man dort "10 minutes" einträgt, bleibt eine Reservierung für 10 Minuten blockiert. Wenn sie in dieser Zeit nicht bestätigt wird, wird sie wieder als frei angezeigt.

## Objektverwaltung im Buchungskalender

Die Objektverwaltung ist recht schlicht gehalten. Für die Bearbeitung ist kein Informatikstudium notwendig.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-objektverwaltung.png)

Hier kann der Name des Objektes festgelegt werden und der Grundpreis. Außerdem kann man festlegen, ob es sich um ein Kombinationsangebot handelt - das wurde ja oben bereits ausführlich beschrieben. Als Ergänzung sei hier beschrieben, dass für Kombinationsobjekte durchaus eigene Buchungsdatensätze angelegt werden. Es werden also keine doppelten Buchungsdatensätze für die kleine und die große Wohnung angelegt. Daher ist zum Beispiel eine Umbuchung sehr einfach möglich. Es soll hier alles so intuitiv und einfach wie möglich sein.

In der Objektverwaltung kann auch die Farbe des Objektes für die Darstellung im Streifenkalender eingestellt werden.

## Saisonverwaltung

Damit die Administration auch schön einfach und komfortabel ist, werden die Saisonzeiten unabhängig von den Preisen verwaltet. Ich habe es so eingerichtet, dass der Basispreis der Saisonpreis ist und die Nebensaison mit Terminen verwaltet wird. Für Insider: das be-table Element wurde hier um eine Drag and Drop Funktion ergänzt. Damit kann man die Sortierung der Zeiten komfortabel anpassen. Auch die Erweitung um den Datepicker sind ein paar Zeilen Javascript, also keine Hexerei.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-saisondetail.png)

## Buchungsverwaltung

Für die Buchungsverwaltung gibt es zwei Ansichten. Den Streifenkalender in der Übersicht und den Buchungskalender

### Übersicht / Streifenkalender

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-streifenkalender.png)

In der Übersicht kann man die Belegung jedes einzelnen Objektes sehen. Ein Klick auf ein belegtes Datum öffnet die Buchung in der Detailansicht. Hier kann die Buchung auch direkt bearbeitet werden.

*Hinweis* Bei der Bearbeitung im Backend findet keine Plausibilitätsprüfung statt. Es wird also nicht geprüft, ob ein Termin bereits belegt ist oder nicht. Hierfür ist der Bearbeiter komplett selbst verantwortlich!

Durch Kombinationsobjekte lässt sich der Buchungskalender sehr schön erweitern. Die Streifenansicht zeigt die Kombinationsobjekte sehr schön an. "Ferien mit Freunden" ist ein Kombinationsobjekt aus kleiner Wohnung und großer Wohnung. Die nicht zur Verfügung stehenden Objekte werden zusätzlich durch einen grauen Streifen gekennzeichnet. So ist beispielsweise "Ferien mit Freunden" nicht mehr verfügbar, sobald eine einzelne Wohnung gebucht ist.

### Buchen / Kalenderansicht

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot.png)

In der Kalenderansicht kann ein Objekt ausgewählt werden. Es werden dann für dieses Objekt alle Termine angezeigt. Grüne Felder sind freie Termine, rote Felder sind belegt. Durch einen Klick auf ein grünes Feld kann ein Startdatum gewählt werden. Anschließend färbt sich der zu buchende Zeitraum blau und man kann ein Enddatum wählen. Über "Weiter" können dann die gewünschten Buchungsdaten eingegeben werden. Die Funktion ist quasi identisch wie die Buchung im Frontend. Es wird jedoch keine Mail verschickt und die Buchung wird direkt als "gebucht" eingetragen.

Durch "Shift+Klick" auf einen gebuchten Zeitraum kann man eine Buchung direkt zur Bearbeitung aufrufen.

*Hinweis* Bei der Bearbeitung im Backend findet keine Plausibilitätsprüfung statt. Es wird also nicht geprüft, ob ein Termin bereits belegt ist oder nicht. Hierfür ist der Bearbeiter komplett selbst verantwortlich!

## ical Funktionen

Der Buchungskalender kann ical. Und zwar rein und raus, Import und Export. Bislang ist das für airbnb(r) und booking.com(r) gut getestet, für andere Plattformen noch nicht. Man muss nur ein paar Einstellungen vornehmen, dann geht das quasi von selber. Zunächst muss beim jeweiligen Objekt die Url für die zu importierenden Ical Daten eingetragen werden. Außerdem muss in den Settings das Interval eingegeben werden, in dem die ical Daten gecached werden sollen. Das könnten beispielsweise 900 Sekunden sein. Dann schaut der Buchungskalender 900 Sekunden lang nicht nach, ob neue Buchungsdaten vorliegen. Wenn seit der letzten Aktualisierung mehr als 900 Sekunden (das ist eine Viertelstunde) vergangen ist, werden die Daten neu gelesen. Beim Einlesen der Daten wird in den vorhandenen Buchungsdaten geguckt, ob für diesen Zeitraum schon eine Buchung eingetragen ist. Wenn da schon eine bestätigte Buchung drin ist, wird natürlich nicht nochmal eine Buchung eingetragen. Wenn nicht, dann schon. Wenn jetzt der Ical Server mal eine Pause macht, dann ist das nicht schlimm. Für 24 Stunden werden dann einfach weiterhin die gecachten Daten verwendet. Der Export ist auch relativ trivial. Hierfür muss nur die Url `https://example.com/?action=get_ical_data&object_id=2` für die Ical Daten des Objektes mit der Id 2 aufgerufen werden. Es werden nur Ical Daten für Buchungen herausgegeben, die in der Zukunft liegen. In den ical Daten werden natürlich auch keinerlei persönliche Daten übertragen. Da steht nur das Buchungsdatum drin. Kombinationsangebote werden beim ical Export korrekt berücksichtigt.

Hier ein Hinweis für Anwender von booking.com. Booking.com ist etwas speziell bei der Handhabung von ical Synchronisation, die Einrichtung ist wenig intuitiv (Stand Anfang 2022) und der Support wenig hilfreich. Ich versuche mal die einzelnen Schritte zu beschreiben: zunächst muss man in booking.com eine neue ical Verbindung einrichten. Dann muss diese wieder gelöscht werden und dann muss man auf Einrichtung abschließen klicken. Es wird dann ein Exportlink angezeigt. Dieser Exportlink muss zwingend in den buchungskalender beim entsprechenden Objekt eingetragen werden. Denn booking.com prüft, ob auch ein Request vom gleichen Server ausgeführt wird, wie in der Quell-Url eingetragen. Wenn es beim erstenmal nicht hin haut, muss man den Vorgang eventuell einfach nochmal wiederholen. Wie gesagt, das ist alles andere als intuitiv und man kann hoffen, dass booking.com dieses Verfahren bald mal ändert.

## Demo

Dieses AddOn bringt eine komplette Demo mit. Diese Demo ist dazu gedacht, die Funktionen des AddOns zu zeigen. Man muss eine Ferienwohnungsseite nicht auf der Demo aufbauen. Man kann das AddOn auch verwenden ohne die Demo zu installieren. Da die Dokumentation aber auch nicht zu 100% perfekt ist, empfiehlt es sich durchaus mal in die Demo rein zu schauen. Die Demo kann aber auch als Grundlage für eine komplette Seite verwendet werden. Die Module in der Demo sind für TinyMCE 4 als Editor ausgelegt. Wenn ein anderer Editor verwendet wird, müssen nur die Klassen an der entsprechenden Stelle umbenannt werden. Wir gehen Schritt für Schritt vor.

Basis für die Demo ist eine Grundinstallation eines aktuellen REDAXO. Im Moment ist dies 5.12.0.

Dann müssen nur noch die AddOn yform und mform installiert werden.

Optional, aber empfehlenswert sind: yrewrite, theme, tinymce, tinymce4 und natürlich eure anderen Lieblingsaddons.

Dann wird das AddOn Buchungskalender installiert und aktiviert.

Anschließend kann die Demo aus dem Verzeichnis /src/redaxo/addons/buchungskalender/install/demo über das Backup AddOn installiert werden.

## Zusatzfunktionen

Es gibt ein paar Zusatzfunktionen, die ich für unsere eigene Ferienwohnungsverwaltung programmiert habe. Dazu gehört zum Beispiel, dass man angeben kann, ob in einem bestimmten Zeitraum nur wochenweise von Samstag bis Samstag gebucht werden kann.

Man kann außerdem angeben, wie viele Tage eine Buchung in der Zukunft liegen muss. Damit kann verhindert werden, dass Gäste vor der Türe stehen und sagen "wir haben doch gerade gebucht!". Wie erlauben eine Buchung über die Webseite ab drei Tagen in der Zukunft.

## E-Mail Templates

Momentan sind drei E-Mail Templates am Start.

booking_confirm - bekommt der Besucher als Bestätigung, wenn er eine Anfrage oder Buchung vorgenommen hat. Das Template ist für beide Arten der Reservierung programmiert.

booking_message - bekommt der Betreiber der Website, wenn eine Buchung oder Anfrage vorgenommen wurde

confirmation_info - bekommt der Betreiber, wenn der Besucher den Bestätigungslink aktiviert hat.

Diese Templates sind in der Programmierung fest verdrahtet, können also derzeit nicht frei gewählt werden. Die Inhalte können allerdings jederzeit angepasst werden, die mitgelieferten Templates dienen nur als Muster, wie alles in dieser Demo.

## Einstellungen

In den Einstellungen des AddOns können Konfigurationen für den E-Mail Versand und die Buchung vorgenommen werden.

## Module

Das AddOn bringt die wichtigsten Module mit, die für den Betrieb einer Website mit Buchungsmöglichkeit sinnvoll sind.

den Buchungskalender für das Frontend

einen Minikalender für die Anzeige der Belegung

einen Saisonkalender

das Buchungsformular

Auflistung der Preise

die Ausgabe der ical Daten für die Synchronisation
 
## Anpassungen

Eine Besonderheit ist im Buchungskalender AddOn eingebaut. Wenn die scss Datei im AddOn geändert wird, so wird bei aktivem Debug Mode eine neue css Datei erstellt und gleich ins Assets Verzeichnis kopiert. Das gleiche gilt für eine Anpassung der js Datei. Diese wird auch direkt im Assets Verzeichnis aktualisiert, wenn der Debug Mode eingeschaltet ist.


## Danke

Ein großer Dank geht an die Entwickler von REDAXO, dieses großartige System, welches die Grundlage bietet solche AddOns zu entwickeln.
Ein großer Dank geht an alle AddOn Entwickler, die zu diesem großartigen System beitragen.

## Lizenz

Das AddOn steht unter der MIT Lizenz und kann sowohl für private als auch für gewerbliche Zwecke frei verwendet werden.

(c) 2021 - Wolfgang Bund - wb@dtp-net.de - https://agile-websites.de