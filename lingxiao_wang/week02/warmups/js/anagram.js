// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.



console.log('Morning Detector');


var ana = ["enlists", "google", "inlets", "banana", "oogleg"];


var anagramsDetector = {


  sortWord: function(word){

    return word.split('').sort().join('');

  },


  detector: function(word, arr) {
    word = word.toLowerCase();
    word = this.sortWord(word);
    var result = [];

    for (var i = 0; i < arr.length; i++) {

      arrSort = this.sortWord( arr[i].toLowerCase() );
      if (word === arrSort) {
        result.push(arr[i]);
      }
    }

    return result;

  }

} // object



console.log(anagramsDetector.detector('legogo', ana).join(', '));
console.log(anagramsDetector.detector('listen', ana).join(', '));
