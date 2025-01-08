$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#contactform").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phonenumber: { required: true },
      description: { required: true, minlength: 2 },
    },
    messages: {
      name: { required: "Please enter your name." },
      phonenumber: {
        required: "Please enter your phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Please enter a valid phone number",
        maxlength: "Please enter a valid phone number",
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email address.",
      },
      description: {
        required: "Please enter what are you looking to protect?",
      },
    },
  });
});
$(document).ready(function () {
  $.validator.addMethod(
    "alphabetsAndSpaces",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },
    "Please enter only alphabets."
  );
  $("#pform").validate({
    rules: {
      name: { required: true, minlength: 2, alphabetsAndSpaces: true },
      email: { required: true, emailFormat: true },
      phonenumber: { required: true },
      description: { required: true, minlength: 2 },
    },
    messages: {
      name: { required: "Please enter your name." },
      phonenumber: {
        required: "Please enter your phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Please enter a valid phone number",
        maxlength: "Please enter a valid phone number",
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email address.",
      },
      description: {
        required: "Please enter what are you looking to protect?",
      },
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

// Input Tel Validation
