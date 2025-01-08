<?php 
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Include PHPMailer library files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    


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
$subject = "Trademak Royalty";
$body = "Customer name: ".$name."<br><br>  Customer Email: ".$email."<br><br> Customer Phone: ".$phone."<br><br> Customer Message: ".$message;

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


header("Location: ../form.php");
?>