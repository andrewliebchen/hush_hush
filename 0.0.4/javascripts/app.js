$(function(){
  // Size the fillometers
  $('[data-fillometer]').each(function(){
    var fillometerWidth = $(this).data('fillometer');
    $(this).css({'background' : '-webkit-gradient(to right, #3d3d3d ' + fillometerWidth + ', transparent ' + fillometerWidth});
  });

  // Preview slider
  $('#preview_slider').slider({
    min: 0,
    max: 100,
    value: 50,
    slide: function(event, ui){
      opacityValue = ui.value / 100;
      $('#branch_view').css('opacity', opacityValue);
    }
  });

  // Select tools
  $('[data-toggle]').click(function(){
    $(this).toggleClass('is-selected');
  });

  $('[data-hover-toggle]').hover(function(){
    $(this).addClass('is-selected');
  }, function(){
    $(this).removeClass('is-selected');
  });

  // Toggle pane
  $('[data-toggle-pane]').click(function(){
    var paneToggle = $(this);
    var paneId = $(this).data('toggle-pane');
    
    $('.pane.is-active').removeClass('is-active');
    $('#' + paneId).addClass('is-active');

    if(!$('body').hasClass('pane-open')){
      $('body').addClass('pane-open');
      $('[data-toggle-pane].is-selected').removeClass('is-selected');
      paneToggle.addClass('is-selected');
    } else if(paneToggle.hasClass('is-selected')){
      $('body').removeClass('pane-open'); 
      paneToggle.removeClass('is-selected');
    } else {
      $('[data-toggle-pane].is-selected').removeClass('is-selected');
      paneToggle.addClass('is-selected');
    }
  });

  // Toggle rulers 
  $('[data-toggle="rulers"').click(function(){
    $('body').toggleClass('rulers-open');
  });
});
