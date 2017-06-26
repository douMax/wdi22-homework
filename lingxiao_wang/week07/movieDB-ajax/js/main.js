
var searchResults;
var $keyword;  // the search query string, a jquery variable, about to use jquery to set value
var detailResult;
var genreList;

$(document).ready(function(){

  console.log('about to start');


  var xhr = new XMLHttpRequest();  // get a new instance from object constructor XMLHttpRequest

  // run the code when finished receiving response
  xhr.onreadystatechange = function(){

    if (xhr.readyState !== 4) {
      return;
    }

    console.log("Search Request Finished...");

    searchResults = JSON.parse( xhr.responseText );

    console.log(searchResults);

    for (var i = 0; i < searchResults.results.length; i++) {
      var result = searchResults.results[i];
      console.log(i, result.title, result.id);

      // var $title = $('<a>').html(result.title).attr('href', 'https://www.themoviedb.org/movie/' + result.id);
      //
      // var $para = $('<p>').append($title);

      var $name = $('<div class="result">').html(result.title).attr("id", String(result.id));

      $('#main').append($name);

    } // end of for loop


  }// end of XMLHttpRequest


  detail = new XMLHttpRequest();

  $(document).on("click", ".result", function(){

    $('#main').hide();
    $('#detail').show();
    $('#back-to-results').show();

    detail.open("GET", "https://api.themoviedb.org/3/movie/"+$(this).attr('id')+"?api_key=24d863d54c86392e6e1df55b9a328755")
    detail.send();


    console.log("One movie title clicked: " + $(this).text() + 'movie id: ' + $(this).attr('id'));

  });

  $('#back-to-results').click(function(){
    $('#main').show();
    $('#detail').hide().empty();
  });


  detail.onreadystatechange = function(){
    if( detail.readyState !== 4 ){
      return;
    }

    console.log("Detail Request Finished...");

    detailResult = JSON.parse( detail.responseText );
    console.log(detailResult);

    $title = $('<h3>').html(detailResult.title);
    $poster = $('<img class="poster">').attr('src', 'http://image.tmdb.org/t/p/w300' + detailResult.poster_path);


    $overview = $('<p>').html("Overview: " + detailResult.overview);
    // $background = $ detailResult.backdrop_path;

    $runtime = $('<p>').html("Runtime: " + detailResult.runtime);
    $releaseDate = $('<p>').html("Release Date: " + detailResult.release_date);

    $rating = $('<p>').html("TMDB Rating: " + detailResult.vote_average);

    $('#detail').append($title)
                .append($poster)
                .append($overview)
                .append($runtime)
                .append($releaseDate)
                .append($rating);


  } // end of onreadystatechange






  $keyword = $('#keyword').val();
  $('#keyword').change(function(){
    if ( $keyword !== $(this).val() ) {
      $keyword = $(this).val();
      console.log("Current keyword: " + $keyword);
      return $keyword;
    }
  });


  // open a request and send the request
  $('#search').click(function(){

    $('#main').empty().show();
    $('#detail').empty().hide();
    $('#back-to-results').hide();

    xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + $keyword);

    xhr.send();

  });



  //========== get genres (when the page load) ============

  genre = new XMLHttpRequest();
  genre.onreadystatechange = function(){
    if(genre.readyState !== 4) {
      return;
    }
    console.log("Genre Request Finished...");

    genreList = JSON.parse( genre.responseText );

    console.log(genreList);

  }

  genre.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=24d863d54c86392e6e1df55b9a328755&language=en-US");
  genre.send();




}); // end of document ready
