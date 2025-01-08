<?php

if(isset($_FILES['file']['name'])){

	/* Getting file name */
	$filename = $_FILES['file']['name'];

	/* Location */
	$location = "upload/".$filename;
	$imageFileType = pathinfo($location,PATHINFO_EXTENSION);
	$imageFileType = strtolower($imageFileType);

	/* Valid extensions */
	$valid_extensions = array("jpg","jpeg","png","pdf","webp");

	$response = 0;
	/* Check file extension */
	if(in_array(strtolower($imageFileType), $valid_extensions)) {
	   	/* Upload file */
	   	if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
	     	$response = $location;
	   	}
	}

	echo $response;
	exit;
}

echo 0;

$path = $_FILES['file']['name']; // file means your input type file name
$ext = pathinfo($path, PATHINFO_EXTENSION);

if ($ext=="jpg" OR $ext=="jpeg" OR $ext=="gif" OR $ext=="png") {
    // your code here like...
    echo "Upload successful";
}else{
    // your invalid code here like...
    echo "Invalid image format. Only upload JPG or JPEG or GIF or PNG";
}
?>
