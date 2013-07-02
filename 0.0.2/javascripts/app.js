$(function(){
  $('.fillometer').each(function(){
    var fillometerWidth = $(this).data('fillometer-width');
    $(this).children('.fillometer-fill').css('width', fillometerWidth);
  });

  $('body.page-test').addClass('header-retracted');
  $('.header-toggle').mouseenter(function(){
    $('body.page-test').removeClass('header-retracted');
  });
  $('.header').mouseleave(function(){
    $('body.page-test').addClass('header-retracted');
  });
});
