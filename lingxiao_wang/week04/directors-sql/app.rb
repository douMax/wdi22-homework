require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.db"
)

ActiveRecord::Base.logger = Logger.new( STDERR )

after do
  ActiveRecord::Base.connection.close
end

class Director < ActiveRecord::Base
end

binding.pry

# =================== create ===================

get "/directors/new" do
  erb :new
end

post "/directors" do
  Director.create(
    name: params["name"],
    profile_img: params["profile_img"],
    description: params["description"],
    featured_num: params["featured_num"],
    featured: params["featured"],
    featured_img: params["featured_img"]
  )
  redirect "/directors"
end



# =================== read ===================

get "/directors" do

  @directors = Director.all
  erb :index

end



get "/directors/:id" do

  id = params["id"]
  @director = Director.find id

  erb :detail

end



# UPDATE

get "/directors/:id/edit" do



end



post "/directors/:id" do

end




# delete





# homepage
get "/" do
  erb :home
end
