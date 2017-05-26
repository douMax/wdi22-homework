// # MTA Lab
//
// ##Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


var mta = {
  N:  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L:  ["8th", "6th", "Union Square", "3rd", "1st"],
  6:  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],

  intersection: "Union Square",

  getStationIndex:  function (line, station){
    return this[line].indexOf(station);
  },

  getSingleLineTrip: function (line, startStation, destStation) {
    var startIndex = this.getStationIndex (line, startStation);
    var destIndex = this.getStationIndex (line, destStation);
    var trips = [];
    if (startIndex <= destIndex) {
      trips = this[line].slice(startIndex, destIndex+1);
    } else {
      trips = this[line].slice(destIndex,startIndex+1).reverse();
    }
    return trips;
  },

  planTrip: function (startLine, startStation, destLine, destStation){
    var trip  = [];
    var trip1 = [];
    var trip2 = [];

    if (startLine === destLine || startStation === this.intersection || destStation === this.intersection) {
      trip1 = this.getSingleLineTrip (startLine, startStation, destStation);
      trip=trip1;
    } else {
      trip1 = this.getSingleLineTrip (startLine, startStation, this.intersection);
      trip2 = this.getSingleLineTrip (destLine, this.intersection, destStation);
      trip = trip1.concat(trip2.slice(1));
    }

    console.log("You must travel through the following stops on the " + startLine + " line: " + trip1.slice(1).join(', ') + ".");

    if (!(startLine === destLine || startStation === this.intersection || destStation === this.intersection)) {
      console.log("Change at Union Square.");
      console.log("Your journey continues through the following stops on the " + destLine + " line: " + trip2.slice(1).join(', ') + ".");
    }

    console.log( trip.length-1 + " stops in total.");
    return trip;
  }
};

// mta.planTrip("N","8th","N","34th"); //single line trip reverse direction
 // mta.planTrip("N","Times Square","6","Union Square");
 mta.planTrip("N","Times Square","6","33rd");
