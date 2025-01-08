function pay(id) {
    $('#' + id).find('.loader').show();
    var data = $('#' + id).serializeArray();
    console.log(data);
    grecaptcha.ready(function () {
        grecaptcha.execute('6LfBqXQmAAAAAEFhiikwHFl_QyMcGB1rwWcBaqQ4', { action: 'submit' }).then(function (token) {
            data.push({ name: 'token', value: token });
            const FormDataPost = $.post("../service/payment.php", data);
            FormDataPost.done(function (response) {
                console.log(response);
                if (response.status == 'false') {
                    $('#' + id).find('.loader').hide();
                    $('#' + id).find('.error-msg .alert').html(response.message);
                    $('#' + id).find('.error-msg').show();

                }
                if (response.status == 'true') {
                    $('#' + id).find('.loader').hide();
                    $('#' + id).find('.error-msg .alert').html(response.message);
                    $('#' + id).find('.error-msg .alert').removeClass('alert-danger');
                    $('#' + id).find('.error-msg .alert').addClass('alert-success');
                    $('#' + id).find('.error-msg').show();



                    setTimeout(function () {
                        window.location.href = "../thankyou.php";
                    }, 800);
                }
            });
            FormDataPost.fail(function (xhr, textStatus, errorThrown) {
                $('#' + id).find('.loader').hide();
                $('#' + id).find('.error-msg .alert').html(textStatus);
                $('#' + id).find('.error-msg').show();
            });
        })

    })

}



function changeService(el) {

    $('.loader-box').show();

    if (el.value == "Direct Hit Search") {
        $('#searchPrice').val('$0');
        $('.service-order-price').text('$0');
        $('#service_search_name').text('Direct Hit Search');
        createCookie("service", "Direct Hit Search", "10");
    }

    if (el.value == "Basic Search") {
        $('#searchPrice').val('$9.99');
        $('.service-order-price').text('$9.99');
        $('#service_search_name').text('Direct Hit Search');
        createCookie("service", "Basic Search", "10");
    }

    if (el.value == "Federal & State Search") {
        $('#searchPrice').val('$149');
        $('.service-order-price').text('$149');
        $('#service_search_name').text('Federal & State Search');
        createCookie("service", "Federal & State Search", "10");
    }

    if (el.value == "State & Common Law Search") {
        $('#searchPrice').val('$299');
        $('.service-order-price').text('$299');
        $('#service_search_name').text('State & Common Law Search');
        createCookie("service", "State & Common Law Search", "10");
    }

    if (el.value == "Global Search") {
        $('#searchPrice').val('$499');
        $('.service-order-price').text('$499');
        $('#service_search_name').text('Global Search');
        createCookie("service", "Global Search", "10");
    }

    // calculate price
    calculate();
}

function changePackage(el) {

    $('.loader-box').show();

    if (el.value == "TRADEMARK REGISTRATION BASIC") {
        $('#pprice').val('$39');
        $('#package_name').text("TRADEMARK REGISTRATION BASIC");
        //change included
        changeIncluded(el.value);
        createCookie("package", "TRADEMARK REGISTRATION BASIC", "10");
    }

    if (el.value == "TRADEMARK REGISTRATION STARTUP") {
        $('#pprice').val('$99');
        $('#package_name').text("TRADEMARK REGISTRATION STARTUP");
        //change included
        changeIncluded(el.value);
        createCookie("package", "TRADEMARK REGISTRATION STARTUP", "10");
    }

    if (el.value == "TRADEMARK REGISTRATION PROFESSIONAL") {
        $('#pprice').val('$199');
        $('#package_name').text("TRADEMARK REGISTRATION PROFESSIONAL");
        //change included
        changeIncluded(el.value);
        createCookie("package", "TRADEMARK REGISTRATION PROFESSIONAL", "10");
    }

    if (el.value == "TRADEMARK REGISTRATION CORPORATE") {
        $('#pprice').val('$349');
        $('#package_name').text("TRADEMARK REGISTRATION CORPORATE");
        //change included
        changeIncluded(el.value);
        createCookie("package", "TRADEMARK REGISTRATION CORPORATE", "10");
    }

    if (el.value == "COPYRIGHT REGISTRATION STARTUP") {
        $('#pprice').val('$49');
        $('#package_name').text("COPYRIGHT REGISTRATION STARTUP");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COPYRIGHT REGISTRATION STARTUP", "10");
    }
    if (el.value == "COPYRIGHT REGISTRATION PREMIUM") {
        $('#pprice').val('$149');
        $('#package_name').text("COPYRIGHT REGISTRATION PREMIUM");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COPYRIGHT REGISTRATION PREMIUM", "10");
    }

    if (el.value == "AMAZON BRAND REGISTRY PREMIUM") {
        $('#pprice').val('$495');
        $('#package_name').text("AMAZON BRAND REGISTRY PREMIUM");
        //change included
        changeIncluded(el.value);
        createCookie("package", "AMAZON BRAND REGISTRY PREMIUM", "10");
    }

    if (el.value == "COPYRIGHT REGISTRATION GOLD") {
        $('#pprice').val('$49');
        $('#package_name').text("COPYRIGHT REGISTRATION GOLD");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COPYRIGHT REGISTRATION GOLD", "10");
    }

    if (el.value == "COPYRIGHT REGISTRATION PLATINUM") {
        $('#pprice').val('$149');
        $('#package_name').text("COPYRIGHT REGISTRATION PLATINUM");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COPYRIGHT REGISTRATION PLATINUM", "10");
    }

    if (el.value == "AMAZON BRAND REGISTRY STANDARD") {
        $('#pprice').val('$49');
        $('#package_name').text("AMAZON BRAND REGISTRY STANDARD");
        //change included
        changeIncluded(el.value);
        createCookie("package", "AMAZON BRAND REGISTRY STANDARD", "10");
    }

    if (el.value == "AMAZON BRAND REGISTRY GOLD") {
        $('#pprice').val('$149');
        $('#package_name').text("AMAZON BRAND REGISTRY GOLD");
        //change included
        changeIncluded(el.value);
        createCookie("package", "AMAZON BRAND REGISTRY GOLD", "10");
    }

    if (el.value == "AMAZON BRAND REGISTRY PLATINUM") {
        $('#pprice').val('$199');
        $('#package_name').text("AMAZON BRAND REGISTRY PLATINUM");
        //change included
        changeIncluded(el.value);
        createCookie("package", "AMAZON BRAND REGISTRY PLATINUM", "10");
    }

    if (el.value == "COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH") {
        $('#pprice').val('$149');
        $('#package_name').text("COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COMPREHENSIVE TRADEMARK SEARCH FEDERAL & STATE SEARCH", "10");
    }

    if (el.value == "COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW") {
        $('#pprice').val('$299');
        $('#package_name').text("COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COMPREHENSIVE TRADEMARK SEARCH SEARCH, STATE & COMMON LAW", "10");
    }

    if (el.value == "COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH") {
        $('#pprice').val('$499');
        $('#package_name').text("COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH");
        //change included
        changeIncluded(el.value);
        createCookie("package", "COMPREHENSIVE TRADEMARK SEARCH GLOBAL SEARCH", "10");
    }

    // calculate price
    calculate();

    // const params = new Proxy(new URLSearchParams(window.location.search), {
    //     get: (searchParams, prop) => searchParams.get(prop),
    // });
    // if (params.package == el.value) {
    //     return false;
    // }
    // window.location.href = window.location.pathname+"?package="+el.value+"&id="+params.id;
}

// Function to create the cookie
function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }

    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function changeExpedite(el) {
    $('.loader-box').show();
    if (el.checked === true) {
        $('#expedite').val('75');
    } else {
        $('#expedite').val('0')
        $('.expedited-order').css('display', 'none');
        $('.expedite-order-price').html('$0');
    }


    calculate();
}

function calculate() {
    let pPrice = $('#pprice').val().split('$');
    let packagePrice = parseInt(pPrice[1]);
    let sPrice = $('#searchPrice').val().split('$');
    let servicePrice = parseFloat(sPrice[1]);
    let expedite = parseInt($('#expedite').val());

    let total = packagePrice + servicePrice + expedite;



    $('.package-order-price').html('$' + packagePrice);
    $('.service-order-price').html('$' + servicePrice);

    if (expedite !== 0) {
        $('.expedited-order').css('display', 'block');
        $('.expedite-order-price').html('$' + expedite);
    }
    $('.total-order-price').html('$' + total.toFixed(2));

    createCookie("price", total.toFixed(2), "10");

    // updatePaymentIntent(PayIntentId,total.toFixed(2),packagePrice,servicePrice,expedite);

}

function updatePaymentIntent(intentId, price, pPrice, sPrice, expedite) {
    var payData = {
        "intentId": intentId,
        "amount": price * 100
    };
    const FormDataPost = $.post("../service/payIntent.php", payData);
    FormDataPost.done(function (response) {
        response = JSON.parse(response);
        console.log(response);
        if (response.status == 'false') {
            $('.loader-box').hide();
        }
        if (response.status == 'true') {
            $('.package-order-price').html('$' + pPrice);
            $('.service-order-price').html('$' + sPrice);
            if (expedite !== 0) {
                $('.expedited-order').css('display', 'block');
                $('.expedite-order-price').html('$' + expedite);
            }
            $('.total-order-price').html('$' + price);
            $('.loader-box').hide();

            $("#package_name").text($("#package").val());
            $("#service_search_name").text($("#search").val());
        }
    });
    FormDataPost.fail(function (xhr, textStatus, errorThrown) {
        console.log(errorThrown);
        $('.loader-box').hide();
    });
}

function showmodal(id) {
    $('#' + id).modal('show');
}

function closemodal(id) {
    $('#' + id).modal('hide');
}

function acceptTerms(id) {
    $('#tos').prop('checked', true);
    $('#' + id).modal('hide');
}

$(document).ready(function (e) {
    setTimeout(function () {

        if ($('#search').val() == "Direct Hit Search") {
            $('#searchPrice').val('$0');
        }

        if ($('#search').val() == "Basic Search") {
            $('#searchPrice').val('$9.99');
        }

        if ($('#search').val() == "Federal & State Search") {
            $('#searchPrice').val('$149');
        }

        if ($('#search').val() == "State & Common Law Search") {
            $('#searchPrice').val('$299');
        }

        if ($('#search').val() == "Global Search") {
            $('#searchPrice').val('$499');
        }
        if ($('#package').val() == "Trademark Basic Package") {
            $('#pprice').val('$39');
        }

        if ($('#package').val() == "Trademark Professional Package") {
            $('#pprice').val('$99');
        }

        if ($('#package').val() == "Trademark Business Package") {
            $('#pprice').val('$199');
        }

        if ($('#package').val() == "Trademark Corporate Package") {
            $('#pprice').val('$349');
        }
        if ($('#expedited').prop('checked') === true) {
            $('#expedite').val('75');
        }
        calculate();
    }, 700);

});