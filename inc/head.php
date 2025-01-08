<?php
define("NITROPACK_HOME_URL", "https://trademarkroyalty.com/"); 
define("NITROPACK_SITE_ID", "qqxNuPEyFbBclmQSBYbPXAUoUSmdNEsb"); 
define("NITROPACK_SITE_SECRET", "pzws4HYkGVRWAQgvCH1HSsGNDu2INOEavT84v4ruWnIKTeWPt51OWJ8V4DtjNqYO"); 
include_once "../nitropack-sdk/bootstrap.php";

?>


<?php
require_once('ip/getIpInfo.php');
$ipdetails = getInfo();
$pageurl = $_SERVER['REQUEST_URI'];
$website = $_SERVER['HTTP_HOST'];
$ip = $ipdetails['ip'];
$city = $ipdetails['city_name'];
$region = $ipdetails['region_name'];
$country = $ipdetails['country_name'];
$organization = $ipdetails['as'];
$latitude = $ipdetails['latitude'];
$longitude = $ipdetails['longitude'];
$timezone = $ipdetails['time_zone'];
$postal = $ipdetails['zip_code'];
$clientIP = $_SERVER['HTTP_CLIENT_IP']
    ?? $_SERVER["HTTP_CF_CONNECTING_IP"] # when behind cloudflare
    ?? $_SERVER['HTTP_X_FORWARDED']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['HTTP_FORWARDED']
    ?? $_SERVER['HTTP_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? '0.0.0.0';

?>


<?php
if (substr($_SERVER['HTTP_HOST'], 0, 4) === 'www.') {
    header('Location: https://trademarkroyalty.com' . $_SERVER['REQUEST_URI'], true, 301);
    exit;
}
// rest of your PHP code goes here
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
     <meta name="description" content="Trademark Royalty - Your trusted partner for trademark services in the USA. Protect your brand with expert trademark registration, monitoring, and enforcement. Our experienced team ensures your intellectual property rights are safeguarded. Contact us today for comprehensive trademark solutions. ">
     
    <!--<meta name="keywords" content="">-->
   <title> Trademark Royalty </title>

    <!-- <link rel="canonical" href="http://coretrademark.com/" /> -->

    <!-- <link rel="icon" type="image/x-icon" size="16x16" href="/favicon.ico?v=1.1"> -->

    <!-- Preloads -->
    <meta name="google-site-verification" content="JAHg08UUhVOKzeLYPk9VJBCmII9A1nEP2GaFJBAyW-8" />
    <link rel="preload" href="./assets/fonts/xicons.ttf" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="preload" as="style">
    <link href="./assets/css/intlTelInput.min.css" rel="preload" as="style">
    <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="preload" as="style">
    <link href="./assets/vendor/slick/slick.css" rel="preload" as="style">
    <link href="./assets/css/style.css?v=20" rel="preload" as="style">
    <!--<link href="./assets/css.css" rel="preload" as="style">-->
    <link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css" rel="stylesheet">
    <!-- Preloads -->

<!-- animations -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Favicons -->
    <link href="./assets/img/favicon.png" rel="icon">
    <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">


    <!-- Template Main CSS File -->
    <link href="./assets/css/intlTelInput.min.css" rel="stylesheet">
    <link href="./assets/vendor/slick/slick.css" rel="stylesheet">
    <link href="./assets/css/style.css?v=6.10" rel="stylesheet">
    <link href="./assets/css/responsive.css?v=4.2" rel="stylesheet">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <!-- Google Fonts End -->
    
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Trademark Royalty",
  "image": "",
  "@id": "",
  "url": "https://trademarkroyalty.com/",
  "telephone": "+1 (408) 538-8652",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 S Almaden Blvd #602",
    "addressLocality": "San Jose",
    "addressRegion": "CA",
    "postalCode": "CA 95173",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.33311087783935,
    "longitude": -121.89136300264003
  }  
}
</script>

<!-- Start of tmroyalty Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=8daa6d7d-aa55-4f30-bb4c-94e837ca632b"> </script>
<!-- End of tmroyalty Zendesk Widget script -->



    <!-- <style>
        .home-banner{
            position: relative;
        }
    
    
    
        .home-banner .right-img {
            position: absolute;
            top: 20px;
            right: 0;
            width: 100%;
            height: 100%;
            max-width: 1100px;
        }
        #video-laptop iframe {
            /* box-sizing: border-box;
            background: url('./assets/img/banner/banner-right-img.webp') center right no-repeat;
            background-size: contain;
            padding: 6% 16% 23% 16%;
            padding: 89px 0px 124px 160px;
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%; */
        }

        #video-laptop iframe {
            box-sizing: border-box;
            background: url(./assets/img/banner/banner-right-img.webp) center right no-repeat;
            background-size: contain;
            /* padding: 6% 16% 23% 16%; */
            padding: 13% 0% 15% 15.5%;
            /* position: relative; */
            width: 100%;
            height: 100%;
        }
    </style> -->

    <!-- <script>
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.
    var player;

    function onYouTubePlayerAPIReady() {
      player = new YT.Player('video-iframe', {
        height: '597.9375',
        width: '1036',
        videoId: 'dGFSjKuJfrI',        
        events: {
            'onReady': onPlayerReady
        }
      });
    }

    function onPlayerReady(event) {
        player.mute();
        player.playVideo();
        player.jumpstart_player();
    }
  </script> -->
  
  <script>
    jQuery(document).ready(function(){

setTimeout(function(){

     //var tag_new = jQuery("template").eq(38).attr("id");
     var tag_new = jQuery("template").last().attr("id");
     console.log(tag_new);

     //alert(tag_new);
     jQuery("#" + tag_new).css("display", "none");
     jQuery("#" + tag_new).next().next().css("display", "none");
}, 100);

});
</script>
</head>