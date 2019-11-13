$(document).ready(function() {
  $("#apply-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      Name: {
        required: true,
        minlength: 3
      },
      mobile: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
      },
          checkbox: {
          required:true
          },
          dd1: {
              required:true
          },
          dd2:{
              required:true
          }
    },
    messages: {
      Name: {
        required: "*Enter Your Name",
        minlength: jQuery.validator.format(
          "At least 3 characters are necessary"
        )
        },
        checkbox: {
            required:"Please agree to our terms and conditions"
        },
        dd1: {
            required:"Please select an option from the list"
        },
        dd2: {
            required:"Please select an option from the list"
        }
    }
  });
});
