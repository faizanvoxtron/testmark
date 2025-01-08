<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/PHPMailer.php'; 

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $ownerMark = $_POST['ownerMark'];
  $bussniessdba = $_POST['bussniessdba'];
  $bussniessName = $_POST['bussniessName'];
  $bussniessNature = $_POST['bussniessNature'];
  $MailingAddress = $_POST['MailingAddress'];
  $busniessCity = $_POST['busniessCity'];
  $bussniessState = $_POST['bussniessState'];
  $bussniessCountry = $_POST['bussniessCountry'];
  $bussniessZip = $_POST['bussniessZip'];
  $bussniessNumber = $_POST['bussniessNumber'];
  $bussniessWebsite = $_POST['bussniessWebsite'];
  $bussniessAddress = $_POST['bussniessAddress'];
  $bussniessFax = $_POST['bussniessFax'];
  $bussniessOfferd = $_POST['bussniessOfferd'];
  $bussniessDate = $_POST['bussniessDate'];
  $nationalID = $_POST['nationalID'];
  $passport = $_POST['passport'];
  $solepropritorship = $_POST['solepropritorship'];
  $corporotion = $_POST['corporotion'];
  $limitedliabiltycompany = $_POST['limitedliabiltycompany'];
  $patnershipjointventure = $_POST['patnershipjointventure'];
  $BrandName = $_POST['BrandName'];
  $BrandLogo = $_POST['BrandLogo'];
  $BrandSlogan = $_POST['BrandSlogan'];
  $BrandOthers = $_POST['BrandOthers'];
  $yourLogo = $_POST['yourLogo'];
  $usagePlaces = $_POST['usagePlaces'];
  $DateOfUse = $_POST['DateOfUse'];
  $File = $_POST['file'];
  
  
//   // Check if a file was uploaded successfully
// if(isset($_FILES['BrandLogo']) && $_FILES['BrandLogo']['error'] == UPLOAD_ERR_OK) {
//     // File path and name
//     $BrandLogo = $_FILES['BrandLogo']['tmp_name'];

//     // Process the file as needed, for example, move it to a specific directory
//     move_uploaded_file($_FILES['BrandLogo']['tmp_name'], 'upload_directory/' . $_FILES['BrandLogo']['name']);
// } else {
//     // Handle the case where no file was uploaded or an error occurred
//     // You can set a default value or display an error message
// }
  
  
  

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
  $mail->setfrom('tmr_test@voxtrongroup.com', 'Trademark Royalty');
  $mail->addaddress('support@trademarkroyalty.com', 'Recipient Name');
  
  // Set email content
  $mail->isHTML(true);
  $mail->Subject = 'New Assessment Form Submission';
  $mail->Body = "Owner of mark: $ownerMark<br>DBA ( doing business as): $bussniessdba<br>Business Name: $bussniessName<br>Business Nature: $bussniessNature<br>Mailing Address: $MailingAddress<br>City: $busniessCity<br>State: $bussniessState<br>Country: $bussniessCountry<br>Zip Code: $bussniessZip<br>Phone number: $bussniessNumber<br>Website Address: $bussniessWebsite<br>Email address: $bussniessAddress<br>Fax number: $bussniessFax<br>Please provide description of your business / List of goods and Services offered: $bussniessOfferd<br>First date of use: $bussniessDate<br>National ID: $nationalID<br>Passport: $passport<br>Sole Propritorship: $solepropritorship<br>Corprotion: $corporotion<br>Limited Liabilty Company: $limitedliabiltycompany<br>Patnership, Joint Venture: $patnershipjointventure<br>Brand Name: $BrandName<br>Brand Logo: $BrandLogo<br>Brand Slogan: $BrandSlogan<br>Others: $BrandOthers<br>Are you currently using your logo?: $yourLogo<br> If yes, provide us a list of all places you intend to use your mark*: $usagePlaces<br>Date of Use: $DateOfUse";
  
  $fileTmpName = $_FILES['file']['tmp_name'];
    $fileName = $_FILES['file']['name'];
    $mail->addAttachment($fileTmpName, $fileName);

  // Send the email
  if (!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  }else{
      header('Location: https://trademarkroyalty.com/assessment-form?submitted=1');

  }
}
?>
