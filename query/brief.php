<?php
require_once("includes/data.php");
// require_once("../service/connectionClass.php");
//  $ctx = new database();
// $query = $ctx->selectData('leads',array(),array("id=".$_GET['id']));
// $data = $query['data'];
?>

<!doctype html>
<html lang="en">

<head>
    <title>Brief Form | Trademark Royalty</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/service-style.css?v=2.1">
    
    <link rel="shortcut icon" href="./assets/images/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Start of trademarkroyalty Zendesk Widget script -->
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=c3e74f8e-8d91-4475-bf14-04b476e98064"> </script>
    <!-- End of trademarkroyalty Zendesk Widget script -->

</head>

<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="logo-wrapper">
                        <a href="javascript:void()"><img src="./assets/images/logo-white.png" class="img-fluid" alt="Logo"></a>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="action-btn">
                    <a href="javascript:$zopim.livechat.window.show();" class="get-quote c-button js-next-screen shine me-3"><i class="fa-regular fa-comment"></i>Chat Now</a>
                    <a href="tel:+1 (408) 538-8652" class="get-quote c-button js-next-screen shine"><i class="fa-solid fa-headset"></i>+1 (408) 538-8652</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <!-- NEW BRIFE -->
        <!--<section class="briefForm">-->
        <!--    <div class="container">-->
        <!--        <div class="row">-->
        <!--            <form id="briefForm" style="padding-bottom:80px" method="POST" action="javascript:brief('briefForm');">-->
        <!--                    <input type="hidden" id="user" name="UserId" value="<?= $_GET['id'] ?>">-->
        <!--                    <input type="hidden" id="price" name="Price" value="<?= $dprice ?>">-->
        <!--                    <input type="hidden" id="title" name="Package" value="<?= $package ?>">-->
        <!--                <fieldset>-->
        <!--                    <div class="row">-->
        <!--                        <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                            <div class="mb-3">-->
        <!--                                <label for="ProtectType" class="form-label">Select what you are trying to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                <select class="form-select form-select-lg" id="ProtectType" name="ProtectType" required="">-->
        <!--                                    <option value="" selected>Choose...</option>-->
        <!--                                    <option value="Name">Name</option>-->
        <!--                                    <option value="Slogan">Slogan</option>-->
        <!--                                    <option value="Logo">Logo</option>-->
        <!--                                </select>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectName">-->
        <!--                            <div class="mb-3">-->
        <!--                                <label for="ProtectName" class="form-label">Enter the Name you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                <input class="form-control" type="text" id="ProtectName" name="ProtectName" placeholder="Complete Name">-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectSlogan">-->
        <!--                            <div class="mb-3">-->
        <!--                                <label for="ProtectSlogan" class="form-label">Enter the Slogan you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                <input class="form-control" type="text" id="ProtectSlogan" name="ProtectSlogan" placeholder="Slogan Name">-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectLogo">-->
        <!--                            <div class="mb-3">-->
        <!--                                <label for="ProtectLogo" class="form-label">Enter the Logo you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                <input class="form-control" type="file" id="ProtectLogo" name="ProtectLogo" accept="image/*">-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        </div>-->
        <!--                        <div class="row">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="SelectTrademark" class="form-label">Will the trademark be owned by an individual or an entity such as a corporation or LLC?</label>-->
        <!--                                    <select class="form-select form-select-lg" id="SelectTrademark" name="SelectTrademark" required="">-->
        <!--                                        <option value="" selected>Choose...</option>-->
        <!--                                        <option value="Individual">Individual</option>-->
        <!--                                        <option value="Organization">Organization</option>-->
        <!--                                    </select>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="row" id="CustomerInfo">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerName" class="form-label">Enter Your Full Name.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="CustomerName" value="<?=$data[0]['name']?>" name="CustomerName" placeholder="Enter Your Name">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerEmail" class="form-label">Enter Your Email Address.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control email" type="email" value="<?=$data[0]['email']?>" id="CustomerEmail" name="CustomerEmail" placeholder="E-Mail Address" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerPhone" class="form-label">Enter Your Phone Number.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" value="<?=$data[0]['phone']?>" id="CustomerPhone" name="CustomerPhone" placeholder="Phone Number" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1')">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerAddress" class="form-label">Enter Your Country<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="CustomerCountry" name="CustomerCountry" placeholder="Complete Address" >-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerPhone" class="form-label">Enter Your City.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="CutsomerCity" name="CutsomerCity" placeholder="Enter Your City." maxlength="10">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerPhone" class="form-label">Enter Your Street Address.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text"  id="CustomerAddress" name="CustomerAddress" placeholder="Enter Your States." maxlength="10">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                             <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerPhone" class="form-label">Zip Code / Postal Code.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text"  id="CustomerZipCode" name="CustomerZipCode" placeholder="Enter Your States." maxlength="10">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerPhone" class="form-label">Enter Your State.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="CustomerState" name="CustomerState" placeholder="Enter Your States." maxlength="10">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="CustomerAddress" class="form-label">Enter Your Address.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="CustomerAddress" name="CustomerAddress" placeholder="Complete Address" >-->
        <!--                                </div>-->
        <!--                            </div>-->
                                    
        <!--                        </div>-->
        <!--                        <div class="row" id="OrganizationInfo">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="OrganizationType" class="form-label">Organization Type.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="OrganizationType" name="OrganizationType" placeholder="Organization Type">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="OrganizationName" class="form-label">Enter Your Business Name.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="OrganizationName" name="OrganizationName" placeholder="Enter Your Business Name">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="BusinessPhone" class="form-label">Enter Your Street Address<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="BusinessAddress" name="BusinessAddress" placeholder="Phone Number" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1')">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="OrganizationAddress" class="form-label">Enter Your City<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="BusinessCity" name="BusinessCity" placeholder="Complete Address">-->
        <!--                                </div>-->
        <!--                            </div>-->
                                    
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="BusinessEmail" class="form-label">Enter Business Email Address.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control email" type="email" id="BusinessEmail" name="BusinessEmail" placeholder="E-Mail Address" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="BusinessPhone" class="form-label">Enter your States<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="BusniessStates" name="BusniessStates" placeholder="Enter Your States" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1')">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="col-lg-3 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="OrganizationAddress" class="form-label">Zip Code / Postal Code<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="ZipCode" name="ZipCode" placeholder="Complete Address">-->
        <!--                                </div>-->
        <!--                            </div>-->
                                    
        <!--                        </div>-->
        <!--                        <div class="row">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                   <label for="OrganizationAddress" class="form-label">Enter Your Country.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <input class="form-control" type="text" id="OrganizationAddress" name="OrganizationAddress" placeholder="Enter Your Country." required="" style="">-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                        <div class="row">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="mb-3">-->
        <!--                                    <label for="description" class="form-label">Enter Business Description.<span class="sub-text" style="font-size: 24px;">*</span></label>-->
        <!--                                    <textarea class="form-control" required type="text" id="description" name="Description"  placeholder="Kindly elaborate about the Goods and Services you provide at your Business"></textarea>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
                                
        <!--                        <div class="row">-->
        <!--                            <div class="col-lg-6 col-md-6 col-sm-12 mb-30">-->
        <!--                                <div class="btn-part">-->
        <!--                                    <div class="form-group mb-0">-->
        <!--                                        <input class="submit-buttons w-100" name="step_1_sbmit_btn" type="submit" value="Continue To Proceed">-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                </fieldset>-->
        <!--            </form>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</section>-->
        
        <section class="briefForm">
            <div class="container">
                <div class="row">
                    <form id="briefForm" style="padding-bottom:80px" method="POST" action="#">
                    <input type="hidden" name="lead_id" value="<?= $_GET['lead_id'] ?>">        
                    <!-- <input type="hidden" id="user" name="UserId" value="<?= $_GET['id'] ?>">
                            <input type="hidden" id="price" name="Price" value="<?= $dprice ?>">
                            <input type="hidden" id="title" name="Package" value="<?= $package ?>"> -->
                        <fieldset>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                    <div class="mb-3">
                                        <label for="ProtectType" class="form-label">Select what you are trying to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                        <select class="form-select form-select-lg" id="ProtectType" name="ProtectType" required>
                                            <option value="" selected>Choose...</option>
                                            <option value="Name">Name</option>
                                            <option value="Slogan">Slogan</option>
                                            <option value="Logo">Logo</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectName">
                                    <div class="mb-3">
                                        <label for="ProtectName" class="form-label">Enter the Name you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                        <input class="form-control" type="text" id="ProtectName" name="ProtectName" placeholder="Complete Name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectSlogan">
                                    <div class="mb-3">
                                        <label for="ProtectSlogan" class="form-label">Enter the Slogan you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                        <input class="form-control" type="text" id="ProtectSlogan" name="ProtectSlogan" placeholder="Slogan Name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 mb-30" id="SelectLogo">
                                    <div class="mb-3">
                                        <label for="ProtectLogo" class="form-label">Enter the Logo you wish to protect.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                        <input class="form-control" type="file" id="ProtectLogo" name="ProtectLogo" accept="image/*">
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="SelectTrademark" class="form-label">Will the trademark be owned by an individual or an entity such as a corporation or LLC?</label>
                                            <select class="form-select form-select-lg" id="SelectTrademark" name="SelectTrademark" required>
                                                <option value="" selected>Choose...</option>
                                                <option value="Individual">Individual</option>
                                                <option value="Organization">Organization</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" id="CustomerInfo">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerName" class="form-label">Enter Your Full Name.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="CustomerName" value="<?=$_GET['name']?>" name="CustomerName" placeholder="Enter Your Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerEmail" class="form-label">Enter Your Email Address.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control email" type="email" value="<?=$_GET['email']?>" id="CustomerEmail" name="CustomerEmail" placeholder="E-Mail Address">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerAddress" class="form-label">Enter Your Country<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="CustomerCountry" name="CustomerCountry" placeholder="Complete Address" >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerPhone" class="form-label">Enter Your City.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="CustomerCity" name="CustomerCity" placeholder="Enter Your City.">
                                        </div>
                                    </div>
                                     <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerPhone" class="form-label">Enter Your Street Address.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text"  id="CustomerAddress" name="CustomerAddress" placeholder="Enter Your States.">
                                        </div>
                                    </div>
                                   
                                     <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerPhone" class="form-label">Zip Code / Postal Code.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text"  id="CustomerZipCode" name="CustomerZipCode" placeholder="Enter Your States." >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="CustomerPhone" class="form-label">Enter Your State.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="CustomerState" name="CustomerState" placeholder="Enter Your States.">
                                        </div>
                                    </div>
                                    

                                </div>
                                <div class="row" id="OrganizationInfo">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="OrganizationType" class="form-label">Organization Type.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="OrganizationType" name="OrganizationType" placeholder="Organization Type">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="OrganizationName" class="form-label">Enter Your Business Name<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="OrganizationName" name="OrganizationName" placeholder="Enter Your Business Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="BusinessEmail" class="form-label">Enter Your Street Address.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="BusinessAddress" name="BusinessAddress" placeholder="Enter Your Street Address">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="BusinessEmail" class="form-label">Enter Your City.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="BusinessCity" name="BusinessCity" placeholder="Enter Your City.">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="BusinessPhone" class="form-label">Enter Business Phone Number.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="BusinessPhone" name="BusinessPhone" placeholder="Phone Number" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="OrganizationAddress" class="form-label">Enter Your States.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="BusniessStates" name="BusniessStates" placeholder="Enter Your States.">
                                        </div>
                                    </div>
                                     <div class="col-lg-3 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="OrganizationAddress" class="form-label">Zip Code / Postal Code<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="ZipCode" name="ZipCode" placeholder="Zip Code / Postal Code">
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                           <label for="OrganizationAddress" class="form-label">Enter Your Country.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <input class="form-control" type="text" id="OrganizationAddress" name="OrganizationAddress" placeholder="Enter Your Country.">
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="mb-3">
                                            <label for="description" class="form-label">Enter Business Description.<span class="sub-text" style="font-size: 24px;">*</span></label>
                                            <textarea class="form-control" required type="text" id="description" name="Description"  placeholder="Kindly elaborate about the Goods and Services you provide at your Business"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mb-30">
                                        <div class="btn-part">
                                            <div class="form-group mb-0">
                                            <button id="submit_brief" class="submit" type="button">submit</button>   
                                            <!-- <input id="submit_brief" class="submit-buttons w-100" name="step_1_sbmit_btn" type="submit"  value="Continue To Proceed"> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
        <!-- -->
        <!-- <section class="briefForm">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 pe-5">
                        <div class="main-title">
                            <h2>Brief Form</h2>
                        </div>
                        <form id="briefForm" style="padding-bottom:80px" method="POST" action="javascript:brief('briefForm');">
                            <input type="hidden" id="user" name="UserId" value="<?= $_GET['id'] ?>">
                            <input type="hidden" id="price" name="Price" value="<?= $dprice ?>">
                            <input type="hidden" id="title" name="Package" value="<?= $package ?>">
                            <div class="mb-3">
                                <label for="logoType" class="form-label">IS THIS A RE-DESIGN OR A NEW LOGO? *</label>
                                <input type="text" class="form-control" id="logoType" name="Logo" placeholder="☞ type here" required>
                            </div>
                            <div class="mb-3">
                                <label for="logo" class="form-label">WORD/NAME YOU WANT IN THE LOGO TO APPEAR (TYPE IN EXACTLY AS YOU WISH). *</label>
                                <input type="text" class="form-control" id="logo" name="LogoName" placeholder="☞ type here" required>
                            </div>
                            <div class="mb-3">
                                <label for="tagline">ANY TAGLINE THAT YOU WANT IN THE LOGO TO APPEAR.</label>
                                <input class="form-control" name="Tagline" type="text" id="tagline" placeholder="☞ type here">
                            </div>
                            <div class="mb-3">
                                <label for="logoStyle">SELECT YOUR PREFERED LOGO STYLE? *</label>
                                <div class="prefered-logo-designs row">
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/iconic.png" />
                                        <p>Iconic / Letterforms</p>
                                    </div>
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/wordmarks.png" />
                                        <p>Wordmarks / Letters</p>
                                    </div>
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/monogram.png" />
                                        <p>Lettermarks / Monogram</p>
                                    </div>
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/symbol.png" />
                                        <p>Symbol / Brandmarks</p>
                                    </div>
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/abstract.png" />
                                        <p>Abstract / Logomarks</p>
                                    </div>
                                    <div class="logo-box col-md-2">
                                        <img src="assets/images/types/mascot.png" />
                                        <p>Mascot / Gaming</p>
                                    </div>
                                </div>
                                <input type="hidden" id="prefered" value="" name="PreferedLogo" required>
                            </div>
                            <div class="mb-3">
                                <label for="logoStyle">SELECT TYPE(S) OF HOW YOUR LOGO SHOULD LOOK?</label>
                                <select class="form-select form-select-lg mb-3" name="LogoStyle" id="logoStyle" aria-label=".form-select-lg example">
                                    <option selected>Select Logo Style</option>
                                    <option value="High-Tech">High-Tech</option>
                                    <option value="minimalist">Minimalist</option>
                                    <option value="typography">Typography</option>
                                    <option value="corporate">Corporate</option>
                                    <option vlaue="illustrative">Illustrative</option>
                                    <option vlaue="initials">Initials</option>
                                    <option vlaue="fun">Fun</option>
                                    <option vlaue="sporty">Sporty</option>
                                    <option vlaue="shield">Shield</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="description">PLEASE PROVIDE A BRIEF DESCRIPTION OF YOUR BUSINESS. YOU MAY ALSO WANT TO LIST WEBSITE ADDRESS OF YOUR COMPETITORS, IF ANY.</label>
                                <input class="form-control" name="Description" type="text" id="description" placeholder="☞ type here">

                            </div>
                            <div class="mb-3">
                                <label for="concept">ANYTHING THAT YOU DO NOT LIKE AND WE SHOULD AVOID THAT IN OUR DESIGN CONCEPT. (COLOR, PICTURE OR CERTAIN NATURE, ETC)</label>
                                <input class="form-control" name="Avoid" type="text" id="concept" placeholder="☞ type here">

                            </div>
                            <div class="mb-3">
                                <label for="website">THE EXISTING WEBSITE ADDRESS, IF ANY</label>
                                <input class="form-control" name="Website" type="text" id="website" placeholder="☞ type here">

                            </div>
                            <button type="submit" style="width:100%;" class="submit-buttons">Submit</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <div class="sidebar">
                            <div class="boxpackages">
                                <div class="package_head">
                                    <h3 class="title"><?= $package ?></h3>
                                    <div class="price-box">
                                        <h4 class="price"><?= $dprice ?></h4>
                                        <span class="cut-price">
                                            <strike><?= $price ?></strike>
                                            <span>75% off</span>
                                        </span>

                                    </div>
                                    <p class="desc">Suitable for potential super-startups and brand revamps for companies.</p>
                                </div>
                                <div class="package_content">
                                    <ul>
                                        <li><?= $logo ?></li>
                                        <li><?= $designer ?></li>
                                        <li><?= $revisions ?></li>
                                        <li><?= $fileformat ?></li>
                                        <li><?= $time ?></li>
                                        <li class="features">MORE FEATURES</li>
                                        <li> 100% Satisfaction</li>
                                        <li> Money Back Guarantee</li>
                                        <li> Dedicated Account Manager</li>
                                    </ul>
                                    <div class="container">
                                        <div class="row">                                            
                                            <div class="col-md-12 ">
                                                <a href="javascript:$zopim.livechat.window.show();" class="chat" tabindex="0"> <span><small>Let's Talk</small> Live Chat Now</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="need">
                                <h2><span>Need</span> Assistance?</h2>
                                <ul class="asstxt">
                                    <li>
                                        <a href="tel:(888) 347 0766">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            <span>Toll Free:</span> (888) 347 0769 </a>
                                    </li>
                                    <br>
                                    <li>
                                        <a href="javascript:;" class="chat">
                                            <i class="fa fa-comments" aria-hidden="true"></i>
                                            <span>Live Chat:</span>with our design expert</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- END:: MAIN CONTAINER -->
    </main>
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script defer src="assets/js/brief.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.8-beta.17/jquery.inputmask.min.js" integrity="sha512-zdfH1XdRONkxXKLQxCI2Ak3c9wNymTiPh5cU4OsUavFDATDbUzLR+SYWWz0RkhDmBDT0gNSUe4xrQXx8D89JIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
    	$(document).ready(function() {
    		$(".email").inputmask("email");
    		//
    		$("#SelectName").hide();
            $("#SelectSlogan").hide();
            $("#SelectLogo").hide();
    
            $("#CustomerInfo").hide();
            $("#OrganizationInfo").hide();
    
            $("#ProtectType").change(function() {
                var SelectInput = this.value;
                if (SelectInput === "Name") {
                    $("#SelectName").show();
                    $("#ProtectName").attr("required", "true");
                    $("#SelectSlogan").hide();
                    $("#SelectLogo").hide();
                } else if (SelectInput === "Slogan") {
                    $("#SelectName").hide();
                    $("#SelectSlogan").show();
                    $("#ProtectSlogan").attr("required", "true");
                    $("#SelectLogo").hide();
                } else if (SelectInput === "Logo") {
                    $("#SelectName").hide();
                    $("#SelectSlogan").hide();
                    $("#SelectLogo").show();
                    $("#ProtectLogo").attr("required", "true");
                } else {
                    $("#SelectName").hide();
                    $("#SelectSlogan").hide();
                    $("#SelectLogo").hide();
                }
            });
            $("#SelectTrademark").change(function() {
                var SelectTrademark = this.value;
                if (SelectTrademark === "Individual") {
                    $("#CustomerInfo").show();
    
                    $("#CustomerName").attr("required", "true");
                    $("#CustomerPhone").attr("required", "true");
                    $("#CustomerEmail").attr("required", "true");
                    $("#CustomerAddress").attr("required", "true");
    
                    $("#OrganizationInfo").hide();
                } else if (SelectTrademark === "Organization") {
                    $("#CustomerInfo").hide();
                    $("#OrganizationInfo").show();
    
                    $("#OrganizationType").attr("required", "true");
                    $("#OrganizationName").attr("required", "true");
                    $("#BusinessEmail").attr("required", "true");
                    $("#BusinessPhone").attr("required", "true");
                    $("#OrganizationAddress").attr("required", "true");
                } else {
                    $("#CustomerInfo").hide();
                    $("#OrganizationInfo").hide();
                }
            });
            //
            $('select[name=ProtectType]').change(function () {
                if ($(this).val() == 'Slogan') {
                    $('#ProtectSlogan').show();
                    $('#ProtectSlogan').prop('required',true);
                } else {
                    $('#ProtectSlogan').prop('required',false);
                    $('#ProtectSlogan').hide();
                }
            });
            $('select[name=ProtectType]').change(function () {
                if ($(this).val() == 'Name') {
                    $('#ProtectName').show();
                    $('#ProtectName').prop('required',true);
                } else {
                    $('#ProtectName').prop('required',false);
                    $('#ProtectName').hide();
                }
            });
            $('select[name=ProtectType]').change(function () {
                if ($(this).val() == 'Logo') {
                    $('#ProtectLogo').show();
                    $('#ProtectLogo').prop('required',true);
                } else {
                    $('#ProtectLogo').prop('required',false);
                    $('#ProtectLogo').hide();
                }
            });
            ///////
            
            $('select[name=SelectTrademark]').change(function () {
                if ($(this).val() == 'Individual') {
                    $('#CustomerName').show();
                    $('#CustomerName').prop('required',true);
                    $('#CustomerEmail').show();
                    $('#CustomerEmail').prop('required',true);
                    $('#CustomerPhone').show();
                    $('#CustomerPhone').prop('required',true);
                    $('#CustomerAddress').show();
                    $('#CustomerAddress').prop('required',true);
                } else {
                    $('#CustomerName').prop('required',false);
                    $('#CustomerName').hide();
                    $('#CustomerEmail').prop('required',false);
                    $('#CustomerEmail').hide();
                    $('#CustomerPhone').prop('required',false);
                    $('#CustomerPhone').hide();
                    $('#CustomerAddress').prop('required',false);
                    $('#CustomerAddress').hide();
                }
            });
            $('select[name=SelectTrademark]').change(function () {
                if ($(this).val() == 'Organization') {
                    $('#OrganizationType').show();
                    $('#OrganizationType').prop('required',true);
                    $('#OrganizationName').show();
                    $('#OrganizationName').prop('required',true);
                    $('#BusinessEmail').show();
                    $('#BusinessEmail').prop('required',true);
                    $('#BusinessPhone').show();
                    $('#BusinessPhone').prop('required',true);
                    $('#OrganizationAddress').show();
                    $('#OrganizationAddress').prop('required',true);
                } else {
                    $('#OrganizationType').prop('required',false);
                    $('#OrganizationType').hide();
                    $('#OrganizationName').prop('required',false);
                    $('#OrganizationName').hide();
                    $('#BusinessEmail').prop('required',false);
                    $('#BusinessEmail').hide();
                    $('#BusinessPhone').prop('required',false);
                    $('#BusinessPhone').hide();
                    $('#OrganizationAddress').prop('required',false);
                    $('#OrganizationAddress').hide();
                }
            });
    	});
    </script>

<script>



var api_base_url = "https://dashboard.trademarkroyalty.com/dynamic_form/api/"
var form = $('#briefForm')

$(document).ready(async function() {
    $('#submit_brief').click(function(e) {
        e.preventDefault();
        submitBrief();
    })
})

async function getApiToken() {
    let endpoint = "token";

    let response = await $.get(api_base_url + endpoint);
    return JSON.parse(response);
}

   async function submitBrief() {

    // let api_token = await getApiToken();
    var formData = new FormData(form[0]);
    // formData.append(api_token.data.token_name, api_token.d ata.token_value);
    await $.ajax({
        url: api_base_url + "post/1/", // here 1 is form ID which represents type of form
        cache: false,
        type: "post",
        dataType: 'json',
        contentType: false,
        processData: false,
        data: formData,
        success: function(response) {
            if (response.status == true) {
              
                 let payment_page_url = "../query/payment.php?lead_id="+<?=  $_GET['lead_id'] ?>+"&package=<?= urlencode($_GET['package'])?>"+"&price=<?= urlencode($_GET['price'])?>";
                window.location = payment_page_url;
            } else {
                alert(response.message);
            }
        }
    });
}
</script>

    <!-- recaptcha script -->
     <!-- <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script> -->
   <!-- <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> -->
    <!-- <script src="../assets/js/custom-validation.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
    <script src="https://www.google.com/recaptcha/api.js?render=6LfBqXQmAAAAAEFhiikwHFl_QyMcGB1rwWcBaqQ4"></script>
    
</body>

</html>