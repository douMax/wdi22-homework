$(document).ready(function() {
  console.log('Loaded Chips');

  var searchQuery = '';
  var pageNumber = 1;

  var lastRequestTime;


  var displayPhoto = function( photo ){


    $('.preloader-wrapper').fadeOut();  // hide the loading div

    var thumbNailURL = generateURL( photo, 'q' ) // ...... _q.jpg 150 x 150
    var fullSizeURL = generateURL( photo, 'h' ); // ...... _h.jpg 1600 x 1600


    var $div = $('<div class="col s6 m4 l3">');

    var $a = $('<a class="fullSize">').attr('full-Size',fullSizeURL).attr('href','#modal1');
    var $img = $('<img class="pic">');

    $img.attr('src', thumbNailURL);

    $a.append($img);
    $div.append($a);
    $('#display').append($div);

  };

  $('.modal').modal();  // initialize modal

  $(document).on('click', '.fullSize', function(ev){

    ev.preventDefault();
    $('#img-container').empty();
    // trigger
    var url = $(this).attr('full-size');

    debugger;
    $('#img-container').css({

      'background-image': 'url('+ url + ')',
      // 'background-color': "orange",
      'background-size': "contain",
      'background-repeat': 'no-repeat',
      'width': "100%",
      'height': "100%"
    });

  });


  var generateURL = function ( photo, sizeCode ) {
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

    sizeCode = sizeCode || 'q';

    var url = "https://farm";
    url += photo.farm;
    url += ".staticflickr.com/";
    url += photo.server;
    url += "/";
    url += photo.id;
    url += "_";
    url += photo.secret;
    url += "_";
    url += sizeCode;
    url += ".jpg";

    return url;
  };



  var handleSearchData = function( data ){
    console.log(data);

    var arrayOfPhotos = data.photos.photo;

    for (var i = 0; i < arrayOfPhotos.length; i++) {
      var currentPhoto = arrayOfPhotos[i];
      displayPhoto( currentPhoto );
    }

    $('#search-progress').hide();
    $('#search-button').show();

    $('#load-progress').hide();
    $('#load-more').show().css('display', 'block');

  };


  var searchFlickr = function( query ) {

    var baseURL = "https://api.flickr.com/services/rest";
    var api_key = "3ab66c44737420e50ceaee170f6eb074";

    lastRequestTime = Date.now();

    $.ajax({
      url: baseURL,
      data: {
        api_key: api_key,
        method: 'flickr.photos.search',
        text: query,
        format: 'json',
        nojsoncallback: 1,
        page: pageNumber
      }
    })
    .done( handleSearchData )
    .fail(function(xhr, status, err){
      console.log("ERR: ", xhr, status, err);
    });
  };


  var loadNewPage = function () {

    if (Date.now() - lastRequestTime < 8000) {
      return;
    }

    $('#load-progress').show();
    $('#load-more').hide();

    pageNumber += 1;
    console.log("Page Number: " + pageNumber + " " + (Date.now()-lastRequestTime));

    searchFlickr(searchQuery);
  };




  $('form').on('submit', function(ev){

    ev.preventDefault();

    $('img').remove();

    searchQuery = $('#searchFlickr').val();
    console.log('search query: ' + searchQuery);

    searchFlickr( searchQuery );

    $('#search-progress').show();
    $('#search-button').hide();

  });



  $(window).on('scroll', function(){
    // console.log($(window).scrollTop(), $(window).height(), $(document).height());
    if( $(window).scrollTop() + $(window).height() === $(document).height() ){
      console.log("bottom reached");
      loadNewPage();
    }

  });


  $('#load-more').click(function(){
    if (Date.now() - lastRequestTime < 8000) {
      $('#load-more').text("Wait....")

      setTimeout(function(){
        $('#load-more').text("Load More")
        return;
      }, 1000)
    }

    loadNewPage();
  });


}); // end of document ready
