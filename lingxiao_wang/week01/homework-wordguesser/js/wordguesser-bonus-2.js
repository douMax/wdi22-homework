// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var currentRew = 0;
var left = [];
var lifeLeft = 6;
var letterFound = false;

var answer = ['S','T','A','R'];
var attempt = ['_','_','_','_'];

console.log("Welcome to Word Guess. This word contains " + answer.length + " letters. Use guess('[put any letter here]') to play.");
console.log("Life: 6");
console.log('$ 0');

var letterCheck = function(){

  if(letterFound === true){
    currentRew = currentRew + reward;
    console.log("Yes '_'");
    console.log('Life: ' + lifeLeft);
  } else {
    currentRew = currentRew - reward;
    lifeLeft = lifeLeft - 1;
    console.log('Try again');
    console.log('Life: ' + lifeLeft);
  }
};

var guess = function( g ) {

  for( var i = 0; i < answer.length; i++ ){
    reward = Math.round(Math.random() * 1000);

    if ( g.toUpperCase() === answer[i]) {
      attempt[i] = answer[i];
      letterFound = true;
    }
  }

  letterCheck();
  console.log(attempt.join(''));
  console.log('$ ' + currentRew);

  if ( attempt.join('') === answer.join('') ) {
    console.log('You win. You can take home $' + currentRew);
  }

  if (lifeLeft === 0) {
    hangman();
  }
};

var hangman = function(){
  var hang =[ "  ____________" ,
              "  |    |      " ,
              "  |    |..O   " ,
              "  |      -|-  " ,
              "  |      /|   " ,
              "  |___________" ];

  for (var i = 0; i < hang.length; i++) {
    console.log(hang[i]);
  }
  console.log('You lose.');
};