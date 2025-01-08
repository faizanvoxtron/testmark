<?php


$package = "TRADEMARK REGISTRATION BASIC";
$dprice = "$39";
$price = "$78";
$logo = "Case Review";
$designer = "Case Filing";
$revisions = "Trademark Alert";
$fileformat = "Trademark Secured";
$time = "100% Satisfaction Guarantee";

$search  = "Basic Search";
$searchPrice = "$9.99";

$expeditePrice = "$75";

if ($_GET['package'] == "TRADEMARK REGISTRATION BASIC") {
    $package = "TRADEMARK REGISTRATION BASIC";
    $dprice = "$39";
    $price = "$78";
}
if ($_GET['package'] == "TRADEMARK REGISTRATION STARTUP") {
    $package = "TRADEMARK REGISTRATION STARTUP";
    $dprice = "$149";
    $price = "$298";
}
    if ($_GET['package'] == "TRADEMARK REGISTRATION PROFESSIONAL") {
    $package = "TRADEMARK REGISTRATION PROFESSIONAL";
    $dprice = "$249";
    $price = "$498";
}
if ($_GET['package'] == "TRADEMARK REGISTRATION CORPORATE") {
    $package = "TRADEMARK REGISTRATION CORPORATE";
    $dprice = "$449";
    $price = "$998";
}
if ($_GET['package'] == "COPYRIGHT REGISTRATION STARTUP") {
    $package = "COPYRIGHT REGISTRATION STARTUP";
    $dprice = "$49";
    $price = "$98";
}
if ($_GET['package'] == "COPYRIGHT REGISTRATION PREMIUM") {
    $package = "COPYRIGHT REGISTRATION PREMIUM";
    $dprice = "$149";
    $price = "$298";
}
if ($_GET['package'] == "AMAZON BRAND REGISTRY PREMIUM") {
    $package = "AMAZON BRAND REGISTRY PREMIUM";
    $dprice = "$495";
    $price = "$990";
}
if ($_GET['package'] == "AMAZON BRAND REGISTRY GOLD") {
    $package = "AMAZON BRAND REGISTRY GOLD";
    $dprice = "$149";
    $price = "$78";
}
if ($_GET['package'] == "AMAZON BRAND REGISTRY PLATINUM") {
    $package = "AMAZON BRAND REGISTRY PLATINUM";
    $dprice = "$199";
    $price = "$78";
}
if ($_GET['package'] == "COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH") {
    $package = "COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH";
    $dprice = "$149";
    $price = "$78";
}
if ($_GET['package'] == "COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW") {
    $package = "COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW";
    $dprice = "$299";
    $price = "$78";
}

if ($_GET['package'] == "COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH") {
    $package = "COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH";
    $dprice = "$499";
    $price = "$78";
}
if ($_GET['package'] == "START YOUR BUSINESS WITH EASE") {
    $package = "START YOUR BUSINESS WITH EASE";
    $dprice = "$199";
    $price = "$78";
}
if ($_GET['package'] == "STARTUP BASIC") {
    $package = "STARTUP BASIC";
    $dprice = "$99";
    $price = "$78";
}
if ($_GET['package'] == "STARTUP PRO") {
    $package = "STARTUP PRO";
    $dprice = "$399";
    $price = "$78";
}
if ($_GET['package'] == "STARTUP ADVANCE") {
    $package = "STARTUP ADVANCE";
    $dprice = "$699";
    $price = "$78";
}
if ($_GET['package'] == "SMALL SIZE ENTERPRISE BASIC") {
    $package = "SMALL SIZE ENTERPRISE BASIC";
    $dprice = "$99";
    $price = "$78";
}
if ($_GET['package'] == "SMALL SIZE ENTERPRISE PRO") {
    $package = "SMALL SIZE ENTERPRISE PRO";
    $dprice = "$99";
    $price = "$78";
}
if ($_GET['package'] == "SMALL SIZE ENTERPRISE ADVANCE") {
    $package = "SMALL SIZE ENTERPRISE ADVANCE";
    $dprice = "$99";
    $price = "$78";
}
if ($_GET['package'] == "MEDIUM & LARGE SIZE ENTERPRISE BASIC") {
    $package = "MEDIUM & LARGE SIZE ENTERPRISE BASIC";
    $dprice = "$1999";
    $price = "$78";
}
if ($_GET['package'] == "MEDIUM & LARGE SIZE ENTERPRISE PRO") {
    $package = "MEDIUM & LARGE SIZE ENTERPRISE PRO";
    $dprice = "$3499";
    $price = "$78";
}
if ($_GET['package'] == "MEDIUM & LARGE SIZE ENTERPRISE ADVANCE") {
    $package = "MEDIUM & LARGE SIZE ENTERPRISE ADVANCE";
    $dprice = "$4999";
    $price = "$78";
}


// Trademark Packages Data

$tmbasic = array('Case Review','Case Filing','Trademark Alert','Trademark Secured','100% Satisfaction Guarantee','Direct Hit Search');
$tmprofessional = array('Case Review','Case Filing','Trademark Alert','Trademark Secured','100% Satisfaction Guarantee','Direct Hit Search','Refusal Risk Meter®');
$tmbusiness = array('Case Review','Case Filing','Trademark Alert','Trademark Secured','100% Satisfaction Guarantee','Direct Hit Search','Refusal Risk Meter®','Cease & Desist Letter','Trademark Monitoring','Complete Documentation Digital File','24-hour Expedited Processing','Dedicated Case Manager');
$tmcorporate = array('Case Review','Case Filing','Trademark Alert','Trademark Secured','100% Satisfaction Guarantee','Direct Hit Search','Refusal Risk Meter®','Cease & Desist Letter','Trademark Monitoring','Complete Documentation Digital File','24-hour Expedited Processing','Dedicated Case Manager','100% Approval Guarantee','Comprehensive Trademark Search Report');

// Copyright Packages

$crstartup = array('Professional Preparation','Federal E-Filing','Certificate of Registration');
$crpremium = array('Cease & Desist Letter','Transfer/Assignment','24 Hours Expedited Process');

// Amazon Brand Registry Packages
$amrpremium = array('Amazon Brand Case Review','Amazon Brand Case Preparation','Amazon Brand Case Filing', '100% Satisfaction Guaranteed', 'Refusal Risk Meter', 'Amazon Brand Case Monitoring', 'Complete Documentation', 'Digital File', 'Dedicated Case Manager' );



// if ($_GET['package'] == "Copyright Gold Package") {
//     $package = "Copyright Gold Package";
//     $dprice = "$199";
//     $price = "$398";
//     $logo = "Case Review";
//     $designer = "Case Filing";
//     $revisions = "Trademark Alert";
//     $fileformat = "Trademark Secured";
//     $time = "100% Satisfaction Guarantee";
// }

// if ($_GET['package'] == "Copyright Diamond Package") {
//     $package = "Copyright Diamond Package";
//     $dprice = "$298";
//     $price = "$596";
//     $logo = "Case Review";
//     $designer = "Case Filing";
//     $revisions = "Trademark Alert";
//     $fileformat = "Trademark Secured";
//     $time = "100% Satisfaction Guarantee";
// }

// if ($_GET['package'] == "Company Formation Package") {
//     $package = "Company Formation Package";
//     // $dprice = "$298";
//     // $price = "$596";
//     $logo = "Make sure you're not liable for any business debts.";
//     $designer = "Company Formation through a Simple Process:";
//     $revisions = "Save Money on Taxes";
//     // $fileformat = "";
//     $time = "100% Satisfaction Guarantee";
// }

if ($_GET['search'] == "Direct Hit Search") {
    $search = "Free Search";
    $searchPrice = "$0";
}

if ($_GET['search'] == "Basic Search") {
    $search = "Basic Search";
    $searchPrice = "$9.99";
}

if ($_GET['search'] == "Federal & State Search") {
    $search = "Federal & State Search";
    $searchPrice = "$149";
}


if ($_GET['search'] == "State & Common Law Search") {
    $search = "State & Common Law Search";
    $searchPrice = "$299";
}

if ($_GET['search'] == "Global Search") {
    $search = "Global Search";
    $searchPrice = "$499";
}
//LANDING PAGE PACKAGES

// if ($_GET['package'] == "Basic Package") {
//     $package = "Basic Package";
//     $dprice = "$39";
//     $price = "$78";
//     $logo = "Case Review";
//     $designer = "Case Filing";
//     $revisions = "Trademark Alert";
//     $fileformat = "Trademark Secured";
//     $time = "100% Satisfaction Guarantee";
// }





// $packages = array ('Trade Mark Basic Package','Trade Mark Professional Package','Trade Mark Business Package','Trade Mark Corporate Package','Copyright Gold Package','Copyright Diamond Package','Company Formation Package','Federal & State Search','State & Common Law Search','Global Search','Basic Package','Professional Package','Business Package','Corporate');
$packages = array ('TRADEMARK REGISTRATION BASIC','TRADEMARK REGISTRATION STARTUP','TRADEMARK REGISTRATION PROFESSIONAL','TRADEMARK REGISTRATION CORPORATE','COPYRIGHT REGISTRATION STARTUP','COPYRIGHT REGISTRATION PREMIUM','AMAZON BRAND REGISTRY PREMIUM','COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH','COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW','COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH');

$search = array('Direct Hit Search','Basic Search','Federal & State Search','State & Common Law Search','Global Search');

$states = array(
    'AL' => 'Alabama',
    'AK' => 'Alaska',
    'AZ' => 'Arizona',
    'AR' => 'Arkansas',
    'CA' => 'California',
    'CO' => 'Colorado',
    'CT' => 'Connecticut',
    'DE' => 'Delaware',
    'DC' => 'District Of Columbia',
    'FL' => 'Florida',
    'GA' => 'Georgia',
    'HI' => 'Hawaii',
    'ID' => 'Idaho',
    'IL' => 'Illinois',
    'IN' => 'Indiana',
    'IA' => 'Iowa',
    'KS' => 'Kansas',
    'KY' => 'Kentucky',
    'LA' => 'Louisiana',
    'ME' => 'Maine',
    'MD' => 'Maryland',
    'MA' => 'Massachusetts',
    'MI' => 'Michigan',
    'MN' => 'Minnesota',
    'MS' => 'Mississippi',
    'MO' => 'Missouri',
    'MT' => 'Montana',
    'NE' => 'Nebraska',
    'NV' => 'Nevada',
    'NH' => 'New Hampshire',
    'NJ' => 'New Jersey',
    'NM' => 'New Mexico',
    'NY' => 'New York',
    'NC' => 'North Carolina',
    'ND' => 'North Dakota',
    'OH' => 'Ohio',
    'OK' => 'Oklahoma',
    'OR' => 'Oregon',
    'PA' => 'Pennsylvania',
    'RI' => 'Rhode Island',
    'SC' => 'South Carolina',
    'SD' => 'South Dakota',
    'TN' => 'Tennessee',
    'TX' => 'Texas',
    'UT' => 'Utah',
    'VT' => 'Vermont',
    'VA' => 'Virginia',
    'WA' => 'Washington',
    'WV' => 'West Virginia',
    'WI' => 'Wisconsin',
    'WY' => 'Wyoming',
  );
  
  $countries = array(
"AF" => "Afghanistan",
"AL" => "Albania",
"DZ" => "Algeria",
"AS" => "American Samoa",
"AD" => "Andorra",
"AO" => "Angola",
"AI" => "Anguilla",
"AQ" => "Antarctica",
"AG" => "Antigua and Barbuda",
"AR" => "Argentina",
"AM" => "Armenia",
"AW" => "Aruba",
"AU" => "Australia",
"AT" => "Austria",
"AZ" => "Azerbaijan",
"BS" => "Bahamas",
"BH" => "Bahrain",
"BD" => "Bangladesh",
"BB" => "Barbados",
"BY" => "Belarus",
"BE" => "Belgium",
"BZ" => "Belize",
"BJ" => "Benin",
"BM" => "Bermuda",
"BT" => "Bhutan",
"BO" => "Bolivia",
"BA" => "Bosnia and Herzegovina",
"BW" => "Botswana",
"BV" => "Bouvet Island",
"BR" => "Brazil",
"IO" => "British Indian Ocean Territory",
"BN" => "Brunei Darussalam",
"BG" => "Bulgaria",
"BF" => "Burkina Faso",
"BI" => "Burundi",
"KH" => "Cambodia",
"CM" => "Cameroon",
"CA" => "Canada",
"CV" => "Cape Verde",
"KY" => "Cayman Islands",
"CF" => "Central African Republic",
"TD" => "Chad",
"CL" => "Chile",
"CN" => "China",
"CX" => "Christmas Island",
"CC" => "Cocos (Keeling) Islands",
"CO" => "Colombia",
"KM" => "Comoros",
"CG" => "Congo",
"CD" => "Congo, the Democratic Republic of the",
"CK" => "Cook Islands",
"CR" => "Costa Rica",
"CI" => "Cote D'Ivoire",
"HR" => "Croatia",
"CU" => "Cuba",
"CY" => "Cyprus",
"CZ" => "Czech Republic",
"DK" => "Denmark",
"DJ" => "Djibouti",
"DM" => "Dominica",
"DO" => "Dominican Republic",
"EC" => "Ecuador",
"EG" => "Egypt",
"SV" => "El Salvador",
"GQ" => "Equatorial Guinea",
"ER" => "Eritrea",
"EE" => "Estonia",
"ET" => "Ethiopia",
"FK" => "Falkland Islands (Malvinas)",
"FO" => "Faroe Islands",
"FJ" => "Fiji",
"FI" => "Finland",
"FR" => "France",
"GF" => "French Guiana",
"PF" => "French Polynesia",
"TF" => "French Southern Territories",
"GA" => "Gabon",
"GM" => "Gambia",
"GE" => "Georgia",
"DE" => "Germany",
"GH" => "Ghana",
"GI" => "Gibraltar",
"GR" => "Greece",
"GL" => "Greenland",
"GD" => "Grenada",
"GP" => "Guadeloupe",
"GU" => "Guam",
"GT" => "Guatemala",
"GN" => "Guinea",
"GW" => "Guinea-Bissau",
"GY" => "Guyana",
"HT" => "Haiti",
"HM" => "Heard Island and Mcdonald Islands",
"VA" => "Holy See (Vatican City State)",
"HN" => "Honduras",
"HK" => "Hong Kong",
"HU" => "Hungary",
"IS" => "Iceland",
"IN" => "India",
"ID" => "Indonesia",
"IR" => "Iran, Islamic Republic of",
"IQ" => "Iraq",
"IE" => "Ireland",
"IL" => "Israel",
"IT" => "Italy",
"JM" => "Jamaica",
"JP" => "Japan",
"JO" => "Jordan",
"KZ" => "Kazakhstan",
"KE" => "Kenya",
"KI" => "Kiribati",
"KP" => "Korea, Democratic People's Republic of",
"KR" => "Korea, Republic of",
"KW" => "Kuwait",
"KG" => "Kyrgyzstan",
"LA" => "Lao People's Democratic Republic",
"LV" => "Latvia",
"LB" => "Lebanon",
"LS" => "Lesotho",
"LR" => "Liberia",
"LY" => "Libyan Arab Jamahiriya",
"LI" => "Liechtenstein",
"LT" => "Lithuania",
"LU" => "Luxembourg",
"MO" => "Macao",
"MK" => "Macedonia, the Former Yugoslav Republic of",
"MG" => "Madagascar",
"MW" => "Malawi",
"MY" => "Malaysia",
"MV" => "Maldives",
"ML" => "Mali",
"MT" => "Malta",
"MH" => "Marshall Islands",
"MQ" => "Martinique",
"MR" => "Mauritania",
"MU" => "Mauritius",
"YT" => "Mayotte",
"MX" => "Mexico",
"FM" => "Micronesia, Federated States of",
"MD" => "Moldova, Republic of",
"MC" => "Monaco",
"MN" => "Mongolia",
"MS" => "Montserrat",
"MA" => "Morocco",
"MZ" => "Mozambique",
"MM" => "Myanmar",
"NA" => "Namibia",
"NR" => "Nauru",
"NP" => "Nepal",
"NL" => "Netherlands",
"AN" => "Netherlands Antilles",
"NC" => "New Caledonia",
"NZ" => "New Zealand",
"NI" => "Nicaragua",
"NE" => "Niger",
"NG" => "Nigeria",
"NU" => "Niue",
"NF" => "Norfolk Island",
"MP" => "Northern Mariana Islands",
"NO" => "Norway",
"OM" => "Oman",
"PK" => "Pakistan",
"PW" => "Palau",
"PS" => "Palestinian Territory, Occupied",
"PA" => "Panama",
"PG" => "Papua New Guinea",
"PY" => "Paraguay",
"PE" => "Peru",
"PH" => "Philippines",
"PN" => "Pitcairn",
"PL" => "Poland",
"PT" => "Portugal",
"PR" => "Puerto Rico",
"QA" => "Qatar",
"RE" => "Reunion",
"RO" => "Romania",
"RU" => "Russian Federation",
"RW" => "Rwanda",
"SH" => "Saint Helena",
"KN" => "Saint Kitts and Nevis",
"LC" => "Saint Lucia",
"PM" => "Saint Pierre and Miquelon",
"VC" => "Saint Vincent and the Grenadines",
"WS" => "Samoa",
"SM" => "San Marino",
"ST" => "Sao Tome and Principe",
"SA" => "Saudi Arabia",
"SN" => "Senegal",
"CS" => "Serbia and Montenegro",
"SC" => "Seychelles",
"SL" => "Sierra Leone",
"SG" => "Singapore",
"SK" => "Slovakia",
"SI" => "Slovenia",
"SB" => "Solomon Islands",
"SO" => "Somalia",
"ZA" => "South Africa",
"GS" => "South Georgia and the South Sandwich Islands",
"ES" => "Spain",
"LK" => "Sri Lanka",
"SD" => "Sudan",
"SR" => "Suriname",
"SJ" => "Svalbard and Jan Mayen",
"SZ" => "Swaziland",
"SE" => "Sweden",
"CH" => "Switzerland",
"SY" => "Syrian Arab Republic",
"TW" => "Taiwan, Province of China",
"TJ" => "Tajikistan",
"TZ" => "Tanzania, United Republic of",
"TH" => "Thailand",
"TL" => "Timor-Leste",
"TG" => "Togo",
"TK" => "Tokelau",
"TO" => "Tonga",
"TT" => "Trinidad and Tobago",
"TN" => "Tunisia",
"TR" => "Turkey",
"TM" => "Turkmenistan",
"TC" => "Turks and Caicos Islands",
"TV" => "Tuvalu",
"UG" => "Uganda",
"UA" => "Ukraine",
"AE" => "United Arab Emirates",
"GB" => "United Kingdom",
"US" => "United States",
"UM" => "United States Minor Outlying Islands",
"UY" => "Uruguay",
"UZ" => "Uzbekistan",
"VU" => "Vanuatu",
"VE" => "Venezuela",
"VN" => "Viet Nam",
"VG" => "Virgin Islands, British",
"VI" => "Virgin Islands, U.s.",
"WF" => "Wallis and Futuna",
"EH" => "Western Sahara",
"YE" => "Yemen",
"ZM" => "Zambia",
"ZW" => "Zimbabwe"
);
