$(function(){

  var body = $('body');
  $('#js__btn').on('click', function(){
    body.toggleClass('open');
  });

  $('#js__nav').on('click', function(){
    body.removeClass('open')
  });

});