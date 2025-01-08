<?php


$country_id = $_REQUEST['country_id'];
$data_id = $_REQUEST['data_id'];

$status = true;
$conn = mysqli_connect('localhost', 'trademarkroyalty_trademark_offer_user', 'br6.4IoVV8Mp', 'trademarkroyalty_trademark_offer');

// $conn = mysqli_connect('localhost', 'devtestlink_zelfirm', '24$}2NkExf6X', 'devtestlink_zelfirm');

$sql =  "DELETE FROM  `countries` WHERE `Id` = '$country_id'";
mysqli_query($conn, $sql);

$sql =  "SELECT * FROM `zelfirm_data` WHERE `id` = '$data_id'";
$data = mysqli_query($conn, $sql)->fetch_assoc();

$sql =  "SELECT * FROM `countries` WHERE `data_id` = '$data_id'";
$raw_countries = mysqli_query($conn, $sql);
$countries = mysqli_fetch_all($raw_countries, MYSQLI_ASSOC);

if (mysqli_error($conn)) {
    $status = false;
}

$response = [
    "status" => $status,
    "data" => $data,
    "countries" => $countries,
];

echo json_encode($response);
return;
