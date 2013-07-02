$(function(){
  $('.fillometer').each(function(){
    var fillometerWidth = $(this).data('fillometer-width');
    $(this).children('.fillometer-fill').css('width', fillometerWidth);
  });

  $('body.page-test').addClass('header-retracted');
});
