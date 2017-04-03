$(function(){

  // var $body = $('body');
  // $('#js__btn').on('click', function(){
  //   $body.toggleClass('open');
  // });

  // $('#js__nav').on('click', function(){
  //   $body.removeClass('open')
  // });

  var flag;
  var min_width = 540;

  function check() {
      if(window.innerWidth < min_width ){
        flag = 0;
      }else{
        flag = 1;
      }
  };
  function initialize_masonry(){
      var $container = $('#container').masonry();
      if (flag) {
          $container.masonry({
              itemSelector: '.item',
              isFitWidth: true,
              columnWidth: 300,
              gutter: 4
          });
      }else{
          $container.masonry('destroy');
      }
  };

  $(window).ready(function (){
      check();
      initialize_masonry();
  });

  $(window).resize(function (){
      check();
      initialize_masonry();
  });

});