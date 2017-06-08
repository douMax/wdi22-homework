require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"
#
# get "/" do
#   movie_arr = mdata["results"][0..10]

get "/search" do
  erb :search_movie
end

get "/show_movies" do
  url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=" + params["movie_title"]

  # showing the first match result - is working now
  mdata = HTTParty.get url
  # @title = mdata["results"][0]["title"]
  # id = mdata["results"][0]["id"].to_s
  # @movie_url = "https://www.themoviedb.org/movie/" + id
  # poster_path = mdata["results"][0]["poster_path"]
  # @poster_url = "http://image.tmdb.org/t/p/w300" + poster_path


  @movies = mdata["results"]
  # binding.pry
  erb :show_movies

  
end
