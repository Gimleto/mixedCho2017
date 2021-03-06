$(function(){
  var flag;
  var min_width = 540;

  function check() {
      if(window.innerWidth < min_width ){
        flag = 0;
      }else{
        flag = 1;
      }
  };

  function bootstrap(){
    var $item = $('.item');
    if(flag){
         $item.removeClass('col-12');
    }else{
         $item.toggleClass('col-12');
    }
  };

  function initialize_masonry(){
      var $container = $('#container');
      if (flag) {
          $container.imagesLoaded( function() {
            $container.masonry({
                itemSelector: '.item',
                isFitWidth: true,
                columnWidth: 300,
                gutter: 4
            });
          });
      }else{
          $container.masonry('destroy');
      }
  };

  $(window).ready(function (){
      check();
      initialize_masonry();
      bootstrap();
  });

  $(window).resize(function (){
      check();
      initialize_masonry();
      bootstrap();
  });

});
