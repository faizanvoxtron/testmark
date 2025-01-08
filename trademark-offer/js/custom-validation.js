$(document).ready(function() {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod("alphabetsAndSpaces", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
  }, "Please enter only alphabets.");

  $("#bannerForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true
      },
      email: {
        required: true,
        emailFormat: true
      },
      phone: {
        required: true,
        // number: true,
        minlength: 14,
        maxlength: 14
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter name."
      },
      phone: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits."
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address."
      },
      message: {
        required: "Please enter a message."
      }
    }
  });
});




// sdsdsds
$(document).ready(function () {
  // Custom validation method
  $.validator.addMethod(
    "emailFormat",
    function (value, element) {
      // Regular expression for email validation
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Please enter a valid email address"
  );

  // Form validation initialization
  $("#btnSubmit").validate({
    rules: {
      email: {
        required: true,
        emailFormat: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
  });
});



$(document).ready(function() {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod("alphabetsAndSpaces", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
  }, "Please enter only alphabets.");

  $(".custom-form form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true
      },
      email: {
        required: true,
        emailFormat: true
      },
      phone: {
        required: true,
        // number: true,
        minlength: 14,
        maxlength: 14
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter name."
      },
      phone: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits."
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address."
      },
      message: {
        required: "Please enter a message."
      }
    }
  });
});



// sdsdsds
$(document).ready(function () {
  // Custom validation method
  $.validator.addMethod(
    "emailFormat",
    function (value, element) {
      // Regular expression for email validation
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Please enter a valid email address"
  );

  // Form validation initialization
  $("#btnSubmit").validate({
    rules: {
      email: {
        required: true,
        emailFormat: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
  });
});





$(document).ready(function() {
  // Add a custom validation method for alphabets-only
  $.validator.addMethod("alphabetsAndSpaces", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
  }, "Please enter only alphabets.");

  $("#popupform").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        alphabetsAndSpaces: true
      },
      email: {
        required: true,
        emailFormat: true
      },
      phone: {
        required: true,
        // number: true,
        minlength: 14,
        maxlength: 14
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter name."
      },
      phone: {
        required: "Please enter phone number.",
        number: "Please enter a valid phone number.",
        minlength: "Phone number field accepts a minimum of 10 digits.",
        maxlength: "Phone number must not exceed 11 digits."
      },
      email: {
        required: "Please enter email address.",
        email: "Please enter a valid email address."
      },
      message: {
        required: "Please enter a message."
      }
    }
  });
});



// sdsdsds
$(document).ready(function () {
  // Custom validation method
  $.validator.addMethod(
    "emailFormat",
    function (value, element) {
      // Regular expression for email validation
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Please enter a valid email address"
  );

  // Form validation initialization
  $("#btnSubmit").validate({
    rules: {
      email: {
        required: true,
        emailFormat: true,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
  });
});
