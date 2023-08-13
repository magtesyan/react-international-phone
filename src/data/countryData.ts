// The data was taken from the form react-phone-input-2
// https://github.com/bl00mber/react-phone-input-2/blob/master/src/rawCountries.js

import { CountryData } from '../types';

// Country model:
// [
//    Country name,
//    Regions,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order priority (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]

export const defaultCountries: CountryData[] = [
  ['Австрия', ['europe', 'eu-union'], 'at', '43'],
  [
    'Австралия',
    ['oceania'],
    'au',
    '61',
    '. .... ....',
    0,
    ['2', '3', '4', '7', '8'],
  ],
  ['Азербайджан', ['asia', 'ex-ussr'], 'az', '994', '(..) ... .. ..'],
  ['Албания', ['europe'], 'al', '355'],
  ['Алжир', ['africa', 'north-africa'], 'dz', '213'],
  ['Ангола', ['africa'], 'ao', '244'],
  ['Андорра', ['europe'], 'ad', '376'],
  ['Антигуа и Барбуда', ['america', 'carribean'], 'ag', '1268'],
  [
    'Аргентина',
    ['america', 'south-america'],
    'ar',
    '54',
    '(..) ........',
    0,
    [
      '11',
      '221',
      '223',
      '261',
      '264',
      '2652',
      '280',
      '2905',
      '291',
      '2920',
      '2966',
      '299',
      '341',
      '342',
      '343',
      '351',
      '376',
      '379',
      '381',
      '3833',
      '385',
      '387',
      '388',
    ],
  ],
  ['Армения', ['asia', 'ex-ussr'], 'am', '374', '.. ......'],
  ['Аруба', ['america', 'carribean'], 'aw', '297'],
  ['Афганистан', ['asia'], 'af', '93'],
  ['Багамы', ['america', 'carribean'], 'bs', '1242'],
  ['Бангладеш', ['asia'], 'bd', '880'],
  ['Барбадос', ['america', 'carribean'], 'bb', '1246'],
  ['Бахрейн', ['middle-east'], 'bh', '973'],
  ['Белиз', ['america', 'central-america'], 'bz', '501'],
  ['Белоруссия', ['europe', 'ex-ussr'], 'by', '375', '(..) ... .. ..'],
  ['Бельгия', ['europe', 'eu-union'], 'be', '32', '... .. .. ..'],
  ['Бенин', ['africa'], 'bj', '229'],
  ['Болгария', ['europe', 'eu-union'], 'bg', '359'],
  ['Боливия', ['america', 'south-america'], 'bo', '591'],
  ['Босния и Герцеговина', ['europe', 'ex-yugos'], 'ba', '387'],
  ['Ботсвана', ['africa'], 'bw', '267'],
  ['Бразилия', ['america', 'south-america'], 'br', '55', '(..) .........'],
  ['Бруней', ['asia'], 'bn', '673'],
  ['Буркина-Фасо', ['africa'], 'bf', '226'],
  ['Бурунди', ['africa'], 'bi', '257'],
  ['Бутан', ['asia'], 'bt', '975'],
  ['Ватикан', ['europe'], 'va', '39', '.. .... ....', 1],
  ['Великобритания', ['europe', 'eu-union'], 'gb', '44', '.... ......'],
  ['Венесуэла', ['america', 'south-america'], 've', '58'],
  ['Вануату', ['oceania'], 'vu', '678'],
  ['Венгрия', ['europe', 'eu-union'], 'hu', '36'],
  ['Восточный Тимор', ['asia'], 'tl', '670'],
  ['Вьетнам', ['asia'], 'vn', '84'],
  ['Габон', ['africa'], 'ga', '241'],
  ['Гаити', ['america', 'carribean'], 'ht', '509', '....-....'],
  ['Гайана', ['america', 'south-america'], 'gy', '592'],
  ['Гамбия', ['africa'], 'gm', '220'],
  ['Гана', ['africa'], 'gh', '233'],
  ['Гваделупа', ['america', 'carribean'], 'gp', '590', '', 0],
  ['Гвиана', ['america', 'south-america'], 'gf', '594'],
  ['Гватемала', ['america', 'central-america'], 'gt', '502', '....-....'],
  ['Гвинея', ['africa'], 'gn', '224'],
  ['Гвинея-Бисау', ['africa'], 'gw', '245'],
  ['Германия', ['europe', 'eu-union', 'baltic'], 'de', '49', '.... ........'],
  ['Гондурас', ['america', 'central-america'], 'hn', '504'],
  ['Гонконг', ['asia'], 'hk', '852', '.... ....'],
  ['Гренада', ['america', 'carribean'], 'gd', '1473'],
  ['Греция', ['europe', 'eu-union'], 'gr', '30'],
  ['Грузия', ['asia', 'ex-ussr'], 'ge', '995'],
  ['Гуам', ['oceania'], 'gu', '1671'],
  ['Дания', ['europe', 'eu-union', 'baltic'], 'dk', '45', '.. .. .. ..'],
  ['Джибути', ['africa'], 'dj', '253'],
  ['Доминика', ['america', 'carribean'], 'dm', '1767'],
  ['Доминикана', ['america', 'carribean'], 'do', '1', '', 2],
  ['Египет', ['africa', 'north-africa'], 'eg', '20'],
  ['Замбия', ['africa'], 'zm', '260'],
  ['Зимбабве', ['africa'], 'zw', '263'],
  ['Израиль', ['middle-east'], 'il', '972', '... ... ....'],
  ['Индия', ['asia'], 'in', '91', '.....-.....'],
  ['Индонезия', ['asia'], 'id', '62'],
  ['Иордания', ['middle-east'], 'jo', '962'],
  ['Ирак', ['middle-east'], 'iq', '964'],
  ['Иран', ['middle-east'], 'ir', '98', '... ... ....'],
  ['Ирландия', ['europe', 'eu-union'], 'ie', '353', '.. .......'],
  ['Исландия', ['europe'], 'is', '354', '... ....'],
  ['Испания', ['europe', 'eu-union'], 'es', '34', '... ... ...'],
  ['Италия', ['europe', 'eu-union'], 'it', '39', '... .......', 0],
  ['Йемен', ['middle-east'], 'ye', '967'],
  ['Кабо-Верде', ['africa'], 'cv', '238'],
  [
    'Казахстан',
    ['asia', 'ex-ussr'],
    'kz',
    '7',
    '... ...-..-..',
    0,
    [
      '310',
      '311',
      '312',
      '313',
      '315',
      '318',
      '321',
      '324',
      '325',
      '326',
      '327',
      '336',
      '7172',
      '73622',
    ],
  ],
  ['Камбоджа', ['asia'], 'kh', '855'],
  ['Камерун', ['africa'], 'cm', '237'],
  [
    'Канада',
    ['america', 'north-america'],
    'ca',
    '1',
    '(...) ...-....',
    1,
    [
      '204',
      '226',
      '236',
      '249',
      '250',
      '289',
      '306',
      '343',
      '365',
      '387',
      '403',
      '416',
      '418',
      '431',
      '437',
      '438',
      '450',
      '506',
      '514',
      '519',
      '548',
      '579',
      '581',
      '587',
      '604',
      '613',
      '639',
      '647',
      '672',
      '705',
      '709',
      '742',
      '778',
      '780',
      '782',
      '807',
      '819',
      '825',
      '867',
      '873',
      '902',
      '905',
    ],
  ],
  ['Карибские Нидерланды', ['america', 'carribean'], 'bq', '599', '', 1],
  ['Катар', ['middle-east'], 'qa', '974'],
  ['Кения', ['africa'], 'ke', '254'],
  ['Кипр', ['europe', 'eu-union'], 'cy', '357', '.. ......'],
  ['Кирибати', ['oceania'], 'ki', '686'],
  ['Киргизия', ['asia', 'ex-ussr'], 'kg', '996', '... ... ...'],
  ['Китай', ['asia'], 'cn', '86', '... .... ....'],
  ['КНДР', ['asia'], 'kp', '850'],
  ['Колумбия', ['america', 'south-america'], 'co', '57', '... ... ....'],
  ['Коморы', ['africa'], 'km', '269'],
  ['Конго', ['africa'], 'cd', '243'],
  ['Конго', ['africa'], 'cg', '242'],
  ['Корея', ['asia'], 'kr', '82', '... .... ....'],
  ['Косово', ['europe', 'ex-yugos'], 'xk', '383'],
  ['Коста-Рика', ['america', 'central-america'], 'cr', '506', '....-....'],
  ['Кот-д’Ивуар', ['africa'], 'ci', '225', '.. .. .. .. ..'],
  ['Куба', ['america', 'carribean'], 'cu', '53'],
  ['Кувейт', ['middle-east'], 'kw', '965'],
  ['Кюрасао', ['america', 'carribean'], 'cw', '599', '', 0],
  ['Лаос', ['asia'], 'la', '856'],
  [
    'Латвия',
    ['europe', 'eu-union', 'ex-ussr', 'baltic'],
    'lv',
    '371',
    '.. ... ...',
  ],
  ['Лесото', ['africa'], 'ls', '266'],
  ['Либерия', ['africa'], 'lr', '231'],
  ['Ливан', ['middle-east'], 'lb', '961'],
  ['Ливия', ['africa', 'north-africa'], 'ly', '218'],
  ['Литва', ['europe', 'eu-union', 'ex-ussr', 'baltic'], 'lt', '370'],
  ['Лихтенштейн', ['europe'], 'li', '423'],
  ['Люксембург', ['europe', 'eu-union'], 'lu', '352'],
  ['Маврикий', ['africa'], 'mu', '230'],
  ['Мавритания', ['africa'], 'mr', '222'],
  ['Мадагаскар', ['africa'], 'mg', '261'],
  ['Макао', ['asia'], 'mo', '853'],
  ['Малави', ['africa'], 'mw', '265'],
  ['Малайзия', ['asia'], 'my', '60', '..-....-....'],
  ['Мали', ['africa'], 'ml', '223'],
  ['Мальдивы', ['asia'], 'mv', '960'],
  ['Мальта', ['europe', 'eu-union'], 'mt', '356'],
  ['Марокко', ['africa', 'north-africa'], 'ma', '212'],
  ['Мартиника', ['america', 'carribean'], 'mq', '596'],
  ['Маршалловы Острова', ['oceania'], 'mh', '692'],
  [
    'Мексика',
    ['america', 'central-america'],
    'mx',
    '52',
    '... ... ....',
    0,
    ['33', '55', '81', '229', '656', '664', '774', '998'],
  ],
  ['Микронезия', ['oceania'], 'fm', '691'],
  ['Мозамбик', ['africa'], 'mz', '258'],
  ['Молдавия', ['europe'], 'md', '373', '(..) ..-..-..'],
  ['Монако', ['europe'], 'mc', '377'],
  ['Монголия', ['asia'], 'mn', '976'],
  ['Мьянма', ['asia'], 'mm', '95'],
  ['Намибия', ['africa'], 'na', '264'],
  ['Науру', ['africa'], 'nr', '674'],
  ['Непал', ['asia'], 'np', '977'],
  ['Нидерланды', ['europe', 'eu-union'], 'nl', '31', '.. ........'],
  ['Новая Каледония', ['oceania'], 'nc', '687'],
  ['Новая Зеландия', ['oceania'], 'nz', '64', '...-...-....'],
  ['Нигер', ['africa'], 'ne', '227'],
  ['Нигерия', ['africa'], 'ng', '234'],
  ['Никарагуа', ['america', 'central-america'], 'ni', '505'],
  ['Норвегия', ['europe', 'baltic'], 'no', '47', '... .. ...'],
  ['ОАЭ', ['middle-east'], 'ae', '971'],
  ['Оман', ['middle-east'], 'om', '968'],
  ['Пакистан', ['asia'], 'pk', '92', '...-.......'],
  ['Палау', ['oceania'], 'pw', '680'],
  ['Палестина', ['middle-east'], 'ps', '970'],
  ['Панама', ['america', 'central-america'], 'pa', '507'],
  ['Папуа — Новая Гвинея', ['oceania'], 'pg', '675'],
  ['Парагвай', ['america', 'south-america'], 'py', '595'],
  ['Перу', ['america', 'south-america'], 'pe', '51'],
  ['Польша', ['europe', 'eu-union', 'baltic'], 'pl', '48', '...-...-...'],
  ['Португалия', ['europe', 'eu-union'], 'pt', '351'],
  ['Пуэрто-Рико', ['america', 'carribean'], 'pr', '1', '', 3],
  ['Реюньон', ['africa'], 're', '262'],
  [
    'Россия',
    ['europe', 'asia', 'ex-ussr', 'baltic'],
    'ru',
    '7',
    '(...) ...-..-..',
    1,
  ],
  ['Руанда', ['africa'], 'rw', '250'],
  ['Румыния', ['europe', 'eu-union'], 'ro', '40'],
  ['Сальвадор', ['america', 'central-america'], 'sv', '503', '....-....'],
  ['Самоа', ['oceania'], 'ws', '685'],
  ['Сан-Марино', ['europe'], 'sm', '378'],
  ['Сан-Томе и Принсипи', ['africa'], 'st', '239'],
  ['Саудовская Аравия', ['middle-east'], 'sa', '966'],
  ['Северная Македония', ['europe', 'ex-yugos'], 'mk', '389'],
  ['Сейшелы', ['africa'], 'sc', '248'],
  ['Сент-Китс и Невис', ['america', 'carribean'], 'kn', '1869'],
  ['Сент-Люсия', ['america', 'carribean'], 'lc', '1758'],
  ['Сент-Винсент и Гренадины', ['america', 'carribean'], 'vc', '1784'],
  ['Сенегал', ['africa'], 'sn', '221'],
  ['Сербия', ['europe', 'ex-yugos'], 'rs', '381'],
  ['Сингапур', ['asia'], 'sg', '65', '....-....'],
  ['Сирия', ['middle-east'], 'sy', '963'],
  ['Словакия', ['europe', 'eu-union'], 'sk', '421'],
  ['Словения', ['europe', 'eu-union', 'ex-yugos'], 'si', '386'],
  ['Соломоновы Острова', ['oceania'], 'sb', '677'],
  ['Сомали', ['africa'], 'so', '252'],
  ['Судан', ['africa'], 'sd', '249'],
  ['Суринам', ['america', 'south-america'], 'sr', '597'],
  [
    'США',
    ['america', 'north-america'],
    'us',
    '1',
    '(...) ...-....',
    0,
    [
      '201',
      '202',
      '203',
      '205',
      '206',
      '207',
      '208',
      '209',
      '210',
      '212',
      '213',
      '214',
      '215',
      '216',
      '217',
      '218',
      '219',
      '224',
      '225',
      '228',
      '229',
      '231',
      '234',
      '239',
      '240',
      '248',
      '251',
      '252',
      '253',
      '254',
      '256',
      '260',
      '262',
      '267',
      '269',
      '270',
      '276',
      '281',
      '301',
      '302',
      '303',
      '304',
      '305',
      '307',
      '308',
      '309',
      '310',
      '312',
      '313',
      '314',
      '315',
      '316',
      '317',
      '318',
      '319',
      '320',
      '321',
      '323',
      '325',
      '330',
      '334',
      '336',
      '337',
      '339',
      '347',
      '351',
      '352',
      '360',
      '361',
      '386',
      '401',
      '402',
      '404',
      '405',
      '406',
      '407',
      '408',
      '409',
      '410',
      '412',
      '413',
      '414',
      '415',
      '417',
      '419',
      '423',
      '424',
      '425',
      '430',
      '432',
      '434',
      '435',
      '440',
      '443',
      '447',
      '469',
      '478',
      '479',
      '480',
      '484',
      '501',
      '502',
      '503',
      '504',
      '505',
      '507',
      '508',
      '509',
      '510',
      '512',
      '513',
      '515',
      '516',
      '517',
      '518',
      '520',
      '530',
      '540',
      '541',
      '551',
      '559',
      '561',
      '562',
      '563',
      '567',
      '570',
      '571',
      '573',
      '574',
      '575',
      '580',
      '585',
      '586',
      '601',
      '602',
      '603',
      '605',
      '606',
      '607',
      '608',
      '609',
      '610',
      '612',
      '614',
      '615',
      '616',
      '617',
      '618',
      '619',
      '620',
      '623',
      '626',
      '630',
      '631',
      '636',
      '641',
      '646',
      '650',
      '651',
      '660',
      '661',
      '662',
      '678',
      '681',
      '682',
      '689',
      '701',
      '702',
      '703',
      '704',
      '706',
      '707',
      '708',
      '712',
      '713',
      '714',
      '715',
      '716',
      '717',
      '718',
      '719',
      '720',
      '724',
      '727',
      '731',
      '732',
      '734',
      '740',
      '754',
      '757',
      '760',
      '762',
      '763',
      '765',
      '769',
      '770',
      '772',
      '773',
      '774',
      '775',
      '779',
      '781',
      '785',
      '786',
      '801',
      '802',
      '803',
      '804',
      '805',
      '806',
      '808',
      '810',
      '812',
      '813',
      '814',
      '815',
      '816',
      '817',
      '818',
      '828',
      '830',
      '831',
      '832',
      '843',
      '845',
      '847',
      '848',
      '850',
      '856',
      '857',
      '858',
      '859',
      '860',
      '862',
      '863',
      '864',
      '865',
      '870',
      '878',
      '901',
      '903',
      '904',
      '906',
      '907',
      '908',
      '909',
      '910',
      '912',
      '913',
      '914',
      '915',
      '916',
      '917',
      '918',
      '919',
      '920',
      '925',
      '928',
      '931',
      '936',
      '937',
      '940',
      '941',
      '947',
      '949',
      '951',
      '952',
      '954',
      '956',
      '970',
      '971',
      '972',
      '973',
      '978',
      '979',
      '980',
      '985',
      '989',
    ],
  ],
  ['Сьерра-Леоне', ['africa'], 'sl', '232'],
  ['Таджикистан', ['asia', 'ex-ussr'], 'tj', '992'],
  ['Таиланд', ['asia'], 'th', '66'],
  ['Тайвань', ['asia'], 'tw', '886'],
  ['Танзания', ['africa'], 'tz', '255'],
  ['Того', ['africa'], 'tg', '228'],
  ['Тонга', ['oceania'], 'to', '676'],
  ['Тринидад и Тобаго', ['america', 'carribean'], 'tt', '1868'],
  ['Тувалу', ['asia'], 'tv', '688'],
  ['Тунис', ['africa', 'north-africa'], 'tn', '216'],
  ['Туркменистан', ['asia', 'ex-ussr'], 'tm', '993'],
  ['Турция', ['europe'], 'tr', '90', '... ... .. ..'],
  ['Уганда', ['africa'], 'ug', '256'],
  ['Узбекистан', ['asia', 'ex-ussr'], 'uz', '998', '.. ... .. ..'],
  ['Украина', ['europe', 'ex-ussr'], 'ua', '380', '(..) ... .. ..'],
  ['Уругвай', ['america', 'south-america'], 'uy', '598'],
  ['Хорватия', ['europe', 'eu-union', 'ex-yugos'], 'hr', '385'],
  ['ЦАР', ['africa'], 'cf', '236'],
  ['Чад', ['africa'], 'td', '235'],
  ['Чехия', ['europe', 'eu-union'], 'cz', '420', '... ... ...'],
  ['Чили', ['america', 'south-america'], 'cl', '56'],
  ['Фиджи', ['oceania'], 'fj', '679'],
  ['Филиппины', ['asia'], 'ph', '63', '.... .......'],
  ['Финляндия', ['europe', 'eu-union', 'baltic'], 'fi', '358', '.. ... .. ..'],
  ['Франция', ['europe', 'eu-union'], 'fr', '33', '. .. .. .. ..'],
  ['Французская Полинезия', ['oceania'], 'pf', '689'],
  ['Чагос', ['asia'], 'io', '246'],
  ['Черногория', ['europe', 'ex-yugos'], 'me', '382'],
  ['Швеция', ['europe', 'eu-union', 'baltic'], 'se', '46', '(...) ...-...'],
  ['Швейцария', ['europe'], 'ch', '41', '.. ... .. ..'],
  ['Шри-Ланка', ['asia'], 'lk', '94'],
  ['Эсватини', ['africa'], 'sz', '268'],
  [
    'Эстония',
    ['europe', 'eu-union', 'ex-ussr', 'baltic'],
    'ee',
    '372',
    '.... ......',
  ],
  ['Эквадор', ['america', 'south-america'], 'ec', '593'],
  ['Экваториальная Гвинея', ['africa'], 'gq', '240'],
  ['Эритрея', ['africa'], 'er', '291'],
  ['Эфиопия', ['africa'], 'et', '251'],
  ['ЮАР', ['africa'], 'za', '27'],
  ['Южный Судан', ['africa', 'north-africa'], 'ss', '211'],
  ['Ямайка', ['america', 'carribean'], 'jm', '1876'],
  ['Япония', ['asia'], 'jp', '81', '.. .... ....'],
];
