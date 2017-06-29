$(document).ready(function(){

  console.log("hello");

  var iss = {
    lat: 0,
    lng: 0
  }


  var getISSposition = function( ){

    var baseURL = "http://api.open-notify.org/iss-now.json";

    $.ajax({
      url: baseURL
    })
    .done(function(res){

      iss.lat = res.iss_position.latitude;
      iss.lng = res.iss_position.longitude
      console.log(iss);

    })
    // .done(
    //   markISSonMap(iss)
    // )
    .fail(function(xhr, status, error){
      console.log("AJAX ERROR: ", xhr, status, error);
    });

  }; // end of get position


  var testFunc = function(){
    console.log("test passed");
  }

  


  var getSpaceSound = function(){


  }; // end of get sound


  var getAPOD = function(){


  }; // end of get APOD


  // ======= initiate and setinterval =======

  getISSposition();
  var output = getISSposition();

  console.log(output);
  setInterval(getISSposition, 5000);

}); // end of document ready
