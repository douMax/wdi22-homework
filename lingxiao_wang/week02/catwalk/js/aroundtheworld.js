console.log('hey hey');


var $cat = $('#cat');
$cat.css('position', 'absolute');
$cat.css('left', '0px');
$cat.css('top', '0px');
// $cat.css('transition-durantion', '0.2s');
var timerLeft;
var timerRight;
var timerDown;
var timerUp;
var deg = 90;
var pace = 10;

// walking
var walkDown = function(){
  var top = parseInt($cat.css('top'));
  top = top + pace;
  $cat.css( 'top', top + 'px' );
  debugger;
  if ( top >= window.innerHeight - $cat.width() ) {
    window.clearInterval(timerDown);
    $cat.css('transform', 'rotate(0deg)');
    timerRight = window.setInterval(walkRight, 50);
  }
};


var walkRight = function(){
  var left = parseInt($cat.css('left'));
  left = left + pace;
  $cat.css( 'left', left + 'px' );

  if ( left >= window.innerWidth - $cat.width() ) {
    window.clearInterval(timerRight);
    $cat.css('transform', 'rotate(-90deg)');
    timerUp = window.setInterval(walkUp, 50);
  }
};

var walkUp = function(){
  var top = parseInt($cat.css('top'));
  top = top - pace;
  $cat.css( 'top', top + 'px' );
  if ( top <= 0 ) {
    window.clearInterval(timerUp);
    $cat.css('transform', 'rotate(180deg)');
    timerLeft = window.setInterval(walkLeft, 50);
  }
};

var walkLeft = function(){
  var left = parseInt($cat.css('left'));
  left = left - pace;
  $cat.css( 'left', left + 'px' );
  if ( left <= 0 ) {
    window.clearInterval(timerLeft);
    $cat.css('transform', 'rotate(90deg)');
    timerDown = window.setInterval(walkDown, 50);
  }
};


var startWalk = function() {
  $cat.css('transform', 'rotate(90deg)');
  timerDown = window.setInterval(walkDown, 50);
  // var spinDog = window.setInterval(dogSpin, 50);

};


// who let the dogs out

// var $dog = $('#dog');
//
// var dogSpin = function(){
//   deg = deg - 10;
//   debugger;
//   $dog.css('transform', 'rotate(' + deg + 'deg)')
// }


// var startSpin = function () {
//   var spinDog = window.setInterval(dogSpin, 50);
// };
//
// $dog[0].addEventListener('click', startSpin);




// button
var $start = $('input');
$start[0].addEventListener('click', startWalk);


//background-color
var getColor = function(){
  var color = [];
  color.push(Math.floor((Math.random()*255)));
  color.push(Math.floor((Math.random()*255)));
  color.push(Math.floor((Math.random()*255)));
  color = "rgb(" + color.join(', ') + ")";
  return color;
}

var $body = $('body');
var changeBack = function(){

  $body.css('background-color', getColor);
}


//change to dance
var danceUrl = "https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif";
var walkingUrl = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

var $aud = $('audio');


var urlSwitch = false;


var danceCat = function(){
  urlSwitch = !urlSwitch;
  if ( urlSwitch === true ){
    $cat.attr("src", danceUrl);
    // $aud[0].play();
  }  else {
    $cat.attr("src", walkingUrl);
    // $aud[0].pause();
  }
};


// actions
$cat[0].addEventListener('click', danceCat);
$cat[0].addEventListener('mouseover', changeBack);
$cat[0].addEventListener('mouseout', changeBack);
