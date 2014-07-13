/**
 * Array with some info on Moscow Metro lines and stations.
 *  INFOMST    {fkeystation:[opening_date,depth]}
 *  INFOMLINES {fkeyline:[label]}
 * From ru.wikipedia.org.
 */
var INFOMST={
's1_Ulitsa_Podbelskogo':['1 августа 1990','−8 м'],
's1_Cherkizovskaya':['1 августа 1990','−9 м'],
's1_Preobrazhenskaya_Ploshchad':['31 декабря 1965','−8 м'],
's1_1_Sokolniki':['15 мая 1935','−9 м'],
's1_Krasnoselskaya':['15 мая 1935','−8 м'],
's1_1_Komsomolskaya':['15 мая 1935','−8 м'],
's1_Krasniye_Vorota':['15 мая 1935','−31 м'],
's1_1_Chistye_Prudy':['15 мая 1935','−35 м'],
's1_2_Lubyanka':['15 мая 1935','−32,5 м'],
's1_1_Okhotny_Ryad':['15 мая 1935','−15 м'],
's1_4_Biblioteka_Imeni_Lenina':['15 мая 1935','−12 м'],
's1_1_Kropotkinskaya':['15 мая 1935','−13 м'],
's1_2_Park_Kultury':['15 мая 1935','−10,5 м'],
's1_Frunzenskaya':['1 мая 1957','−42 м'],
's1_Sportivnaya':['1 мая 1957','−42 м'],
's1_Vorobyovy_Gory':['12 января 1959','+10 м'],
's1_Universitet':['12 января 1959','−26,5 м'],
's1_3_Prospekt_Vernadskogo':['30 декабря 1963','−8 м'],
's1_Yugo-Zapadnaya':['30 декабря 1963','−8 м'],
's2_Rechnoy_Vokzal':['31 октября 1964','−6 м'],
's2_Vodny_Stadion':['31 октября 1964','−6 м'],
's2_Voykovskaya':['31 октября 1964','−7 м'],
's2_Sokol':['11 сентября 1938','−9,6 м'],
's2_4_Aeroport':['11 сентября 1938','−8,6 м'],
's2_2_Dinamo':['11 сентября 1938','−39,6 м'],
's2_Belorusskaya':['11 сентября 1938','−33,1 м'],
's2_Mayakovskaya':['11 сентября 1938','−33,1 м'],
's2_2_Tverskaya':['20 июля 1979','−42 м'],
's2_1_Teatralnaya':['11 сентября 1938','−33,9 м'],
's2_2_Novokuznetskaya':['20 ноября 1943','−37,5 м'],
's2_3_Paveletskaya':['20 ноября 1943','−33,5 м'],
's2_4_Avtozavodskaya':['1 января 1943','−11 м'],
's2_4_Kolomenskaya':['11 августа 1969','−9 м'],
's2_5_Kashirskaya':['11 августа 1969','−7 м'],
's2_4_Kantemirovskaya':['30 декабря 1984','−8 м'],
's2_4_Tsaritsyno':['30 декабря 1984','−8 м'],
's2_4_Orekhovo':['30 декабря 1984','−9 м'],
's2_4_Domodedovskaya':['7 сентября 1985','−9,5 м'],
's2_2_Krasnogvardeyskaya':['7 сентября 1985','−9 м'],
's2_6_Alma-Atinskaya':['24 декабря 2012','−10 м'],
's3_Pyatnitskoye_Shosse':['28 декабря 2012','−14 м'],
's3_Mitino':['26 декабря 2009','−14 м'],
's3_Volokolamskaya':['26 декабря 2009','−14 м'],
's3_Myakinino':['26 декабря 2009','0 м'],
's3_Strogino':['7 января 2008','−8 м'],
's3_Krylatskoye':['31 декабря 1989','−9,5 м'],
's3_Molodyozhnaya':['5 июля 1965','−6,5 м'],
's3_5_Kuntsevskaya':['7 января 2008','0 м'],
's3_2_Slavyansky_Bulvar':['7 сентября 2008','−8,5 м'],
's3_5_Park_Pobedy':['6 мая 2003','−73,6 м'],
's3_3_Kievskaya':['5 апреля 1953','−38 м'],
's3_3_Smolenskaya':['5 апреля 1953','−50 м'],
's3_3_Arbatskaya':['5 апреля 1953','−41 м'],
's3_4_Ploshchad_Revolyutsii':['13 марта 1938','−33,6 м'],
's3_6_Kurskaya':['13 марта 1938','−30,7 м'],
's3_Baumanskaya':['18 января 1944','−32,5 м'],
's3_6_Elektrozavodskaya':['15 мая 1944','−31,5 м'],
's3_Semyonovskaya':['18 января 1944','−40 м'],
's3_Partizanskaya':['18 января 1944','−9 м'],
's3_Izmaylovskaya':['21 октября 1961','0 м'],
's3_Pervomayskaya':['21 октября 1961','−7 м'],
's3_Shchyolkovskaya':['22 июля 1963','−8 м'],
's4_1_Mezhdunarodnaya':['30 августа 2006','−25 м'],
's4_4_Vystavochnaya':['10 сентября 2005','−25 м'],
's4_5_Kuntsevskaya':['31 августа 1965','0 м'],
's4_Pionerskaya':['13 октября 1961','0 м'],
's4_Filyovsky_Park':['13 октября 1961','0 м'],
's4_Bagrationovskaya':['13 октября 1961','0 м'],
's4_Fili':['7 ноября 1959','0 м'],
's4_1_Kutuzovskaya':['7 ноября 1958','0 м'],
's4_1_Studencheskaya':['7 ноября 1958','0 м'],
's4_2_Kievskaya':['20 марта 1937','−8,7 м'],
's4_6_Smolenskaya':['15 мая 1935','−8 м'],
's4_3_Arbatskaya':['15 мая 1935','−8 м'],
's4_2_Alexandrovsky_Sad':['15 мая 1935','−7 м'],
's5_Komsomolskaya':['30 января 1952','−37 м'],
's5_Kurskaya':['1 января 1950','−40 м'],
's5_Taganskaya':['1 января 1950','−53 м'],
's5_Paveletskaya':['1 января 1950','−40 м'],
's5_Dobryninskaya':['1 января 1950','−35,5 м'],
's5_Oktyabrskaya':['1 января 1950','−40 м'],
's5_1_Park_Kultury':['1 января 1950','−40 м'],
's5_Kievskaya':['14 марта 1954','−48 м'],
's5_2_Krasnopresnenskaya':['14 марта 1954','−35,5 м'],
's5_2_Belorusskaya':['30 января 1952','−42,5 м'],
's5_2_Novoslobodskaya':['30 января 1952','−40 м'],
's5_Prospekt_Mira':['30 января 1952','−40 м'],
's6_Medvedkovo':['30 сентября 1978','−10 м'],
's6_Babushkinskaya':['30 сентября 1978','−10 м'],
's6_Sviblovo':['30 сентября 1978','−8 м'],
's6_Botanichesky_Sad':['30 сентября 1978','−7 м'],
's6_VDNKh':['1 мая 1958','−53,5 м'],
's6_Alexeyevskaya':['1 мая 1958','−51 м'],
's6_2_Rizhskaya':['1 мая 1958','−46 м'],
's6_2_Prospekt_Mira':['1 мая 1958','−50 м'],
's6_1_Sukharevskaya':['5 января 1972','−43 м'],
's6_2_Turgenevskaya':['5 января 1972','−49 м'],
's6_2_Kitay-Gorod':['3 января 1971','−29 м'],
's6_4_Tretyakovskaya':['3 января 1971','−46 м'],
's6_3_Oktyabrskaya':['13 октября 1962','−50 м'],
's6_Shabolovskaya':['6 ноября 1980','−46,5 м'],
's6_Leninsky_Prospekt':['13 октября 1962','−16 м'],
's6_Akademicheskaya':['13 октября 1962','−8,5 м'],
's6_Profsoyuznaya':['13 октября 1962','−7 м'],
's6_Noviye_Cheryomushki':['13 октября 1962','−7 м'],
's6_2_Kaluzhskaya':['12 августа 1974','−10 м'],
's6_Belyayevo':['12 августа 1974','−12 м'],
's6_Konkovo':['6 ноября 1987','−8 м'],
's6_Tyoplyi_Stan':['6 ноября 1987','−8 м'],
's6_Yasenevo':['17 января 1990','−8 м'],
's6_5_Novoyasenevskaya':['17 января 1990','−7 м'],
's7_Planernaya':['30 декабря 1975','−6 м'],
's7_Skhodnenskaya':['30 декабря 1975','−6 м'],
's7_Tushinskaya':['30 декабря 1975','−10,5 м'],
's7_Shchukinskaya':['30 декабря 1975','−13 м'],
's7_Oktyabrskoye_Pole':['30 декабря 1972','-11 м'],
's7_1_Polezhaevskaya':['30 декабря 1972','−10 м'],
's7_4_Begovaya':['30 декабря 1972','−9 м'],
's7_4_Ulitsa_1905_Goda':['30 декабря 1972','−11 м'],
's7_2_Barrikadnaya':['30 декабря 1972','−30 м'],
's7_2_Pushkinskaya':['17 декабря 1975','−51 м'],
's7_1_Kuznetsky_Most':['17 декабря 1975','−39,5 м'],
's7_5_Kitay-Gorod':['3 января 1971','−29 м'],
's7_2_Taganskaya':['31 декабря 1966','−36 м'],
's7_6_Proletarskaya':['31 декабря 1966','−9 м'],
's7_4_Volgogradsky_Prospekt':['31 декабря 1966','−8 м'],
's7_3_Tekstilshchiki':['31 декабря 1966','−13 м'],
's7_7_Kuzminki':['31 декабря 1966','−8 м'],
's7_4_Ryazanskiy_Prospekt':['31 декабря 1966','−6 м'],
's7_Vykhino':['31 декабря 1966','0 м'],
's7_1_Lermontovsky_Prospekt':['9 ноября 2013',''],
's7_Zhulebino':['9 ноября 2013',''],
's8_6_Park_Pobedy':['6 мая 2003','−73,6 м'],
's8_5_Delovoy_Tsentr':['31 января 2014',''],
's8_6_Tretyakovskaya':['25 января 1986','−46 м'],
's8_2_Marksistskaya':['30 декабря 1979','−60 м'],
's8_1_Ploshchad_Ilicha':['30 декабря 1979','−46 м'],
's8_1_Aviamotornaya':['30 декабря 1979','−53 м'],
's8_Shosse_Entuziastov':['30 декабря 1979','−53 м'],
's8_Perovo':['30 декабря 1979','−9 м'],
's8_Novogireevo':['30 декабря 1979','−9 м'],
's8_Novokosino':['30 августа 2012','−11 м'],
's9_Altufyevo':['15 июля 1994','−9 м'],
's9_Bibirevo':['31 декабря 1992','−9,5 м'],
's9_Otradnoye':['1 марта 1991','−9 м'],
's9_Vladykino':['1 марта 1991','−10,5 м'],
's9_2_Petrovsko-Razumovskaya':['1 марта 1991','−61 м'],
's9_4_Timiryazevskaya':['1 марта 1991','−63,5 м'],
's9_Dmitrovskaya':['1 марта 1991','−59 м'],
's9_3_Savyolovskaya':['31 декабря 1988','−52 м'],
's9_5_Mendeleyevskaya':['31 декабря 1988','−48,5 м'],
's9_1_Tsvetnoy_Bulvar':['31 декабря 1988','−50 м'],
's9_2_Chekhovskaya':['31 декабря 1987','−62 м'],
's9_2_Borovitskaya':['23 января 1986','−46,5 м'],
's9_4_Polyanka':['23 января 1986','−36,5 м'],
's9_2_Serpukhovskaya':['8 ноября 1983','−43 м'],
's9_Tulskaya':['8 ноября 1983','−9,5 м'],
's9_Nagatinskaya':['8 ноября 1983','−13,5 м'],
's9_Nagornaya':['8 ноября 1983','−9 м'],
's9_Nakhimovsky_Prospekt':['8 ноября 1983','−9,5 м'],
's9_6_Sevastopolskaya':['8 ноября 1983','−13 м'],
's9_Chertanovskaya':['8 ноября 1983','−10,5 м'],
's9_Yuzhnaya':['8 ноября 1983','−10 м'],
's9_Prazhskaya':['6 ноября 1985','−9,5 м'],
's9_Ulitsa_Akademika_Yangelya':['31 августа 2000','−8 м'],
's9_Annino':['12 декабря 2001','−8 м'],
's9_2_Bulvar_Dmitriya_Donskogo':['26 декабря 2002','−10 м'],
's10_4_Petrovsko-Razumovskaya':['1 марта 1991','−61 м'],
's10_2_Marina_Roshcha':['19 июня 2010','−60 м'],
's10_2_Dostoyevskaya':['19 июня 2010','−60 м'],
's10_2_Trubnaya':['30 августа 2007','−60 м'],
's10_2_Sretensky_Bulvar':['29 декабря 2007','−60 м'],
's10_2_Chkalovskaya':['28 декабря 1995','−51 м'],
's10_2_Rimskaya':['28 декабря 1995','−54 м'],
's10_2_Krestyanskaya_Zastava':['28 декабря 1995','−47 м'],
's10_Dubrovka':['11 декабря 1999','−62 м'],
's10_Kozhukhovskaya':['28 декабря 1995','−12 м'],
's10_2_Pechatniki':['28 декабря 1995','−4 м'],
's10_Volzhskaya':['28 декабря 1995','−8 м'],
's10_Lyublino':['25 декабря 1996','−8 м'],
's10_1_Bratislavskaya':['25 декабря 1996','−8 м'],
's10_1_Marino':['25 декабря 1996','−8 м'],
's10_1_Borisovo':['2 декабря 2011','−9 м'],
's10_1_Shipilovskaya':['2 декабря 2011','−9 м'],
's10_3_Zyablikovo':['2 декабря 2011','−14,3 м'],
's11_1_Kakhovskaya':['11 августа 1969','−8 м'],
's11_Varshavskaya':['11 августа 1969','−9 м'],
's11_2_Kashirskaya':['11 августа 1969','−7 м'],
's12_4_Bittsevsky_Park':['27 февраля 2014',''],
's12_3_Lesoparkovaya':['27 февраля 2014',''],
's12_5_Ulitsa_Starokachalovskaya':['27 декабря 2003','−10 м'],
's12_2_Ulitsa_Skobelevskaya':['27 декабря 2003','+9,6 м'],
's12_1_Bulvar_Admirala_Ushakova':['27 декабря 2003','+9,6 м'],
's12_Ulitsa_Gorchakova':['27 декабря 2003','+9,6 м'],
's12_1_Buninskaya_Alleya':['27 декабря 2003','+9,6 м'],
'sTPK_5_Delovoy_Tsentr':['31 января 2014',''],
'sTPK_3_Marina_Roshcha':['19 июня 2010','−60 м'],
'sTPK_4_Rizhskaya':['1 мая 1958','−46 м'],
'sTPK_4_Sokolniki':['15 мая 1935','−9 м'],
'sTPK_4_Elektrozavodskaya':['15 мая 1944','−31,5 м'],
'sTPK_3_Aviamotornaya':['30 декабря 1979','−53 м'],
'sTPK_3_Tekstilshchiki':['31 декабря 1966','−13 м'],
'sTPK_3_Kaluzhskaya':['12 августа 1974','−10 м'],
'sTPK_3_Prospekt_Vernadskogo':['30 декабря 1963','−8 м'],
'sKOZH_3_Aviamotornaya':['30 декабря 1979','−53 м'],
'sMono_Timiryazevskaya':['1 марта 1991','−63,5 м']
};
var INFOMLINES={
's10':['Люблинско-Дмитровская линия (салатовая)'],
's11':['Каховская линия (бирюзовая)'],
's12':['Бутовская линия (серо-голубая)'],
's1':['Сокольническая линия (красная)'],
's2':['Замоскворецкая линия (зелёная)'],
's3':['Арбатско-Покровская линия (синяя)'],
's4':['Филёвская линия (голубая)'],
's5':['Кольцевая линия (коричневая)'],
's6':['Калужско-Рижская линия (оранжевая)'],
's7':['Таганско-Краснопресненская линия (фиолетовая)'],
's8':['Калининская линия (жёлтая)'],
's9':['Серпуховско-Тимирязевская линия (серая)'],
'sKOZH':['Кожуховская линия'],
'sMono':['Московский монорельс'],
'sTPK':['Третий пересадочный контур']
};