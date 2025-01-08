<?php


error_reporting(E_ALL);
ini_set('display_errors', 1);

    $brand_name1 = $_POST['brand_name'];
    $brand_logo1 = $_POST['file'];
    $brand_slogan1 = $_POST['brand_slogan'];
    $brand_sound1 = $_POST['brand_sound'];
    $website_url1 = $_POST['website_url'];
    $brand_decs1 = $_POST['brand_decs'];
    $unbundled1 = $_POST['unbundled'];
    $country1 = $_POST['country'];
    // $address = $_POST['address'];

// Include PHPMailer library files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Receiver email address
// $to_email = "sales@zelsfirm.com ";
$to_email = 'support@trademarkroyalty.com';

// Sender email address and SMTP credentials
$from_email = "no-reply@voxtrongroup.com";
$smtp_username = "no-reply@voxtrongroup.com";
$smtp_password = "no-re!@##fm3";

// Email subject and body
$subject = "Trademark Royalty";
$body = "Brand Name: " . $brand_name1 . "<br><br>Brand Slogan: " . $brand_slogan1 . "<br><br>Brand Logo: ". "https://trademarkroyalty.com/trademark-offer/upload/$brand_logo1". "<br><br>Brand Website: " . $website_url1 . "<br><br>Brand Description: " . $brand_decs1 . "<br><br>Selected Package: $" . $unbundled1;

foreach ($country1 as $selected) {
    $values = explode(",", $selected);
    // $country_price = $values[0];
    $country_name = $values[1];
    $body .= "<br><br>Country: " . $country_name ;
}

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
// echo"<pre>";
// print_r($mail);
// die();
//  $conn = mysqli_connect('localhost', 'vizfirm_website_user', ' IA=~]B_6#Zr1', 'vizfirm_website_db');

 $conn = mysqli_connect('localhost', 'trademarkroyalty_trademark_offer_user', 'br6.4IoVV8Mp', 'trademarkroyalty_trademark_offer');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $brand_name = $_POST['brand_name'];
    $brand_logo = $_POST['file'];
    $brand_slogan = $_POST['brand_slogan'];
    $brand_sound = $_POST['brand_sound'];
    $website_url = $_POST['website_url'];
    $brand_decs = $_POST['brand_decs'];
    $unbundled = $_POST['unbundled'];
    // $address = $_POST['address'];
    
   
 

    // $sql =  "INSERT INTO `zelfirm_data`(`id`, `brand_name`, `brand_logo`, `brand_slogan`, `brand_sound`, `website_url`, `website_desc` ,`Package`) VALUES ('','$brand_name', '$brand_logo', '$brand_slogan', '$brand_sound','$website_url', '$brand_decs' ,'$unbundled')";

   $sql = "INSERT INTO `zelfirm_data`(`brand_name`, `brand_logo`, `brand_slogan`, `brand_sound`, `website_url`, `website_desc`, `Package`) VALUES ( '$brand_name', '$brand_logo' , '$brand_slogan' , '$brand_sound' , '$website_url' , '$brand_decs' , '$unbundled' )";
  
//   echo $brand_slogan;
    mysqli_query($conn, $sql);

    $data_id = mysqli_insert_id($conn);

    $country = $_POST['country'];
    foreach ($country as $selected) {
        $values = explode(",", $selected);
        $country_price = $values[0];
        $country_name = $values[1];
        

        $sql1 =  "INSERT INTO `countries`(`Id`, `data_id`, `country_name`, `country_price`) VALUES (Null, '$data_id','$country_name' ,'$country_price' )";
        mysqli_query($conn, $sql1);
    }


    $redirectUrl = str_replace('form','process',$_SERVER['HTTP_REFERER'])."?id=".$data_id;
    header('Location: '.$redirectUrl);

}
