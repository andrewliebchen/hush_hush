$(function(){
  // Size the fillometers
  $('.fillometer').each(function(){
    var fillometerWidth = $(this).data('fillometer-width');
    $(this).children('.fillometer-fill').css('width', fillometerWidth);
  });

  // Hide the header
  $('body.page-test').addClass('header-retracted');

  $('.header-toggle').mouseenter(function(){
    $('body.page-test').removeClass('header-retracted');
  });

  $('.header').mouseleave(function(){
    $('body.page-test').addClass('header-retracted');
  });

  // Add tooltips
  // $('[data-tooltip]').each(function(){
  //   var tooltipMessage = $(this).attr('data-tooltip');
  //   $(this).append('<div class="tooltip">' + tooltipMessage + '</div>');
  // });

  $('[data-toggle="test-chooser"]').click(function(){
    $('.test-chooser').toggleClass('is-active');
  });
});
