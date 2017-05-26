var num = 0;

var myFunction = function() {
  num = num + 1;
  console.log(num);
  return num;
}

var start = function(){

  var timer = window.setInterval(myFunction, 2000);
  if (num > 20){
    window.clearInterval(timer);
  }

};
