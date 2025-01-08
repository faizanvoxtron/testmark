<?php

?>




<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Payment Process - Trademark Royalty</title>
   <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.0/css/bootstrap.min.css"
        rel="stylesheet" /> -->
<link rel="icon" type="image/x-icon" href="assets/images/favicon.png">
   <link rel="stylesheet" href="./global.css">
   <link rel="stylesheet" href="./style.css?ver=2.5">
   <!-- Start of zelsfirm6605 Zendesk Widget script -->
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=0f1b8e45-d63d-4772-ad98-007c7f207910"> </script>
    <!-- End of zelsfirm6605 Zendesk Widget script -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11113375276"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11113375276');
</script>
</head>

<body>




   <div class="tab-pane" role="tabpanel" id="complete">
      <div class="py-14 flex flex-col lg:flex-row items-center lg:items-start justify-center font-medium md:font-semibold w-full px-5 lg:px-10 xl:px-40 gap-x-5 bg-[#DEDEDE14]">
         
         <div class="lg:flex md:ml-5 xl:w-7/12 max-w-[1280px]">
            <div class="flex flex-col rounded-2xl w-full h-fit">
               <div class="flex items-center justify-start my-3 gap-x-3">
                  <h1 class="text-md md:text-2xl font-bold">Checkout Summary</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="hidden sm:flex text-tm-orange sm:h-6 sm:w-6 cursor-pointer hover:border-b-tm-orange hover:border-b-2">
                     <!--<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>-->
                     <!--<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>-->
                  </svg>
               </div>
               <div>
                  <div>
                     <div class="flex flex-col gap-y-3">
                        <div>
                           <div>
                              <div class="flex flex-col justify-center gap-y-3">
                                 <div class="bg-white border border-[#DBDBDB] rounded-lg select-none p-5">
                                    <div>
                                       <div class="flex items-center justify-between order-value">
                                          <div class="flex items-center justify-between gap-x-1 cursor-pointer">
                                             <div class="flex items-center">
                                               
                                                <h1 class="font-semibold">Trademark Order - <?= $brand_name;  ?></h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 md:h-7 w-5 md:w-7 cursor-pointer transition-all false">
                                                   <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                                </svg>
                                             </div>
                                             <div class="flex items-center gap-x-1"></div>
                                          </div>
                                          <div class="flex justify-between">
                                             <div>

                                             </div>
                                             <div>
                                                <p class="font-bold text-tm-blue" style="width:50px;"><?php echo '$ ' . $unbundled; ?></p>
                                             </div>
                                          </div>
                                          <hr class="mt-3 mb-5" style="display:block !important;">
                                       </div>
                                       <div class="flex flex-col justify-between">

                                          <div class="max-h-[70vh] overflow-y-auto">
                                             <div class="flex flex-col justify-center gap-y-5">
                                                <?php

                                                ?>
                                                <div class="countries_div">
                                                   <?php foreach ($countries as $selected) {
                                                      $countryprice = $selected['country_price'];
                                                      $countryname = $selected['country_name'];

                                                      echo '<div class="flex items-center justify-between rounded-base">
                                                                                    <div class="flex items-center gap-x-1">
                                                                                       <div class="flex items-center rounded-full"><span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"></span></span></div>
                                                                                       <p class="ml-1 capitalize whitespace-nowrap">' . $countryname . '</p>
                                                                                   
                                                                                    </div>
                                                                                    <div class="flex items-center gap-x-1">';

                                                      echo count($countries) ? ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 cursor-pointer text-[#ADADAD] hover:bg-white hover:text-tm-red ml-2 delete_country" data-id="' . $selected['Id'] . '">
                                                                                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                                                                                       </svg>' : '';

                                                      echo '<p class="text-sm font-semibold"></p>
                                                                                    </div>
                                                                                 </div>';
                                                   } ?>

                                                   <div class="mt-2">
                                                      <div class="ml-5 border-l-4 border-l-[#F2F2F2] pl-2"></div>
                                                   </div>
                                                </div>
                                                <div style="width: 50%; margin: 0 auto;" class="logo-parent">
                                                    <img class="logo-image" src="https://trademarkroyalty.com/trademark-offer/upload/<?php echo $logo_image ?>">
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>


                     </div>
                  </div>
                  <div class="px-2">
                     <div class="mt-5 flex flex-col justify-between text-xl px-3">
                        <div class="flex flex-col justify-between my-3">
                           <div class="flex justify-between">

                              <?php

                              $totalamount = 0;
                              foreach ($countries as $selected) {
                                # $countryprice = $selected['country_price'];


                                 $totalamount = $totalamount ;
                                 $totalamount;
                              }
                              $totalamount = $totalamount + $unbundled;


                              ?>


                              <div>Order Amount</div>
                              <div>
                                 <h1 class="sub_total">$ <?= $totalamount ?></h1>
                              </div>
                           </div>
                           <!-- <div class="flex justify-between">
                                                            <p class="text-base">Discount</p>
                                                            <div>
                                                               <p class="text-base font-semibold">- $100.00 </p>
                                                            </div>
                                                         </div> -->
                        </div>
                        <div class="flex justify-between items-center border-t-4 my-2 py-3">
                           <div>Grand Total</div>
                           <div>
                              <h1 class="text-tm-blue whitespace-nowrap">
                                 <div class="inline-flex gap-x-1">
                                    <div class="grand_total">$ <?php echo $totalamount; ?></div>
                                 </div>
                              </h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!--<div class="flex gap-x-2 p-1.5 bg-white rounded-2xl section-shadow">-->
               <!--   <div class="relative flex flex-col gap-y-1 justify-start flex-1">-->
               <!--      <h1 class="font-semibold flex items-start gap-x-1"></h1>-->
               <!--      <input id="coupon_code" type="text" class="w-full pl-3 p-1.5 md:p-4 md:pl-5 rounded-md md:rounded-base border cursor-not-allowed bg-transparent pl-3 rounded-2xl border-none outline-none uppercase " name="coupon_code" placeholder="Enter Coupon Code" value="TMINTERNATIONAL" disabled="">-->
               <!--   </div>-->
               <!--   <button class="py-2 px-3 md:py-3.5 md:px-8 font-bold flex items-center justify-center rounded-lg md:rounded-2xl border border-solid relative overflow-hidden text-tm-orange border-none-->
               <!--                                    hover:text-tm-orange-100 hover:bg-[#F3F3F3]-->
               <!--                                    active:text-tm-orange-200 active:bg-[#E8E8E8]-->
               <!--                                    disabled:bg-tm-gray-300 disabled:text-[#FFFFFF] disabled:cursor-not-allowed-->
               <!--                                    undefined" type="button">Remove</button>-->
               <!--</div>-->
               <div class="ml-3 mt-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 bg-white text-tm-green">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <div class="ml-1 text-lg text-tm-green">Coupon Applied</div>
               </div>
               <div class="flex mt-10 items-center gap-x-6">
                  
                        <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                     <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%27100%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img alt="Braintree" src="./assets/images/secure_ordering.svg" decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;">
                     <!--<span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">-->
                     <!--   <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img alt="" src="./assets/images/paypal_verified.svg" decoding="async" data-nimg="intrinsic" class="!px-1" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;">-->
                     <!--   <noscript></noscript>-->
                     <!--</span>-->
               </div>
            </div>
         </div>
      </div>
   </div>


   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.0/js/bootstrap.min.js"></script>
   <script src="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/js/multi-select-tag.js"></script>
   <script src="./custom.js"></script>
   <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
   <script src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>

<script>
    $(":input").inputmask();
    $("#card-expiration-date").inputmask({
            "mask": "99/99"
        }); 
        
         $("#cardnumber").inputmask({
            "mask": "9999 9999 9999 9999"
         });
        
    $('#card-expiration-date').focusout(function(e) {
        let value = $(this).val();

        let dated_value = new moment(value, 'MM/YY')
        let current_date = new moment()

        if (value == "" || !dated_value.isValid() || dated_value.isBefore(current_date)) {
            $('.invalid-date').fadeIn();
            $('#submit_btn').attr('disabled', true);
        } else {
            $('.invalid-date').fadeOut();
            $('#submit_btn').attr('disabled', false);
        }
    })
    


</script>

   <script>
      $(document).on('click', '.delete_country', function() {
         let id = $(this).data('id');
         let subtotal = 0;
         let grandTotal = 0;
         $.ajax({
            url: "/services/delete_country.php",
            type: "post",
            dataType: 'json',
            data: {
               data_id: "<?= $data_id ?>",
               country_id: id,
            },
            success: function(response) {
               if (response.status) {
                  // repopulate divs
                  $('.countries_div').html("");

                  $.each(response.countries, function(key, country) {
                     subtotal += parseInt(country.country_price);

                     $('.countries_div').append(`
                    <div class="flex items-center justify-between rounded-base">
                              <div class="flex items-center gap-x-1">
                                 <div class="flex items-center rounded-full"><span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"></span></span></div>
                                 <p class="ml-1 capitalize whitespace-nowrap"> ${country.country_name}</p>
                              
                              </div>
                              <div class="flex items-center gap-x-1"> 
                              ${response.countries.length ? `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 cursor-pointer text-[#ADADAD] hover:bg-white hover:text-tm-red ml-2 delete_country" data-id="${country.Id}">
                                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                              </svg>` : ``}
                            
                             
                              </div>
                        </div>`)

                  })
                  
                  // recalculate bill
                  grandTotal = subtotal + parseInt(response.data.Package)

                //   $('.sub_total').text("$ "+grandTotal)
                //   $('.grand_total').text("$ "+grandTotal)
               } else {
                  alert("Something went wrong")
               }

            }
         })
      })
      
      
    $(document).ready(function() {
  // Card number validation
  $('#card-number').on('input', function() {
    var cardNumber = $(this).val();
    if (cardNumber.length === 16 && /^\d+$/.test(cardNumber)) {
      $('#card-number-error').text('');
    } else {
      $('#card-number-error').text('Please enter a valid 16-digit card number');
    }
  });

  // Name validation
  $('#card-name').on('input', function() {
    var cardName = $(this).val();
    if (/^[a-zA-Z ]+$/.test(cardName)) {
      $('#card-name-error').text('');
    } else {
      $('#card-name-error').text('Please enter a valid name');
    }
  });

  // Expiration date validation
  $('#card-expiration-date').on('input', function() {
    var cardExpirationDate = $(this).val();
    if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpirationDate)) {
      $('#card-expiration-date-error').text('');
    } else {
      $('#card-expiration-date-error').text('Please enter a valid expiration date in the format MM/YY');
    }
  });
});
</script>
    <script src="https://rawgit.com/moment/moment/2.2.1/min/moment.min.js"></script>
   
   <script>
       jQuery(document).ready(function() {
  // Check if the image source is set to "https://trademarkroyalty.com/trademark-offer/upload/"
  if (jQuery('.logo-image').attr('src') === 'https://trademarkroyalty.com/trademark-offer/upload/') {
    jQuery('.logo-image').hide(); // If the source is set to "https://trademarkroyalty.com/trademark-offer/upload/", hide the image
  } else {
    jQuery('.logo-image').show(); // If the source is not set to "https://trademarkroyalty.com/trademark-offer/upload/", show the image
  }
});
   </script>
   
   <script>
       $("#card-number").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
      });
      
      $("#card-name").on("input", function(event) {
        var inputValue = $(this).val();
    
        // Remove any numeric characters from the input value
        var sanitizedValue = inputValue.replace(/\d/g, '');
    
        // Update the input field value with the sanitized value
        $(this).val(sanitizedValue);
    });
      
   </script>


</body>

</html>