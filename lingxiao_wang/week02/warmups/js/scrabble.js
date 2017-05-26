// Scrabble

// Write a program that will replicate the scoring system in Scrabble. The function should take a single argument (the word, comprised of letters/tiles) and return a score.
//
// Letter Values
//
// You'll need these:
//
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// So now that you've got those letter values, consider what data structure is good for mapping keys to values?
//
// Examples
//
// "cabbage" should be scored as worth 14 points:
//
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
//
// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14



var letterScrabble = {

  letters: {
    1: "AEIOULNRST",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ"
  }, //key


  scrabble: function(word) {
    var points = 0;
    var newWord = word.toUpperCase();
    for (var i = 0; i < newWord.length; i++) {
      var letter = newWord[i];
      for (var k in this.letters) {
        if ( this.letters[k].includes(letter) ) {
          points += parseInt(k);
          console.log(letter + " gets a " + k);
        }
      }

    } // for
    console.log( word + ": " + points + " points");
    return points;
  },


  lettersAlternative: {
    A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
    D:2, G:2,
    B:3, C:3, M:3, P:3,
    F:4, H:4, V:4, W:4, Y:4,
    K:5,
    J:8, X:8,
    Q:8, Z:8
  }, //key


  scrabbleAlternative: function (str) {
    var points = 0;
    newStr = str.toUpperCase();
    for (var i = 0; i < newStr.length; i++) {
      var letter = newStr[i];
      var letterPoint = this.lettersAlternative[letter];
      if (letterPoint === undefined) {
        continue;
      }
      points += letterPoint;
    }

    console.log( str + ": " + points + " points" );

  }


} // end of object


letterScrabble.scrabble("cabbage");
letterScrabble.scrabbleAlternative("special");
letterScrabble.scrabbleAlternative("special----");
