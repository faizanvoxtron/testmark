<a href="javascript:;" class="back-to-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
</a>


<!-- Popupform -->
<!-- Form -->

<div class="modal fade p-0" tabindex="-1" id="exampleModal">
    <div class="modal-lg modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <button type="button" class="btn-close btn-close-ctm" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
                <div class="logo-pop text-center mb-4">
                    <img loading="lazy" src="./assets/img/logo-main.png" alt="">
                </div>
                <?php

                if (!empty($_SESSION['error'])) {
                    echo '<p class="text-danger alert-danger"> ' . $_SESSION['error'] .
                        '</p>';
                    unset($_SESSION['error']);
                }
                ?>
                <!-- Form Start -->
                <form id="popupForm" method="POST" action="./form-bootstrap/lead.php">

                    <input type="hidden" id="price" name="price" value="$39">
                    <input type="hidden" id="title" name="package" value="TRADEMARK REGISTRATION BASIC">
                    <input type="hidden" name="source" value="1">
                    <input type="hidden" name="status" value="2">
                    <fieldset class="header-form">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter Your Full Name *" name="name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Enter Your Email Address *" name="email">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group iti-group">

                                    <input type="tel" class="phone-js form-control" placeholder="Phone Number *" name="phonenumber" id="pn">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="description" id="tr" class="form-control tr" placeholder="What are you trying to register? *">
                                </div>
                            </div>
                        </div>
                        <div class="btn-part">
                            <div class="form-group mt-2 text-center">
                                <button class="js-submit btn btn-white pp-btn submit" type="submit" name="submit">SUBMIT NOW</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
                <!-- Form End -->
            </div>
        </div>
    </div>
</div>
<!-- Popupform -->
<footer>
    <div class="container">
        <div class="row footer-row">
            <div class="col-4">
                <div class="footer-logo">
                    <a class="brand-logo" loading="lazy" href="/"><img src="./assets/img/logo-main.png" width="250px" alt="Trademark Royalty"></a>
                    <p>
                        Since its conception, Trademark Royalty strives to protect your intellectual property services globally.
                    </p>
                </div>
            </div>
            <div class="col-4">
                <div class="contact-deatil">
                    <h2>Services</h2>
                    <ul>
                        <li><a href="trademark-registration">Trademark Registration</a> </li>
                        <li><a href="copyright-registration">Copyright Registration</a></li>
                        <li><a href="company-formation">Company Formation</a></li>
                        <li><a href="amazon-brand-registry">Amazon Brand Registry</a></li>
                        <li><a href="comprehensive-trademark-search">Comprehensive Trademark Search</a></li>

                    </ul>
                </div>
            </div>
            <div class="col-4">
                <div class="contact-deatil">
                    <h2>Contact Info</h2>
                    <ul>
                        <!-- <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <a href="https://maps.app.goo.gl/Nhwc5ZFqFdHG5BKv9" target="_blank">99 South Almaden Blvd Suite 600 San Jose California +1 95113</a>
                        </li> -->
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:+1 (408) 538-8652">+1 (408) 538-8652</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-envelope"></i>
                            <a href="mailto:support@trademarkroyalty.com">support@trademarkroyalty.com</a>
                        </li>
                    </ul>
                </div>
                <div class="cards-sec">
                    <img src="./assets/img/payments-icons.png" alt="">
                </div>
            </div>

        </div>
</footer>

<section class="bottom-footer">
    <div class="container">
        <div class="row">
            <div class="col-6 py-4">
                <div class="copyrights">
                    <p>Copyright © 2024 Trademark Royalty. All Rights Reserved.</p>
                </div>
            </div>
            <div class="col-6 py-4">
                <div class="footer-pages">
                    <ul class="links inline">
                        <li><a href="privacy-policy">Privacy Policy</a></li>
                        <li>| </li>
                        <li><a href="terms-and-conditions">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>





<!-- Vendor JS Files -->
<!-- recaptcha script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6LfBqXQmAAAAAEFhiikwHFl_QyMcGB1rwWcBaqQ4"></script>
<script src="https://kit.fontawesome.com/6761ff51c5.js" crossorigin="anonymous"></script>
<script src="./assets/js/script.js"></script>
<script src="./assets/js/vendors-min.js"></script>
<script src="./assets/js/intlTelInput-17.0.8.js"></script>
<script src="./assets/js/fingerPrint.js"></script>
<!--<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>-->
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<!-- <script src="./assets/js/form-functions.js"></script> -->
<!--<script src="./assets/js/functions.js"></script>-->
<script src="./assets/js/custom.js?v=1.8"></script>
<script src="./assets/js/main.js"></script>

<!--Custom Validation-->
<script src="assets/js/custom-validation.js?v=4.4"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- animation -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init();
</script>


<!--<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>-->
<script>
    $(document).ready(function() {
        // When the modal is shown
        $('#exampleModal').on('show.bs.modal', function() {
            // Add a class to the body
            $('html').addClass('modal-open');
        });

        // When the modal is hidden
        $('#exampleModal').on('hidden.bs.modal', function() {
            // Remove the class from the body
            $('html').removeClass('modal-open');
        });
    });
</script>


<!-- <script>
$(document).ready(function(){
  setTimeout(function(){ 
    var script = document.createElement('script');
    script.id = "ze-snippet";
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=61ffc939-831b-41ca-a506-aa91c0d416e4";
    document.getElementsByTagName('head')[0].appendChild(script);
  },5000);
});
</script> -->


<!-- End of trademarkvista Zendesk Widget script -->

<!-- lead CRM script start -->


<!-- lead CRM script end -->


</body>