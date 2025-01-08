// phone number intel masking
(function (jQuery) {
  // function that uses intl-tel-input format as jQuery-Mask
  function initMasking(formatterInput, maskedInput) {
    // get the format fromt intl-tel-input placeholder
    var format = jQuery(formatterInput).attr("placeholder");

    // use the format as placeholder to jQuery-Mask input
    jQuery(maskedInput).attr("placeholder", format);

    // replace all digits to zero and use is as the mask
    jQuery(maskedInput).mask(format.replace(/[1-9]/g, 0));
    jQuery(maskedInput).attr("minlength", format.length);
    jQuery(maskedInput).attr("maxlength", format.length);
  }

  // initialize intl-tel-input
  jQuery("#phone-hidden").intlTelInput({
    initialCountry: "us",
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
      jQuery
        .get("https://ipinfo.io", function () {}, "jsonp")
        .always(function (resp) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
    },
  });

  // initialize the mask
  initMasking("#phone-hidden", "#phone");

  // update the mask format when changing country
  jQuery("#phone-hidden").on("countrychange", function (e, countryData) {
    jQuery(this).val("");
    jQuery("#phone").val("");

    // update the mask
    initMasking(this, "#phone");
  });
})(jQuery);

(function (jQuery) {
  // function that uses intl-tel-input format as jQuery-Mask
  function initMasking(formatterInput, maskedInput) {
    // get the format fromt intl-tel-input placeholder
    var format = jQuery(formatterInput).attr("placeholder");

    // use the format as placeholder to jQuery-Mask input
    jQuery(maskedInput).attr("placeholder", format);

    // replace all digits to zero and use is as the mask
    jQuery(maskedInput).mask(format.replace(/[1-9]/g, 0));
    jQuery(maskedInput).attr("minlength", format.length);
    jQuery(maskedInput).attr("maxlength", format.length);
  }

  // initialize intl-tel-input
  jQuery("#phone-hidden-01").intlTelInput({
    initialCountry: "us",
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
      jQuery
        .get("https://ipinfo.io", function () {}, "jsonp")
        .always(function (resp) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
    },
  });

  // initialize the mask
  initMasking("#phone-hidden-01", "#phone01");

  // update the mask format when changing country
  jQuery("#phone-hidden-01").on("countrychange", function (e, countryData) {
    jQuery(this).val("");
    jQuery("#phone01").val("");

    // update the mask
    initMasking(this, "#phone01");
  });
})(jQuery);

// Additional
(function (jQuery) {
  // function that uses intl-tel-input format as jQuery-Mask
  function initMasking(formatterInput, maskedInput) {
    // get the format fromt intl-tel-input placeholder
    var format = jQuery(formatterInput).attr("placeholder");

    // use the format as placeholder to jQuery-Mask input
    jQuery(maskedInput).attr("placeholder", format);

    // replace all digits to zero and use is as the mask
    jQuery(maskedInput).mask(format.replace(/[1-9]/g, 0));
    jQuery(maskedInput).attr("minlength", format.length);
    jQuery(maskedInput).attr("maxlength", format.length);
  }

  // initialize intl-tel-input
  jQuery("#phone-hidden-02").intlTelInput({
    initialCountry: "us",
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
      jQuery
        .get("https://ipinfo.io", function () {}, "jsonp")
        .always(function (resp) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
    },
  });

  // initialize the mask
  initMasking("#phone-hidden-02", "#phone02");

  // update the mask format when changing country
  jQuery("#phone-hidden-02").on("countrychange", function (e, countryData) {
    jQuery(this).val("");
    jQuery("#phone02").val("");

    // update the mask
    initMasking(this, "#phone02");
  });
})(jQuery);

(function (jQuery) {
  // function that uses intl-tel-input format as jQuery-Mask
  function initMasking(formatterInput, maskedInput) {
    // get the format fromt intl-tel-input placeholder
    var format = jQuery(formatterInput).attr("placeholder");

    // use the format as placeholder to jQuery-Mask input
    jQuery(maskedInput).attr("placeholder", format);

    // replace all digits to zero and use is as the mask
    jQuery(maskedInput).mask(format.replace(/[1-9]/g, 0));
    jQuery(maskedInput).attr("minlength", format.length);
    jQuery(maskedInput).attr("maxlength", format.length);
  }

  // initialize intl-tel-input
  jQuery("#phone-hidden-03").intlTelInput({
    initialCountry: "us",
    autoPlaceholder: "aggressive",
    geoIpLookup: function (callback) {
      jQuery
        .get("https://ipinfo.io", function () {}, "jsonp")
        .always(function (resp) {
          var countryCode = resp && resp.country ? resp.country : "";
          callback(countryCode);
        });
    },
  });

  // initialize the mask
  initMasking("#phone-hidden-03", "#phone03");

  // update the mask format when changing country
  jQuery("#phone-hidden-03").on("countrychange", function (e, countryData) {
    jQuery(this).val("");
    jQuery("#phone03").val("");

    // update the mask
    initMasking(this, "#phone03");
  });
})(jQuery);
