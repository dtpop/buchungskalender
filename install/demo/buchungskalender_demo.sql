## Redaxo Database Dump Version 5
## Prefix rex_
## charset utf8mb4

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `rex_action`;
CREATE TABLE `rex_action` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preview` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `presave` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postsave` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `previewmode` tinyint(4) DEFAULT NULL,
  `presavemode` tinyint(4) DEFAULT NULL,
  `postsavemode` tinyint(4) DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_article`;
CREATE TABLE `rex_article` (
  `pid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id` int(10) unsigned NOT NULL,
  `parent_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catpriority` int(10) unsigned NOT NULL,
  `startarticle` tinyint(1) NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `template_id` int(10) unsigned NOT NULL,
  `clang_id` int(10) unsigned NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  `yrewrite_url_type` enum('AUTO','CUSTOM','REDIRECTION_INTERNAL','REDIRECTION_EXTERNAL') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'AUTO',
  `yrewrite_url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_redirection` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_changefreq` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_priority` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yrewrite_index` tinyint(1) NOT NULL,
  `yrewrite_canonical_url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `art_online_from` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `art_online_to` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `art_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `art_teaser_img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `art_teaser_text` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cat_menutype` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '1',
  PRIMARY KEY (`pid`),
  UNIQUE KEY `find_articles` (`id`,`clang_id`),
  KEY `id` (`id`),
  KEY `clang_id` (`clang_id`),
  KEY `parent_id` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_article` WRITE;
/*!40000 ALTER TABLE `rex_article` DISABLE KEYS */;
INSERT INTO `rex_article` VALUES 
  (3,3,0,'404 - Seite nicht gefunden','404 - Seite nicht gefunden',0,0,1,'|',1,'2021-05-05 13:47:54','wolfgang','2021-06-03 08:11:46','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (4,4,0,'Buchung Zusammenfassung','Buchung Zusammenfassung',0,0,2,'|',1,'2021-05-16 21:05:58','wolfgang','2021-06-03 08:12:04','wolfgang',1,1,0,'AUTO','','','','','weekly','',-1,'',NULL,NULL,NULL,'',NULL,'1'),
  (5,5,0,'Home','Home',1,1,1,'|',1,'2021-05-23 14:11:44','wolfgang','2021-06-03 06:56:58','wolfgang',1,1,0,'AUTO','','','','Zwei Ferienwohnungen am Tressower See in Mecklenburg.','weekly','',0,'','','','Zwei Ferienwohnungen am Tressower See in Mecklenburg. Abseits des Massentourismus Urlaub machen.','','','1'),
  (6,6,0,'Ferienwohnungen','Ferienwohnung Alpenblick',2,1,1,'|',1,'2021-05-23 14:11:45','wolfgang','2021-06-02 15:19:36','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (8,8,0,'Umgebung','Umgebung',3,1,1,'|',1,'2021-05-23 14:11:47','wolfgang','2021-06-02 20:58:26','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (18,18,0,'Buchen','Buchen',4,1,1,'|',1,'2021-05-24 17:20:41','wolfgang','2021-06-02 11:04:46','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (26,26,18,'Preise','Preise',1,1,1,'|18|',1,'2021-05-26 20:39:05','wolfgang','2021-06-02 11:09:46','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (41,41,0,'E-Mail Linkbestätigung','E-Mail Linkbestätigung',0,0,3,'|',1,'2021-05-30 21:43:46','wolfgang','2021-06-03 08:12:28','wolfgang',1,1,0,'AUTO','','','','','weekly','',-1,'',NULL,NULL,NULL,'',NULL,'1'),
  (42,42,5,'Anreise','Anreise',1,1,1,'|5|',1,'2021-05-31 12:17:31','wolfgang','2021-06-02 10:27:50','wolfgang',1,1,0,'AUTO','','','','','','',0,'','','','','karte.gif','','1'),
  (46,46,6,'Ferienwohnung buchen','Ferienwohnung Alpenblick',0,0,2,'|6|',1,'2021-06-02 10:40:16','wolfgang','2021-06-02 10:49:27','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (47,47,6,'ical Kalenderausgabe','Ferienwohnung Alpenblick',0,0,3,'|6|',1,'2021-06-02 12:35:54','wolfgang','2021-06-02 12:36:06','wolfgang',5,1,0,'CUSTOM','ferienwohnung-alpenblick/ical','','','','weekly','',-1,'',NULL,NULL,NULL,'',NULL,'1'),
  (48,48,0,'Impressum','',0,0,4,'|',1,'2021-06-03 08:12:52','wolfgang','2021-06-03 08:12:55','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1'),
  (49,49,0,'Datenschutz','',0,0,5,'|',1,'2021-06-03 08:13:02','wolfgang','2021-06-03 08:13:05','wolfgang',1,1,0,'AUTO','','','','','','',0,'',NULL,NULL,NULL,'',NULL,'1');
/*!40000 ALTER TABLE `rex_article` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_article_slice`;
CREATE TABLE `rex_article_slice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `clang_id` int(10) unsigned NOT NULL,
  `ctype_id` int(10) unsigned NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  `value1` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value2` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value3` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value4` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value5` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value6` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value7` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value8` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value9` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value10` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value11` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value12` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value13` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value14` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value15` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value16` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value17` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value18` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value19` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value20` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media5` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media6` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media7` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media8` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media9` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media10` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist4` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist5` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist6` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist7` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist8` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist9` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medialist10` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link1` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link2` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link3` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link4` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link5` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link6` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link7` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link8` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link9` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link10` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist4` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist5` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist6` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist7` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist8` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist9` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linklist10` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `article_id` int(10) unsigned NOT NULL,
  `module_id` int(10) unsigned NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revision` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `slice_priority` (`article_id`,`priority`,`module_id`),
  KEY `clang_id` (`clang_id`),
  KEY `article_id` (`article_id`),
  KEY `find_slices` (`clang_id`,`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_article_slice` WRITE;
/*!40000 ALTER TABLE `rex_article_slice` DISABLE KEYS */;
INSERT INTO `rex_article_slice` VALUES 
  (2,1,1,1,'{\"headline\":\"Vielen Dank!\",\"maintext\":\"<p>Ihre Buchungsanfrage wurde erfolgreich \\u00fcbertragen. Bitte achten Sie auf Ihren Posteingang. Sie bekommen in K\\u00fcrze eine Best\\u00e4tigung.<\\/p>\\r\\n<p>Falls Sie Fragen haben, melden Sie sich gerne.<\\/p>\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,2,'2021-05-16 21:06:11','wolfgang','2021-05-30 20:37:15','wolfgang',0,1),
  (3,1,1,1,'{\"headline\":\"Die Ferienwohnung\",\"maintext\":\"<p>Hier beschreiben Sie die Ferienwohnung. Wieviel Schlafpl\\u00e4tze gibt es, wie ist die Ausstattung der K\\u00fcche usw.<\\/p>\\r\\n<p>Ein einfaches Modul, mit dem Sie Text und Bilder in die Website einf\\u00fcgen k\\u00f6nnen, ist in dieser Demo enthalten.<\\/p>\\r\\n<p>Falls Sie zus\\u00e4tzliche Inhaltselemente verwenden wollen, wenden Sie sich an einen Web-Entwickler. Sie finden REDAXO-Entwickler auf der Website <a href=\\\"https:\\/\\/friendsofredaxo.github.io\\/community\\/\\\">https:\\/\\/friendsofredaxo.github.io\\/community\\/<\\/a> oder unter <a href=\\\"https:\\/\\/redaxo.org\\/support\\/agenturen\\/\\\">https:\\/\\/redaxo.org\\/support\\/agenturen\\/<\\/a> . Diese Demo und das Buchungskalender AddOn wurden von Wolfgang Bund erstellt. <a href=\\\"https:\\/\\/agile-websites.de\\\">https:\\/\\/agile-websites.de<\\/a><\\/p>\\r\\n<p>Wenn Sie Fragen zu REDAXO haben, bekommen Sie direkt im Slack REDAXO Slack Channel Hilfe. <a href=\\\"https:\\/\\/friendsofredaxo.slack.com\\/\\\">https:\\/\\/friendsofredaxo.slack.com\\/<\\/a> - Eine Einladung in den Channel k\\u00f6nnen Sie sich hier holen <a href=\\\"https:\\/\\/redaxo.org\\/slack\\/\\\">https:\\/\\/redaxo.org\\/slack\\/<\\/a><\\/p>\",\"sidetext\":\"<p>Blick in die Ferienwohnung Alpenblick. Diese Wohnung hat ein separates Schlafzimmer. Im Wohn- und Esszimmer steht eine ausklappbare Schlafcouch.<\\/p>\"}',NULL,NULL,NULL,NULL,NULL,NULL,'Hallo, ich bin 8',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding\",\"background\":\"uk-section-muted\",\"layout\":\"image_left\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'ferienwohnung-am-see-2-5009.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,3,'2021-05-23 14:38:48','wolfgang','2021-06-02 15:19:36','wolfgang',0,1),
  (6,1,1,1,'{\"headline\":\"Ferienwohnung oder Ferienhaus direkt buchen\",\"maintext\":\"<p>Mit REDAXO und dem Buchungskalender l\\u00e4sst sich eine Website einrichten, \\u00fcber die die Ferieng\\u00e4ste direkt buchen k\\u00f6nnen. Die Vorteile sind f\\u00fcr Ferieng\\u00e4ste und Betreiber enorm:<\\/p>\\r\\n<ul>\\r\\n<li>G\\u00e4ste k\\u00f6nnen sofort sehen, welche Termine noch verf\\u00fcgbar sind<\\/li>\\r\\n<li>G\\u00e4ste k\\u00f6nnen sofort buchen<\\/li>\\r\\n<li>Es sind keine R\\u00fcckfragen erforderlich<\\/li>\\r\\n<li>Es entstehen keine zus\\u00e4tzlichen Buchungkosten, wie sie von Portalen verlangt werden<\\/li>\\r\\n<li>Als Betreiber haben Sie sofort und tagesaktuell den \\u00dcberblick \\u00fcber Ihre Buchungen<\\/li>\\r\\n<\\/ul>\\r\\n<p>Zus\\u00e4tzlich bietet das AddOn Buchungskalender mit REDAXO noch einige Features, die man sonst teuer bezahlen muss:<\\/p>\\r\\n<p>Es lassen sich \\u00fcber ical externe Quellen bidirektional synchronisieren. - Oh - das muss ich vielleicht kurz erkl\\u00e4ren. Angenommen, Sie bieten Ihre Ferienwohnung zus\\u00e4tzlich auf einem Kanal an, der eine Synchronisierung zul\\u00e4sst (Novasol z.B. macht das nicht, Airbnb kann es, bei anderen Portalen wei\\u00df ich es nicht genau). Dann kann es beispielsweise sein, dass ein Gast \\u00fcber das Portal, in diesem Falle Airbnb, eine Buchung absetzt. Und jetzt? M\\u00fcssten Sie hergehen und die Buchung manuell in den REDAXO Buchungskalender eintragen. Nein. Das ist zu umst\\u00e4ndlich und dauert zu lange. Vielleicht haben Sie anderes zu tun als den ganzen Tag Buchungen manuell hin und her zu synchronisieren. Au\\u00dferdem ist der manuelle Abgleich fehlertr\\u00e4chtig. Deswegen kann der Buchungskalender von REDAXO die Airbnb Buchung direkt auslesen und in den REDAXO Kalender einf\\u00fcgen. Umgekehrt geht das genauso. Deswegen hei\\u00dft es bidirektional. Wenn im REDAXO Buchungskalender eine Buchung eingegangen ist und best\\u00e4tigt wurde, so kann diese Buchung automatisch in den Airbnb Buchungskalender \\u00fcbernommen werden.<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-default\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'ferienwohnung-4-personen-am-see.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,5,3,'2021-05-24 19:02:47','wolfgang','2021-06-03 06:56:58','wolfgang',0,1),
  (15,1,1,1,'{\"headline\":\"Ferienwohnung buchen\",\"maintext\":\"<h2>Hinweise zur Buchung<\\/h2>\\r\\n<p>Ein paar Hinweise, wie die Buchung funktioniert.<\\/p>\\r\\n<p>Ein Objekt kann auf \\\"Buchen\\\" oder \\\"Anfrage\\\" gestellt werden.<\\/p>\\r\\n<p>Sowohl bei Buchung als auch bei Anfrage kann der Besucher nur aus freien Terminen ausw\\u00e4hlen. Die Preisberechnung ist identisch und ein Endpreis wird vor dem Absendern der Anfrage oder Buchung angezeigt. Der Endpreis wird auch in der Datenbank abgelegt, sodass Sie jederzeit sehen k\\u00f6nnen, zu welchem Preis der Gast gebucht hat.<\\/p>\\r\\n<h2>Buchen<\\/h2>\\r\\n<p>Wenn das Objekt auf \\\"Buchen\\\" eingestellt ist, so kann der Besucher die Buchung direkt vornehmen. Er erh\\u00e4lt dann eine E-Mail mit einem Best\\u00e4tigungslink. Auch Sie als Betreiber erhalten eine E-Mail mit den Buchungsdaten.<\\/p>\\r\\n<p>Wenn der Besucher die Buchung auf der Website vorgenommen hat, so bleibt diese Buchung als Reservierung eine Stunde im System erhalten. In dieser Zeit kann keine andere Reservierung auf diese Buchung vorgenommen werden. Wenn der Besucher den Best\\u00e4tigungslink anklickt, wird die Buchung in den Kalender \\u00fcbernommen.<\\/p>\\r\\n<p>Wenn der Besucher nicht innerhalb von einer Stunde den Best\\u00e4tigungslink aufruft, ist es m\\u00f6glich, dass ein anderer Besucher den Termin bucht. Die definitive Buchung bekommt dann derjenige Besucher, der zuerst den Best\\u00e4tigungslink aufruft.<\\/p>\\r\\n<p>Somit ist gew\\u00e4hrleistet, dass keine zwei Reservierungen gleichzeitig ins System aufgenommen werden k\\u00f6nnen.<\\/p>\\r\\n<h2>Anfragen<\\/h2>\\r\\n<p>Wenn das Objekt auf \\\"Anfragen\\\" eingestellt ist, ist keine direkte Buchung m\\u00f6glich. Der Besucher kann dann seinen Wunschtermin aus dem Kalender ausw\\u00e4hlen. Es wird ein dann eine Best\\u00e4tigungsmail erstellt und ein Buchungsdatensatz in den Kalender eingef\\u00fcgt. Der Besucher kann jedoch nicht selbst\\u00e4ndig eine Best\\u00e4tigung ausl\\u00f6sen. Sie als Betreiber m\\u00fcssen die Best\\u00e4tigung im System vornehmen und den Gast entsprechend benachrichtigen, dass seine Anfrage gebucht wurde.<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-muted\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,18,3,'2021-05-26 16:34:18','wolfgang','2021-06-02 11:03:51','wolfgang',0,1),
  (17,1,1,3,'{\"object_id\":\"1\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'46','26',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,18,5,'2021-05-26 19:53:57','wolfgang','2021-06-02 11:04:46','wolfgang',0,1),
  (18,1,1,4,'{\"object_id\":\"2\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'24','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,18,5,'2021-05-26 19:56:09','wolfgang','2021-05-26 19:57:58','wolfgang',0,1),
  (21,1,1,2,'{\"object_id\":\"3\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'25','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,18,5,'2021-05-26 19:58:14','wolfgang','2021-05-30 17:19:50','wolfgang',0,1),
  (25,1,1,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,26,6,'2021-05-26 20:39:13','wolfgang','2021-05-27 21:04:37','wolfgang',0,1),
  (38,1,1,1,'{\"headline\":\"Alle Preise im \\u00dcberblick\",\"maintext\":\"<p>Der Buchungskalender erlaubt eine flexible Preisverwaltung.<\\/p>\\r\\n<p>Sie k\\u00f6nnen ...<\\/p>\\r\\n<ul>\\r\\n<li>Pro Objekt einen Fixpreis eintragen, z.B. f\\u00fcr Reinigung, Bettw\\u00e4sche etc.<\\/li>\\r\\n<li>Verschiedene Saisonpreise definieren. z.B. f\\u00fcr Hauptsaison, Zwischensaison und Nebensaison<\\/li>\\r\\n<li>Verschiedene Preise f\\u00fcr l\\u00e4ngerfristige Buchungen, z.B. ab 7 \\u00dcbernachtungen, ab 14 \\u00dcbernachtungen etc einpflegen<\\/li>\\r\\n<\\/ul>\\r\\n<p>Die Preise k\\u00f6nnen dann \\u00fcbersichtlich auf der Website ausgegeben werden. Sie pflegen somit einmal die Daten, alles andere \\u00fcbernimmt das System f\\u00fcr Sie. Sie m\\u00fcssen also auch keine Preise mehr h\\u00e4ndisch ausrechnen.<\\/p>\\r\\n<p>\\u00a0<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-muted\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,26,3,'2021-05-27 17:39:39','wolfgang','2021-06-02 11:09:46','wolfgang',0,1),
  (91,1,1,1,'{\"headline\":\"Umgebung\",\"maintext\":\"<p>Hier schreiben Sie am besten etwas \\u00fcber die Umgebung.<\\/p>\\r\\n<p>Wir nutzen den Platz, um noch etwas \\u00fcber den Buchungskalender zu erfahren.<\\/p>\\r\\n<h2>Der Buchungskalender<\\/h2>\\r\\n<p>Der Buchungskalender verwaltet die Buchungsdaten und die Objektdaten (Saisondaten, Preise) in yform Tabellen. Diese Tabellen k\\u00f6nnen bei Bedarf um eigene Felder erweitert werden.<\\/p>\\r\\n<p>Der Buchungskalender ist f\\u00fcr eine Verwaltung von Buchungen \\\"\\u00fcber Nacht\\\" ausgelegt. Dies kommt bei Ferienwohnungen, Ferienh\\u00e4usern, Zeltpl\\u00e4tzen, Wohnmobilen und \\u00e4hnlichen Objekten in Betracht. Viele normale Terminverwaltungen arbeiten \\\"tageweise\\\". Das verursacht dann einen Konflikt, wenn man beispielsweise am gleichen Tag eine Abreise und eine Anreise f\\u00fcr das gleiche Objekt verwalten will.<\\/p>\\r\\n<p>Die Darstellung des Kalender ist unabh\\u00e4ngig vom Framework umgesetzt. So kann der Kalender auch einfach in eine Bootstrap Umgebung eingesetzt werden. Dies ist z.B. im Backend der Fall.<\\/p>\\r\\n<p>F\\u00fcr die Darstellung im Frontend und im Backend werden in dieser Demo die gleichen CSS Dateien verwendet. Dies kann nat\\u00fcrlich angepasst werden.<\\/p>\\r\\n<p>Beim Javascript unterscheiden sich Frontend und Backend geringf\\u00fcgig. So kann man im Backend bei gedr\\u00fcckter Shifttaste auf einen gebuchten Zeitraum klicken, um einen Buchungsdatensatz anzusehen oder zu bearbeiten, was im Frontend logischerweise nicht geht.<\\/p>\\r\\n<p>Der Buchungskalender ist f\\u00fcr mehrere Objekte angelegt. Man kann also beliebig viele Ferienwohnungen damit verwalten.<\\/p>\\r\\n<h3>Zusatzfunktionen<\\/h3>\\r\\n<p>Es gibt ein paar Zusatzfunktionen, die ich f\\u00fcr unsere eigene Ferienwohnungsverwaltung programmiert habe. Dazu geh\\u00f6rt zum Beispiel, dass man angeben kann, ob in einem bestimmten Zeitraum nur wochenweise von Samstag bis Samstag gebucht werden kann.<\\/p>\\r\\n<p>Man kann au\\u00dferdem angeben, wie viele Tage eine Buchung in der Zukunft liegen muss. Damit kann verhindert werden, dass G\\u00e4ste vor der T\\u00fcre stehen und sagen \\\"wir haben doch gerade gebucht!\\\". Wie erlauben eine Buchung \\u00fcber die Webseite ab drei Tagen in der Zukunft.<\\/p>\\r\\n<h3>E-Mail Templates<\\/h3>\\r\\n<p>Momentan sind drei E-Mail Templates am Start.<\\/p>\\r\\n<p>booking_confirm - bekommt der Besucher als Best\\u00e4tigung, wenn er eine Anfrage oder Buchung vorgenommen hat. Das Template ist f\\u00fcr beide Arten der Reservierung programmiert.<\\/p>\\r\\n<p>booking_message - bekommt der Betreiber der Website, wenn eine Buchung oder Anfrage vorgenommen wurde<\\/p>\\r\\n<p>confirmation_info - bekommt der Betreiber, wenn der Besucher den Best\\u00e4tigungslink aktiviert hat.<\\/p>\\r\\n<p>Diese Templates sind in der Programmierung fest verdrahtet, k\\u00f6nnen also derzeit nicht frei gew\\u00e4hlt werden. Die Inhalte k\\u00f6nnen allerdings jederzeit angepasst werden, die mitgelieferten Templates dienen nur als Muster, wie alles in dieser Demo.<\\/p>\\r\\n<h3>Einstellungen<\\/h3>\\r\\n<p>In den Einstellungen des AddOns k\\u00f6nnen Konfigurationen f\\u00fcr den E-Mail Versand und die Buchung vorgenommen werden.<\\/p>\\r\\n<h3>Module<\\/h3>\\r\\n<p>Das AddOn bringt die wichtigsten Module mit, die f\\u00fcr den Betrieb einer Website mit Buchungsm\\u00f6glichkeit sinnvoll sind.<\\/p>\\r\\n<p>den Buchungskalender f\\u00fcr das Frontend<\\/p>\\r\\n<p>einen Minikalender f\\u00fcr die Anzeige der Belegung<\\/p>\\r\\n<p>einen Saisonkalender<\\/p>\\r\\n<p>das Buchungsformular<\\/p>\\r\\n<p>Auflistung der Preise<\\/p>\\r\\n<p>die Ausgabe der ical Daten f\\u00fcr die Synchronisation<\\/p>\\r\\n<p>\\u00a0<\\/p>\\r\\n<h3>Anpassungen<\\/h3>\\r\\n<p>Eine Besonderheit ist im Buchungskalender AddOn eingebaut. Wenn die scss Datei im AddOn ge\\u00e4ndert wird, so wird bei aktivem Debug Mode eine neue css Datei erstellt und gleich ins Assets Verzeichnis kopiert. Das gleiche gilt f\\u00fcr eine Anpassung der js Datei. Diese wird auch direkt im Assets Verzeichnis aktualisiert, wenn der Debug Mode eingeschaltet ist.<\\/p>\\r\\n<p>\\u00a0<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-default\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8,3,'2021-05-28 20:56:29','wolfgang','2021-06-02 20:58:26','wolfgang',0,1),
  (142,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,41,8,'2021-05-30 21:44:41','wolfgang','2021-05-30 21:44:41','wolfgang',0,1),
  (145,1,1,1,'{\"headline\":\"Anreise\",\"maintext\":\"<p>Hier etwas \\u00fcber Anreise schreiben ...<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-default\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,42,3,'2021-05-31 12:18:34','wolfgang','2021-06-02 10:27:50','wolfgang',0,1),
  (148,1,1,1,'{\"headline\":\"Entschuldigung - das tut uns Leid!\",\"maintext\":\"<p>Sie sind auf einer Seite gelandet, die es nicht mehr gibt. Der Link ist alt.<\\/p>\\r\\n<p>Versuchen Sie \\u00fcber das Men\\u00fc an die gew\\u00fcnschte Information zu gelangen, schauen Sie sich um.<\\/p>\\r\\n<p>Oder rufen Sie uns einfach an, wir helfen gerne weiter.<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-muted\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,3,'2021-05-31 13:52:42','wolfgang','2021-05-31 13:52:42','wolfgang',0,1),
  (160,1,1,1,'{\"object_id\":\"1\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,46,1,'2021-06-02 10:41:20','wolfgang','2021-06-02 10:41:20','wolfgang',0,1),
  (161,1,1,2,'{\"object_id\":\"1\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'46','18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,5,'2021-06-02 10:50:34','wolfgang','2021-06-02 10:50:34','wolfgang',0,1),
  (162,1,1,2,'{\"headline\":\"\",\"maintext\":\"<p>Diese Demo ist bewusst einfach gehalten, um auch dem Einsteiger eine M\\u00f6glichkeit zu geben, die Funktionen zu verstehen.<\\/p>\\r\\n<p>Im Frontend baut die Seite auf dem Framework uikit auf.<\\/p>\\r\\n<p>Zus\\u00e4tzlich zum buchungskalender-AddOn, sind noch weitere AddOns an Bord, die f\\u00fcr die Umsetzung teilweise notwendig oder hilfreich sind.<\\/p>\\r\\n<p>Notwendige AddOns sind yform und der phpmailer.<\\/p>\\r\\n<p>Zus\\u00e4tzlich ist die awnav eingebaut, die es uns erm\\u00f6glicht flexible und einfache Navigationen zu integrieren.<\\/p>\",\"sidetext\":\"\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"headline_type\":\"1\",\"padding\":\"uk-padding-remove\",\"background\":\"uk-section-muted\",\"layout\":\"image_wide\",\"topmargin\":\"uk-margin-remove-top\",\"textwidth\":\"uk-container-small\"}',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,5,3,'2021-06-02 11:59:46','wolfgang','2021-06-02 11:59:46','wolfgang',0,1),
  (163,1,1,1,'{\"object_id\":\"1\"}',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,47,10,'2021-06-02 12:36:06','wolfgang','2021-06-02 12:36:06','wolfgang',0,1);
/*!40000 ALTER TABLE `rex_article_slice` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_buka_bookings`;
CREATE TABLE `rex_buka_bookings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `datestart` date NOT NULL,
  `dateend` date NOT NULL,
  `object_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `vorname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nachname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anschrift` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `plz` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ort` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anreisezeit` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nachricht` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `bookingdate` datetime NOT NULL,
  `hashval` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=435 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_buka_bookings` WRITE;
/*!40000 ALTER TABLE `rex_buka_bookings` DISABLE KEYS */;
INSERT INTO `rex_buka_bookings` VALUES 
  (434,'2021-07-10','2021-07-17','1','safsdaf','asfsafdsad','','','','','','wolfgang@gw21.de','','','','2021-06-02 10:51:37','0585d85c6f0b3d6a0cefb9667c63a333e94c63cf','asked','385,00');
/*!40000 ALTER TABLE `rex_buka_bookings` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_buka_objects`;
CREATE TABLE `rex_buka_objects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `combination` tinyint(1) NOT NULL,
  `object_ids` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `grundpreis` decimal(10,2) DEFAULT NULL,
  `ical_sync_link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `reservation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_buka_objects` WRITE;
/*!40000 ALTER TABLE `rex_buka_objects` DISABLE KEYS */;
INSERT INTO `rex_buka_objects` VALUES 
  (1,'Ferienwohnung Alpenblick',0,'',35.0000000000,'','1','book');
/*!40000 ALTER TABLE `rex_buka_objects` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_buka_price`;
CREATE TABLE `rex_buka_price` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `prio` int(11) NOT NULL,
  `object_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `season_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nightscount` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_buka_price` WRITE;
/*!40000 ALTER TABLE `rex_buka_price` DISABLE KEYS */;
INSERT INTO `rex_buka_price` VALUES 
  (1,1,'1','2',1,47.0000000000),
  (2,2,'1','2',7,45.0000000000),
  (3,3,'1','2',14,44.0000000000),
  (4,4,'1','1',1,52.0000000000),
  (5,5,'1','1',7,50.0000000000),
  (6,6,'1','1',14,49.0000000000);
/*!40000 ALTER TABLE `rex_buka_price` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_buka_season`;
CREATE TABLE `rex_buka_season` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prio` int(11) NOT NULL,
  `minddays` int(11) DEFAULT NULL,
  `dates` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_week` tinyint(1) NOT NULL,
  `color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_buka_season` WRITE;
/*!40000 ALTER TABLE `rex_buka_season` DISABLE KEYS */;
INSERT INTO `rex_buka_season` VALUES 
  (1,'Hauptsaison',2,3,'[]',1,'#d98501'),
  (2,'Nebensaison',1,3,'[[\"Weihnachten-Ostern\",\"2021-01-06\",\"2021-03-27\"],[\"Ostern-Pfingsten\",\"2021-04-17\",\"2021-05-08\"],[\"Pfingsten-Sommer\",\"2021-06-06\",\"2021-06-19\"],[\"Sommer-Herbst\",\"2021-09-11\",\"2021-10-02\"],[\"Herbst-Weihnachten\",\"2021-10-30\",\"2021-12-18\"],[\"Weihnachten-Ostern\",\"2022-01-08\",\"2022-04-02\"],[\"Ostern-Pfingsten\",\"2022-04-16\",\"2022-06-04\"],[\"Pfingsten-Sommer\",\"2022-06-18\",\"2022-06-25\"],[\"Sommer-Herbst\",\"2022-09-10\",\"2022-10-08\"],[\"Herbst-Weihnachten\",\"2022-11-05\",\"2022-12-24\"]]',0,'#ffb23a');
/*!40000 ALTER TABLE `rex_buka_season` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_clang`;
CREATE TABLE `rex_clang` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  `status` tinyint(1) NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_clang` WRITE;
/*!40000 ALTER TABLE `rex_clang` DISABLE KEYS */;
INSERT INTO `rex_clang` VALUES 
  (1,'de','deutsch',1,1,0);
/*!40000 ALTER TABLE `rex_clang` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_config`;
CREATE TABLE `rex_config` (
  `namespace` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`namespace`,`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_config` WRITE;
/*!40000 ALTER TABLE `rex_config` DISABLE KEYS */;
INSERT INTO `rex_config` VALUES 
  ('be_style/customizer','codemirror','1'),
  ('be_style/customizer','codemirror_theme','\"eclipse\"'),
  ('be_style/customizer','codemirror-langs','0'),
  ('be_style/customizer','codemirror-selectors','\"\"'),
  ('be_style/customizer','codemirror-tools','0'),
  ('be_style/customizer','labelcolor','\"#3bb594\"'),
  ('be_style/customizer','showlink','1'),
  ('buchungskalender','confirmation_page','\"41\"'),
  ('buchungskalender','email_me','\"wb@dtp-net.de\"'),
  ('buchungskalender','ical_interval','\"900\"'),
  ('buchungskalender','ical_uid','\"ferienwohnung-alpenblick@example.com\"'),
  ('buchungskalender','max_booking_time','\"365 * 24 * 60 * 60\"'),
  ('buchungskalender','message_min_booking_days','\"Die Mindestbuchungsdauer betr\\u00e4gt drei N\\u00e4chte.\"'),
  ('buchungskalender','min_booking_days','\"3\"'),
  ('buchungskalender','min_booking_days_futur','\"3\"'),
  ('buchungskalender','months_1','\"Januar,Februar,M\\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember\"'),
  ('buchungskalender','summary_page','\"4\"'),
  ('buchungskalender','weekdays_1','\"Mo,Di,Mi,Do,Fr,Sa,So\"'),
  ('core','package-config','{\"adminer\":{\"install\":true,\"status\":true},\"backup\":{\"install\":true,\"status\":true},\"be_style\":{\"install\":true,\"status\":true,\"plugins\":{\"customizer\":{\"install\":true,\"status\":true},\"redaxo\":{\"install\":true,\"status\":true}}},\"buchungskalender\":{\"install\":true,\"status\":true},\"cronjob\":{\"install\":false,\"status\":false,\"plugins\":{\"article_status\":{\"install\":false,\"status\":false},\"optimize_tables\":{\"install\":false,\"status\":false}}},\"debug\":{\"install\":false,\"status\":false},\"developer\":{\"install\":true,\"status\":true},\"iconpicker\":{\"install\":true,\"status\":true},\"install\":{\"install\":true,\"status\":true},\"media_manager\":{\"install\":true,\"status\":true},\"mediapool\":{\"install\":true,\"status\":true},\"metainfo\":{\"install\":true,\"status\":true},\"mform\":{\"install\":true,\"status\":true,\"plugins\":{\"docs\":{\"install\":true,\"status\":true}}},\"phpmailer\":{\"install\":true,\"status\":true},\"project\":{\"install\":true,\"status\":true},\"quick_navigation\":{\"install\":true,\"status\":true},\"structure\":{\"install\":true,\"status\":true,\"plugins\":{\"content\":{\"install\":true,\"status\":true},\"history\":{\"install\":false,\"status\":false},\"version\":{\"install\":false,\"status\":false}}},\"theme\":{\"install\":true,\"status\":true},\"tinymce4\":{\"install\":true,\"status\":true},\"users\":{\"install\":true,\"status\":true},\"ycom\":{\"install\":false,\"status\":false,\"plugins\":{\"auth\":{\"install\":false,\"status\":false},\"docs\":{\"install\":false,\"status\":false},\"group\":{\"install\":false,\"status\":false},\"media_auth\":{\"install\":false,\"status\":false}}},\"yform\":{\"install\":true,\"status\":true,\"plugins\":{\"email\":{\"install\":true,\"status\":true},\"manager\":{\"install\":true,\"status\":true},\"rest\":{\"install\":false,\"status\":false},\"tools\":{\"install\":true,\"status\":true}}},\"yform_usability\":{\"install\":true,\"status\":true},\"yrewrite\":{\"install\":true,\"status\":true}}'),
  ('core','package-order','[\"be_style\",\"be_style\\/customizer\",\"be_style\\/redaxo\",\"users\",\"adminer\",\"backup\",\"buchungskalender\",\"developer\",\"iconpicker\",\"install\",\"media_manager\",\"mediapool\",\"mform\",\"mform\\/docs\",\"phpmailer\",\"structure\",\"metainfo\",\"structure\\/content\",\"quick_navigation\",\"theme\",\"tinymce4\",\"yform\",\"yform\\/email\",\"yform\\/manager\",\"yform\\/tools\",\"yform_usability\",\"yrewrite\",\"project\"]'),
  ('core','utf8mb4','true'),
  ('core','version','\"5.12.0\"'),
  ('developer','actions','true'),
  ('developer','delete','true'),
  ('developer','dir_suffix','true'),
  ('developer','items','{\"templates\":{\"1\":1622701772,\"5\":1},\"theme\\/private\\/redaxo\\/templates\":{\"1\":1622182680,\"2\":1622182598},\"theme\\/private\\/redaxo\\/modules\":{\"1\":1621762752,\"2\":1621762609,\"3\":1622179669,\"4\":1622053731,\"5\":1622051738,\"6\":1622142835,\"7\":1622146678},\"theme\\/private\\/redaxo\\/yform_emails\":{\"1\":1621757156},\"modules\":{\"1\":1622700848,\"2\":1622700833,\"3\":1622700973,\"5\":1622700920,\"6\":1622700954,\"8\":1622700894,\"10\":1622700907},\"yform_email\":{\"9\":1622659842,\"10\":1622659874,\"11\":1622447765},\"actions\":[]}'),
  ('developer','modules','true'),
  ('developer','prefix','false'),
  ('developer','rename','true'),
  ('developer','sync_backend','true'),
  ('developer','sync_frontend','true'),
  ('developer','templates','true'),
  ('developer','umlauts','false'),
  ('developer','yform_email','true'),
  ('media_manager','interlace','[\"jpg\"]'),
  ('media_manager','jpg_quality','80'),
  ('media_manager','png_compression','5'),
  ('media_manager','webp_quality','85'),
  ('mform','mform_theme','\"default_theme\"'),
  ('phpmailer','archive','false'),
  ('phpmailer','bcc','\"\"'),
  ('phpmailer','charset','\"utf-8\"'),
  ('phpmailer','confirmto','\"\"'),
  ('phpmailer','detour_mode','false'),
  ('phpmailer','encoding','\"8bit\"'),
  ('phpmailer','errormail','0'),
  ('phpmailer','from','\"\"'),
  ('phpmailer','fromname','\"Mailer\"'),
  ('phpmailer','host','\"\"'),
  ('phpmailer','logging','0'),
  ('phpmailer','mailer','\"mail\"'),
  ('phpmailer','password','\"\"'),
  ('phpmailer','port','0'),
  ('phpmailer','priority','0'),
  ('phpmailer','security_mode','false'),
  ('phpmailer','smtp_debug','0'),
  ('phpmailer','smtpauth','true'),
  ('phpmailer','smtpsecure','\"tls\"'),
  ('phpmailer','test_address','\"\"'),
  ('phpmailer','username','\"\"'),
  ('phpmailer','wordwrap','120'),
  ('quick_navigation','quicknavi_favs1','[]'),
  ('structure','notfound_article_id','3'),
  ('structure','start_article_id','5'),
  ('structure/content','default_template_id','1'),
  ('theme','include_be_files','false'),
  ('theme','synchronize','true'),
  ('tinymce4','image_format','\"default\"'),
  ('tinymce4','media_format','\"default\"'),
  ('tinymce4','profile_upd_date','1622193204'),
  ('tinymce4','profiles','\"a:3:{i:0;a:3:{s:2:\\\"id\\\";i:1617963144;s:4:\\\"name\\\";s:7:\\\"default\\\";s:4:\\\"json\\\";s:583:\\\"{\\n            selector: \'textarea.tinyMCEEditor\',\\n            file_browser_callback: redaxo5FileBrowser,\\n            plugins: \'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code\',\\n            toolbar: \'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image\',\\n            convert_urls: false,\\n            content_css: \'..\\/assets\\/addons\\/tinymce4\\/bootstrap\\/css\\/bootstrap.min.css\'\\n            }\\\";}i:1;a:3:{s:2:\\\"id\\\";i:1621774713;s:4:\\\"name\\\";s:16:\\\"tinyMCE-headline\\\";s:4:\\\"json\\\";s:474:\\\"{\\r\\nselector: \'.tinyMCE-headline\',\\r\\nfile_browser_callback: redaxo5FileBrowser,\\r\\nconvert_urls: false,\\r\\ncontent_css: \'..\\/theme\\/public\\/assets\\/backend\\/tinymce.css\',\\r\\nplugins: \'advlist autolink link charmap preview code fullscreen paste code\',\\r\\ntoolbar: \'bold | charmap nonbreaking | pastetext undo redo | italic subscript superscript | link unlink\',\\r\\nmenubar: false,\\r\\nforced_root_block: false,\\r\\ninvalid_elements: \'p\',\\r\\npaste_as_text: true,\\r\\nheight: 50,\\r\\nentity_encoding: \\\"raw\\\"\\r\\n}\\\";}i:2;a:3:{s:2:\\\"id\\\";i:1621774797;s:4:\\\"name\\\";s:12:\\\"tinyMCE-text\\\";s:4:\\\"json\\\";s:809:\\\"{\\r\\n            selector: \'textarea.tinyMCE-text\',\\r\\n            style_formats_merge: true,\\r\\n            style_formats: [\\r\\n                {title: \'Text rot\', inline: \'span\', styles: {color: \'#ff0000\'}},\\r\\n            ],\\r\\n            file_browser_callback: redaxo5FileBrowser,\\r\\n            plugins: \'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste code\',\\r\\n            toolbar: \'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image\',\\r\\n            convert_urls: false,\\r\\n            height: 500,\\r\\n            content_css: \'..\\/assets\\/addons\\/tinymce4\\/bootstrap\\/css\\/bootstrap.min.css\',\\r\\n            entity_encoding:  \\\"raw\\\"\\r\\n}\\\";}}\"'),
  ('yform_usability','duplicate_tables','[\"all\"]'),
  ('yform_usability','sorting_tables','[\"all\"]'),
  ('yform_usability','status_tables','[\"rex_buka_objects\"]'),
  ('yrewrite','unicode_urls','false'),
  ('yrewrite','yrewrite_hide_url_block','false');
/*!40000 ALTER TABLE `rex_config` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_media`;
CREATE TABLE `rex_media` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filetype` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `originalname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filesize` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `width` int(10) unsigned DEFAULT NULL,
  `height` int(10) unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  `med_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `med_copyright` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_media` WRITE;
/*!40000 ALTER TABLE `rex_media` DISABLE KEYS */;
INSERT INTO `rex_media` VALUES 
  (1,2,NULL,'image/jpeg','altes-gutshaus-am-see-4976.jpg','altes-gutshaus-am-see-4976.jpg','361859',1277,981,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (2,2,NULL,'image/jpeg','altes-gutshaus-am-see-4977.jpg','altes-gutshaus-am-see-4977.jpg','362170',1276,975,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (3,3,NULL,'image/jpeg','ansicht-schloss-1200px_1.jpg','Ansicht-Schloss-1200px.jpg','1028759',1200,856,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (4,2,NULL,'image/jpeg','ausblick-auf-den-tressower-see.jpg','ausblick-auf-den-tressower-see.jpg','294983',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (5,2,NULL,'image/jpeg','badeplatz-am-tressower-see.jpg','badeplatz-am-tressower-see.jpg','529786',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (6,4,NULL,'image/jpeg','badestelle-am-tressower-see_8938.jpg','badestelle-am-tressower-see_8938.jpg','386670',2560,323,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (7,3,NULL,'image/jpeg','cafe-frieda.jpg','cafe-frieda.jpg','338340',837,1000,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (8,3,NULL,'image/jpeg','comic-10-20-kreis-agrarmuseum.jpg','comic-10-20-kreis-agrarmuseum.jpg','237439',1000,665,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (9,2,NULL,'image/jpeg','dsc_0379.jpg','dsc_0379.jpg','123714',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (10,2,NULL,'image/jpeg','dsc_0437.jpg','dsc_0437.jpg','118315',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (11,7,NULL,'image/jpeg','dsc_0865.jpg','dsc_0865.jpg','125417',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (12,7,NULL,'image/jpeg','dsc_0868.jpg','dsc_0868.jpg','242386',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (13,7,NULL,'image/jpeg','dsc_0877.jpg','dsc_0877.jpg','113740',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (14,7,NULL,'image/jpeg','dsc_0885.jpg','dsc_0885.jpg','119531',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (15,7,NULL,'image/jpeg','dsc_0889.jpg','dsc_0889.jpg','185525',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (16,7,NULL,'image/jpeg','dsc_0895.jpg','dsc_0895.jpg','150725',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (17,7,NULL,'image/jpeg','dsc_0905.jpg','dsc_0905.jpg','101980',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-27 07:48:37','wolfgang',0,NULL,NULL),
  (18,5,NULL,'image/jpeg','dsc_1100_b.jpg','dsc_1100_b.jpg','108993',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (19,5,NULL,'image/jpeg','dsc_1101_b.jpg','dsc_1101_b.jpg','94499',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (20,5,NULL,'image/jpeg','dsc_1102_b.jpg','dsc_1102_b.jpg','142880',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (21,5,NULL,'image/jpeg','dsc_1103_b.jpg','dsc_1103_b.jpg','99587',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (22,5,NULL,'image/jpeg','dsc_1104_b.jpg','dsc_1104_b.jpg','208251',1280,852,'','2021-05-23 15:10:47','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (23,5,NULL,'image/jpeg','dsc_1105_b.jpg','dsc_1105_b.jpg','128855',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (24,5,NULL,'image/jpeg','dsc_1106_b.jpg','dsc_1106_b.jpg','87391',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (25,5,NULL,'image/jpeg','dsc_1107_b.jpg','dsc_1107_b.jpg','110485',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (26,5,NULL,'image/jpeg','dsc_1108_b.jpg','dsc_1108_b.jpg','105322',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (27,5,NULL,'image/jpeg','dsc_1109_b.jpg','dsc_1109_b.jpg','97379',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (28,5,NULL,'image/jpeg','dsc_1110_b.jpg','dsc_1110_b.jpg','124288',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (29,5,NULL,'image/jpeg','dsc_1111_b.jpg','dsc_1111_b.jpg','100097',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (30,2,NULL,'image/jpeg','dsc_3398-k.jpg','dsc_3398-k.jpg','280688',1000,666,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (31,2,NULL,'image/jpeg','dsc_6248.jpg','dsc_6248.jpg','129354',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (32,2,NULL,'image/jpeg','dsc_8666.jpg','dsc_8666.jpg','168496',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (33,9,NULL,'image/jpeg','dsc_8720.jpg','dsc_8720.jpg','142433',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (34,9,NULL,'image/jpeg','dsc_8730.jpg','dsc_8730.jpg','131574',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (35,9,NULL,'image/jpeg','dsc_8731.jpg','dsc_8731.jpg','141246',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (36,9,NULL,'image/jpeg','dsc_8733.jpg','dsc_8733.jpg','128612',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (37,2,NULL,'image/jpeg','dsc_9717_bearb.jpg','dsc_9717_bearb.jpg','195180',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (38,3,NULL,'image/jpeg','dsc_9782_1_.jpg','dsc_9782__1__.jpg','207731',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (39,3,NULL,'image/jpeg','dsc_9820.jpg','dsc_9820.jpg','130315',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (40,4,NULL,'image/jpeg','ferien-am-see-kaeselow_4435.jpg','ferien-am-see-kaeselow_4435.jpg','91670',1280,160,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (41,4,NULL,'image/jpeg','ferien-am-see_2593.jpg','ferien-am-see_2593.jpg','50765',1280,160,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (42,2,NULL,'image/jpeg','ferienhaus-am-see-6180.jpg','ferienhaus-am-see-6180.jpg','380131',1280,640,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:18:06','wolfgang',0,NULL,NULL),
  (43,2,NULL,'image/jpeg','ferienhaus-am-see.jpg','ferienhaus-am-see.jpg','1066919',2540,1690,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (44,2,NULL,'image/jpeg','ferienhaus-am-see_dsc_4424.jpg','ferienhaus-am-see_dsc_4424.jpg','191460',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (45,2,NULL,'image/jpeg','ferienwohnung-4-personen-am-see.jpg','ferienwohnung-4-personen-am-see.jpg','423347',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (46,1,NULL,'image/jpeg','ferienwohnung-am-see-1-5051.jpg','ferienwohnung-am-see-1-5051.jpg','122025',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (47,1,NULL,'image/jpeg','ferienwohnung-am-see-1-5058.jpg','ferienwohnung-am-see-1-5058.jpg','263675',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (48,1,NULL,'image/jpeg','ferienwohnung-am-see-1-kochen-5064.jpg','ferienwohnung-am-see-1-kochen-5064.jpg','208448',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (49,1,NULL,'image/jpeg','ferienwohnung-am-see-1-kochen-essen-5065.jpg','ferienwohnung-am-see-1-kochen-essen-5065.jpg','262583',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (50,1,NULL,'image/jpeg','ferienwohnung-am-see-1-schlafen-5074.jpg','ferienwohnung-am-see-1-schlafen-5074.jpg','199593',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (51,1,NULL,'image/jpeg','ferienwohnung-am-see-2-5009.jpg','ferienwohnung-am-see-2-5009.jpg','197169',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (52,1,NULL,'image/jpeg','ferienwohnung-am-see-2-5012.jpg','ferienwohnung-am-see-2-5012.jpg','169052',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (53,1,NULL,'image/jpeg','ferienwohnung-am-see-2-bad-5004.jpg','ferienwohnung-am-see-2-bad-5004.jpg','175439',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (54,1,NULL,'image/jpeg','ferienwohnung-am-see-2-kochen-5018.jpg','ferienwohnung-am-see-2-kochen-5018.jpg','182719',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (55,1,NULL,'image/jpeg','ferienwohnung-am-see-2-schlafen-5001.jpg','ferienwohnung-am-see-2-schlafen-5001.jpg','199051',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (56,2,NULL,'image/jpeg','ferienwohnung-am-see-garten_4437.jpg','ferienwohnung-am-see-garten_4437.jpg','634722',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 16:45:30','wolfgang',0,NULL,NULL),
  (57,1,NULL,'image/jpeg','ferienwohnung-am-see-handtuecher-bettwaesche-5060.jpg','ferienwohnung-am-see-handtuecher-bettwaesche-5060.jpg','192953',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (58,2,NULL,'image/jpeg','ferienwohnung-tressower-see-dsc_4406.jpg','ferienwohnung-tressower-see-dsc_4406.jpg','364971',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (59,4,NULL,'image/jpeg','ferienwohnungen-separater-eingang_8941.jpg','ferienwohnungen-separater-eingang_8941.jpg','280273',2560,320,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (60,2,NULL,'image/jpeg','ferien_mit_hund_dsc_6206_1.jpg','ferien_mit_hund_DSC_6206.jpg','427465',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (61,2,NULL,'image/jpeg','ferien_mit_hund_dsc_6212_1.jpg','ferien_mit_hund_DSC_6212.jpg','386637',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (62,3,NULL,'image/jpeg','gartencafe-sonntagsgruen.jpg','gartencafe-sonntagsgruen.jpg','476491',1280,857,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (63,3,NULL,'image/jpeg','gedenkstein-burg-meklenburg-1856.jpg','gedenkstein-burg-meklenburg-1856.jpg','296099',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (64,3,NULL,'image/jpeg','gedenkstein-burg-meklenburg.jpg','gedenkstein-burg-meklenburg.jpg','280491',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (65,3,NULL,'image/jpeg','grosssteingraeber-im-everstorfer-forst.jpg','grosssteingraeber-im-everstorfer-forst.jpg','890519',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (66,3,NULL,'image/jpeg','grosssteingraeber.jpg','grosssteingraeber.jpg','485735',1280,851,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (67,1,NULL,'image/jpeg','gr_fewo_grundriss.jpg','gr_fewo_grundriss.jpg','35186',655,414,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (68,2,NULL,'image/jpeg','herbst-am-tressower-see_2601.jpg','herbst-am-tressower-see_2601.jpg','824849',2540,1690,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (69,6,NULL,'image/gif','karte.gif','karte.gif','22033',784,554,'','2021-05-23 15:10:48','wolfgang','2021-05-25 16:08:56','wolfgang',0,NULL,NULL),
  (70,2,NULL,'image/jpeg','kind-am-ufer-des-sees.jpg','kind-am-ufer-des-sees.jpg','285598',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (71,3,NULL,'image/jpeg','kirche-dorf-mecklenburg-3.jpg','kirche-dorf-mecklenburg-3.jpg','335621',1000,666,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (72,3,NULL,'image/jpeg','kirche-friedrichshagen-eingang.jpg','kirche-friedrichshagen-eingang.jpg','571915',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (73,3,NULL,'image/jpeg','kirche-friedrichshagen-schild.jpg','kirche-friedrichshagen-schild.jpg','442095',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (74,3,NULL,'image/jpeg','kirche-friedrichshagen-tor.jpg','kirche-friedrichshagen-tor.jpg','405015',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (75,3,NULL,'image/jpeg','kirowez-k700-kreis-agrarmuseum-dorf-mecklenburg.jpg','kirowez-k700-kreis-agrarmuseum-dorf-mecklenburg.jpg','215607',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (76,1,NULL,'image/jpeg','kl_fewo_grundriss.jpg','kl_fewo_grundriss.jpg','23299',582,414,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:16:25','wolfgang',0,NULL,NULL),
  (77,3,NULL,'image/jpeg','kramer-k18-allesschaffer-kreis-agrarmuseum.jpg','kramer-k18-allesschaffer-kreis-agrarmuseum.jpg','183331',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (78,3,NULL,'image/jpeg','kreis-agrarmuseum-aussen.jpg','kreis-agrarmuseum-aussen.jpg','929153',2000,1331,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (79,3,NULL,'image/jpeg','kreis-agrarmuseum-dorf-mecklenburg-schild.jpg','kreis-agrarmuseum-dorf-mecklenburg-schild.jpg','220600',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (80,4,NULL,'image/jpeg','kreisagrarmuseum-dorf-mecklenburg_3747.jpg','kreisagrarmuseum-dorf-mecklenburg_3747.jpg','254274',2560,328,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (81,2,NULL,'image/jpeg','luftbild-tressower-see.jpg','luftbild-tressower-see.jpg','296981',1280,849,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (82,4,NULL,'image/jpeg','morgenrot-am-see_4286.jpg','morgenrot-am-see_4286.jpg','57574',1280,167,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (83,9,NULL,'image/jpeg','nikolai-kirche-wismar-aussen.jpg','nikolai-kirche-wismar-aussen.jpg','161619',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (84,9,NULL,'image/jpeg','nikolai-kirche-wismar-innen.jpg','nikolai-kirche-wismar-innen.jpg','229934',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (85,4,NULL,'image/jpeg','ostsee-bei-zierow-2837.jpg','ostsee-bei-zierow-2837.jpg','50119',1280,161,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (86,3,NULL,'image/jpeg','ostsee-bei-zierow-2837b.jpg','ostsee-bei-zierow-2837b.jpg','228403',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (87,3,NULL,'image/jpeg','pfaffenteich-schwerin-2.jpg','pfaffenteich-schwerin-2.jpg','605232',2048,1362,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (88,3,NULL,'image/jpeg','pfaffenteich-schwerin-mit-dom.jpg','pfaffenteich-schwerin-mit-dom.jpg','172656',1000,666,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (89,3,NULL,'image/jpeg','pfaffenteich-schwerin.jpg','pfaffenteich-schwerin.jpg','165030',1000,666,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (90,6,NULL,'image/jpeg','postkarten_uebersicht_2019_1.jpg','postkarten_uebersicht_2019_1.jpg','303866',1280,908,'','2021-05-23 15:10:48','wolfgang','2021-05-25 16:08:56','wolfgang',0,NULL,NULL),
  (91,4,NULL,'image/jpeg','radfahren-an-der-ostsee_4660.jpg','radfahren-an-der-ostsee_4660.jpg','246782',2560,328,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (92,3,NULL,'image/jpeg','schloss-plueschow-1800.jpg','schloss-plueschow-1800.jpg','307319',1181,847,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (93,3,NULL,'image/jpeg','schloss-plueschow.jpg','schloss-plueschow.jpg','270195',1200,856,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (94,3,NULL,'image/jpeg','schloss-treppenhaus-oben.jpg','schloss-treppenhaus-oben.jpg','177916',1280,1029,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (95,3,NULL,'image/jpeg','schloss-wiligrad-suedseite.jpg','schloss-wiligrad-suedseite.jpg','398018',1280,890,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (96,3,NULL,'image/jpeg','schlossgaertnerei-wiligrad-2.jpg','schlossgaertnerei-wiligrad-2.jpg','409191',1280,853,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (97,3,NULL,'image/jpeg','schlossgaertnerei-wiligrad-k.jpg','schlossgaertnerei-wiligrad-k.jpg','403770',1280,853,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (98,4,NULL,'image/jpeg','schweriner-see-wiligrad_4795.jpg','schweriner-see-wiligrad_4795.jpg','251827',2560,322,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (99,4,NULL,'image/jpeg','schwerin_3641.jpg','schwerin_3641.jpg','251002',2560,322,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (100,4,NULL,'image/jpeg','schwerin_3642.jpg','schwerin_3642.jpg','289130',2560,320,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:10','wolfgang',0,NULL,NULL),
  (101,5,NULL,'image/jpeg','seite-02-web.jpg','seite-02-web.jpg','274038',603,861,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (102,5,NULL,'image/jpeg','seite-4-web.jpg','seite-4-web.jpg','296646',609,860,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:50','wolfgang',0,NULL,NULL),
  (103,2,NULL,'image/jpeg','solania_dsc_6422.jpg','solania_dsc_6422.jpg','132114',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (104,3,NULL,'image/jpeg','sonntagsgruen-stage.jpg','sonntagsgruen-stage.jpg','214984',1280,857,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:15:44','wolfgang',0,NULL,NULL),
  (105,4,NULL,'image/jpeg','tressower-see_4410.jpg','tressower-see_4410.jpg','241595',2560,320,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:09','wolfgang',0,NULL,NULL),
  (106,2,NULL,'image/jpeg','urlaub-mit-freunden-am-tressower-see.jpg','urlaub-mit-freunden-am-tressower-see.jpg','406494',1280,835,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:13:31','wolfgang',0,NULL,NULL),
  (107,9,NULL,'image/jpeg','wismar-alter-hafen.jpg','wismar-alter-hafen.jpg','242223',1280,852,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (108,9,NULL,'image/jpeg','wismar-seehafen.jpg','wismar-seehafen.jpg','135575',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (109,4,NULL,'image/jpeg','wismar-von-kirche-k.jpg','wismar-von-kirche-k.jpg','876192',3912,930,'','2021-05-23 15:10:48','wolfgang','2021-05-23 15:17:09','wolfgang',0,NULL,NULL),
  (110,9,NULL,'image/jpeg','wissemara-kogge-2.jpg','wissemara-kogge-2.jpg','238044',1000,665,'','2021-05-23 15:10:48','wolfgang','2021-05-27 07:50:55','wolfgang',0,NULL,NULL),
  (111,3,NULL,'image/jpeg','alte-traktoren-kreis-agrarmuseum.jpg','alte-traktoren-kreis-agrarmuseum.jpg','223780',1000,665,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (112,6,NULL,'image/jpeg','altes-gutshaus-am-see-4976_1.jpg','altes-gutshaus-am-see-4976_1.jpg','367871',1280,981,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (113,6,NULL,'image/jpeg','altes-gutshaus-am-see-4977_1.jpg','altes-gutshaus-am-see-4977_1.jpg','365019',1280,975,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (114,2,NULL,'image/jpeg','badeplatz-tressower-see.jpg','badeplatz-tressower-see.jpg','620785',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (115,2,NULL,'image/jpeg','badesteg-am-tressower-see.jpg','badesteg-am-tressower-see.jpg','624587',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (116,8,NULL,'image/jpeg','bahnhof_luebeck_ferien-am-tressower-see_6498_k.jpg','bahnhof_luebeck_ferien-am-tressower-see_6498_k.jpg','395893',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (117,6,NULL,'image/jpeg','bg-rose-w.jpg','bg-rose-w.jpg','86476',1600,822,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (118,8,NULL,'image/jpeg','buddenbrookhaus_ferien-am-tressower-see_6480_k.jpg','buddenbrookhaus_ferien-am-tressower-see_6480_k.jpg','433354',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (119,3,NULL,'image/jpeg','cafe-frieda-ostseeinsel_poel-1.jpg','cafe-frieda-ostseeinsel_poel-1.jpg','234698',1280,960,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (120,3,NULL,'image/jpeg','cafe-frieda-ostseeinsel_poel-2.jpg','cafe-frieda-ostseeinsel_poel-2.jpg','198419',1280,960,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (121,3,NULL,'image/jpeg','dorfstrasse_dsc_6577-k.jpg','dorfstrasse_dsc_6577-k.jpg','262637',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (122,2,NULL,'image/jpeg','dsc_2367-k.jpg','dsc_2367-k.jpg','160286',1000,665,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (123,3,NULL,'image/jpeg','dsc_3286-k.jpg','dsc_3286-k.jpg','169214',1000,666,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (124,3,NULL,'image/jpeg','dsc_3640-k.jpg','dsc_3640-k.jpg','165030',1000,666,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (125,3,NULL,'image/jpeg','dsc_3643-k.jpg','dsc_3643-k.jpg','172656',1000,666,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (126,3,NULL,'image/jpeg','dsc_3737.jpg','dsc_3737.jpg','6674986',4209,2800,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (127,6,NULL,'image/jpeg','dsc_4775-k_1.jpg','dsc_4775-k_1.jpg','341652',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (128,3,NULL,'image/jpeg','dsc_6319_kirche_friedrichshagen_2.jpg','dsc_6319_kirche_friedrichshagen_2.jpg','362364',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (129,3,NULL,'image/jpeg','dsc_6328_kirche_friedrichshagen-k.jpg','dsc_6328_kirche_friedrichshagen-k.jpg','303194',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (130,3,NULL,'image/jpeg','dsc_6355_dambecker_see.jpg','dsc_6355_dambecker_see.jpg','352396',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (131,3,NULL,'image/jpeg','dsc_7267.jpg','dsc_7267.jpg','784513',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (132,3,NULL,'image/jpeg','dsc_7268.jpg','dsc_7268.jpg','617127',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (133,3,NULL,'image/jpeg','dsc_8862_1-k.jpg','dsc_8862_1-k.jpg','522384',1280,854,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (134,3,NULL,'image/jpeg','dsc_8865_1-k.jpg','dsc_8865_1-k.jpg','671590',1280,853,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (135,3,NULL,'image/jpeg','dsc_8888-k_1.jpg','dsc_8888-k_1.jpg','1231501',2128,1416,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (136,2,NULL,'image/jpeg','dsc_8915-k_1.jpg','dsc_8915-k_1.jpg','624587',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (137,2,NULL,'image/jpeg','dsc_8928-k_1.jpg','dsc_8928-k_1.jpg','285598',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (138,2,NULL,'image/jpeg','dsc_8930-k_1.jpg','dsc_8930-k_1.jpg','294983',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (139,2,NULL,'image/jpeg','dsc_8937-k_1.jpg','dsc_8937-k_1.jpg','620785',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (140,2,NULL,'image/jpeg','dsc_8938-k_1.jpg','dsc_8938-k_1.jpg','529786',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (141,2,NULL,'image/jpeg','dsc_8939-k_1.jpg','dsc_8939-k_1.jpg','767369',1280,851,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (142,2,NULL,'image/jpeg','dsc_8941-k_1.jpg','dsc_8941-k_1.jpg','713545',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (143,2,NULL,'image/jpeg','dsc_8942-k_1.jpg','dsc_8942-k_1.jpg','815171',1280,853,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (144,2,NULL,'image/jpeg','dsc_8943-k_1.jpg','dsc_8943-k_1.jpg','768796',1280,853,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (145,6,NULL,'image/jpeg','dsc_8945-k_1.jpg','dsc_8945-k_1.jpg','323599',1280,853,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (146,6,NULL,'image/jpeg','dsc_8998-k_1.jpg','dsc_8998-k_1.jpg','615431',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (147,6,NULL,'image/jpeg','dsc_9001-k_1.jpg','dsc_9001-k_1.jpg','563427',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (148,6,NULL,'image/jpeg','dsc_9037-k_1.jpg','dsc_9037-k_1.jpg','575043',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (149,6,NULL,'image/jpeg','dsc_9054-k_1.jpg','dsc_9054-k_1.jpg','705420',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (150,6,NULL,'image/jpeg','dsc_9057-k_1.jpg','dsc_9057-k_1.jpg','728338',1280,853,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (151,3,NULL,'image/jpeg','dsc_9077-k_1.jpg','dsc_9077-k_1.jpg','612281',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (152,3,NULL,'image/jpeg','dsc_9080-k_1.jpg','dsc_9080-k_1.jpg','890519',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (153,3,NULL,'image/jpeg','dsc_9782_1__1.jpg','dsc_9782__1__.jpg','207731',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (154,3,NULL,'image/jpeg','eichenallee_dsc_6539-k.jpg','eichenallee_dsc_6539-k.jpg','158153',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (155,6,NULL,'image/png','eichenallee_karte.png','eichenallee_karte.png','430149',1062,1085,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (156,3,NULL,'image/jpeg','feld_ferien-am-tressower-see_6423_k.jpg','feld_ferien-am-tressower-see_6423_k.jpg','116525',1280,852,'','2021-05-25 16:01:20','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (157,2,NULL,'image/jpeg','ferienwohnung-am-tressower-see-4personen.jpg','ferienwohnung-am-tressower-see-4personen.jpg','442333',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (158,4,NULL,'image/jpeg','ferienwohnung-am-tressower-see-haus.jpg','ferienwohnung-am-tressower-see-haus.jpg','215631',1280,340,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:07:28','wolfgang',0,'',''),
  (159,4,NULL,'image/jpeg','ferienwohnung-am-tressower-see.jpg','ferienwohnung-am-tressower-see.jpg','139230',1280,341,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:07:28','wolfgang',0,'',''),
  (160,2,NULL,'image/jpeg','ferienwohnung_1_ostsee.jpg','ferienwohnung_1_ostsee.jpg','713545',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (161,2,NULL,'image/jpeg','ferienwohnung_2_ostsee.jpg','ferienwohnung_2_ostsee.jpg','767369',1280,851,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (162,7,NULL,'image/jpeg','ferien_am_see_museumsschiff.jpg','ferien_am_see_museumsschiff.jpg','854359',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (163,7,NULL,'image/jpeg','ferien_am_see_ankerwinde.jpg','ferien_am_see__ankerwinde.jpg','801924',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (164,7,NULL,'image/jpeg','ferien_am_see_ausstellung_museumsschiff.jpg','ferien_am_see__ausstellung_museumsschiff.jpg','1035500',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (165,7,NULL,'image/jpeg','ferien_am_see_funkraum_schiffsmuseum.jpg','ferien_am_see__funkraum_schiffsmuseum.jpg','1051077',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (166,7,NULL,'image/jpeg','ferien_am_see_rostock.jpg','ferien_am_see__rostock.jpg','818588',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (167,7,NULL,'image/jpeg','ferien_am_see_rostock_schiffsmuseum.jpg','ferien_am_see__rostock_schiffsmuseum.jpg','1332427',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (168,7,NULL,'image/jpeg','ferien_am_see_schiffsmuseum_rostock.jpg','ferien_am_see__schiffsmuseum_rostock.jpg','991061',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:48:37','wolfgang',0,'',''),
  (169,2,NULL,'image/jpeg','ferien_mit_hund_dsc_6206.jpg','ferien_mit_hund_dsc_6206.jpg','427465',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (170,2,NULL,'image/jpeg','ferien_mit_hund_dsc_6212.jpg','ferien_mit_hund_dsc_6212.jpg','386637',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (171,1,NULL,'image/jpeg','fewo3-k_1.jpg','fewo3-k_1.jpg','342563',1280,851,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:49','wolfgang',0,'',''),
  (172,1,NULL,'image/jpeg','gr_fewo_wohnzimmer.jpg','gr_fewo_wohnzimmer.jpg','170519',638,480,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:49','wolfgang',0,'',''),
  (173,9,NULL,'image/jpeg','hansestadt_wismar_an_der_ostsee_von_oben_dsc_5042_2_k.jpg','hansestadt_wismar_an_der_ostsee_von_oben_dsc_5042_2_k.jpg','445396',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:50:55','wolfgang',0,'',''),
  (174,8,NULL,'image/jpeg','holstentor_dsc_6495_k.jpg','holstentor_dsc_6495_k.jpg','316448',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (175,8,NULL,'image/jpeg','holstentor_ferien-am-tressower-see_6438_k.jpg','holstentor_ferien-am-tressower-see_6438_k.jpg','88393',1280,835,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (176,8,NULL,'image/jpeg','holstentor_luebeck_ferien-am-tressower-see_6456.jpg','holstentor_luebeck_ferien-am-tressower-see_6456.jpg','527516',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (177,6,NULL,'image/jpeg','karte-bg-w.jpg','karte-bg-w.jpg','116356',2500,1200,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (178,6,NULL,'image/jpeg','karte.jpg','karte.jpg','1006564',1497,1026,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (179,6,NULL,'image/jpeg','kinder-lassen-drachen-steigen.jpg','kinder-lassen-drachen-steigen.jpg','615431',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (180,3,NULL,'image/jpeg','kirche_friedrichshagen_dsc_6569_bearb.jpg','kirche_friedrichshagen_dsc_6569_bearb.jpg','139932',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (181,6,NULL,'image/jpeg','klirrendes-eis-auf-dem-tressower-see.jpg','klirrendes-eis-auf-dem-tressower-see.jpg','583369',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (182,1,NULL,'image/jpeg','kl_fewo_wohnzimmer.jpg','kl_fewo_wohnzimmer.jpg','188888',640,477,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:49','wolfgang',0,'',''),
  (183,3,NULL,'image/jpeg','landschaft_dsc_6559.jpg','landschaft_dsc_6559.jpg','108575',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:10','wolfgang',0,'',''),
  (184,3,NULL,'image/jpeg','landschaft_dsc_6559_buehne.jpg','landschaft_dsc_6559_buehne.jpg','63079',1280,642,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:10','wolfgang',0,'',''),
  (185,4,NULL,'image/jpeg','lubeck-von-petri_pano_ferien-am-tressower-see_k.jpg','lubeck-von-petri_pano_ferien-am-tressower-see_k.jpg','1384417',9344,1743,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:07:28','wolfgang',0,'',''),
  (186,8,NULL,'image/jpeg','luebeck_gasse_ferien-am-tressower-see_6452_k.jpg','luebeck_gasse_ferien-am-tressower-see_6452_k.jpg','123886',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (187,8,NULL,'image/jpeg','luebeck_gasse_ferien-am-tressower-see_6454_k.jpg','luebeck_gasse_ferien-am-tressower-see_6454_k.jpg','137685',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (188,8,NULL,'image/jpeg','luebeck_haus_ferien-am-tressower-see_6457_k.jpg','luebeck_haus_ferien-am-tressower-see_6457_k.jpg','152881',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (189,8,NULL,'image/jpeg','luebeck_trave_ferien-am-tressower-see_6484_k.jpg','luebeck_trave_ferien-am-tressower-see_6484_k.jpg','357209',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (190,8,NULL,'image/jpeg','luebeck_von_oben_ferien-am-tressower-see_6459_k.jpg','luebeck_von_oben_ferien-am-tressower-see_6459_k.jpg','111073',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (191,8,NULL,'image/jpeg','marzipanspeicher_ferien-am-tressower-see_6486_k.jpg','marzipanspeicher_ferien-am-tressower-see_6486_k.jpg','154100',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-27 07:49:43','wolfgang',0,'',''),
  (192,3,NULL,'image/jpeg','ostseesand-in-kinderhand.jpg','ostseesand-in-kinderhand.jpg','671590',1280,853,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:10','wolfgang',0,'',''),
  (193,3,NULL,'image/jpeg','ostseestrand-wohlenberger-wieck.jpg','ostseestrand-wohlenberger-wieck.jpg','522384',1280,854,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:10','wolfgang',0,'',''),
  (194,3,NULL,'image/jpeg','plueschow_ferien-am-tressower-see_6427_k.jpg','plueschow_ferien-am-tressower-see_6427_k.jpg','168133',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (195,3,NULL,'image/jpeg','plueschow_ferien-am-tressower-see_6432_k.jpg','plueschow_ferien-am-tressower-see_6432_k.jpg','70621',1280,852,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (196,6,NULL,'image/jpeg','satellit.jpg','satellit.jpg','627572',1491,1026,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (197,6,NULL,'image/jpeg','satellitenfoto.jpg','satellitenfoto.jpg','138605',934,682,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (199,3,NULL,'image/jpeg','schwungrad-kreis-agrarmuseum-dorf-mecklenburg.jpg','schwungrad-kreis-agrarmuseum-dorf-mecklenburg.jpg','132630',1000,665,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (200,3,NULL,'image/jpeg','sport-am-ostseestrand.jpg','sport-am-ostseestrand.jpg','1231501',2128,1416,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (201,2,NULL,'image/jpeg','tressow-bg-w.jpg','tressow-bg-w.jpg','44052',1600,1167,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (202,4,NULL,'image/jpeg','tressower-see-im-herbst.jpg','tressower-see-im-herbst.jpg','184296',1280,341,'','2021-05-25 16:01:21','wolfgang','2021-05-25 16:07:28','wolfgang',0,'',''),
  (203,6,NULL,'image/jpeg','tressower-see-von-oben.jpg','tressower-see-von-oben.jpg','138605',934,682,'','2021-05-25 16:01:22','wolfgang','2021-05-25 16:08:56','wolfgang',0,'',''),
  (204,2,NULL,'image/jpeg','tressower-see-winter_8.jpg','tressower-see-winter_8.jpg','167077',1000,665,'','2021-05-25 16:01:22','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (205,2,NULL,'image/jpeg','tressower_see_dsc_6583-k.jpg','tressower_see_dsc_6583-k.jpg','115397',1280,852,'','2021-05-25 16:01:22','wolfgang','2021-05-25 16:01:59','wolfgang',0,'',''),
  (206,2,NULL,'image/jpeg','viele-enten-ueberwintern-am-tressower-see.jpg','viele-enten-ueberwintern-am-tressower-see.jpg','533802',1280,854,'','2021-05-25 16:01:22','wolfgang','2021-05-25 16:03:53','wolfgang',0,'',''),
  (207,3,NULL,'image/jpeg','windraeder_dsc_6567-k.jpg','windraeder_dsc_6567-k.jpg','96441',1280,852,'','2021-05-25 16:01:22','wolfgang','2021-05-25 16:06:04','wolfgang',0,'',''),
  (208,10,NULL,'image/jpeg','dsc_1830.jpg','DSC_1830.jpg','113940',1280,852,'','2021-05-29 13:19:03','wolfgang','2021-05-29 13:19:03','wolfgang',0,'',''),
  (209,10,NULL,'image/jpeg','dsc_1470.jpg','DSC_1470.jpg','68113',1280,852,'','2021-05-29 13:50:21','wolfgang','2021-05-29 13:50:21','wolfgang',0,'',''),
  (210,10,NULL,'image/jpeg','dsc_8162_nutria.jpg','DSC_8162_nutria.jpg','231435',1280,854,'','2021-05-29 13:57:57','wolfgang','2021-05-29 13:57:57','wolfgang',0,'',''),
  (211,10,NULL,'image/jpeg','dsc_1019.jpg','DSC_1019.jpg','262196',1280,853,'','2021-05-29 14:23:15','wolfgang','2021-05-29 14:23:15','wolfgang',0,'',''),
  (212,10,NULL,'image/jpeg','dsc_6225.jpg','DSC_6225.jpg','188452',1280,853,'Feldhase','2021-05-29 14:32:51','wolfgang','2021-05-29 14:32:51','wolfgang',0,'',''),
  (213,2,NULL,'image/jpeg','tressower_see_dsc_5398_1.jpg','tressower_see_DSC_5398_1.jpg','173725',1280,852,'','2021-05-29 20:13:52','wolfgang','2021-05-29 20:13:52','wolfgang',0,'',''),
  (214,2,NULL,'image/jpeg','dsc_0985_1.jpg','DSC_0985.jpg','126081',1280,852,'','2021-05-29 20:20:05','wolfgang','2021-05-29 20:20:05','wolfgang',0,'',''),
  (215,2,NULL,'image/jpeg','dsc_5166_1.jpg','DSC_5166.jpg','169417',1280,835,'','2021-05-29 20:24:58','wolfgang','2021-05-29 20:24:58','wolfgang',0,'',''),
  (216,2,NULL,'image/jpeg','dsc_8938_1.jpg','DSC_8938 1.jpg','147301',1280,852,'','2021-05-30 10:34:06','wolfgang','2021-05-30 10:34:06','wolfgang',0,'',''),
  (217,2,NULL,'image/jpeg','dsc_8885_1.jpg','DSC_8885.jpg','109701',1280,852,'','2021-05-30 11:01:11','wolfgang','2021-05-30 11:01:11','wolfgang',0,'',''),
  (218,2,NULL,'image/jpeg','schwaene_und_enten_im_winter_dsc_4052_1.jpg','schwaene_und_enten_im_winter_DSC_4052.jpg','134532',1280,852,'','2021-05-30 11:01:11','wolfgang','2021-05-30 11:01:11','wolfgang',0,'',''),
  (219,2,NULL,'image/jpeg','tressower-see-winter_4_1.jpg','Tressower-See-Winter_4.jpg','156519',1000,665,'','2021-05-30 11:01:11','wolfgang','2021-05-30 11:01:11','wolfgang',0,'',''),
  (220,2,NULL,'image/jpeg','tressower-see-winter_9_1.jpg','Tressower-See-Winter_9.jpg','130237',1000,665,'','2021-05-30 11:01:11','wolfgang','2021-05-30 11:01:11','wolfgang',0,'',''),
  (221,2,NULL,'image/jpeg','februar_am_tressower_see_1387.jpg','februar_am_tressower_see_1387.jpg','171318',1280,852,'Februar am Tressower See','2021-05-30 11:38:15','wolfgang','2021-05-30 11:38:31','wolfgang',0,'',''),
  (222,2,NULL,'image/jpeg','schwan-im-morgenrot-april-dsc_4289.jpg','schwan-im-morgenrot-april-dsc_4289.jpg','442511',1280,852,'','2021-05-30 12:08:34','wolfgang','2021-05-30 12:08:34','wolfgang',0,'',''),
  (223,3,NULL,'image/jpeg','dsc_0836_1.jpg','DSC_0836.jpg','188870',1280,852,'Ferien mit Freunden','2021-05-31 13:15:21','wolfgang','2021-05-31 13:15:21','wolfgang',0,'',''),
  (224,2,NULL,'image/jpeg','dsc_1005_1.jpg','DSC_1005.jpg','258524',1280,852,'Campen im Garten - Ferien am Tressower See','2021-05-31 15:53:59','wolfgang','2021-05-31 15:54:57','wolfgang',0,'',''),
  (225,2,NULL,'image/jpeg','ferien-mit-freunden_dsc_0836.jpg','ferien-mit-freunden_dsc_0836.jpg','187148',1280,852,'Ferien mit Freunden an der Ostsee','2021-05-31 16:00:44','wolfgang','2021-05-31 16:00:44','wolfgang',0,'','');
/*!40000 ALTER TABLE `rex_media` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_media_category`;
CREATE TABLE `rex_media_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(10) unsigned NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revision` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_media_category` WRITE;
/*!40000 ALTER TABLE `rex_media_category` DISABLE KEYS */;
INSERT INTO `rex_media_category` VALUES 
  (1,'Ferienwohnungen',0,'|','2021-05-23 15:11:14','wolfgang','2021-05-23 15:11:14','wolfgang',NULL,0),
  (2,'Haus und Umgebung',0,'|','2021-05-23 15:11:20','wolfgang','2021-05-23 15:11:20','wolfgang',NULL,0),
  (3,'Ziele',0,'|','2021-05-23 15:11:59','wolfgang','2021-05-23 15:11:59','wolfgang',NULL,0),
  (4,'Banner',0,'|','2021-05-23 15:16:31','wolfgang','2021-05-23 15:16:31','wolfgang',NULL,0),
  (5,'Gästebuch',0,'|','2021-05-23 15:17:23','wolfgang','2021-05-23 15:17:23','wolfgang',NULL,0),
  (6,'Sonstiges',0,'|','2021-05-25 16:08:46','wolfgang','2021-05-25 16:08:46','wolfgang',NULL,0),
  (7,'Rostock',3,'|3|','2021-05-27 07:47:10','wolfgang','2021-05-27 07:47:10','wolfgang',NULL,0),
  (8,'Lübeck',3,'|3|','2021-05-27 07:47:14','wolfgang','2021-05-27 07:47:14','wolfgang',NULL,0),
  (9,'Wismar',3,'|3|','2021-05-27 07:47:18','wolfgang','2021-05-27 07:47:18','wolfgang',NULL,0),
  (10,'Blog',0,'|','2021-05-29 13:18:07','wolfgang','2021-05-29 13:18:07','wolfgang',NULL,0);
/*!40000 ALTER TABLE `rex_media_category` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_media_manager_type`;
CREATE TABLE `rex_media_manager_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_media_manager_type` WRITE;
/*!40000 ALTER TABLE `rex_media_manager_type` DISABLE KEYS */;
INSERT INTO `rex_media_manager_type` VALUES 
  (1,1,'rex_mediapool_detail','Zur Darstellung von Bildern in der Detailansicht im Medienpool','2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (2,1,'rex_mediapool_maximized','Zur Darstellung von Bildern im Medienpool wenn maximiert','2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (3,1,'rex_mediapool_preview','Zur Darstellung der Vorschaubilder im Medienpool','2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (4,1,'rex_mediabutton_preview','Zur Darstellung der Vorschaubilder in REX_MEDIA_BUTTON[]s','2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (5,1,'rex_medialistbutton_preview','Zur Darstellung der Vorschaubilder in REX_MEDIALIST_BUTTON[]s','2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (6,0,'teaser','Duplex Teaser','2021-05-25 14:19:25','wolfgang','2021-05-25 16:27:22','wolfgang'),
  (7,0,'teaser_wide','Duplex Teaser','0000-00-00 00:00:00','','2021-05-25 16:28:04','wolfgang'),
  (8,0,'teaser_xwide','Individuelle Teaser','0000-00-00 00:00:00','','2021-05-31 13:49:27','wolfgang');
/*!40000 ALTER TABLE `rex_media_manager_type` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_media_manager_type_effect`;
CREATE TABLE `rex_media_manager_type_effect` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` int(10) unsigned NOT NULL,
  `effect` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` int(10) unsigned NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_media_manager_type_effect` WRITE;
/*!40000 ALTER TABLE `rex_media_manager_type_effect` DISABLE KEYS */;
INSERT INTO `rex_media_manager_type_effect` VALUES 
  (1,1,'resize','{\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_amount\":\"80\",\"rex_effect_filter_blur_radius\":\"8\",\"rex_effect_filter_blur_threshold\":\"3\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"200\",\"rex_effect_resize_height\":\"200\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"not_enlarge\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"}}',1,'2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (2,2,'resize','{\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_amount\":\"80\",\"rex_effect_filter_blur_radius\":\"8\",\"rex_effect_filter_blur_threshold\":\"3\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"600\",\"rex_effect_resize_height\":\"600\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"not_enlarge\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"}}',1,'2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (3,3,'resize','{\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_amount\":\"80\",\"rex_effect_filter_blur_radius\":\"8\",\"rex_effect_filter_blur_threshold\":\"3\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"80\",\"rex_effect_resize_height\":\"80\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"not_enlarge\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"}}',1,'2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (4,4,'resize','{\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_amount\":\"80\",\"rex_effect_filter_blur_radius\":\"8\",\"rex_effect_filter_blur_threshold\":\"3\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"246\",\"rex_effect_resize_height\":\"246\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"not_enlarge\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"}}',1,'2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (5,5,'resize','{\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_amount\":\"80\",\"rex_effect_filter_blur_radius\":\"8\",\"rex_effect_filter_blur_threshold\":\"3\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"246\",\"rex_effect_resize_height\":\"246\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"not_enlarge\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"}}',1,'2021-04-09 12:11:40','backend','2021-04-09 12:11:40','backend'),
  (8,6,'resize','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"600\",\"rex_effect_resize_height\":\"400\",\"rex_effect_resize_style\":\"minimum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',1,'2021-05-25 14:25:16','wolfgang','2021-05-25 14:25:16','wolfgang'),
  (9,6,'crop','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"600\",\"rex_effect_crop_height\":\"400\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"\",\"rex_effect_resize_height\":\"\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',2,'2021-05-25 14:25:25','wolfgang','2021-05-25 14:25:25','wolfgang'),
  (10,7,'resize','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"600\",\"rex_effect_resize_height\":\"300\",\"rex_effect_resize_style\":\"minimum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',1,'2021-05-25 16:27:32','wolfgang','2021-05-25 16:27:58','wolfgang'),
  (11,7,'crop','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"600\",\"rex_effect_crop_height\":\"300\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"\",\"rex_effect_resize_height\":\"\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',2,'2021-05-25 16:27:32','wolfgang','2021-05-25 16:28:04','wolfgang'),
  (12,8,'resize','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"\",\"rex_effect_crop_height\":\"\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"900\",\"rex_effect_resize_height\":\"300\",\"rex_effect_resize_style\":\"minimum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',1,'2021-05-31 13:48:38','wolfgang','2021-05-31 13:49:21','wolfgang'),
  (13,8,'crop','{\"rex_effect_rounded_corners\":{\"rex_effect_rounded_corners_topleft\":\"\",\"rex_effect_rounded_corners_topright\":\"\",\"rex_effect_rounded_corners_bottomleft\":\"\",\"rex_effect_rounded_corners_bottomright\":\"\"},\"rex_effect_workspace\":{\"rex_effect_workspace_width\":\"\",\"rex_effect_workspace_height\":\"\",\"rex_effect_workspace_hpos\":\"left\",\"rex_effect_workspace_vpos\":\"top\",\"rex_effect_workspace_set_transparent\":\"colored\",\"rex_effect_workspace_bg_r\":\"\",\"rex_effect_workspace_bg_g\":\"\",\"rex_effect_workspace_bg_b\":\"\"},\"rex_effect_crop\":{\"rex_effect_crop_width\":\"900\",\"rex_effect_crop_height\":\"300\",\"rex_effect_crop_offset_width\":\"\",\"rex_effect_crop_offset_height\":\"\",\"rex_effect_crop_hpos\":\"center\",\"rex_effect_crop_vpos\":\"middle\"},\"rex_effect_insert_image\":{\"rex_effect_insert_image_brandimage\":\"\",\"rex_effect_insert_image_hpos\":\"left\",\"rex_effect_insert_image_vpos\":\"top\",\"rex_effect_insert_image_padding_x\":\"-10\",\"rex_effect_insert_image_padding_y\":\"-10\"},\"rex_effect_rotate\":{\"rex_effect_rotate_rotate\":\"0\"},\"rex_effect_filter_colorize\":{\"rex_effect_filter_colorize_filter_r\":\"\",\"rex_effect_filter_colorize_filter_g\":\"\",\"rex_effect_filter_colorize_filter_b\":\"\"},\"rex_effect_image_properties\":{\"rex_effect_image_properties_jpg_quality\":\"\",\"rex_effect_image_properties_png_compression\":\"\",\"rex_effect_image_properties_webp_quality\":\"\",\"rex_effect_image_properties_interlace\":null},\"rex_effect_filter_brightness\":{\"rex_effect_filter_brightness_brightness\":\"\"},\"rex_effect_flip\":{\"rex_effect_flip_flip\":\"X\"},\"rex_effect_image_format\":{\"rex_effect_image_format_convert_to\":\"webp\"},\"rex_effect_filter_contrast\":{\"rex_effect_filter_contrast_contrast\":\"\"},\"rex_effect_filter_sharpen\":{\"rex_effect_filter_sharpen_amount\":\"80\",\"rex_effect_filter_sharpen_radius\":\"0.5\",\"rex_effect_filter_sharpen_threshold\":\"3\"},\"rex_effect_resize\":{\"rex_effect_resize_width\":\"\",\"rex_effect_resize_height\":\"\",\"rex_effect_resize_style\":\"maximum\",\"rex_effect_resize_allow_enlarge\":\"enlarge\"},\"rex_effect_filter_blur\":{\"rex_effect_filter_blur_repeats\":\"10\",\"rex_effect_filter_blur_type\":\"gaussian\",\"rex_effect_filter_blur_smoothit\":\"\"},\"rex_effect_mirror\":{\"rex_effect_mirror_height\":\"\",\"rex_effect_mirror_opacity\":\"100\",\"rex_effect_mirror_set_transparent\":\"colored\",\"rex_effect_mirror_bg_r\":\"\",\"rex_effect_mirror_bg_g\":\"\",\"rex_effect_mirror_bg_b\":\"\"},\"rex_effect_header\":{\"rex_effect_header_download\":\"open_media\",\"rex_effect_header_cache\":\"no_cache\",\"rex_effect_header_filename\":\"filename\"},\"rex_effect_convert2img\":{\"rex_effect_convert2img_convert_to\":\"jpg\",\"rex_effect_convert2img_density\":\"150\",\"rex_effect_convert2img_color\":\"\"},\"rex_effect_mediapath\":{\"rex_effect_mediapath_mediapath\":\"\"}}',2,'2021-05-31 13:48:38','wolfgang','2021-05-31 13:49:27','wolfgang');
/*!40000 ALTER TABLE `rex_media_manager_type_effect` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_metainfo_field`;
CREATE TABLE `rex_metainfo_field` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` int(10) unsigned NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_id` int(10) unsigned DEFAULT NULL,
  `default` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `params` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `validate` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `callback` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `restrictions` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `templates` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_metainfo_field` WRITE;
/*!40000 ALTER TABLE `rex_metainfo_field` DISABLE KEYS */;
INSERT INTO `rex_metainfo_field` VALUES 
  (1,'translate:online_from','art_online_from',1,'',10,'',NULL,NULL,NULL,'','2021-05-25 09:57:35','wolfgang','2021-05-25 09:57:35','wolfgang',NULL),
  (2,'translate:online_to','art_online_to',2,'',10,'',NULL,NULL,NULL,'','2021-05-25 09:57:35','wolfgang','2021-05-25 09:57:35','wolfgang',NULL),
  (3,'translate:description','art_description',3,'',2,'',NULL,NULL,NULL,'','2021-05-25 09:57:35','wolfgang','2021-05-25 09:57:35','wolfgang',NULL),
  (4,'translate:pool_file_description','med_description',1,'',2,'',NULL,NULL,NULL,'','2021-05-25 09:57:49','wolfgang','2021-05-25 09:57:49','wolfgang',NULL),
  (5,'translate:pool_file_copyright','med_copyright',2,'',1,'',NULL,NULL,NULL,'','2021-05-25 09:57:49','wolfgang','2021-05-25 09:57:49','wolfgang',NULL),
  (6,'Teaserbild','art_teaser_img',4,'',6,'','',NULL,'',NULL,'2021-05-25 09:59:05','wolfgang','2021-05-25 09:59:05','wolfgang',NULL),
  (7,'Teasertext','art_teaser_text',5,'class=\"tinyMCE-headline\"',2,'','',NULL,'',NULL,'2021-05-25 14:27:43','wolfgang','2021-05-25 14:27:43','wolfgang',NULL),
  (8,'Menütyp','cat_menutype',1,'',3,'1','1:Hauptnavigation|2:Metanavigation',NULL,'',NULL,'2021-05-29 09:40:17','wolfgang','2021-05-29 09:40:17','wolfgang',NULL);
/*!40000 ALTER TABLE `rex_metainfo_field` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_metainfo_type`;
CREATE TABLE `rex_metainfo_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dbtype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dblength` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_metainfo_type` WRITE;
/*!40000 ALTER TABLE `rex_metainfo_type` DISABLE KEYS */;
INSERT INTO `rex_metainfo_type` VALUES 
  (1,'text','text',0),
  (2,'textarea','text',0),
  (3,'select','varchar',255),
  (4,'radio','varchar',255),
  (5,'checkbox','varchar',255),
  (6,'REX_MEDIA_WIDGET','varchar',255),
  (7,'REX_MEDIALIST_WIDGET','text',0),
  (8,'REX_LINK_WIDGET','varchar',255),
  (9,'REX_LINKLIST_WIDGET','text',0),
  (10,'date','text',0),
  (11,'datetime','text',0),
  (12,'legend','text',0),
  (13,'time','text',0);
/*!40000 ALTER TABLE `rex_metainfo_type` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_module`;
CREATE TABLE `rex_module` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `output` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revision` int(10) unsigned NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_module` WRITE;
/*!40000 ALTER TABLE `rex_module` DISABLE KEYS */;
INSERT INTO `rex_module` VALUES 
  (1,'Buchungskalender - Kalender','<?php\r\n\r\n// dump(rex_config::get(\'buchungskalender\',\'summary_page\'));\r\n\r\n\r\n$booking = rex_session(\'buka_booking\',\'array\');\r\n// dump($booking);\r\n\r\n$var1 = rex_var::toArray(\"REX_VALUE[1]\");\r\n\r\n$start_year = min([buka_booking::get_min_year(), date(\'Y\') - 2]);\r\n$end_year = max([buka_booking::get_max_year(), date(\'Y\') + 2]);\r\n// dump($start_year);\r\n// dump($end_year);\r\n\r\n$cal = new buka_cal();\r\n$cal->maxBookingYear = date(\'Y\', buka_booking::get_end_time());\r\n$cal->maxBookingMonth = date(\'m\', buka_booking::get_end_time());\r\n$cal->objectId = $var1[\'object_id\'];\r\n\r\n$cal->set_start_date();\r\n$cal->set_bookings();\r\n\r\n$object = buka_objects::get_object_for_id($var1[\'object_id\']);\r\n\r\n\r\n$row_start_12 = \'<div uk-grid class=\"uk-child-width-1-1@s\"><div>\';\r\n$row_start_6 = \'<div uk-grid class=\"uk-child-width-1-2@s\"><div>\';\r\n$row_start_3 = \'<div uk-grid><div class=\"uk-width-1-4@m\">\';\r\n$next_col_3 = \'</div><div class=\"uk-width-1-4@m\">\';\r\n$next_col_6 = \'</div><div class=\"uk-width-1-2@s\">\';\r\n$next_col_9 = \'</div><div class=\"uk-width-3-4@m\">\';\r\n$row_end = \'</div></div>\';\r\n$div_end = \'</div>\';\r\n\r\n$hidden_start = \'<div style=\"display: none\">\';\r\n\r\n$yform = new rex_yform();\r\n$yform->setObjectparams(\'form_ytemplate\',\'uikit,bootstrap,classic\');\r\n$yform->setObjectparams(\'form_action\', rex_getUrl());\r\n$yform->setObjectparams(\'error_class\', \'uk-form-danger has-error\');\r\n$yform->setObjectparams(\'form_class\', \'uk-form rex-yform\');\r\n\r\n// $yform->setObjectparams(\'form_showformafterupdate\',1);\r\n// $yform->setObjectparams(\'debug\',true);\r\n\r\n$yform->setValueField(\'hidden\', [\'bookingdate\', date(\'Y-m-d H:i:s\')]);\r\n$yform->setValueField(\'hidden\', [\'status\', \'confirmed\']);\r\n$yform->setValueField(\'hidden\', [\'object_id\', $cal->objectId]);\r\n$yform->setValueField(\'hidden\', [\'last_art_id\', rex_article::getCurrentId()]);\r\n\r\n$yform->setValueField(\'html\', [\'\', $hidden_start]);\r\n$yform->setValueField(\'text\', [\'datestart\', \'\', $booking[\'datestart\'] ?? \'\', \'\', [\'type\' => \'hidden\', \'id\' => \'datestart\']]);\r\n$yform->setValueField(\'text\', [\'dateend\', \'\', $booking[\'dateend\'] ?? \'\', \'\', [\'type\' => \'hidden\', \'id\' => \'dateend\']]);\r\n\r\n// $yform->setValueField(\'html\', [\'\',\'<input type=\"hidden\" id=\"datestart\" name=\"datestart\" value=\"\'.($booking[\'datestart\'] ?? \'\').\'\" />\']);\r\n// $yform->setValueField(\'html\', [\'\',\'<input type=\"hidden\" id=\"dateend\" name=\"dateend\" value=\"\'.($booking[\'dateend\'] ?? \'\').\'\" />\']);\r\n\r\n// $yform->setValueField(\'hidden\', [\'datestart\', \'\', \'REQUEST\', \'\', [\'id\' => \'datestart\']]);\r\n// $yform->setValueField(\'hidden\', [\'dateend\', \'\',\'REQUEST\', \'\',[\'id\' => \'dateend\']]);\r\n$yform->setValueField(\'html\', [\'\', $div_end]);\r\n\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_3]);\r\n$yform->setValueField(\'text\', [\'date_start\', \'Anreise\', $booking[\'date_start\'] ?? \'\', \'no_db\', [\'id\' => \'date_start\', \'readonly\' => \'readonly\']]);\r\n$yform->setValueField(\'html\', [\'\', $next_col_3]);\r\n$yform->setValueField(\'text\', [\'date_end\', \'Abreise\', $booking[\'date_end\'] ?? \'\', \'no_db\', [\'id\' => \'date_end\', \'readonly\' => \'readonly\']]);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'html\', [\'\', \'<div id=\"bookingform-step2\" class=\"uk-margin-top\">\']);\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_6]);\r\n$yform->setValueField(\'text\', [\'vorname\', \'Vorname*\', $booking[\'vorname\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $next_col_6]);\r\n$yform->setValueField(\'text\', [\'nachname\', \'Nachname*\', $booking[\'nachname\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_12]);\r\n$yform->setValueField(\'text\', [\'anschrift\', \'Anschrift\', $booking[\'anschrift\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n$yform->setValueField(\'html\', [\'\', $row_start_3]);\r\n$yform->setValueField(\'text\', [\'plz\', \'PLZ\', $booking[\'plz\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $next_col_9]);\r\n$yform->setValueField(\'text\', [\'ort\', \'Ort\', $booking[\'ort\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_12]);\r\n$yform->setValueField(\'text\', [\'land\', \'Land\', $booking[\'land\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_6]);\r\n$yform->setValueField(\'text\', [\'telefon\', \'Telefon\', $booking[\'telefon\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $next_col_6]);\r\n$yform->setValueField(\'text\', [\'email\', \'E-Mail\', $booking[\'email\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'html\', [\'\', $row_start_6]);\r\n$yform->setValueField(\'text\', [\'personen\', \'Anzahl Personen\', $booking[\'personen\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $next_col_6]);\r\n$yform->setValueField(\'text\', [\'anreisezeit\', \'Anreisezeit\', $booking[\'anreisezeit\'] ?? \'\']);\r\n$yform->setValueField(\'html\', [\'\', $row_end]);\r\n\r\n$yform->setValueField(\'textarea\', [\'nachricht\', \'Nachricht\', $booking[\'nachricht\'] ?? \'\']);\r\n\r\n$yform->setValueField(\'html\', [\'\', \'<button type=\"button\" id=\"to-step-1\" class=\"uk-button uk-button-default uk-active uk-margin-right uk-margin-remove-left\">Zurück ...</button>\']);\r\n$yform->setValueField(\'submit\', [\'Submit\', \'weiter ...\', \'no_db\',\'\',\'\',\'uk-active\']);\r\n\r\n$yform->setValueField(\'html\', [\'\', \'</div>\']);\r\n\r\n$yform->setValueField(\'html\', [\'\', \'<div id=\"bookingform-step1\">\']);\r\n$yform->setValueField(\'html\', [\'\', $cal->getCalendar()]);\r\nif (rex_request(\'FORM\',\'array\') || $booking) {\r\n    $yform->setValueField(\'html\', [\'\', \'<button type=\"button\" id=\"to-step-2\" class=\"uk-button uk-button-default uk-active\">Weiter ...</button>\']);\r\n} else {\r\n    $yform->setValueField(\'html\', [\'\', \'<button type=\"button\" id=\"to-step-2\" disabled=\"disabled\" class=\"uk-button uk-button-default uk-active\">Weiter ...</button>\']);\r\n}\r\n$yform->setValueField(\'html\', [\'\', \'</div>\']);\r\n\r\n// $yform->setValidateField(\'customfunction\',[\'datestart\',\'buka_booking::save_form1_in_session\',[\'datestart\',\'dateend\']]);\r\n$yform->setValidateField(\'type\',[\'email\',\'email\',\'Bitte geben Sie eine gültige E-Mail Adresse an.\']);\r\n$yform->setValidateField(\'empty\',[\'vorname\',\'Bitte füllen Sie die markierten Felder aus.\']);\r\n$yform->setValidateField(\'empty\',[\'nachname\',\'Bitte füllen Sie die markierten Felder aus.\']);\r\n$yform->setValidateField(\'type\',[\'datestart\',\'date\',\'Bitte geben Sie ein gültiges Datum an.\']);\r\n$yform->setValidateField(\'type\',[\'dateend\',\'date\',\'Bitte geben Sie ein gültiges Datum an.\']);\r\n\r\n\r\n// $yform->setActionField(\'db\', [\'rex_buka_bookings\']);\r\n$yform->setActionField(\'callback\', [\'buka_booking::save_in_session\']);\r\n$yform->setActionField(\'redirect\', [rex_getUrl(rex_config::get(\'buchungskalender\',\'summary_page\'))]);\r\n\r\n?>\r\n\r\n<section class=\"uk-section\">\r\n    <div class=\"uk-container\">\r\n        <div class=\"mind_booking_message\">\r\n            <p><?= rex_config::get(\'buchungskalender\', \'message_min_booking_days\'); ?></p>            \r\n        </div>\r\n        <h1><?= $object->name .\' \' . ($object->reservation == \'book\' ? \'buchen\' : \'anfragen\') ?></h1>\r\n        <?= $yform->getForm() ?>\r\n    </div>\r\n</section>','<?php\r\n$id = 1;\r\n$result = rex_sql::factory()->setTable(rex::getTable(\'buka_objects\'))->select()->getArray();\r\n$objects = [];\r\nforeach ($result as $res) {\r\n    $objects[$res[\'id\']] = $res[\'name\'];\r\n}\r\n// dump($objects);\r\n$mform = new MForm();\r\n\r\n$mform->addSelectField(\"$id.object_id\",$objects,[\'label\'=>\'Objekt auswählen\']);\r\n\r\necho $mform->show();','2021-05-05 13:57:17','wolfgang','2021-06-03 08:14:08','wolfgang',NULL,0,'buchungskalender'),
  (2,'Buchungskalender - Buchung Zusammenfassung','<?php\r\nif (rex::isBackend()) {\r\n    echo rex_view::info(\'Buchung Zusammenfassung Formular - Ausgabe nur im Frontend\');\r\n    return;\r\n}\r\n\r\n$val1 = rex_var::toArray(\"REX_VALUE[1]\");\r\n\r\n$booking = rex_session(\'buka_booking\',\'array\');\r\n\r\nif (count($booking) > 5) {\r\n\r\n    $hash_val = sha1(microtime(true) . rand(111, 999) . \'gehasht\', false);\r\n\r\n    $buka = new buka_cal($booking[\'object_id\']);\r\n    $price = $buka->get_booking_price();\r\n    $booking[\'price\'] = number_format($price[\'price\'], 2, \',\', \"\'\");\r\n    $booking[\'hashval\'] = $hash_val;\r\n\r\n    $email_me = explode(\',\',rex_config::get(\'buchungskalender\',\'email_me\'));\r\n\r\n    // dump($booking);\r\n\r\n    rex_set_session(\'buka_booking\', $booking);\r\n\r\n    $object = buka_objects::get_object_for_id($booking[\'object_id\']);\r\n\r\n\r\n    $fragment = new rex_fragment();\r\n    $fragment->setVar(\'price\', $price);\r\n    $fragment->setVar(\'booking\', $booking);\r\n\r\n\r\n\r\n    $confirm_html = $fragment->parse(\'buka_confirm.php\');\r\n\r\n    $yform = new rex_yform();\r\n\r\n    $yform->setObjectparams(\'form_ytemplate\', \'uikit,bootstrap,classic\');\r\n    $yform->setObjectparams(\'form_action\', rex_getUrl());\r\n    $yform->setObjectparams(\'error_class\', \'uk-form-danger has-error\');\r\n    $yform->setObjectparams(\'form_class\', \'uk-form rex-yform\');\r\n\r\n    $yform->setValueField(\'hidden\', [\'email\', $booking[\'email\']]);\r\n    $yform->setValueField(\'hidden\', [\'vorname\', $booking[\'vorname\']]);\r\n    $yform->setValueField(\'hidden\', [\'nachname\', $booking[\'nachname\']]);\r\n    $yform->setValueField(\'hidden\', [\'date_start\', $booking[\'date_start\']]);\r\n    $yform->setValueField(\'hidden\', [\'date_end\', $booking[\'date_end\']]);\r\n    $yform->setValueField(\'hidden\', [\'object_name\', $object->name]);\r\n    $yform->setValueField(\'hidden\', [\'booking_type\', $object->reservation == \'book\' ? \'Buchung\' : \'Anfrage\']);\r\n    $yform->setValueField(\'hidden\', [\'booking_json\', json_encode($booking)]);\r\n\r\n    $yform->setValueField(\'html\', [\'\', $confirm_html]);\r\n\r\n    $yform->setValueField(\'html\', [\'\', \'<a href=\"\' . rex_getUrl($booking[\'last_art_id\']) . \'\" class=\"uk-button uk-button-default uk-margin-right\">Zurück</a>\']);\r\n\r\n    $yform->setValueField(\'submit\', [\'Submit\', \'Absenden\', \'no_db\', \'\', \'\', \'uk-active\']);\r\n\r\n    $yform->setActionField(\'callback\', [\'buka_booking::save_in_db\']);\r\n    $yform->setActionField(\'tpl2email\', [\'booking_confirm\', \'email\']);\r\n    foreach ($email_me as $email) {\r\n        $yform->setActionField(\'tpl2email\', [\'booking_message\', $email]);\r\n    }\r\n\r\n    $yform->setActionField(\'showtext\', [\'<h1>\' . $val1[\'headline\'] . \'</h1><p>\' . $val1[\'maintext\'] . \'</p>\', \'\', \'\', 1]);\r\n\r\n\r\n\r\n}\r\n\r\n\r\n?>\r\n\r\n\r\n<section class=\"uk-section\">\r\n    <div class=\"uk-container uk-container-small\">\r\n        <?php if (count($booking) > 5) : ?>\r\n            <?= $yform->getForm() ?>\r\n        <?php else : ?>\r\n            <h1>Keine Buchungsdaten vorhanden</h1>\r\n        <?php endif ?>\r\n    </div>\r\n</section>','<?php\r\n// Überschrift headline\r\n// Überschrift 1-2-3\r\n// Text\r\n// Text2\r\n// Bild\r\n// Layout (Bild links, Bild rechts, Bild full)\r\n// kleiner Abstand oben.\r\n\r\n$id = 1;\r\n\r\n$mform = new MForm();\r\n\r\n$mform->addTextAreaField(\"$id.headline\", [\'label\'=>\'Headline\',\'class\'=>\'tinyMCE-headline\']);\r\n$mform->addTextAreaField(\"$id.maintext\", [\'label\'=>\'Haupttext\',\'class\'=>\'tinyMCE-text\']);\r\n\r\necho $mform->show();\r\n\r\n','2021-05-16 21:03:14','wolfgang','2021-06-03 08:13:53','wolfgang',NULL,0,'buchung_zusammenfassung'),
  (3,'Buchungskalender - Text und Bild','<?php\r\n$val1 = rex_var::toArray(\"REX_VALUE[1]\");\r\n$val19 = array_merge([\r\n    \'topmargin\' => \'\',\r\n    \'textwidth\' => \'uk-container-small\',\r\n\r\n    ], rex_var::toArray(\"REX_VALUE[19]\"));\r\n\r\n\r\n\r\n// dump($val1);\r\n// dump($val19);\r\n$media = rex_media::get(\"REX_MEDIA[1]\");\r\n\r\npreg_match_all(\'/__Jahre_seit_(\\d\\d\\d\\d-\\d\\d-\\d\\d)__/\', $val1[\'maintext\'], $matches, PREG_SET_ORDER);\r\n// dump($matches);\r\nif ($matches) {\r\n    foreach ($matches as $match) {\r\n        $birthDate = explode(\"-\", $match[1]);\r\n        //get age from date or birthdate\r\n        $age = (date(\"md\", date(\"U\", mktime(0, 0, 0, $birthDate[1], $birthDate[2], $birthDate[0]))) > date(\"md\") ? ((date(\"Y\") - $birthDate[0]) - 1) : (date(\"Y\") - $birthDate[0]));\r\n        $val1[\'maintext\'] = str_replace($match[0], $age, $val1[\'maintext\']);\r\n    }\r\n}\r\n\r\n?>\r\n<!-- 010  ###  -->\r\n\r\n<?php if ($val19[\'layout\'] == \'small-text-center\') : ?>\r\n\r\n    <div class=\"uk-section <?= isset($val19[\'topmargin\']) && $val19[\'topmargin\'] ? \' small-padding-top\' : \'\' ?>\">\r\n        <div class=\"uk-container uk-container-small text-container\">\r\n            <?php if ($val1[\'headline\']) : ?>\r\n                <h<?= $val19[\'headline_type\'] ?? \'\' ?> class=\"uk-h<?= $val19[\'headline_type\'] ?>\"><?= $val1[\'headline\'] ?></h<?= $val19[\'headline_type\'] ?? \'\' ?>>\r\n            <?php endif ?>\r\n            <?= $val1[\'maintext\'] ?>\r\n            <?php if ($media) : ?>\r\n                <img src=\"<?= rex_media_manager::getUrl(\'full\', $media); ?>\">\r\n            <?php endif ?>\r\n        </div>\r\n    </div>\r\n\r\n<?php else : ?>\r\n    <?php if ($val1[\'headline\'] . $val1[\'maintext\']) : ?>\r\n        <div class=\"uk-section <?= $val19[\'topmargin\'] ?>\">\r\n            <div class=\"uk-container <?= $val19[\'textwidth\'] ?> text-container\">\r\n                <div class=\"\" uk-grid>\r\n                    <div class=\"uk-width-1-1\">\r\n                        <?php if ($val1[\'headline\']) : ?>\r\n                            <h<?= $val19[\'headline_type\'] ?? \'\' ?> class=\"uk-h<?= $val19[\'headline_type\'] ?? \'\' ?>\"><?= $val1[\'headline\'] ?></h<?= $val19[\'headline_type\'] ?? \'\' ?>>\r\n                        <?php endif ?>\r\n                        <?= $val1[\'maintext\'] ?>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    <?php endif ?>\r\n    <?php if ($media) : ?>\r\n        <div class=\"uk-section <?= $val19[\'background\'] ?? \'\' ?> <?= $val19[\'padding\'] ?? \'\' ?> <?= !($val1[\'headline\'] . $val1[\'maintext\']) ? $val19[\'topmargin\'] : \'\' ?> uk-padding-remove-horizontal text-container\">\r\n            <div class=\"uk-container uk-container-wide\">\r\n                <?php if ($val19[\'layout\'] == \'image_left\') : ?>\r\n                    <div uk-grid>\r\n                        <div class=\"uk-width-2-3@m\">\r\n                            <?php if ($media) : ?>\r\n                                <img src=\"<?= rex_media_manager::getUrl(\'half\', $media); ?>\" class=\"uk-image-responsive\">\r\n                            <?php endif ?>\r\n                        </div>\r\n                        <div class=\"uk-width-1-3@m uk-text-small\">\r\n                            <?= $val1[\'sidetext\'] ?>\r\n                        </div>\r\n                    </div>\r\n                <?php elseif ($val19[\'layout\'] == \'image_right\') : ?>\r\n                    <div uk-grid>\r\n                        <div class=\"uk-width-1-3@m uk-text-small\">\r\n                            <?= $val1[\'sidetext\'] ?>\r\n                        </div>\r\n                        <div class=\"uk-width-2-3@m\">\r\n                            <?php if ($media) : ?>\r\n                                <img src=\"<?= rex_media_manager::getUrl(\'half\', $media); ?>\">\r\n                            <?php endif ?>\r\n                        </div>\r\n                    </div>\r\n\r\n                <?php elseif ($val19[\'layout\'] == \'image_wide\') : ?>\r\n                    <?php if ($media) : ?>\r\n                        <img src=\"<?= rex_media_manager::getUrl(\'full\', $media); ?>\" class=\"uk-width-1-1\">\r\n                    <?php endif ?>\r\n                    <?php if ($val1[\'sidetext\']) : ?>\r\n                        <div class=\"uk-text-small uk-margin-small-top bildunterschrift--imagewide\">\r\n                            <?= $val1[\'sidetext\'] ?>\r\n                        </div>\r\n                    <?php endif ?>\r\n                <?php endif ?>\r\n            </div>\r\n        </div>\r\n    <?php endif ?>\r\n<?php endif ?>','<?php\r\n// Überschrift headline\r\n// Überschrift 1-2-3\r\n// Text\r\n// Text2\r\n// Bild\r\n// Layout (Bild links, Bild rechts, Bild full)\r\n// kleiner Abstand oben.\r\n\r\n$id = 1;\r\n\r\n$mform = new MForm();\r\n\r\n$mform->addTextAreaField(\"$id.headline\", [\'label\'=>\'Headline\',\'class\'=>\'tinyMCE-headline\']);\r\n$mform->addSelectField(\"19.headline_type\", [\'1\'=>\'Grosse Überschrift (h1)\',\'2\'=>\'Mittlere Überschrift (h2)\',\'3\'=>\'Kleine Überschrift (h3)\'],[\'label\'=>\'Überschrift Grösse\']);\r\n\r\n$mform->addTextAreaField(\"$id.maintext\", [\'label\'=>\'Haupttext\',\'class\'=>\'tinyMCE-text\']);\r\n\r\n$mform->addFieldset(\'Bild\');\r\n\r\n$mform->addTextAreaField(\"$id.sidetext\", [\'label\'=>\'Bildbeschreibung\',\'class\'=>\'tinyMCE-text sidetext\']);\r\n\r\n$mform->addMediaField(1,[\'label\'=>\'Bild\']);\r\n\r\n\r\n$mform->addFieldset(\'Layout\');\r\n\r\n$mform->addSelectField(\"19.padding\", [\'uk-padding-remove\'=>\'kein Abstand\',\'uk-padding-small\'=>\'kleiner Abstand\',\'uk-padding\'=>\'normaler Abstand\',\'uk-padding-large\'=>\'großer Abstand\'],[\'label\'=>\'Innerer Abstand\']);\r\n\r\n$mform->addSelectField(\"19.background\", [\'uk-section-muted\'=>\'Hellgrauer Hintergrund\',\'uk-section-primary\'=>\'Blauer Hintergrund\',\'uk-section-default\'=>\'Standard\'],[\'label\'=>\'Hintergrund\']);\r\n\r\n$mform->addSelectField(\"19.layout\", [\'image_wide\'=>\'Grosses Bild\',\'image_left\'=>\'Bild links\',\'image_right\'=>\'Bild rechts\',\'small-text-center\'=>\'Schmaler Textblock zentriert\'],[\'label\'=>\'Layout\']);\r\n\r\n$mform->addSelectField(\"19.topmargin\", [\'uk-margin-remove-top\'=>\"kein Abstand zum vorhergehenden Element\",\'uk-margin-small-top\'=>\"kleiner Abstand zum vorhergehenden Element\",\'uk-margin-top\'=>\"normaler Abstand zum vorhergehenden Element\",\'uk-margin-large-top\'=>\"großer Abstand zum vorhergehenden Element\"],[\'label\'=>\'Abstand oben\']);\r\n$mform->addSelectField(\"19.textwidth\", [\'uk-container-small\'=>\"Schmaler Textblock\",\'uk-container-wide\'=>\"Breiter Textblock\"],[\'label\'=>\'Breite des Textblocks\']);\r\n\r\necho $mform->show();\r\n\r\n','2021-05-23 14:15:33','wolfgang','2021-06-03 08:16:13','wolfgang',NULL,0,'title_text_image'),
  (5,'Buchungskalender - Minikalender','<?php\r\n\r\n\r\n$var1 = rex_var::toArray(\"REX_VALUE[1]\");\r\n$object = buka_objects::get_object_for_id($var1[\'object_id\']);\r\nif (!$object) {\r\n    return;\r\n}\r\n\r\n?>\r\n\r\n<section class=\"uk-section\">\r\n    <div class=\"uk-container\">\r\n\r\n        <h3><?= $object->name ?> Belegungskalender</h3>\r\n        <div class=\"minikalender-wrapper\">\r\n            <?= buka_cal::get_mini_calendar($var1[\'object_id\']) ?>\r\n        </div>\r\n        <?php if (\"REX_LINK[2]\") : ?>\r\n            <a class=\"uk-button uk-button-primary uk-margin-right\" href=\"<?= rex_getUrl(\"REX_LINK[2]\") ?>\">Buchungsinformationen</a>\r\n        <?php endif ?>\r\n        <?php if (\"REX_LINK[1]\") : ?>\r\n            <a class=\"uk-button uk-button-primary\" href=\"<?= rex_getUrl(\"REX_LINK[1]\") ?>\"><?= $object->reservation == \'book\' ? \'Direkt buchen\' : \'anfragen\' ?></a>\r\n        <?php endif ?>\r\n\r\n    </div>\r\n</section>','<?php\r\n$id = 1;\r\n$result = rex_sql::factory()->setTable(rex::getTable(\'buka_objects\'))->select()->getArray();\r\n$objects = [];\r\nforeach ($result as $res) {\r\n    $objects[$res[\'id\']] = $res[\'name\'];\r\n}\r\n// dump($objects);\r\n$mform = new MForm();\r\n\r\n$mform->addSelectField(\"$id.object_id\",$objects,[\'label\'=>\'Objekt auswählen\']);\r\n$mform->addLinkField(1,array(\'label\'=>\'Buchungsseite\'));\r\n$mform->addLinkField(2,array(\'label\'=>\'Buchungsinfo\'));\r\n\r\n\r\n\r\necho $mform->show();','2021-05-26 07:55:22','wolfgang','2021-06-03 08:15:20','wolfgang',NULL,0,'minikalender'),
  (6,'Buchungskalender - Preise','<?php\r\n$seasons = buka_season::get_seasons();\r\n// dump($seasons);\r\n$objects = buka_objects::get_objects_with_prices();\r\n// dump($objects);\r\n$cal = new buka_cal();\r\n$cal->season_calendar = true;\r\n$cal->cal_wrapper_class = \'buka-cal-wrapper season-calendar minikalender\';\r\n\r\n\r\n?>\r\n\r\n<section class=\"uk-section uk-padding-remove\">\r\n    <div class=\"uk-container uk-container-wide\">\r\n        <h2>Saisonkalender</h2>\r\n        <?= $cal->getCalendar(); ?>\r\n        <?= $cal->get_season_legend() ?>\r\n    </div>\r\n    <div class=\"uk-container uk-container-small uk-margin-large-top\">\r\n        <?php foreach ($objects as $object) : ?>\r\n            <h2><?= $object->name ?></h2>\r\n            <?php foreach ($seasons as $season) : ?>\r\n                <h3><?= $season->name ?></h3>\r\n                <table class=\"uk-table uk-table-small uk-table-striped\">\r\n                    <?php foreach ($object->prices as $price) : ?>\r\n                        <?php if ($price->season_id != $season->id) {\r\n                            continue;\r\n                        } ?>\r\n                        <?php if ($price->nightscount == 1) : ?>\r\n                            <tr>\r\n                                <td>3 Nächte (Mindestbuchungszeit)</td>\r\n                                <td class=\"uk-text-right\"><?= number_format($price->price * 3 + $object->grundpreis, 2, \',\', \'.\') ?> EUR</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Weitere Nacht</td>\r\n                                <td class=\"uk-text-right\"><?= number_format($price->price, 2, \',\', \'.\') ?> EUR</td>\r\n                            </tr>\r\n                        <?php else : ?>\r\n                            <tr>\r\n                                <td><?= $price->nightscount ?> Nächte</td>\r\n                                <td class=\"uk-text-right\"><?= number_format($price->price * $price->nightscount + $object->grundpreis, 2, \',\', \'.\') ?> EUR</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Weitere Nacht</td>\r\n                                <td class=\"uk-text-right\"><?= number_format($price->price, 2, \',\', \'.\') ?> EUR</td>\r\n                            </tr>\r\n\r\n                        <?php endif ?>\r\n                    <?php endforeach ?>\r\n                </table>\r\n            <?php endforeach ?>\r\n        <?php endforeach ?>\r\n\r\n\r\n\r\n        <?php /* Nette Idee ;-) foreach ($seasons as $season) : ?>\r\n            <h4><?= $season->name ?></h4>\r\n            <?php if (!json_decode($season->dates)) : ?>\r\n                <p>Übrige Zeit</p>\r\n                <?php continue; ?>\r\n            <?php endif ?>\r\n            <?php foreach (json_decode($season->dates) as $date) : ?>\r\n                <?php if ($date[2] < date(\'Y-m-d\')) continue; ?>\r\n                <p class=\"uk-margin-remove\"><?= buka_cal::reformat_date($date[1]) ?> - <?= buka_cal::reformat_date($date[2]) ?> (<?= $date[0] ?>)</p>\r\n            <?php endforeach ?>\r\n\r\n            <?php // dump(json_decode($season->dates,true)); ?>\r\n        <?php endforeach */ ?>\r\n\r\n    </div>\r\n</section>','','2021-05-26 20:38:05','wolfgang','2021-06-03 08:15:54','wolfgang',NULL,0,'preise'),
  (8,'Buchungskalender - E-Mail Bestätigung','<?php\r\nif (rex_request(\'success\',\'int\') == 1) {\r\n    $text = rex_session(\'buka_message\');\r\n} else {\r\n    $text = \'Fehler\';    \r\n}\r\nrex_set_session(\'buka_message\',\'\');\r\n?>\r\n<section class=\"uk-section\">\r\n    <div class=\"uk-container uk-container-small\">\r\n        <h1>Bestätigungslink wurde aktiviert</h1>\r\n        <p><?= $text ?></p>\r\n    </div>\r\n</section>','','2021-05-30 21:43:28','wolfgang','2021-06-03 08:14:54','wolfgang',NULL,0,'emailconfirm'),
  (10,'Buchungskalender ical Ausgabe','<?php\r\nif (rex::isBackend()) {\r\n    echo rex_view::info(\'Ical Kalenderausgabe - Ausgabe nur im Frontend\');\r\n    return;\r\n}\r\n$var1 = rex_var::toArray(\"REX_VALUE[1]\");\r\necho buka_ical::send_ical_data_for_obj($var1[\'object_id\']);\r\n?>','<?php\r\n$id = 1;\r\n$result = rex_sql::factory()->setTable(rex::getTable(\'buka_objects\'))->select()->getArray();\r\n$objects = [];\r\nforeach ($result as $res) {\r\n    $objects[$res[\'id\']] = $res[\'name\'];\r\n}\r\n// dump($objects);\r\n$mform = new MForm();\r\n\r\n$mform->addSelectField(\"$id.object_id\",$objects,[\'label\'=>\'Objekt auswählen\']);\r\n\r\necho $mform->show();','2021-05-31 20:07:38','wolfgang','2021-06-03 08:15:07','wolfgang',NULL,0,'icalout');
/*!40000 ALTER TABLE `rex_module` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_module_action`;
CREATE TABLE `rex_module_action` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `module_id` int(10) unsigned NOT NULL,
  `action_id` int(10) unsigned NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_template`;
CREATE TABLE `rex_template` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revision` int(11) NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_template` WRITE;
/*!40000 ALTER TABLE `rex_template` DISABLE KEYS */;
INSERT INTO `rex_template` VALUES 
  (1,'00 . Default','<?php\r\n$article = rex_article::getCurrent();\r\n\r\n$PATH = explode(\'|\',trim(rex_article::getCurrent()->getPath(),\'|\'));\r\n\r\n$mainnav = new awnav();\r\n$mainnav->metaField = \'cat_menutype\';\r\n$mainnav->metaValue = 1;\r\n$mainnav->maxLev = 2;\r\n$mainnav->fullTree = 1;\r\n$mainnav->ulClasses = [\'uk-navbar-nav\',\'uk-nav uk-navbar-dropdown-nav\'];\r\n$mainnav->ulWrapper = [[],[\'<div class=\"uk-navbar-dropdown\">\',\'</div>\']];;\r\n\r\n\r\n$mobilenav = new awnav();\r\n$mobilenav->metaField = \'cat_menutype\';\r\n$mobilenav->metaValue = 1;\r\n$mobilenav->maxLev = 3;\r\n$mobilenav->fullTree = 1;\r\n$mobilenav->dataAttribute = [\'uk-nav=\"multiple: true\"\'];\r\n$mobilenav->ulClasses = [\'uk-nav-parent-icon\',\'uk-nav-sub uk-nav\'];\r\n$mobilenav->hasChildClass = \'\';\r\n\r\n$seo = new rex_yrewrite_seo();\r\n\r\n$current_url = trim(rex::getServer(),\'/\').rex_getUrl();\r\n\r\n?>\r\n<!DOCTYPE html>\r\n<html lang=\"<?= rex_clang::getCurrent()->getCode() ?>\" class=\"no-js\" id=\"top\">\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <?= $seo->getTitleTag(); ?>\r\n    <?= $seo->getHreflangTags(); ?>\r\n    <meta content=\"<?= $article->getValue(\'art_description\') ?: $seo->getDescription() ?>\" name=\"description\" />\r\n\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <!-- css -->\r\n    <?= aw_helper::get_css_tag(\'/assets/addons/buchungskalender/css/buchungskalender.css\'); ?>\r\n    <?= aw_helper::get_css_tag(\'/assets/addons/buchungskalender/frontend/css/style.css\'); ?>\r\n    \r\n    <!-- meta -->\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"mobilenav\" class=\"uk-hidden@l\" uk-modal>\r\n        <button class=\"uk-modal-close-default\" type=\"button\" uk-close=\"ratio: 2\"></button>\r\n        <div class=\"uk-modal-dialog uk-modal-body\">\r\n            <nav class=\"mobilenav\">\r\n                <?= $mobilenav->getNavigation() ?>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"page-head\" uk-scrollspy=\"page-head; offset-top: 100px; repeat: true\" uk-sticky>\r\n        <div class=\"uk-section uk-section-muted uk-padding-remove\">\r\n\r\n            <div class=\"uk-hidden@l nav-toggler\">\r\n                <a class=\"uk-logo mobile-logo\" href=\"<?= rex_article::getSiteStartArticle()->getUrl() ?>\"><img src=\"/assets/addons/buchungskalender/frontend/svg/demoferienwohnung-logo.svg\" alt=\"Demo Ferienwohnung\"></a>\r\n                <a class=\"uk-navbar-toggle uk-align-right uk-text-middle\" href=\"#mobilenav\" uk-toggle=\"\">\r\n                    <span uk-icon=\"icon: menu; ratio: 2\"></span>\r\n                </a>\r\n            </div>\r\n\r\n\r\n            <div class=\"uk-container uk-container-large\">\r\n                <div uk-grid>\r\n\r\n                    <nav class=\"uk-navbar-container uk-navbar-transparent uk-visible@l\" uk-navbar>\r\n                        <a class=\"uk-navbar-item uk-logo\" href=\"<?= rex_article::getSiteStartArticle()->getUrl() ?>\"><img src=\"/assets/addons/buchungskalender/frontend/svg/demoferienwohnung-logo.svg\" alt=\"Demo Ferienwohnung\"></a>\r\n                    </nav>\r\n                    <nav class=\"uk-navbar-container uk-navbar-right uk-navbar-transparent uk-visible@l mainnav\" uk-navbar>\r\n                        <?= $mainnav->getNavigation() ?>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <article class=\"main-content\">\r\n        REX_ARTICLE[]\r\n    </article>\r\n\r\n\r\n    <footer class=\"uk-section uk-section-muted uk-margin-large-top uk-padding-small\">\r\n        <div class=\"uk-container uk-container-large\">\r\n            <div class=\"uk-child-width-1-4@l uk-child-width-1-2@s\" uk-grid>\r\n                <div class=\"uk-text-small\">\r\n                    <a href=\"<?= rex_article::getSiteStartArticle()->getUrl() ?>\">\r\n                        <img src=\"/assets/addons/buchungskalender/frontend/svg/demoferienwohnung-logo.svg\" alt=\"Demo Ferienwohnung\" class=\"footer-logo\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"uk-text-small\">\r\n                    Mustermann<br>\r\n                </div>\r\n                <div class=\"uk-text-small\">\r\n                    Zum schönen Blick 33<br>\r\n                    12345 Irgendwo<br>\r\n                </div>\r\n                <div class=\"uk-text-small\">\r\n                    Telefon 0123456 78910<br>\r\n                    <a href=\"mailto:muster@example.com\">muster@example.com</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </footer>\r\n    <?= aw_helper::get_js_tag(\'/assets/addons/buchungskalender/frontend/js/script.js\') ?>\r\n\r\n</body>\r\n\r\n</html>',1,'2021-05-05 13:45:51','wolfgang','2021-06-03 08:29:32','console','{\"ctype\":[],\"modules\":{\"1\":{\"all\":\"1\"}},\"categories\":{\"all\":\"1\"}}',0,'default'),
  (5,'70 . RAW','REX_ARTICLE[]',1,'2021-05-31 20:15:04','wolfgang','0000-00-00 00:00:00','','{\"ctype\":[],\"modules\":{\"1\":{\"all\":\"1\"}},\"categories\":{\"all\":\"1\"}}',0,'raw');
/*!40000 ALTER TABLE `rex_template` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_user_role`;
CREATE TABLE `rex_user_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `perms` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdate` datetime NOT NULL,
  `createuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  `updateuser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revision` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_yform_email_template`;
CREATE TABLE `rex_yform_email_template` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_from` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_from_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_reply_to` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail_reply_to_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body_html` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachments` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_yform_email_template` WRITE;
/*!40000 ALTER TABLE `rex_yform_email_template` DISABLE KEYS */;
INSERT INTO `rex_yform_email_template` VALUES 
  (9,'booking_confirm','webserver@example.com','Ferienwohnung Alpenblick','info@example.com','Ferienwohnung Alpenblick','Ihre REX_YFORM_DATA[field=\"booking_type\"] der Ferienwohnung Alpenblick','<?php\r\n // $booking = rex_session(\'buka_booking\');\r\n\r\n $booking = json_decode(\"REX_YFORM_DATA[field=\'booking_json\']\",true);\r\n\r\n\r\n $object = buka_objects::get_object_for_id($booking[\'object_id\']);\r\n \r\n?>\r\n\r\nGuten Tag REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]\r\n\r\n<?php if ($object->reservation == \'book\') : ?>\r\n\r\n\r\nVielen Dank für Ihre Reservierung.\r\n\r\nW I C H T I G!\r\n\r\nBitte bestätigen Sie diese Reservierung mit einem Klick auf den folgenden Link:\r\n\r\n\r\n<?= trim(rex::getServer(),\'/\').rex_article::getSiteStartArticle()->getUrl([\'hash\'=>$booking[\'hashval\'],\'email\'=>md5(\"REX_YFORM_DATA[field=\'email\']\"),\'action\'=>\'booking_confirm\'],\'&\'); ?> \r\n\r\nIhre Buchung: <?= $object->name ?> \r\n\r\n<?php else : ?>\r\nIhre Anfrage: <?= $object->name ?> \r\n<?php endif ?>\r\n\r\nAnreisedatum: <?= $booking[\'date_start\'] ?> \r\n\r\nAbreisedatum: <?= $booking[\'date_end\'] ?> \r\n\r\n<?= $booking[\'vorname\'] ?> <?= $booking[\'nachname\'] ?> \r\n\r\n\r\n<?= $booking[\'anschrift\'] ?> \r\n\r\n<?= $booking[\'plz\'] ?> <?= $booking[\'ort\'] ?> \r\n\r\nTelefon: <?= $booking[\'telefon\'] ?> \r\n\r\nE-Mail: <?= $booking[\'email\'] ?> \r\n\r\nPersonen: <?= $booking[\'personen\'] ?> \r\n\r\nAnreisezeit: <?= $booking[\'anreisezeit\'] ?> \r\n\r\nPreis: <?= $booking[\'price\'] ?> \r\n\r\n\r\nNachricht:\r\n<?= $booking[\'nachricht\'] ?> \r\n\r\n\r\n\r\nVielen Dank!','','','2021-06-02 20:50:42'),
  (10,'booking_message','webserver@example.com','REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]','REX_YFORM_DATA[field=\"email\"]','','REX_YFORM_DATA[field=\"booking_type\"] REX_YFORM_DATA[field=\"object_name\"], REX_YFORM_DATA[field=\"date_start\"] - REX_YFORM_DATA[field=\"date_end\"]','<?php\r\n // $booking = rex_session(\'buka_booking\');\r\n\r\n $booking = json_decode(\"REX_YFORM_DATA[field=\'booking_json\']\",true);\r\n\r\n\r\n $object = buka_objects::get_object_for_id($booking[\'object_id\']);\r\n\r\n\r\n?>\r\n\r\n<?php if ($object->reservation == \'book\') : ?>\r\n\r\n\r\nEingegangene Buchung.\r\n\r\n<?= $object->name ?> \r\n\r\n<?php else : ?>\r\n\r\nEingegangene Anfrage.\r\n\r\n<?= $object->name ?> \r\n<?php endif ?>\r\n\r\nAnreisedatum: <?= $booking[\'date_start\'] ?> \r\n\r\nAbreisedatum: <?= $booking[\'date_end\'] ?> \r\n\r\n<?= $booking[\'vorname\'] ?> <?= $booking[\'nachname\'] ?> \r\n\r\n<?= $booking[\'anschrift\'] ?> \r\n\r\n<?= $booking[\'plz\'] ?> <?= $booking[\'ort\'] ?> \r\n\r\nTelefon: <?= $booking[\'telefon\'] ?> \r\n\r\nE-Mail: <?= $booking[\'email\'] ?> \r\n\r\nPersonen: <?= $booking[\'personen\'] ?> \r\n\r\nAnreisezeit: <?= $booking[\'anreisezeit\'] ?> \r\n\r\nPreis: <?= $booking[\'price\'] ?> \r\n\r\n\r\nNachricht:\r\n<?= $booking[\'nachricht\'] ?> \r\n\r\n\r\n','','','2021-06-02 20:51:14'),
  (11,'confirmation_info','webserver@example.com','REX_YFORM_DATA[field=\"vorname\"] REX_YFORM_DATA[field=\"nachname\"]','REX_YFORM_DATA[field=\"email\"]','','Buchung wurde bestätigt - REX_YFORM_DATA[field=\"object_name\"] - REX_YFORM_DATA[field=\"date_start\"] - REX_YFORM_DATA[field=\"date_end\"]','Die Buchung wurde soeben bestätigt.','','','2021-05-31 09:56:05');
/*!40000 ALTER TABLE `rex_yform_email_template` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_yform_field`;
CREATE TABLE `rex_yform_field` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `table_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prio` int(11) NOT NULL,
  `type_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `db_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `list_hidden` tinyint(1) NOT NULL,
  `search` tinyint(1) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `not_required` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_start` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `year_end` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `format` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `widget` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `table` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `field` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `empty_option` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `empty_value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `only_empty` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `show_value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `attributes` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `choices` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `default` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `placeholder` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `columns` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `notice` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `precision` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `scale` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `multiple` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_db` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_label` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `max_size` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `types` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `width` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `html` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `regex` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pattern` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `current_date` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `query` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `values` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rules` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nonce_key` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nonce_referer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sizes` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `messages` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rules_message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `script` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `max` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `infotext_1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `infotext_2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `expanded` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `scope` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `googleapikey` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_yform_field` WRITE;
/*!40000 ALTER TABLE `rex_yform_field` DISABLE KEYS */;
INSERT INTO `rex_yform_field` VALUES 
  (3,'rex_buka_bookings',1,'value','date','date',0,1,'datestart','Startdatum','','2019','2050','DD.MM.YYYY','select','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (4,'rex_buka_bookings',2,'value','date','date',0,1,'dateend','Enddatum','','2019','2050','DD.MM.YYYY','select','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (5,'rex_buka_objects',1,'value','text','varchar(191)',0,1,'name','Name des Objekts','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (6,'rex_buka_bookings',3,'value','be_manager_relation','text',0,1,'object_id','Objekt','','','','','','rex_buka_objects','name','0','1','-- bitte Objekt auswählen --','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (7,'rex_buka_bookings',4,'value','text','varchar(191)',0,1,'vorname','Vorname','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (8,'rex_buka_bookings',5,'value','text','varchar(191)',0,1,'nachname','Nachname','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (9,'rex_buka_bookings',6,'value','text','varchar(191)',1,1,'anschrift','Anschrift','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (10,'rex_buka_bookings',7,'value','text','varchar(191)',0,1,'plz','PLZ','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (11,'rex_buka_bookings',8,'value','text','varchar(191)',0,1,'ort','Ort','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (12,'rex_buka_bookings',9,'value','text','varchar(191)',1,1,'land','Land','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (13,'rex_buka_bookings',10,'value','text','varchar(191)',0,1,'telefon','Telefon','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (14,'rex_buka_bookings',11,'value','text','varchar(191)',0,1,'email','E-Mail','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (15,'rex_buka_bookings',12,'value','text','varchar(191)',1,1,'personen','Personen','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (16,'rex_buka_bookings',13,'value','text','varchar(191)',1,1,'anreisezeit','Anreisezeit','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (17,'rex_buka_bookings',15,'value','datestamp','datetime',1,0,'bookingdate','Buchungsdatum','','','','Y-m-d H:i:s','','','','','','','1','1','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (18,'rex_buka_bookings',16,'value','text','varchar(191)',1,0,'hashval','','','','','','','','','','','','','','{\"type\":\"hidden\"}','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (19,'rex_buka_bookings',17,'value','choice','text',0,1,'status','Status','','','','','','','','','','','','','','Angefragt=asked,Bestätigt=confirmed,Storniert=storno','asked','-- bitte auswählen --','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (20,'rex_buka_bookings',14,'value','textarea','text',1,0,'nachricht','Nachricht','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (21,'rex_buka_bookings',18,'value','text','varchar(191)',1,0,'price','Preis','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (22,'rex_buka_season',1,'value','text','varchar(191)',0,1,'name','Name','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (23,'rex_buka_season',2,'value','prio','int',1,1,'prio','Priorität','','','','','','','','','','','','','','','1','','','name','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (24,'rex_buka_season',3,'value','integer','int',0,1,'minddays','Mindestbuchungsdauer','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (25,'rex_buka_season',4,'value','be_table','text',0,1,'dates','Termine','','','','','','','','','','','','','','','','','Name,Von,Bis','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (26,'rex_buka_season',5,'value','checkbox','tinyint(1)',0,1,'full_week','Ganze Wochen','','','','','','','','','','','','','','','0','','','','Ist diese Checkbox angehakt, ist die Buchung nur für ganze Wochen von Samstag bis Samstag möglich','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (27,'rex_buka_objects',2,'value','checkbox','tinyint(1)',0,1,'combination','Kombinationsobjekt','','','','','','','','','','','','','','','0','','','','Wenn die Checkbox angewählt ist, handelt es sich um die Kombination von mehreren Objekten.','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (28,'rex_buka_objects',3,'value','be_manager_relation','text',0,1,'object_ids','Objekte','','','','','','rex_buka_objects','name','1','1','','','','{\"class\":\"selectpicker\"}','','','','','','Kombinierte Objekte auswählen','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (29,'rex_buka_objects',4,'value','number','',0,0,'grundpreis','Grundpreis','','','','','','','','','','','','','','','','','','','Grundpreis für Reinigung, Bettwäsche usw.','10','2','€','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (30,'rex_buka_price',2,'value','be_manager_relation','text',0,1,'object_id','Objekt','','','','','','rex_buka_objects','name','0','0','Bitte auswählen.','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (31,'rex_buka_price',3,'value','be_manager_relation','text',0,1,'season_id','Saison','','','','','','rex_buka_season','name','0','0','Bitte auswählen.','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (32,'rex_buka_price',4,'value','integer','int',0,1,'nightscount','Anzahl Übernachtungen','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (33,'rex_buka_price',5,'value','number','',0,0,'price','Preis pro Übernachtung','','','','','','','','','','','','','','','','','','','','10','2','€','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (34,'rex_buka_price',1,'value','prio','int',1,1,'prio','Priorität','','','','','','','','','','','','','','','','','','object_id,season_id,nightscount','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (60,'rex_buka_objects',5,'value','text','varchar(191)',0,1,'ical_sync_link','Ical Synchronisationslink','','','','','','','','','','','','','','','','','','','z.B. <code>https://www.airbnb.de/calendar/ical/5515082.ics?s=165a12a0a08eb81c5f3923e83408a3e8</code> - um externe Buchungen einzulesen.','','','','','','','','','','0','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (61,'rex_buka_objects',6,'value','choice','text',1,1,'status','Status','','','','','','','','','','','','','','online=1,offline=0','','','','','','','','','','0','','','','','0','','','','','','','','','','','','','','','','','','','','','','','','','0','',''),
  (62,'rex_buka_season',6,'value','text','varchar(191)',0,1,'color','Farbe','','','','','','','','','','','','','','','','','','','Bitte den Farbwert als Hexwert <code>#aabbcc</code> oder Rgb(a) <code>rgba(0,255,255,.5)</code> eingeben.','','','','','','','','','','0','','','','','','','','','','','','','','','','','','','','','','','','','','',''),
  (63,'rex_buka_objects',7,'value','choice','text',0,1,'reservation','Reservierungseinstellung','','','','','','','','','','','','','','Reservierung=reservation,Buchen=book','book','','','','Der Eintrag bestimmt, ob im Frontend direkt gebucht oder nur reserviert werden kann.','','','','','0','','','','','0','','','','','','','','','','','','','','','','','','','','','','','','','0','','');
/*!40000 ALTER TABLE `rex_yform_field` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_yform_history`;
CREATE TABLE `rex_yform_history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `table_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataset_id` int(11) NOT NULL,
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dataset` (`table_name`,`dataset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_yform_history_field`;
CREATE TABLE `rex_yform_history_field` (
  `history_id` int(11) NOT NULL,
  `field` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`history_id`,`field`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_yform_table`;
CREATE TABLE `rex_yform_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` tinyint(1) NOT NULL,
  `table_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `list_amount` int(11) NOT NULL,
  `list_sortfield` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'id',
  `list_sortorder` enum('ASC','DESC') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ASC',
  `prio` int(11) NOT NULL,
  `search` tinyint(1) NOT NULL,
  `hidden` tinyint(1) NOT NULL,
  `export` tinyint(1) NOT NULL,
  `import` tinyint(1) NOT NULL,
  `mass_deletion` tinyint(1) NOT NULL,
  `mass_edit` tinyint(1) NOT NULL,
  `schema_overwrite` tinyint(1) NOT NULL DEFAULT 1,
  `history` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `table_name` (`table_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_yform_table` WRITE;
/*!40000 ALTER TABLE `rex_yform_table` DISABLE KEYS */;
INSERT INTO `rex_yform_table` VALUES 
  (1,1,'rex_buka_bookings','Buchungskalender Buchungen','Buchungskalender Buchungen',50,'id','DESC',1,1,0,1,1,1,1,1,0),
  (2,1,'rex_buka_objects','Buchungskalender Objekte','',50,'id','ASC',2,1,0,0,0,0,0,1,0),
  (3,1,'rex_buka_season','Buchungskalender Saisons','',50,'prio','ASC',3,1,0,0,0,0,0,1,0),
  (4,1,'rex_buka_price','Buchungskalender Preise','',50,'prio','ASC',4,1,0,0,0,0,0,1,0);
/*!40000 ALTER TABLE `rex_yform_table` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_yrewrite_alias`;
CREATE TABLE `rex_yrewrite_alias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alias_domain` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `domain_id` int(11) NOT NULL,
  `clang_start` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
DROP TABLE IF EXISTS `rex_yrewrite_domain`;
CREATE TABLE `rex_yrewrite_domain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `domain` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mount_id` int(11) NOT NULL,
  `start_id` int(11) NOT NULL,
  `notfound_id` int(11) NOT NULL,
  `clangs` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clang_start` int(11) NOT NULL,
  `clang_start_auto` tinyint(1) NOT NULL,
  `clang_start_hidden` tinyint(1) NOT NULL,
  `robots` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_scheme` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auto_redirect` tinyint(1) NOT NULL,
  `auto_redirect_days` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `rex_yrewrite_domain` WRITE;
/*!40000 ALTER TABLE `rex_yrewrite_domain` DISABLE KEYS */;
INSERT INTO `rex_yrewrite_domain` VALUES 
  (1,'buchungskalender.localhost',0,5,3,'',1,0,1,'User-agent: *\r\nDisallow:','%T / %SN','',0,0);
/*!40000 ALTER TABLE `rex_yrewrite_domain` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `rex_yrewrite_forward`;
CREATE TABLE `rex_yrewrite_forward` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `domain_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `article_id` int(11) NOT NULL,
  `clang` int(11) NOT NULL,
  `extern` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `movetype` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiry_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SET FOREIGN_KEY_CHECKS = 1;
