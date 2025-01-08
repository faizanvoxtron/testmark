<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/PHPMailer.php'; 

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  

  // Create a new PHPMailer instance
  $mail = new PHPMailer();
  
  $mail->SMTPDebug = 0;

  // Configure the mailer
  $mail->isSMTP();
  $mail->Host = 'smtp.yandex.com'; // Your SMTP server address
  $mail->SMTPAuth = true;
  $mail->Username = 'tmr_test@voxtrongroup.com'; // Your SMTP username
  $mail->Password = 'Root123$%67'; // Your SMTP password
  $mail->SMTPSecure = 'ssl'; // Use 'ssl' if your server requires it
  $mail->Port = 465; // Port for SMTP

  // Set sender and recipient
  $mail->setfrom('tmr_test@voxtrongroup.com', 'Trademark Royalty Web - Contact Form');
  $mail->addaddress('support@trademarkroyalty.com', 'Recipient Name');

  // Set email content
  $mail->isHTML(true);
  $mail->Subject = 'Lead Form Submission';
  $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br>Message: $message";

  // Send the email
  if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
    header('Location: https://trademarkroyalty.com?submitted=1');
  }
}
?>


