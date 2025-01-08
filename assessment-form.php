<?php include('inc/head.php') ?>

<body class="pe-0">

    <?php include('inc/header.php') ?>

    <section class="home-banner banner-sec-form" style="background-image: url('./assets/img/hero.png');background-size: cover;background-repeat: no-repeat;background-position: center;">
        <!-- <div id="video-laptop" class="right-img">
            <div id="video-iframe"></div>
            <iframe width="1036" height="597.9375" src="https://www.youtube.com/embed/dGFSjKuJfrI?autoplay=1&mute=1&loop=1&rel=0&controls=1" frameborder="0" allowfullscreen="true"></iframe> 
         <img loading="lazy" src="./assets/img/banner/banner-right-img.webp" width="1036px" height="793px">
        </div> -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 order-lg-1 col-md-12 order-2">
                    <div class="slide-content form-banner">
                        <h1>Assessment <span>Form</span></h1>
                    </div>
                </div>
                <div class="col-lg-7 order-lg-2 col-md-12 order-1">
                    <div class="right-img">
                        <!-- <img src="./assets/img/banner/banner-right-img1.svg"> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="main-form-sec">
                    <?php if ($_GET['submitted'] == 1) : ?>
                        <p class="th-alert">Thanks for getting in touch, your query will be answered shortly.</p>
                    <?php endif; ?>
                    <form action="mail.php" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Owner of mark *</label>
                            <input type="text" class="form-control" id="InputOwner" name="ownerMark" aria-describedby="emailHelp" placeholder="Owner of mark" required>

                            <label for="exampleInputEmail1">DBA ( doing business as) *</label>
                            <input type="text" class="form-control" id="Inputdba" name="bussniessdba" aria-describedby="emailHelp" placeholder="DBA ( doing business as)" required>

                            <label for="exampleInputEmail1">Business Name *</label>
                            <input type="text" class="form-control" id="InputBussniess" name="bussniessName" aria-describedby="emailHelp" placeholder="Business Name" required>

                            <label for="exampleInputEmail1">Business Nature *</label>
                            <input type="text" class="form-control" id="InputNature" name="bussniessNature" aria-describedby="emailHelp" placeholder="Business Nature" required>

                            <label for="exampleInputEmail1">Mailing Address *</label>
                            <input type="text" class="form-control" id="InputNature" name="MailingAddress" aria-describedby="emailHelp" placeholder="Mailing Address" required>

                            <label for="exampleInputEmail1">City *</label>
                            <input type="text" class="form-control" id="InputCity" name="busniessCity" aria-describedby="emailHelp" placeholder="City" required>

                            <label for="exampleInputEmail1">State *</label>
                            <input type="text" class="form-control" id="InputState" name="bussniessState" aria-describedby="emailHelp" placeholder="State" required>

                            <label for="exampleInputEmail1">Country *</label>
                            <input type="text" class="form-control" id="InputCountry" name="bussniessCountry" aria-describedby="emailHelp" placeholder="Country" required>

                            <label for="exampleInputEmail1">Zip Code *</label>
                            <input type="text" class="form-control" id="InputZipCode" name="bussniessZip" aria-describedby="emailHelp" placeholder="Zip Code" required>

                            <label for="exampleInputEmail1">Phone number *</label>
                            <input type="text" class="form-control" id="InputPhone" name="bussniessNumber" aria-describedby="emailHelp" placeholder="Phone number" required>

                            <label for="exampleInputEmail1">Website Address</label>
                            <input type="text" class="form-control" id="InputAddress" name="bussniessWebsite" aria-describedby="emailHelp" placeholder="Website Address">

                            <label for="exampleInputEmail1">Email address *</label>
                            <input type="email" class="form-control" id="InputAddress" name="bussniessAddress" aria-describedby="emailHelp" placeholder="Email address" required>

                            <label for="exampleInputEmail1">Fax number </label>
                            <input type="text" class="form-control" id="InputFax" name="bussniessFax" aria-describedby="emailHelp" placeholder="Fax number">

                            <label for="exampleInputEmail1">Please provide description of your business / List of goods and Services offered *</label>
                            <input type="text" class="form-control" id="InputOfferd" name="bussniessOfferd" aria-describedby="emailHelp" placeholder="List of goods and Services offered" required>

                            <label for="exampleInputEmail1">First date of use *</label>
                            <input type="date" class="form-control" id="InputDate" name="bussniessDate" aria-describedby="emailHelp" placeholder="First date of use" required>

                            <label for="exampleInputEmail1">Individual </label>
                            <div class="form-check d-flex gap-3 align-items-center">
                                <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" name="nationalID">
                                <label class="form-check-label" for="flexCheckDefault">National ID</label>
                                <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckChecked" name="passport">
                                <label class="form-check-label" for="flexCheckChecked">Passport</label>
                            </div>
                            <!-- <label class="passport">Upload a Valid ID or in case you are a foreign resident, kindly upload your passpord copy *</label> -->
                            <label class="passport">Organization</label>

                            <div class="check-align-row">
                                <div class="form-check d-flex form-check d-flex gap-3 align-items-center">
                                    <div class="check-align">
                                        <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" name="solepropritorship">
                                        <label class="form-check-label" for="flexCheckDefault">Sole Propritorship</label>
                                    </div>
                                    <!--<div class="check-align">-->
                                    <!--    <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckChecked" name="businesscertificate">-->
                                    <!--    <label class="form-check-label" for="flexCheckChecked">Business Registration Certiﬁcate</label>-->
                                    <!--</div>-->
                                </div>
                                <div class="form-check d-flex form-check d-flex gap-3 align-items-center">
                                    <div class="check-align">
                                        <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" name="corporotion">
                                        <label class="form-check-label" for="flexCheckDefault">Corprotion</label>
                                    </div>
                                    <!--<div class="check-align">-->
                                    <!--    <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckChecked" name="businesscertificate2">-->
                                    <!--    <label class="form-check-label" for="flexCheckChecked">Business Registration Certiﬁcate</label>-->
                                    <!--</div>-->
                                </div>
                                <div class="form-check d-flex form-check d-flex gap-3 align-items-center">
                                    <div class="check-align">
                                        <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" name="limitedliabiltycompany">
                                        <label class="form-check-label" for="flexCheckDefault">Limited Liabilty Company</label>
                                    </div>
                                    <!--<div class="check-align">-->
                                    <!--    <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckChecked" name="businesscertificate3">-->
                                    <!--    <label class="form-check-label" for="flexCheckChecked">Business Registration Certiﬁcate</label>-->
                                    <!--</div>-->
                                </div>
                                <div class="form-check d-flex">
                                    <div class="check-align">
                                        <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" name="patnershipjointventure">
                                        <label class="form-check-label" for="flexCheckDefault">Patnership, Joint Venture</label>
                                    </div>
                                    <!--<div class="check-align">-->
                                    <!--    <input class="form-check-input" type="checkbox" value="Yes" id="flexCheckChecked" name="businesscertificate4">-->
                                    <!--    <label class="form-check-label" for="flexCheckChecked">Business Registration Certiﬁcate</label>-->
                                    <!--</div>-->
                                </div>
                            </div>


                            <div class="form-check d-flex myForm aform1">
                                <div class="fcheck">
                                    <label class="form-check-label pt-4 px-3 Wantmark" for="flexCheckDefault">I want to Trademark *</label>
                                    <!-- <input class="form-check-input" type="checkbox" value="Yes" id="brandName" name="brandName"> -->
                                </div>
                                <div class="fcheck">
                                    <label class="form-check-label pt-4 px-3" for="flexCheckDefault">Brand Name</label>
                                    <input class="form-check-input" type="checkbox" value="Yes" id="brandName" name="brandName">

                                </div>
                                <div class="fcheck">
                                    <label class="form-check-label pt-4 px-2 mp-5" for="flexCheckChecked">Brand Logo</label>
                                    <input class="form-check-input" type="checkbox" value="Yes" id="brandLogo" name="brandLogo">

                                </div>
                                <div class="fcheck">
                                    <label class="form-check-label pt-4 px-2 mp-5" for="flexCheckChecked">Slogan</label>
                                    <input class="form-check-input" type="checkbox" value="Yes" id="brandSlogan" name="brandSlogan">

                                </div>
                                <div class="fcheck">
                                    <label class="form-check-label pt-4 px-2 mp-5" for="flexCheckChecked">Others</label>
                                    <input class="form-check-input" type="checkbox" value="Yes" id="brandOthers" name="others">
                                </div>
                            </div>

                            <div id="SelectName">
                                <input type="text" class="form-control" name="BrandName" id="BrandName" aria-describedby="emailHelp" placeholder="Brand Name *">
                            </div>

                            <div id="SelectLogo">
                                <!--<input type="file" class="form-control" name="BrandLogo" id="attachment" aria-describedby="emailHelp" placeholder="Brand Logo *">-->
                                <input type="file" name="file" id="file">
                            </div>

                            <div id="SelectSlogan">
                                <input type="text" class="form-control" name="BrandSlogan" id="BrandSlogan" aria-describedby="emailHelp" placeholder="Slogan Name *">
                            </div>

                            <div id="SelectOthers">
                                <input type="text" class="form-control" name="BrandOthers" id="BrandOthers" aria-describedby="emailHelp" placeholder="Others *">
                            </div>

                            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                            <script>
                                $(document).ready(function() {
                                    // Hide the SelectName input field by default
                                    $("#SelectName").hide();

                                    // Add a change event handler to the checkbox
                                    $("#brandName").change(function() {
                                        if (this.checked) {
                                            // If checkbox is checked, show the SelectName input field
                                            $("#SelectName").show();
                                            $("#BrandName").attr("required", "true");
                                        } else {
                                            // If checkbox is not checked, hide the SelectName input field
                                            $("#SelectName").hide();
                                        }
                                    });
                                });

                                $(document).ready(function() {
                                    // Hide the SelectName input field by default
                                    $("#SelectLogo").hide();

                                    // Add a change event handler to the checkbox
                                    $("#brandLogo").change(function() {
                                        if (this.checked) {
                                            // If checkbox is checked, show the SelectName input field
                                            $("#SelectLogo").show();
                                            $("#BrandLogo").attr("required", "true");
                                        } else {
                                            // If checkbox is not checked, hide the SelectName input field
                                            $("#SelectLogo").hide();
                                        }
                                    });
                                });

                                $(document).ready(function() {
                                    // Hide the SelectName input field by default
                                    $("#SelectSlogan").hide();

                                    // Add a change event handler to the checkbox
                                    $("#brandSlogan").change(function() {
                                        if (this.checked) {
                                            // If checkbox is checked, show the SelectName input field
                                            $("#SelectSlogan").show();
                                            $("#BrandSlogan").attr("required", "true");
                                        } else {
                                            // If checkbox is not checked, hide the SelectName input field
                                            $("#SelectSlogan").hide();
                                        }
                                    });
                                });

                                $(document).ready(function() {
                                    // Hide the SelectName input field by default
                                    $("#SelectOthers").hide();

                                    // Add a change event handler to the checkbox
                                    $("#brandOthers").change(function() {
                                        if (this.checked) {
                                            // If checkbox is checked, show the SelectName input field
                                            $("#SelectOthers").show();
                                            $("#BrandOthers").attr("required", "true");
                                        } else {
                                            // If checkbox is not checked, hide the SelectName input field
                                            $("#SelectOthers").hide();
                                        }
                                    });
                                });
                            </script>

                            <div class="form-check d-flex myForm aform2">
                                <label class="form-check-label pt-4 px-3 Wantmark" for="flexCheckDefault">Are you currently using your logo? * </label>
                                <div class="fcheck">
                                    <input class="form-check-input" type="radio" value="Yes" id="flexCheckDefault" name="yourLogo">
                                    <label class="form-check-label pt-4 px-3" for="flexCheckDefault">Yes</label>
                                </div>
                                <div class="fcheck">
                                    <input class="form-check-input" type="radio" value="No" id="flexCheckChecked" name="yourLogo">
                                    <label class="form-check-label pt-4 px-2 mp-5" for="flexCheckChecked">No</label>
                                </div>
                            </div>
                            <h6 class="provide-h6">If yes, provide us a list of all places you intend to use your mark *</h6>
                            <textarea id="usagePlaces" name="usagePlaces" class="form-control"></textarea>
                            <div class="dob">
                                <label for="exampleInputEmail1">Date of Use *</label>
                                <input type="date" class="form-control" id="InputDate" name="DateOfUse" aria-describedby="emailHelp" placeholder="Date of Use" required>
                            </div>

                        </div>
                        <button type="submit" class="btn btn-primary assisment-btn">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>




    <?php include('inc/footer.php') ?>