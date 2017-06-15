class DirectorsController < ApplicationController

  def new
    @director = Director.new
  end

  def index
    @directors = Director.all
  end

  def show
    @director = Director.find params["id"]
  end

  def create
    director = Director.create director_params
    redirect_to "/directors"
  end

  def edit
    
  end

  def update
  end



  def delete
  end

  private
  def director_params
    params.require(:director).permit(:name, :nationality, :dob, :bio, :image)
  end
end
