console.log('Prime here');



var createList = function(min, max){
  var list = [];
  for (var i = min; i <= max ; i++) {
    list.push(i);
  }
  console.log(list);
  return list;
};

var takeOutMultiples = function(num, list) {

  var newList = [];
  for (var i = 0; i < list.length; i++) {
    if ( list[i] % num !== 0 ) {
      newList.push(list[i]);
    }
  }

  return newList;

}


var mark = function(min, max) {
  var newList = [];
  var list = createList(min, max);
  for (var i = 0; i <= max; i++){
    min = min + i;
    console.log(min);
    var newList = takeOutMultiples(min, list);
    list = newList;

    if( newList.length )



  }// for loop

  // return newList;
};


mark(2,10);
