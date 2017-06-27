
var searchResults;
var $keyword;  // the search query string, a jquery variable, about to use jquery to set value
var detailResult;
var genreList;

$(document).ready(function(){

  console.log('about to start');



  var getSearchResults = function(keyword){

    var search = new XMLHttpRequest();  // get a new instance from object constructor XMLHttpRequest

    search.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + keyword);
    search.send();

    // run the code when finished receiving response
    search.onreadystatechange = function(){

      if (search.readyState !== 4) {
        return;
      }

      console.log("Search Request Finished...");

      searchResults = JSON.parse( search.responseText );

      console.log(searchResults);

      for (var i = 0; i < searchResults.results.length; i++) {
        var result = searchResults.results[i];
        console.log(i, result.title, result.id, result.poster_path);

        // materializa css

        var $column = $('<div class="col s12 m6">');

        var $card = $('<div class="card horizontal small">');
        var $cardImage = $('<div class="card-image">');
        var $cardStack = $('<div class="card-stacked">');
        var $cardContent = $('<div class="card-content">');
        var $cardAction = $('<div class="card-action">');

        // following 3 can click
        var $posterImage = $('<img class="result">').attr('src', 'http://image.tmdb.org/t/p/w300/' + result.poster_path).attr("movie-id", String(result.id));

        var $movieTitle = $('<span class="cart-title result">').html("<h4>"+result.title+"</h4>").attr("movie-id", String(result.id));

        var $cardLink = $('<a class="result">').html("More Info").attr("movie-id", String(result.id));


        //
        // var $name = $('<div class="result">').html(result.title).attr("id", String(result.id));

        $cardImage.append($posterImage);
        $cardContent.append($movieTitle);
        $cardAction.append($cardLink);

        $cardStack.append($cardContent).append($cardAction);
        $card.append($cardImage).append($cardStack);
        $column.append($card);

        $('#main').append($column);

        // $('#main').append($name);

      } // end of for loop


    }// end of XMLHttpRequest

  };



  //======================= get details  =====================


  var getDetails = function(id) {

    var detail = new XMLHttpRequest();

    detail.open("GET", "https://api.themoviedb.org/3/movie/"+id+"?api_key=24d863d54c86392e6e1df55b9a328755")
    detail.send();

    detail.onreadystatechange = function(){
      if( detail.readyState !== 4 ){
        return;
      }

    console.log("Detail Request Finished...");

    detailResult = JSON.parse( detail.responseText );
    console.log(detailResult);

    var $title = $('<h3>').html(detailResult.title);
    var $poster = $('<img class="poster">').attr('src', 'http://image.tmdb.org/t/p/w300' + detailResult.poster_path);


    var $overview = $('<p>').html("Overview: " + detailResult.overview);
    // $background = $ detailResult.backdrop_path;

    var $runtime = $('<p>').html("Runtime: " + detailResult.runtime + " mins");
    var $releaseDate = $('<p>').html("Release Date: " + detailResult.release_date);

    // get genres
    var movieGenres = [];
    for (var i = 0; i < detailResult.genres.length; i++) {
      var genre = detailResult.genres[i].name;
      movieGenres.push(genre);
    }
    var $genres = $('<p>').html("Genres: " + movieGenres.join(', '));

    var $rating = $('<p>').html("TMDB Rating: " + detailResult.vote_average);

    // debugger;
    var directorsOfMovie = getCredits(id);

    console.log(directorsOfMovie);

    var $directors = $('<p>').html("Directed by: " + directorsOfMovie);



    $('#detail').append($title)
                .append($poster)
                .append($overview)
                .append($runtime)
                .append($releaseDate)
                .append($rating)
                .append($genres);


    } // end of onreadystatechange

  };




  var getCredits = function(id) {

    var credits = new XMLHttpRequest;
    //
    credits.open("GET", "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=24d863d54c86392e6e1df55b9a328755");
    credits.send();

    var creditResults;
    var directors = [];

    credits.onreadystatechange = function(){
      if (credits.readyState !== 4) {
        return;
      }

      console.log("Credits Request Finished...");

      creditResults = JSON.parse(credits.responseText);

      console.log(creditResults);

      for (var i = 0; i < creditResults.crew.length; i++) {
        var crew = creditResults.crew[i];
        if (crew.job === "Director") {
          // console.log(crew);
          directors.push(crew.name);
        }
      }

      directors = directors.join(', ');
      var $directorsOfMovie = $('<p>').html("Directed by: " + directors);
      $('#detail').append($directorsOfMovie);

    } // end of onreadystatechange


  };




  // ========= get the input ============
  $keyword = $('#keyword').val();
  $('#keyword').change(function(){
    if ( $keyword !== $(this).val() ) {
      $keyword = $(this).val();
      console.log("Current keyword: " + $keyword);
      return $keyword;
    }
  });


  // open a search request and send the request
  $('#search').click(function(){

    $('#main').empty().show();
    $('#detail').empty().hide();
    $('#back-to-results').hide();

    getSearchResults($keyword);

  });

  // click each movie to get the details
  $(document).on("click", ".result", function(){

    $('#main').hide();
    $('#detail').show();
    $('#back-to-results').show();

    var movieID = $(this).attr('movie-id');

    getDetails(movieID);

    console.log("One movie title clicked: " + $(this).text() + 'movie id: ' + movieID);

  });


  // click back go back to search results
  $('#back-to-results').click(function(){
    $('#main').show();
    $('#detail').hide().empty();
    $(this).hide();
  });


  //========== get genre list (no use actually) ============


  var getGenreList = function(){
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
  };




}); // end of document ready
