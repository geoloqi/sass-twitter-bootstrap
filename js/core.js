//Polyfill Placeholders in Non-Supported Browsers
Modernizr.load({
  test: Modernizr.input.placeholder,
  nope: '/polyfill/jquery.placeholder.min.js'
});

//Close Function for Alert Messages
$('.alert-message .close').live("click",function(){
  $(this).parent().slideUp("fast", function(){ $(this).remove() });
  return false;
});

//Setup Tooltips
$("a[rel='twipsy']").twipsy({
  live: true,
  animate:true,
  offset: 3
});

//Setup Popover
$("a[rel='popup']").popover({
  live: true,
  html: true,
  offset: 3,
  delayOut: 500,
  animate:true,
  placement: "above"
});

$('.row[data-equal]').equalColumns();

$(document).ready(function(){
  $('#map').mapSizer({
    offBottom:180,
    offLeft:20
  });
});
