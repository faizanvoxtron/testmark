<?php
    require_once("connectionClass.php");
    require_once('../query/vendor/autoload.php');
    
    $ctx = new database();
    
    // initiate payment sessioin
    \Stripe\Stripe::setApiKey('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');
    
    // update stripe payment intent
    $intent = \Stripe\PaymentIntent::update(
        $_POST['intentId'],
        ['amount' => $_POST['amount']]
    );
    
    $response = array(
        'status' => 'true',
    );
    
    
    $ctx->updateRow("payintents",array("amount"=>(float) $_POST['amount']/100),array("intentId='".$_POST['intentId']."'"));

    echo json_encode($response);
    

?>