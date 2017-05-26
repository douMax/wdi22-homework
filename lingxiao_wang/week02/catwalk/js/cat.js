var $cat = $('#cat');
$cat.css('position', 'absolute');
$cat.css('left', '0px');
$cat.css('top', '0px');
// $cat.css('transform', 'scale(1,-1)');

var left = 0;
var $start = $('input');

var startWalk = function(){

  var walkRight = window.setInterval( function(){
    left = left + 10;
    $cat.css( 'left', left + 'px' );

    if ( left >= window.innerWidth - $cat.width() ) {
      window.clearInterval(walkRight);
      $cat.css('transform', 'scaleX(-1)');

      var walkLeft = window.setInterval( function(){

        left = left - 10;
        $cat.css( 'left', left + 'px' );

        if (left <= 0) {
          window.clearInterval(walkLeft);
          $cat.css('transform', 'scaleX(1)');
          startWalk();

        }
      }, 50 )
    }
  }, 50 )
}// functiion



$start[0].addEventListener('click', startWalk);
