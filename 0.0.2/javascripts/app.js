$(function(){
  // Size the fillometers
  $('.fillometer').each(function(){
    var fillometerWidth = $(this).data('fillometer-width');
    $(this).children('.fillometer-fill').css('width', fillometerWidth);
  });

  // Collapse scenario list
  $('[data-collapse="scenarios"]').click(function(){
    $(this).toggleClass('is-pressed');
    $(this).parents('.test').toggleClass('is-collapsed');
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

  // Toggle between fillometer and commits
  $('[data-toggle="test-chooser"]').click(function(){
    $('.test-chooser').toggleClass('is-active');
  });

  // Toggle panes
  $('[data-toggle-pane]').click(function(){
    toggleId = $(this).data('toggle-pane');
    $(this).toggleClass('is-pressed');
    $('#' + toggleId).toggleClass('is-active');
  });

  // Preview slider
  $('#previewer-slider').slider({
    min: 0,
    max: 100,
    value: 50,
    slide: function(event, ui){
      opacityValue = ui.value / 100;
      $('#branch_view').css('opacity', opacityValue);
    }
  });
});
