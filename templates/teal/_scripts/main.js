// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import tether from 'tether';
import bootstrap from 'bootstrap';
import jqueryValidate from 'jqueryValidate';



/**
 * jquery form validation
 * https://github.com/jquery-validation/jquery-validation
 */

$("form#submit-contact").validate({
  rules: {
    'name': "required",
    'phone': {
      required: true
    },
    'email': {
      required: true,
      email: true
    },
  },
  messages: {
    'name': "Please enter your name",
    'phone': {
      required: "Please enter a phone number"
    },
    'email': "Please enter a valid email address"
  },
  errorElement: "div",
  errorPlacement: function(error, element) {
    // Add the `help-block` class to the error element
    error.addClass("form-control-feedback");

    if (element.prop("type") === "checkbox") {
      error.insertAfter(element.parent("label"));
    } else {
      error.insertAfter(element);
    }
  },
  highlight: function(element, errorClass, validClass) {
    $(element).parents(".form-group").addClass("has-danger").removeClass("has-success");
  },
  unhighlight: function(element, errorClass, validClass) {
    $(element).parents(".form-group").addClass("has-success").removeClass("has-danger");
  }
});






/**
 * Bootstrap Carousel
 */
$('.carousel').carousel()
$('.carousel-item img').each(function() {
  var $this = $(this);
  var $parent = $(this).parent();
  var src = $this.attr('src');
  $parent.css('backgroundImage', 'url(' + src + ')');
  $parent.css('backgroundSize', 'cover');
  $parent.css('background-repeat', 'no-repeat');
  $this.hide();
});
