<?php include('inc/head.php') ?>

<body>

    <?php include('inc/header.php') ?>

    <section class="inner-banner" style="background-image: linear-gradient(90deg, #3f90ff, #3f90ff,#000);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 text-center">
                    <h2 class="mb-3">Contact Us</h2>
                </div>
            </div>
        </div>
    </section>


    <!-- Contact Section -->
    <section class="contact-section spacing-pt">
        <div class="container">
            <h2 class="fw-bold text-center mb-md-5 mb-4">It Is Always A Joy To Hear From You.</h2>
            <div class="row">
                <div class="col-lg-7 col-md-12 order-lg-1 order-md-2 order-sm-2">
                    <div class="form-box">
                        <!-- Contact Page Form  -->
                        <!-- Form -->
                        <form id="contact-us-form" action="contact-mail.php" method="POST">
                            <fieldset class="header-form">
                                <div class="row">
                                    <div class="col-lg-6 mb-2">
                                        <div class="form-group">
                                            <input type="text" class="form-control js-valGet cn" placeholder="Enter Your Full Name *" name="name" maxlength="60">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-2">
                                        <div class="form-group">
                                            <input type="email" class="form-control js-valGet js-emailvalid em" placeholder="Enter Your Email Address *" name="email" maxlength="60">
                                        </div>

                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-group iti-group">

                                            <input type="tel" id="" class="phone-js form-control js-byphone js-valGet js-numbervalid pn" placeholder="Phone Number *" name="phone" id="pn">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-3">
                                        <div class="form-group">
                                            <input type="text" name="register" id="tr" class="form-control tr" placeholder="What are you trying to register?">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <textarea placeholder="Your Message Here..." name="message"></textarea>
                                </div>
                                <div class="btn-part">
                                    <div class="form-group mt-2">
                                        <button class="js-submit btn btn-white" type="submit">SUBMIT</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <?php if ($_GET['submitted'] == 1) : ?>
                            <p class="th-alert">Thanks for getting in touch, your query will be answered shortly.</p>
                        <?php endif; ?>
                        <!-- Contact Page End -->
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 order-lg-2 order-md-1 order-sm-1">
                    <div class="cont-img">
                        <img src="./assets/img/contact/call-center.jpg">
                    </div>
                </div>
            </div>

            <div class="row mt-5 contact-info justify-content-center">
                <!-- <div class=""> -->
                <div class="col-lg-6 col-md-6">
                    <div class="info-box">
                        <label>Phone</label>
                        <div class="info-icon">
                            <i class="fas fa-phone"></i><a href="tel:+1 (408) 538-8652">Toll Free: +1 (408) 538-8652</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="info-box">
                        <label>Email</label>
                        <div class="info-icon">
                            <i class="fa-solid fa-envelope"></i><a href="mailto:support@trademarkroyalty.com">support@trademarkroyalty.com</a>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-6 col-md-12">
                    <div class="info-box">
                        <label>Address</label>
                        <div class="info-icon">
                            <i class="fa-solid fa-location-dot"></i><a href="https://maps.app.goo.gl/Nhwc5ZFqFdHG5BKv9" target="_blank">99 South Almaden Blvd Suite 600 San Jose California +1 95113</a>
                        </div>
                    </div>
                </div> -->
                <!-- </div> -->
            </div>
        </div>
        </div>
    </section>


    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4866582491786!2d-121.89843101289784!3d37.33098573712802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca46dfb0725%3A0xad9c21473fc76318!2sRegus%20-%20San%20Jose%20-%20Downtown%20San%20Jose!5e0!3m2!1sen!2s!4v1705621455163!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <!-- Contact Section -->


    <!--Testimonials -->
    <?php include('inc/testimonials-sec.php') ?>
    <!-- Testimonials End-->
    <!--  Footer Ctm End-->

    <?php include('inc/footer.php') ?>