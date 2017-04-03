$(function(){

  var $body = $('body');
  $('#js__btn').on('click', function(){
    $body.toggleClass('open');
  });

  $('#js__nav').on('click', function(){
    $body.removeClass('open')
  });

});


<script>
jQuery(function($){

  var min_width = 768;
  //画面幅による分岐と imagesLoaded, Masonry のイニシャライズを関数化
  function masonry_update() {
    var $container = $('#container');
    if ( $('html').width() < min_width ) {
      $container.masonry('destroy');
    } else {
        $container.masonry({
          itemSelector: '.item',
          columnWidth: 300,
          gutter: 4
        });
    }
  }

  masonry_update();

  //リサイズ時の処理
  var timer = false;
  $(window).resize(function(){
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      masonry_update();
    }, 200);
  });
});
</script>
