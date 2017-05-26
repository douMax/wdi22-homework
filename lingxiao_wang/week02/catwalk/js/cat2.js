var $cat = $('#cat');
$cat.css('position', 'absolute');
$cat.css('left', '0px');
$cat.css('top', '0px');
var timerLeft;
var timerRight;




var walkRight = function(){
  var left = parseInt($cat.css('left'));
  left = left + 10;
  $cat.css( 'left', left + 'px' );
  debugger;
  if ( left >= window.innerWidth - $cat.width() ) {
    window.clearInterval(timerRight);
    $cat.css('transform', 'scaleX(-1)');
    timerLeft = window.setInterval(walkLeft, 50);
  }
};

var walkLeft = function(){
  var left = parseInt($cat.css('left'));
  left = left - 10;
  $cat.css( 'left', left + 'px' );
  if ( left <= 0 ) {
    window.clearInterval(timerLeft);
    $cat.css('transform', 'scaleX(1)');
    timerRight = window.setInterval(walkRight, 50);
  }
};


var startWalk = function() {

  timerRight = window.setInterval(walkRight, 50);

};

var $start = $('input');
$start[0].addEventListener('click', startWalk);
