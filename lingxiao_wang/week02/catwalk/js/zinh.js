
var moves = document.getElementById("cat");
moves.style.position = "absolute";
console.log(moves);
moves.style.left = "0px";
// var position = parseInt(moves.style.left);
var forward = true;
var width = window.innerWidth;
var catMoveAmount=10;
// var newPosition = position + catMoveAmount;
var catMove = function() {
  var position = parseInt(moves.style.left);
  var newPosition = position + catMoveAmount;
  moves.style.left = newPosition + "px";

  if (newPosition > width ) {
      // console.log(“triggered”);
    moves.style.transform = 'scaleX(-1)';
    catMoveAmount = -10 ;
    if (newPosition > (width/2)){
        // document.body.style.backgroundImage = “url (‘images.jpeg’)“;
      moves.src ='https://media.giphy.com/media/8zj9fqTrTFEMU/giphy.gif'
    } else if (newPosition<=0){
      moves.style.left = '10px' ;
      moves.style.transform = 'scaleX(1)';
    }

  }
};
window.setInterval(catMove, 50);
