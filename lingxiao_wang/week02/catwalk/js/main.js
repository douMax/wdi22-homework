

var cat = document.querySelector("#cat");
var left = 0;
var top = 0;
cat.style.position = "absolute";

var startButton = document.querySelector("#start")

// function for
var catWalk  = function (directions, pace) {

  if (directions === 'east') {
    cat.style.transform = 'scale(1,1)';
    left += pace;
    cat.style.left = left + 'px';

  }

  if (directions === 'west') {
    cat.style.transform = 'scale(-1,1)';
    left -= pace;
    cat.style.left = left + 'px';

  }

  if (directions === 'south') {
    cat.style.transform = 'rotate(90deg)';
    top -= pace;
    cat.style.top = top + 'px';

  }

};

// var goToLeft  = window.setInterval()



//
// var startWalk = window.setInterval(catWalk, 50);
//
//
// startButton.addEventListener('click', startWalk);
