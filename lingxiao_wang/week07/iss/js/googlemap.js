


var markISSonMap = function(position){

  var baseURL = "https://maps.googleapis.com/maps/api/js"
  //?key=YOUR_API_KEY

  $.ajax({
    url: baseURL,
    data: {
      key: "AIzaSyCYGrv8eD5SmNjJ88m4C9RVjXOkhtC2xgI"
    }
  })
  .done(function(res){
    console.log(res);

    var map = new google.maps.Map($('#map'),{
      zoom: 4,
      center: position
    });

    var market = new google.maps.Marker({
      position: position,
      map:map
    });

  })
  .fail(function(xhr, status, error){
    console.log("ERROR: ", xhr, status, error);
  });
//
//
//
}; // end of mark on map
