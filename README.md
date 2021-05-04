# REDAXO-AddOn: Buchungskalender

Backend- und Frontend-Buchungskalender für REDAXO CMS

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot.png)

Der Buchungskalender wurde entwickelt für die Entwicklung von Ferienobjekten (Ferienwohnungen, Ferienhäusern, Wohnmobilen usw.), die "über Nacht" vermietet werden. Daher wird bei diesem Buchungskalender das Startdatum und das Enddatum auch entsprechend gekennzeichnet, z.B. als Anreisetag und Abreisetag. Entsprechende Tools für die Anzeige im Backend werden vom AddOn mitgeliefert und können auch für das Frontend verwendet werden.

Der Buchungskalender kann mehrere Objekte verwalten. Damit können auch mehrere Ferienwohnungen oder Objekte verwaltet werden. Zusätzlich ist der Buchungskalender mit einem speziellen Feature ausgestattet, das Kombinationsobjekte ermöglicht.

Das muss ich an einem Beispiel erklären.

Wir vermieten zwei Ferienwohnungen. Bevorzugt vermieten wir die Wohnungen aber zusammen, also im Doppelpack. Wenn nun eine Wohnung einzeln vermietet ist, dann ist eine Doppelvermietung nicht mehr möglich. Wenn die Wohnungen als Doppelpack vermietet sind, ist logischerweise eine Einzelvermietung nicht mehr möglich. Das ist ein sehr sehr spezielles, aber eben auch sehr praktisches Feature, welches man in anderen Buchungstools sehr lange und zumeist vergeblich sucht. Die Doppelpack (oder Kombinationsvermietung) hat natürlich auch eine eigene Preisgestaltung usw. - das muss ja sehr einfach möglich sein, sonst macht das keinen Sinn und keinen Spaß.

Apropos Preisgestaltung. Auch hier ist der Buchungskalender sehr gut ausgestattet. In der Grundausstattung kann er einen Fixpreis pro Objekt, also z.B. Reinigungskosten und einen Preis pro Nacht und Objekt - natürlich ganz individuell für jedes Objekt pflegbar. Aber noch viel toller: der Buchungskalender kann Saisonpreise. Man kann also für verschiedene Zeiträume verschiedene Preise vergeben.

Die Idee des Buchungskalenders ist dabei, die Verwaltung von Ferienimmobilien vollkommen eigenständig zu übernehmen, also die Portale wie booking.com, airbnb, novasol und wie sie alle heißen und hohe Provisionen fordern, außen vor zu lassen. Das ist ein immenser Vorteil für den Gast. Nicht nur kostenmäßig, sondern auch vertragsmäßig ist es natürlich viel schlauer den Vertrag direkt mit dem Gast zu machen. - Aber das kann letzten Endes auch jeder selbst entscheiden. Der Buchungskalender kommt nämlich zusätzlich mit einer ical Schnittstelle, mit der Buchungsdaten z.B. von Airbnb übernommen werden können.

Man kann entscheiden, dass man die Buchungen komplett von Hand vornimmt, man kann aber auch den Gast selber buchen lassen. So machen wir das seit Jahren sehr erfolgreich. Damit hat man den Buchungskalender als stets aktuelle Buchungszentrale. Kein Papierkalender, einfach alles per Internet verwalten - schlicht und easy.

So. Jetzt aber ans eingemachte. Den Kalenderscreenshot seht ihr ja schon oben. Dort kann man im Backend direkt auf grüne zukünftige Felder klicken. - Achja, das habe ich noch vergessen. Für Buchungszeiträume lassen sich Mindestbuchungsdauern hinterlegen. Für uns hat es keinen Sinn gemacht nur für zwei Nächste zu vermieten. Daher vermieten wir nur ab drei Nächten. In der Saison nur wochenweise von Samstag bis Samstag. Auch das packt der Buchungskalender.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-2.png)

Hier wurde im Backend für die kleine Ferienwohnung der Termin vom 21. bis zum 28. August markiert. Nach einem Klick auf den Button "Weiter" wird die Buchungsmaske angezeigt.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-screenshot-3.png)

Hier können alle relevanten Buchungsdaten eingegeben werden. Wenn dieses Formular abgeschickt wird, so wird die Buchung sogleich auf "gebucht" gestellt.

Alle Tabellen des Buchungskalenders basieren auf YForm Tabellen und können nach eigenen Bedürfnissen erweitert werden. Die vorhandenen Felder würde ich nicht ändern, dies könnte die Funktion negativ beeinflussen.


## Objektverwaltung im Buchungskalender

Die Objektverwaltung ist recht schlicht gehalten. Für die Bearbeitung ist kein Informatikstudium notwendig.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-objektverwaltung.png)

Hier kann der Name des Objektes festgelegt werden und der Grundpreis. Außerdem kann man festlegen, ob es sich um ein Kombinationsangebot handelt - das wurde ja oben bereits ausführlich beschrieben. Als Ergänzung sei hier beschrieben, dass für Kombinationsobjekte durchaus eigene Buchungsdatensätze angelegt werden. Es werden also keine doppelten Buchungsdatensätze für die kleine und die große Wohnung angelegt. Daher ist zum Beispiel eine Umbuchung sehr einfach möglich. Es soll hier alles so intuitiv und einfach wie möglich sein.

## Saisonverwaltung

Damit die Administration auch schön einfach und komfortabel ist, werden die Saisonzeiten unabhängig von den Preisen verwaltet. Ich habe es so eingerichtet, dass der Basispreis der Saisonpreis ist und die Nebensaison mit Terminen verwaltet wird. Für Insider: das be-table Element wurde hier um eine Drag and Drop Funktion ergänzt. Damit kann man die Sortierung der Zeiten komfortabel anpassen. Auch die Erweitung um den Datepicker sind ein paar Zeilen Javascript, also keine Hexerei.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-saisondetail.png)

## Preisverwaltung

Für die Preisverwaltung ist eine eigene Tabelle zuständig. Hier kann man für die unterschiedlichen Buchungszeiträume unterschiedliche Preise eintragen. Auch für unterschiedliche Mietzeiten lassen sich unterschiedliche Preise eintragen.

![Screenshot](https://raw.githubusercontent.com/dtpop/buchungskalender/main/assets/img/buchungskalender-preisverwaltung.png)

## ical Funktionen

Der Buchungskalender kann ical. Und zwar rein und raus, Import und Export. Bislang ist das für airbnb(r) gut getestet, für andere Plattformen noch nicht. Man muss nur ein paar Einstellungen vornehmen, dann geht das quasi von selber. Zunächst muss beim jeweiligen Objekt die Url für die zu importierenden Ical Daten eingetragen werden. Außerdem muss in den Settings das Interval eingegeben werden, in dem die ical Daten gecached werden sollen. Das könnten beispielsweise 900 Sekunden sein. Dann schaut der Buchungskalender 900 Sekunden lang nicht nach, ob neue Buchungsdaten vorliegen. Wenn seit der letzten Aktualisierung mehr als 900 Sekunden (das ist eine Viertelstunde) vergangen ist, werden die Daten neu gelesen. Beim Einlesen der Daten wird in den vorhandenen Buchungsdaten geguckt, ob für diesen Zeitraum schon eine Buchung eingetragen ist. Wenn da schon eine bestätigte Buchung drin ist, wird natürlich nicht nochmal eine Buchung eingetragen. Wenn nicht, dann schon. Wenn jetzt der Ical Server mal eine Pause macht, dann ist das nicht schlimm. Für 24 Stunden werden dann einfach weiterhin die gecachten Daten verwendet. Der Export ist auch relativ trivial. Hierfür muss nur die Url `https://example.com/?action=get_ical_data&object_id=2` für die Ical Daten des Objektes mit der Id 2 aufgerufen werden. Es werden nur Ical Daten für Buchungen herausgegeben, die in der Zukunft liegen. In den ical Daten werden natürlich auch keinerlei persönliche Daten übertragen. Da steht nur das Buchungsdatum drin.