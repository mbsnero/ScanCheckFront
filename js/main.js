(function ($) {
  "use strict";

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });


  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }

  /* ====================   MODAL   ==================== */

  $('.modal-open').click(function (event) {
    let id = $(event.target).attr('id');
    switch (id) {
      case 'check-btn':
        $('#modal-check').fadeIn();
        break;
      case 'show-btn':
        $('#modal-show').fadeIn();
        break;
    }
    return false;
  });

  $('.modal-close').click(function () {
    $(this).parents('.modal-fade').fadeOut();
    return false;
  });

  $('.close-btn').click(function() {
    $('#modal-show').fadeOut();
    return false;
  })

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal-fade').fadeOut();
    }
  });

  $('.modal-fade').click(function (e) {
    if ($(e.target).closest('.modal').length == 0) {
      $(this).fadeOut();
    }
  });

  /* ====================  INPUT FILE   ==================== */

  $('.input-file').each(function () {
    var $input = $(this),
      $label = $input.next('.js-labelFile'),
      labelVal = $label.html();

    $input.on('change', function (element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });

})(jQuery);