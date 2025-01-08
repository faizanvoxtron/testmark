<?php
$lead_id = $_POST['lead_id'];
// $api_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiV2Vic2l0ZSIsIm5hbWUiOiJNYWluIGFuZCBMUHMiLCJBUElfVElNRSI6MTcwMjkzODE3N30.7toaLTomPUn-_GuQQ4E074PrzUYGLw-GbaiLUcDF_O4";
// $api_base_url = 'https://dashboard.trademarkroyalty.com/api/';
$items = [
    [
        "description" => $_POST['package'],
        "long_description" => "",
        "rate" =>  $_POST['package_price'], // package price
    ],
];
if (isset($_POST['search_type'])) {
    $items[] = [
        "description" => $_POST['search_type'],
        "long_description" => "",
        "rate" =>  $_POST['search_type_price'], // package price
    ];
}
if (isset($_POST['expedite'])) {
    $items[] = [
        "description" => $_POST['expedite'],
        "long_description" => "",
        "rate" =>  $_POST['expedite_price'], // package price
    ];
}

$lead_data = getLead($lead_id);
$customer_data = [
    "company" => $lead_data->name,
    "phonenumber" => $lead_data->phonenumber,
    "email" => $lead_data->email,
    "city" => $lead_data->city,
    "state" => $lead_data->state,
    "zip" => $lead_data->zip,
    "country" => $lead_data->country,
];
$customer_info = create_customer($customer_data);


// echo "Customer";
// print_r($customer_data);
// print_r($customer_info);
// echo "<br>";

// return;

// $contact_data = [
//     "customer_id" => $customer_info->customer_id,
//     "firstname" => $lead_data->name,
//     "email" => $lead_data->email,
//     "phonenumber" => $lead_data->phonenumber,
//     "send_set_password_email" => 1,
// ];
// $contact_info = create_contact($contact_data);


// echo "Customer";
// print_r($contact_data);
// print_r($contact_info);
// echo "<br>";


$invoice_data = [
    "clientid" => $customer_info->customer_id,
    "billing_street" => "",
    "duedate" => date('Y-m-d', strtotime(date('Y-m-d')  . ' +1 month')),
];
$newitems = [];
$subtotal = 0;
foreach ($items as $key => $item) {
    $subtotal += $item['rate'];
    $newitems[$key] = [
        "description" => $item['description'],
        "long_description" => $item['long_description'],
        "rate" => $item['rate'],
        "order" => $key + 1,
        "unit" => '',
        "qty" => 1,
    ];
}
$invoice_data['subtotal'] = str_replace(',', '', number_format($subtotal, 2));
$invoice_data['total'] = str_replace(',', '', number_format($subtotal, 2));
$invoice_data['newitems'] = $newitems;

$invoice_info = create_invoice($invoice_data);

if ($invoice_info->status) {
    $invoice_url = "https://dashboard.trademarkroyalty.com/invoice/" . $invoice_info->invoice->id . "/" . $invoice_info->invoice->hash;
    echo json_encode([
        'status' => true,
        'message' => "Success",
        'url' => $invoice_url,
    ]);
    return;
    // header("LOCATION: " . $invoice_url);
} else {
    // CATCH ERRORS
    $payment_page_url = "http://localhost/trademark/query/payment.php";
    echo json_encode([
        'status' => false,
        'message' => $invoice_info->message,
        'url' => $payment_page_url,
    ]);
    return;

    // session_start();
    // $_SESSION['error'] = $invoice_info->message;
    // header("LOCATION: " . $payment_page_url);
};


function getLead($lead_id)
{
    $url = "https://dashboard.trademarkroyalty.com/api/leads/" . $lead_id;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'authtoken:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiV2Vic2l0ZSIsIm5hbWUiOiJNYWluIGFuZCBMUHMiLCJBUElfVElNRSI6MTcwMjkzODE3N30.7toaLTomPUn-_GuQQ4E074PrzUYGLw-GbaiLUcDF_O4',
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response);
}

// CREATE CUSTOMER
function create_customer($data)
{
    $url = "https://dashboard.trademarkroyalty.com/api/customers";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'authtoken:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiV2Vic2l0ZSIsIm5hbWUiOiJNYWluIGFuZCBMUHMiLCJBUElfVElNRSI6MTcwMjkzODE3N30.7toaLTomPUn-_GuQQ4E074PrzUYGLw-GbaiLUcDF_O4',
    ]);
    curl_setopt($ch, CURLOPT_ENCODING, "gzip,deflate");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response);
}

// CREATE CONTACT
function create_contact($data)
{
    $url = "https://dashboard.trademarkroyalty.com/api/contacts";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'authtoken:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiV2Vic2l0ZSIsIm5hbWUiOiJNYWluIGFuZCBMUHMiLCJBUElfVElNRSI6MTcwMjkzODE3N30.7toaLTomPUn-_GuQQ4E074PrzUYGLw-GbaiLUcDF_O4',
    ]);
    curl_setopt($ch, CURLOPT_ENCODING, "gzip,deflate");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response);
}

// CREATE INVOICE
function create_invoice($data)
{
    $url = "https://dashboard.trademarkroyalty.com/api/invoices";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'authtoken:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiV2Vic2l0ZSIsIm5hbWUiOiJNYWluIGFuZCBMUHMiLCJBUElfVElNRSI6MTcwMjkzODE3N30.7toaLTomPUn-_GuQQ4E074PrzUYGLw-GbaiLUcDF_O4',
    ]);
    curl_setopt($ch, CURLOPT_ENCODING, "gzip,deflate");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response);
    // return $response;
}
// MARK INVOICE AS PAID
