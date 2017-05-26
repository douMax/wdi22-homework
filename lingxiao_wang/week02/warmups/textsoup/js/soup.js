console.log('Guternburg');
var $text = $('#text').text();
var textArr = $text.split(/[ ;\-,.\n]+/);


var $body = $('body');

var randy = function(max) {
  return Math.floor( Math.random() * max );
}



var putWord = function() {

  var randomIndex = randy(textArr.length);
  var word = textArr[randomIndex];

  var $div = $('<div class="word">').html( word );
  $div.css({
    top: randy(window.innerHeight) + "px",
    left: randy(window.innerWidth) + "px",
  });

  $div.appendTo($body).fadeOut(5000, function(){
    $(this).remove();
  }); // == $body.append($div)

}

var timer = window.setInterval(putWord, 1000);
