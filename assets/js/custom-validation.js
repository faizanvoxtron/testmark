$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#popupForm").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phonenumber: { required: true, number: true,  minlength: 10, maxlength: 11 },
      description: { required: true },
    },
    messages: {
      name: { required: "Please enter your full name." },
      phonenumber: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      description: { required: "Please enter what are you trying to register?" },
    },
  });
});



// brief form
$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("").validate({
    rules: {
      ProtectType: { required: true },
      SelectTrademark: { required: true },
      CustomerName: { required: true, minlength: 2, alphabetsAndSpaces: true },
      CustomerEmail: { required: true, emailFormat: true },
      CustomerCountry: { required: true, minlength: 2, alphabetsAndSpaces: true },
      CustomerCity: { required: true, minlength: 2, alphabetsAndSpaces: true },
      CustomerAddress: { required: true, minlength: 2},
      CustomerZipCode: { required: true, minlength: 3, maxlength:4 },
      ZipCode: { required: true, minlength: 3, maxlength:4 },
      CustomerState: { required: true },
      OrganizationType: { required: true },
      OrganizationName: { required: true },
      BusinessAddress: { required: true },
      BusinessCity: { required: true },
      BusniessStates: { required: true },
      OrganizationAddress: { required: true },
       BusinessPhone: { required: true, minlength: 10, maxlength: 11 },


       Description: { required: true },
    },
    messages: {
      ProtectType: { required: "Please choose a value." },
      SelectTrademark: { required: "Please choose a value." },
      CustomerName: { required: "Please enter name" },
      CustomerCountry: { required: "Please enter country" },
      CustomerCity: { required: "Please enter city" },
      CustomerAddress: { required: "Please enter address" },
      CustomerZipCode: { required: "Please enter zip code" },
      CustomerState: { required: "Please enter state" },
      OrganizationType: { required: "Please enter organization type" },
      OrganizationName: { required: "Please enter organization name" },
      BusinessAddress: { required: "Please enter business address" },
      BusinessCity: { required: "Please enter business city" },
      BusniessStates: { required: "Please enter business state" },
      ZipCode: { required: "Please enter business zip code" },
      OrganizationAddress: { required: "Please enter business country" },
 BusinessPhone: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits.",
      },
      CustomerEmail: {
        required: "Please enter email address.",
        CustomerEmail: "Please enter a valid email address.",
      },
      Description: { required: "Please enter business description" },
    },
  });
});


// brief form end


// assessment-form

$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("").validate({
    rules: {
      ownerMark: { required: true },
      bussniessdba: { required: true },
      bussniessName: { required: true, minlength: 2, alphabetsAndSpaces: true },
      bussniessNature: { required: true },
      MailingAddress: { required: true },
      busniessCity: { required: true, minlength: 2 },
      bussniessState: { required: true, minlength: 2},
      bussniessCountry: { required: true },
      bussniessZip: { required: true, minlength: 3, maxlength:4 },
      bussniessNumber: { required: true },
      bussniessWebsite: { required: false },
      bussniessAddress: { required: true, emailFormat: true  },
      bussniessFax: { required: false },
      bussniessOfferd: { required: true },
      bussniessDate: { required: true },


      DateOfUse: { required: true },
    },
    messages: {
      ownerMark: { required: "Please enter owner of mark" },
      bussniessdba: { required: "Please enter DBA" },
      bussniessName: { required: "Please enter business name" },
      bussniessNature: { required: "Please enter business nature" },
      MailingAddress: { required: "Please enter mailing address" },
      busniessCity: { required: "Please enter business city" },
      bussniessState: { required: "Please enter business state" },
      bussniessCountry: { required: "Please enter business country" },
      bussniessZip: { required: "Please enter business zip code" },
      bussniessNumber: { required: "Please enter business number" },
      bussniessWebsite: { required: "Please enter business website" },
      bussniessAddress: { required: "Please enter email address.",
      bussniessAddress: "Please enter a valid email address.", },
      bussniessFax: { required: "Please enter business fax" },
      bussniessOfferd: { required: "Please describe your business" },
      bussniessDate: { required: "Please enter first date of use" },
 
      DateOfUse: { required: "Please enter date of use" },
    },
  });
});



// assessment-form end

// contact form home
$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#contact-form").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phone: { required: true, number: true, minlength: 10, maxlength: 11 },
      message: { required: true },
    },
    messages: {
      name: { required: "Please enter name." },
      phonenumber: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits.",
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address.",
      },
      message: { required: "Please enter a message." },
    },
  });
});
// contact form home end


// contact us page form
$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#contact-us-form").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phone: { required: true, number: true, minlength: 10, maxlength: 11 },
       register: { required: true },
      message: { required: true },
     
    },
    messages: {
      name: { required: "Please enter name." },
      phonenumber: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits.",
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address.",
      },
       register: { required: "Please enter a message." },
      message: { required: "Please enter a message." },
    },
     
  });
});
// contact us page form end

$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#popupform").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phonenumber: { required: true, number: true, minlength: 10, maxlength: 11 },
      description: { required: true, minlength: 2 },
    },
    messages: {
      name: { required: "Please enter name." },
      phonenumber: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits.",
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address.",
      },
      description: { required: "Please enter a message." },
    },
  });
});
$(document).ready(function () {
  $.validator.addMethod(
    "emailFormat",
    function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Please enter a valid email address"
  );
  $("#btnSubmit").validate({
    rules: { email: { required: true, emailFormat: true } },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
  });
});
