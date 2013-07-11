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
});
