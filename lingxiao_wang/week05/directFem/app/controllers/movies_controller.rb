class MoviesController < ApplicationController
  def new
    @movie = Movie.new
    @directors = Director.all
    @genres = Genre.all
  end

  def create
    movie = Movie.create movie_params
    redirect_to movie_path(movie.id)
  end

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find params["id"]
  end

  def edit
    @movie = Movie.find params["id"]
  end

  def update
    movie = Movie.find params["id"]
    movie.update movie_params
    movie.directors << Director.find(movie_params[:director_ids])
  
    redirect_to movie_path(movie.id)
  end

  def destroy
    movie = Movie.find params["id"]
    movie.destroy
    redirect_to movies_path
  end

  private
  def movie_params
    params.require(:movie).permit(:title,:release_date,:description,:image,:tmdb_id,:director_ids)
  end
end
